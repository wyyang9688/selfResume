<!--  -->
<template>
    <div class="wdyjPage pages">
        <div class="listBox">
            <div class="list">
                <div class="item" v-for="(item, index) in xtList" :key="index">
                    <div class="lf" @click="goToTJWX(item)">
                        <div class="imgBox">
                            <image
                                class="resImg"
                                :src="'/static/rywx/yj.png'"
                                mode="scaleToFill"
                            />
                        </div>
                    </div>
                    <div class="med" @click="goToTJWX(item)">
                        <div class="name f14">{{ item.topicName }}</div>
                        <div class="info f10 mt5">
                            <span
                                :class="
                                    item.taskState == 2
                                        ? 'cg'
                                        : item.taskState == 1
                                          ? 'c'
                                          : item.taskState == 3
                                            ? 'cd'
                                            : 'ci'
                                "
                            >
                                {{
                                    item.taskState == 2
                                        ? "已生成"
                                        : item.taskState == 1 ||
                                            item.taskState == 0
                                          ? "生成中"
                                          : item.taskState == 3
                                            ? "生成失败"
                                            : "未生成"
                                }}
                            </span>
                            |
                            {{ new Date(item.createTime).Format("YYYY-MM-DD") }}
                        </div>
                    </div>
                    <div class="rt vcenter" @click="delXt(item)">
                        <div class="btn f12">删除</div>
                    </div>
                </div>
                <div class="none mt80" v-show="xtList.length == 0">
                    <!-- <u-empty mode="data"> </u-empty> -->
                    <div class="ci f12 center w100">暂无数据</div>
                </div>
            </div>
        </div>
        <!-- <feed ref="feedRef" @receiveMsg="receiveMsg" /> -->
        <tabbar />
    </div>
</template>

<script setup lang="ts">
    import tabbar from "@/components/tabbar.vue";
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const pickTaskItem = ref<any>();
    const goToTJWX = (item: any) => {
        pickTaskItem.value = item;
        uni.setStorageSync("XT", item.topicName);
        uni.setStorageSync("wxzsRecords", item.records || []);

        if (item.taskState == 1 || item.taskState == 2) {
            // if (userStore.userInfo.accInfo!.isCollectinsFlag) {
            //     nextTick(() => {
            //         feedRef.value.openPop();
            //     });
            //     return;
            // }
            push({
                url: "/pages/tjwx/wxzs?taskId=" + item.id
            });
        } else {
            push({
                url: "/pages/tjwx/tjwx?taskId=" + item.id
            });
        }
    };
    const feedRef = ref<any>(null);
    const receiveMsg = (msg: any) => {
        console.log(msg);
        push({
            url: "/pages/tjwx/wxzs?taskId=" + pickTaskItem.value.id
        });
    };
    const delXt = (item: any) => {
        uni.showModal({
            title: "是否确认删除",
            content: `删除后不可恢复`,
            showCancel: true,
            cancelText: "取消",
            confirmText: "确认",
            success: async (res) => {
                if (res.confirm) {
                    const resp = await service.delXT({
                        taskmsg: {
                            id: item.id
                        }
                    });
                    uni.hideLoading();
                    if (resp.code == 0) {
                        xtList.value = xtList.value.filter(
                            (v: any) => v.id != item.id
                        );
                        toast("删除成功");
                    }
                } else if (res.cancel) {
                }
            }
        });
    };
    const kw = ref("");
    const clickSearch = () => {
        console.log(kw.value);
    };
    const goSearch = () => {
        push({
            url: "/pages/tjwx/tjwx?kw=" + kw.value
        });
    };
    const xtList = ref<any>([]);
    const hasMore = ref(true);
    const hasLoading = ref(false);
    const total = ref(0);
    const getXTList = async (type: string) => {
        if (!hasMore.value && type != "init") {
            console.log("noMore");
            return;
        }
        // if (type == "init") {
        //     xtList.value = [];
        // }
        if (hasLoading.value) {
            return;
        }
        hasLoading.value = true;
        const res = await service.getXTList({
            iDisplayStart: type == "init" ? 0 : xtList.value.length,
            iDisplayLength: 15,
            hasCount: true
        });
        hasLoading.value = false;
        uni.hideLoading();
        if (res.code == 0) {
            if (type == "init") {
                total.value = res.size;
                xtList.value = res.data || [];
            } else {
                xtList.value = xtList.value.concat(res.data);
                total.value = res.size;
            }
        }
        if (res.size <= xtList.value.length) {
            hasMore.value = false;
        } else {
            hasMore.value = true;
        }
    };
    onMounted(() => {
        //
    });
    onShow(() => {
        //
        getXTList("init");
    });
    onReachBottom(() => {
        //
        getXTList("more");
    });
</script>

<style lang="scss" scoped>
    .wdyjPage {
        padding-bottom: 100px;
        .listBox {
            .list {
                .item {
                    display: flex;
                    justify-content: flex-start;
                    height: 78 * 2rpx;
                    padding: 20 * 2rpx 20 * 2rpx;
                    border-bottom: 1px solid #f6f6f9;
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
                    }
                    .rt {
                        .btn {
                            color: #a6a6a6;
                        }
                    }
                }
            }
        }
    }
</style>
