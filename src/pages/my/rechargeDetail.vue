<!--  -->
<template>
    <div class="wdyjPage pages">
        <div class="tabBox fixed">
            <div class="tabs">
                <div
                    v-for="(item, index) in tabs"
                    :key="index"
                    @click="clickTab(item)"
                    class="tab f12 bold"
                    :class="{
                        pick: item.isPick
                    }"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="listBox">
            <div class="listBox">
                <div class="list">
                    <div
                        class="item item2"
                        v-for="(item, index) in downloadList"
                        :key="index"
                    >
                        <!-- <div class="lf">
                            <div class="imgBox">
                                <image
                                    class="resImg"
                                    :src="'/static/rywx/history.png'"
                                    mode="scaleToFill"
                                />
                            </div>
                        </div> -->
                        <div class="med">
                            <div class="name f10 bold hidden2">
                                {{ item.label }}
                            </div>
                            <div class="info f10 mt5 hidden hidden2">
                                时间：{{ item.createTime }}
                            </div>
                            <!-- <div class="tags mt5">
                                <div class="tag cbgg cw bd f8">
                                    {{ item.level }}
                                </div>
                                <div class="tag cbgg cw bd f8">
                                    IF:{{ item.impact_factor }}
                                </div>
                                <div class="tag cbgg cw bd f8">
                                    {{ item.subject }}
                                </div>
                                <span
                                    class="tag cg bd f8"
                                    @click="com.copy(item.pdfUrl)"
                                    >点击复制下载链接</span
                                >
                            </div> -->
                        </div>
                        <div class="rt vcenter">
                            <div
                                class="btn f12"
                                :class="pickTab?.key == 1 ? 'ci' : 'cg'"
                            >
                                {{ pickTab?.key == 1 ? "-" : "+"
                                }}{{ item.amount }}
                            </div>
                        </div>
                    </div>
                    <div class="none mt80" v-show="downloadList.length == 0">
                        <div class="ci f12 center w100">暂无数据</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="listBox" v-show="pickTab?.key == '2'">
            <div class="list">
                <div
                    class="item item3"
                    v-for="(item, index) in downloadMulList"
                    :key="index"
                >
                    <div class="lf">
                        <div class="imgBox">
                            <image
                                class="resImg"
                                :src="'/static/rywx/zip.png'"
                                mode="scaleToFill"
                            />
                        </div>
                    </div>
                    <div class="med">
                        <div class="name f10 bold hidden2">
                            {{ item.topicName }}
                        </div>
                        <div class="info f8 mt5 hidden hidden2">
                            <span
                                :class="item.downloadState == 1 ? 'cg' : 'ci'"
                                >{{
                                    item.downloadState == 1
                                        ? "下载完成"
                                        : "下载中"
                                }}</span
                            >
                            <span
                                class="ml10 cg"
                                @click="com.copy(item.downloadUrl)"
                                >点击复制下载链接</span
                            >
                        </div>
                    </div>
                    <div class="rt vcenter" @click="delMul(item)">
                        <div class="btn f12">删除</div>
                    </div>
                </div>
                <div class="none mt80" v-show="downloadMulList.length == 0">
                    <div class="ci f12 center w100">暂无数据</div>
                </div>
            </div>
        </div> -->
        <!-- <tabbar /> -->
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
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const query = ref<any>();
    onLoad((op: any) => {
        query.value = op;
    });
    const delItem = (item: any) => {
        uni.showModal({
            title: "是否确认删除",
            content: `删除后不可恢复`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认",
            success: async (res) => {
                if (res.confirm) {
                    const resp = await service.getDownloadList({
                        taskId: query.value.taskId,
                        delType: 0,
                        delId: item.id
                    });
                    uni.hideLoading();
                    if (resp.code == 0) {
                        downloadList.value = downloadList.value.filter(
                            (v: any) => v.id != item.id
                        );
                        toast("删除成功");
                    }
                } else if (res.cancel) {
                }
            }
        });
    };
    const delMul = (item: any) => {
        uni.showModal({
            title: "是否确认删除",
            content: `删除后不可恢复`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认",
            success: async (res) => {
                if (res.confirm) {
                    const resp = await service.getMulDownloadList({
                        taskId: query.value.taskId,
                        delType: 0,
                        delId: item.id
                    });
                    uni.hideLoading();
                    if (resp.code == 0) {
                        downloadMulList.value = downloadMulList.value.filter(
                            (v: any) => v.id != item.id
                        );
                        toast("删除成功");
                    }
                } else if (res.cancel) {
                }
            }
        });
    };
    const tabs = ref([
        {
            name: "消费记录",
            key: "1",
            isPick: true
        },
        {
            name: "充值记录",
            key: "0",
            isPick: false
        }
    ]);
    const pickTab = computed(() => {
        return tabs.value.find((v) => v.isPick) || {};
    });
    const clickTab = (item: any) => {
        for (let v of tabs.value) {
            v.isPick = false;
        }
        item.isPick = true;
        getDownloadList("init");
    };
    const downloadList = ref<any>([]);
    const hasMore = ref(true);
    const hasLoading = ref(false);
    const total = ref(0);
    const getDownloadList = async (type: string) => {
        if (!hasMore.value && type != "init") {
            console.log("noMore");
            return;
        }
        // if (type == "init") {
        //     downloadList.value = [];
        // }
        if (hasLoading.value) {
            return;
        }
        hasLoading.value = true;
        const res = await service.getRechargeList({
            consumeType: pickTab.value?.key,
            iDisplayStart: type == "init" ? 0 : downloadList.value.length,
            iDisplayLength: 20,
            hasCount: true
        });
        hasLoading.value = false;
        uni.hideLoading();
        if (res.code == 0) {
            res.data = res.data.map((v: any) => {
                return {
                    ...v,
                    label:
                        com
                            .$op("rgType")
                            .find((vv: any) => vv.val == v.prodType)?.label ||
                        ""
                };
            });
            if (type == "init") {
                total.value = res.size;
                downloadList.value = res.data || [];
            } else {
                downloadList.value = downloadList.value.concat(res.data);
                total.value = res.size;
            }
        }
        if (res.size <= downloadList.value.length) {
            hasMore.value = false;
        } else {
            hasMore.value = true;
        }
    };
    const downloadMulList = ref<any>([]);
    const getMulDownloadList = async (type: string) => {
        const res = await service.getMulDownloadList({
            taskId: query.value.taskId,
            iDisplayStart: downloadMulList.value.length,
            iDisplayLength: 500,
            hasCount: true
        });
        if (res.code == 0) {
            downloadMulList.value = res.data || [];
        }
    };

    onShow(() => {
        //
        getDownloadList("init");
    });
    onReachBottom(() => {
        //
        getDownloadList("more");
    });
