<!--  -->
<template>
    <div class="ydwxPage page f10">
        <div class="etitle f12">
            {{ wxDetail.title }}
        </div>
        <div class="ztitle bold mt5">
            {{ wxDetail.translated_title }}
        </div>
        <div class="zttitle ci mt5">
            {{
                wxDetail.year +
                "," +
                "《" +
                wxDetail.journal +
                "》" +
                "," +
                wxDetail.authors
            }}
        </div>
        <div class="btnGroup">
            <div class="item mbtn cbgg cw f10 vcenter" @click="addPickWx">
                <div class="center">
                    <div class="text">加入勾选文献列表</div>
                    <!-- <div class="imgBox vcenter">
                        <image
                            class="resImg"
                            src="/static/rywx/kfd.png"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text">160</div> -->
                </div>
            </div>
            <div
                class="item mbtn cbgg cw f10 vcenter"
                v-show="!summary"
                @click="singleSummar"
            >
                <div class="center">
                    <div class="text">解读本篇文献</div>
                    <div class="imgBox vcenter">
                        <image
                            class="resImg"
                            src="/static/rywx/kfd.png"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text">50</div>
                </div>
            </div>
            <div
                class="item mbtn cbgg cw f10 vcenter"
                v-show="!wxDetail.isdownload || true"
                @click="singleDownload"
            >
                <div class="center">
                    <div class="text">下载本篇文献</div>
                    <div class="imgBox vcenter">
                        <image
                            class="resImg"
                            src="/static/rywx/kfd.png"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text">10</div>
                </div>
            </div>
        </div>
        <div class="zsummary summary bd" v-if="summary">
            <div class="bold">文献解读</div>
            {{ summary }}
        </div>
        <div
            class="summary bd"
            style="overflow: hidden"
            :style="{
                maxHeight: fold ? '41px' : '1000rpx'
            }"
        >
            <div class="bold">
                {{ wxDetail.language == "英文" ? "Abstract" : "摘要" }}
            </div>
            {{ wxDetail.abstracts }}
        </div>
        <div
            class="zsummary summary bd"
            style="overflow: hidden"
            :style="{
                maxHeight: fold ? '41px' : '1000rpx'
            }"
            v-if="wxDetail.translated_abstracts"
        >
            <div class="bold">摘要</div>
            {{ wxDetail.translated_abstracts }}
        </div>
        <div class="btnGroup1">
            <div class="btn" @click="fold = !fold">
                {{ fold ? "展开" : "收起" }}
            </div>
        </div>
        <div class="pdfBox mt10">
            <div class="pdf">
                <div class="container">
                    <iframe
                        v-if="pdfUrl"
                        id="myFrame"
                        :src="pdfUrl"
                        width="100%"
                        height="100%"
                        style="padding-top: 5px"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { http, ajax } from "@/http/http";
    import tabbar from "@/components/tabbar.vue";
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { com } from "@/common/com";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const fold = ref(false);
    onMounted(() => {
        //
    });
    const query = ref<any>({});
    const wxDetail = ref<any>({});
    onLoad((op: any) => {
        query.value = op;
        // pdfUrl.value = query.value.pdf_url;
        wxDetail.value = uni.getStorageSync("wxDetail");
        if (wxDetail.value.summarys) {
            summary.value = wxDetail.value.summarys;
        }
        refreshPdf();
        console.log(wxDetail.value);
        uni.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    });
    let pdfUrl = ref("");
    const summary = ref("");
    const singleSummar = async () => {
        const res = await service.singleSummar({
            recordIds: [wxDetail.value.recordId || wxDetail.value.id],
            taskId: query.value.taskId
        });
        uni.hideLoading();
        if (res.code == 0) {
            summary.value = res.data[0]?.singleSummary;
            uni.setStorageSync("summaryWXItem", {
                ...wxDetail.value,
                summarys: summary.value
            });
        } else if (res.msg == "账户余额不足,请充值") {
            push({
                url: "/pages/recharge/recharge?isBack=true"
            });
        }
    };
    const addPickWx = () => {
        uni.setStorageSync("pickWXItem", wxDetail.value);
        toast("已加入勾选文献列表");
    };
    const singleDownload = (item: any) => {
        uni.showModal({
            title: "是否确认下载",
            content: `下载一篇文献  , 消耗 ${1 * 10} 知识豆`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认下载",
            success: async (res) => {
                if (res.confirm) {
                    const resp = await service.downloadPdf({
                        downloadType: 1, //,:压缩包，1：单个文献下载 ,
                        taskId: query.value.taskId,
                        records: [wxDetail.value]
                    });
                    uni.hideLoading();
                    if (resp.code == 0) {
                        toast("下载成功，请到 我的文献 进行查看");
                    } else if (resp.msg == "账户余额不足,请充值") {
                        push({
                            url: "/pages/recharge/recharge?isBack=true"
                        });
                    }
                } else if (res.cancel) {
                    // console.log("用户点击取消");
                }
            }
        });
    };
    const refreshPdf = () => {
        try {
            pdfUrl.value =
                "./static/web/viewer.html?date=" +
                new Date().getTime() +
                "&file=" +
                encodeURIComponent(
                    query.value.pdf_url.replace(/http/, "https")
                    // "https://hentre-admin-upload.oss-cn-qingdao.aliyuncs.com/ZGGYJJY2022P0003.pdf"
                    // "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
                    //   this.$store.state.pickPdf.pdf_url.replace(/http/, 'https')
                );
            // alert(pdfUrl.value);
            console.log(pdfUrl.value);
        } catch (error) {
            alert(JSON.stringify(error));
        }
    };
</script>
<style lang="scss" scoped>
    .page {
        padding: 10 * 2rpx 10 * 2rpx;
        .btnGroup {
            display: flex;
            justify-content: space-between;
            padding: 5 * 2rpx 0;
        }
        .bd {
            border-top: 1px solid #e8decf;
            margin-top: 10 * 2rpx;
            padding-top: 10 * 2rpx;
        }
        .mbtn {
            border-radius: 10 * 2rpx;
            padding: 0 10 * 2rpx;
            margin-right: 0;
            height: 30 * 2rpx;
            .resImg {
                width: 15 * 2rpx;
                height: 15 * 2rpx;
            }
        }
        .summary {
            background-color: rgba(217, 217, 217, 0.5);
            padding: 10 * 2rpx;
        }
        .btnGroup1 {
            display: flex;
            justify-content: flex-end;
            margin-top: 5 * 2rpx;
        }
        .pdfBox {
            .pdf {
                .container {
                    height: 667 * 2rpx;
                }
            }
        }
    }
</style>
