<!--  -->
<template>
    <div class="wxzsPage page">
        <div class="searchBox">
            <div class="search sd bd">
                <div class="inputBox">
                    <div class="iconBox vcenter">
                        <up-icon
                            name="search"
                            color="#009963"
                            size="28"
                        ></up-icon>
                    </div>
                    <input
                        :readonly="true"
                        :disabled="true"
                        v-model="kw"
                        class="searchInput"
                        placeholder="内测阶段仅支持经管类学科文献检索"
                    />
                    <!-- <div
                        class="iconBox2 close vcenter"
                        @click="clearKw"
                        v-show="kw"
                    >
                        <up-icon
                            name="close-circle"
                            color="gray"
                            size="16"
                        ></up-icon>
                    </div> -->
                    <!-- <div class="btnBox vcenter">
                        <div class="btn cg">搜索</div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="status mt50" v-show="!isFinish">
            <div class="imgBox center">
                <image
                    src="/static/rywx/load.gif"
                    class="resImg"
                    mode="scaleToFill"
                />
            </div>
            <div class="msg f14 c mt30 center">
                正在汇总，预计3分钟......可以喝杯咖啡再回来~~
            </div>
        </div>
        <div id="docxBox" v-show="isFinish"></div>
        <div class="btnGroup" v-show="isFinish">
            <div class="btn myFlex flexe" v-show="isFinish">
                <div class="text f10 sd bd" @click="copyWord">导出Word</div>
                <div class="svg ml10" v-if="false">
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.3547 4.55225C13.3547 3.92236 13.1045 3.31827 12.6591 2.87287C12.2137 2.42747 11.6096 2.17725 10.9797 2.17725H5.70801C5.07812 2.17725 4.47403 2.42747 4.02863 2.87287C3.58323 3.31827 3.33301 3.92236 3.33301 4.55225V12.1356C3.33301 12.7655 3.58323 13.3696 4.02863 13.815C4.47403 14.2604 5.07812 14.5106 5.70801 14.5106H10.9789C11.2908 14.5106 11.5996 14.4492 11.8878 14.3298C12.1759 14.2105 12.4378 14.0355 12.6583 13.815C12.8788 13.5945 13.0538 13.3326 13.1731 13.0445C13.2925 12.7563 13.3539 12.4475 13.3539 12.1356L13.3547 4.55225Z"
                            stroke="#A6A6A6"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.66134 17.229C6.16616 17.0287 5.7456 16.6792 5.45801 16.2291H8.5938C9.68392 16.2291 10.4732 16.2291 11.097 16.1872C11.7153 16.146 12.1294 16.066 12.4745 15.9259C12.9917 15.7169 13.4615 15.4059 13.8559 15.0115C14.2504 14.617 14.5613 14.1472 14.7704 13.6301C14.9105 13.2857 14.9905 12.8709 15.0316 12.2526C15.0736 11.6288 15.0736 10.8395 15.0736 9.74933V4.30029C15.4583 4.5465 15.7718 4.89088 15.9808 5.30096C16.1384 5.60971 16.2025 5.94142 16.2318 6.30796C16.2611 6.66263 16.2611 7.09804 16.2611 7.63163V9.77071C16.2611 10.8355 16.2611 11.6628 16.2168 12.3318C16.1708 13.0094 16.0782 13.5644 15.8716 14.0758C15.6028 14.7406 15.203 15.3445 14.696 15.8515C14.1889 16.3586 13.585 16.7584 12.9203 17.0271C12.4088 17.2338 11.8539 17.3272 11.1762 17.3723C10.508 17.4166 9.67997 17.4166 8.61517 17.4166H8.57322C8.13938 17.4166 7.78472 17.4166 7.49497 17.3976C7.19492 17.377 6.92259 17.3343 6.66134 17.229Z"
                            fill="#A6A6A6"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div
            class="tools myFlex flexs"
            :style="{
                marginTop: isFinish ? '0' : '260px'
            }"
        >
            <div class="item ml5">
                <div class="svg">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.125 3.75L9.375 2.5C10 1.875 11.25 1.875 11.875 2.5L12.5 3.125C13.125 3.75 13.125 5 12.5 5.625L9.375 8.75C8.75 9.375 7.5 9.375 6.875 8.75M6.875 11.25L5.625 12.5C5 13.125 3.75 13.125 3.125 12.5L2.5 11.875C1.875 11.25 1.875 10 2.5 9.375L5.625 6.25C6.25 5.625 7.5 5.625 8.125 6.25"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div class="text f14 bold ml5">参考文献</div>
            <div class="btn sd vcenter" @click="mulDownload">
                <div class="text f10">批量下载</div>
            </div>
            <div class="fold vcenter f12">
                <div class="myFlex">
                    <div class="msg f10 ci vcenter ml60"></div>
                    <div class="btn ml60 ci" v-if="fold" @click="fold = false">
                        收起
                    </div>
                    <div class="btn ml60 ci" v-if="!fold" @click="fold = true">
                        展开
                    </div>
                </div>
            </div>
        </div>
        <div class="ckwx">
            <div
                class="list"
                :style="{
                    maxHeight: fold ? '500px' : '0px'
                }"
                style="padding-bottom: 20px"
            >
                <div
                    class="item ci f10 mt10"
                    v-for="(item, index) of tjwxList"
                    :key="index"
                >
                    {{ index + 1 }}. {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import tabbar from "@/components/tabbar.vue";
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { com } from "@/common/com";
    import { http, ajax } from "@/http/http";
    import { renderAsync } from "docx-preview";
    import { onLoad, onReachBottom, onShow, onUnload } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    onMounted(() => {
        //
    });
    const query = ref<any>({});
    onLoad((op: any) => {
        query.value = op;
        uni.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
        getWjzx();
        reGetWjzx();
    });
    onUnload(() => {
        closeTimer();
    });
    const kw = ref("");
    const copyWord = () => {
        com.copy(downloadurl.value);
        uni.hideLoading();
        setTimeout(() => {
            toast("已复制下载链接到剪切板，请打开手机浏览器下载");
        }, 100);
    };
    kw.value = uni.getStorageSync("XT");
    const getDocStream = async () => {
        //https://hentre-user-upload.oss-cn-qingdao.aliyuncs.com/literature_review/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E8%A7%86%E8%A7%92%E4%B8%8B%E4%B8%AD%E5%B0%8F%E4%BC%81%E4%B8%9A%E8%9E%8D%E8%B5%84%E9%9A%BE%E9%97%AE%E9%A2%98%E7%A0%94%E7%A9%B6_1729732140.4855945.docx
        const res = (await http.$download(
            "/school/info/api/task/pdf?url=" + downloadurl.value
        )) as any;
        console.log(res);
        let blob = new Blob([res.data]);
        const reader = new FileReader();
        let that = this;
        reader.onload = function (event: any) {
            const arrayBuffer = event.target.result;
            console.log(blob);
            setTimeout(() => {
                nextTick(() => {
                    var docData = arrayBuffer;
                    if (document.getElementById("docxBox")) {
                        renderAsync(
                            docData,
                            document.getElementById("docxBox") as HTMLElement
                        ).then(() => {
                            console.log("docx: finished");
                            nextTick(() => {
                                setTimeout(() => {
                                    let elBox: HTMLDivElement | any =
                                        document.getElementsByClassName(
                                            "docx-wrapper"
                                        )[0];
                                    elBox.style.padding = "10px";
                                    let el: HTMLDivElement | any =
                                        document.getElementsByClassName(
                                            "docx"
                                        )[0];
                                    console.log(el);
                                    console.log(el.style);
                                    el.style.width = "auto";

                                    el.style.padding = "10px";
                                    el.style.minHeight = "10px";
                                    el.style.marginBottom = "0px";
                                    el.style.height = "60vh";
                                    el.style.boxShadow = "none";
                                    el.style.overflow = "auto";
                                    el.style.color = "#333";
                                    elBox.style.background = "#fff";
                                    el.style.borderRadius = "10px";
                                }, 100);
                            });
                        });
                    }
                });
            }, 500);
        };
        reader.readAsArrayBuffer(blob);
    };
    const fold = ref(true);
    // getDocStream();
    const timer = ref<any>(null);
    const closeTimer = () => {
        if (timer.value) {
            clearInterval(timer.value);
            timer.value = null;
        }
        //   this.pubFun.refreshCharge(this.$store)
    };
    const reGetWjzx = () => {
        closeTimer();
        timer.value = setInterval(() => {
            getWjzx();
        }, 5000);
    };
    const tjwxList = ref<any>([]);
    let list = uni.getStorageSync("wxzsRecords");
    if (list && list.length) {
        tjwxList.value = list || [];
    }
    const downloadurl = ref("");
    const isFinish = ref(false);
    const mulDownload = () => {
        uni.showModal({
            title: "是否批量下载",
            content: `文献 * ${tjwxList.value.length} , 消耗 ${tjwxList.value.length * 10} 知识豆`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认下载",
            success: async (res) => {
                if (res.confirm) {
                    // console.log("用户点击确定");
                    const resp = await service.downloadPdf({
                        downloadType: 0, //,:压缩包，1：单个文献下载 ,
                        taskId: query.value.taskId,
                        records: tjwxList.value
                    });
                    uni.hideLoading();
                    if (resp.code == 0) {
                        toast("下载成功，请到 我的文献-批量下载记录 进行查看");
                    }
                } else if (res.cancel) {
                    // console.log("用户点击取消");
                }
            }
        });
    };
    const getWjzx = () => {
        http.post(
            "/itproduct/api/taskstate",
            {
                uid: userStore.userInfo.uid,
                taskId: query.value.taskId
            },
            {},
            { showToast: false }
        ).then((res: any) => {
            res = res.data;
            if (res.code == 0) {
                if (res.data.taskState) {
                    // this.$store.commit("setKeyVal", {
                    //     k: "pickSc",
                    //     v: {
                    //         taskState: res.data.taskState
                    //     }
                    // });
                }
                if (res.data.taskState == 2) {
                    downloadurl.value = res.data.downloadurl.includes("https")
                        ? res.data.downloadurl
                        : res.data.downloadurl.replace(/http/, "https");
                    isFinish.value = true;
                    closeTimer();
                    getDocStream();
                } else if (res.data.taskState == 3) {
                    toast({
                        message: "文件综述生成失败，请重试",
                        type: "error",
                        showClose: true,
                        duration: 3000
                    });
                    closeTimer();
                    // this.$router.go(-1);
                }
                tjwxList.value = res.data.records || [];
            }
        });
    };
</script>
<style lang="scss" scoped>
    .page {
        padding: 12 * 2rpx 0;
        background-color: #fff;
        .searchBox {
            height: 45 * 2rpx;
            width: 100%;
            padding: 0 8 * 2rpx;
            .search {
                height: 45 * 2rpx;
                border: 1px solid #333;
                .inputBox {
                    position: relative;
                    .iconBox {
                        position: absolute;
                        top: 0 * 2rpx;
                        left: 10 * 2rpx;
                        height: 45 * 2rpx;
                    }
                    .iconBox2 {
                        position: absolute;
                        top: 0;
                        right: 60 * 2rpx;
                        height: 45 * 2rpx;
                    }
                    .btnBox {
                        position: absolute;
                        top: 0;
                        right: 10 * 2rpx;
                        height: 45 * 2rpx;
                        font-size: 12 * 2rpx;
                        .btn {
                            background-color: #ddf3e7;
                            padding: 5 * 2rpx 10 * 2rpx;
                            border-radius: 30rpx;
                            font-weight: bold;
                            text-align: center;
                        }
                    }
                    .searchInput {
                        height: 45 * 2rpx;
                        line-height: 45 * 2rpx;
                        padding: 0 80 * 2rpx 0 40 * 2rpx;
                        font-size: 12 * 2rpx;
                    }
                }
            }
        }
        .status {
            .imgBox {
                .resImg {
                    width: 150 * 2rpx;
                    height: 80 * 2rpx;
                }
            }
        }
        .btnGroup {
            padding-right: 10 * 2rpx;
            position: relative;
            width: 100%;
            .btn {
                // position: absolute;
                // right: 10 * 2rpx;
                // top: -40 * 2rpx;
                padding: 5 * 2rpx 0;
                padding-top: 0;
                background-color: #fff;
                z-index: 100;
                .text {
                    height: 18 * 2rpx;
                    line-height: 18 * 2rpx;
                    padding: 0 5 * 2rpx;
                    border-radius: 8rpx;
                }
            }
        }
        .tools {
            padding: 0 10 * 2rpx;
            border-top: 1px solid #dbdbdb;
            padding-top: 10 * 2rpx;
            > .btn {
                border-radius: 5rpx;
                margin: 0 10 * 2rpx;
                padding: 0 8 * 2rpx;
            }
            .fold {
                flex-grow: 1;
                .myFlex {
                    .msg {
                    }
                    .btn {
                        color: #111;
                        opacity: 0.75;
                    }
                }
            }
        }
        .ckwx {
            .list {
                overflow: hidden;
                padding: 0 * 2rpx 18 * 2rpx;
                .item {
                }
            }
        }
    }
</style>