</script>
<style lang="scss" scoped>
    .wdyjPage {
        padding-top: 40 * 2rpx;
        .fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            padding: 10 * 2rpx;
            // border-bottom: 1px solid #dbdbdb;
        }
        .tabBox {
            // padding: 0 20 * 2rpx;
            .tabs {
                display: flex;
                justify-content: flex-start;
                padding-left: 10 * 2rpx;
                .tab {
                    color: #7d7e80;
                    margin-right: 10 * 2rpx;
                    padding: 5 * 2rpx 10 * 2rpx 0 10 * 2rpx;
                    &.pick {
                        color: #009963;
                    }
                }
            }
        }
        .listBox {
            .list {
                .item {
                    display: flex;
                    justify-content: flex-start;
                    // height: 78 * 2rpx;
                    padding: 20 * 2rpx 20 * 2rpx;
                    border-bottom: 1px solid #f6f6f9;
                    &.item2 {
                        padding: 10 * 2rpx 20 * 2rpx;
                        // height: 85 * 2rpx;
                    }
                    &.item3 {
                        padding: 20 * 2rpx 20 * 2rpx;
                        // height: 65 * 2rpx;
                    }
                    .lf {
                        .imgBox {
                            .resImg {
                                width: 20 * 2rpx;
                                height: 20 * 2rpx;
                            }
                        }
                    }
                    .med {
                        flex-grow: 1;
                        margin: 0 10 * 2rpx;
                        .name {
                            color: #1c170d;
                        }
                        .info {
                            color: #7d7e80;
                        }
                        .tags {
                            display: flex;
                            .tag {
                                white-space: nowrap;
                                margin-right: 10 * 2rpx;
                                padding: 0 5 * 2rpx;
                            }
                        }
                    }
                    .rt {
                        min-width: fit-content;
                        .btn {
                            //color: #a6a6a6;
                        }
                    }
                }
            }
        }
    }
</style>
