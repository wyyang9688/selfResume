<!--  -->
<template>
    <div class="wdyjPage pages">
        <div class="tabBox">
            <div class="tabs">
                <div
                    v-for="(item, index) in tabs"
                    :key="index"
                    @click="clickTab(item)"
                    class="tab f10 bold"
                    :class="{
                        pick: item.isPick
                    }"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="listBox">
            <div class="list">
                <div class="item" v-for="(item, index) in xtList" :key="index">
                    <div class="lf" @click="goToDetail(item)">
                        <div class="imgBox">
                            <image
                                class="resImg"
                                :src="'/static/rywx/history.png'"
                                mode="scaleToFill"
                            />
                        </div>
                    </div>
                    <div class="med" @click="goToDetail(item)">
                        <div class="name f14">
                            {{ item.topicName }}
                        </div>
                        <div class="info f10 mt5">
                            共下载 {{ item.downLoadCount || 0 }} 篇文献
                        </div>
                    </div>
                    <div class="rt vcenter" @click="delXt(item)">
                        <div class="btn f12">删除</div>
                    </div>
                </div>
            </div>
            <div class="none mt80" v-show="xtList.length == 0">
                <!-- <u-empty mode="data"> </u-empty> -->
                <div class="ci f12 center w100">暂无数据</div>
            </div>
            <div class="listBox">
                <div class="list">
                    <div
                        class="item item2"
                        v-for="(item, index) in []"
                        :key="index"
                    >
                        <div class="lf">
                            <div class="imgBox">
                                <image
                                    class="resImg"
                                    :src="'/static/rywx/history.png'"
                                    mode="scaleToFill"
                                />
                            </div>
                        </div>
                        <div class="med">
                            <div class="name f10 bold hidden2">
                                人工智能对结构就业的影响人工智能对结构就业的影响人工智能对结构就业的影响人工智能对结构就业的影响
                            </div>
                            <div class="info f8 mt5 hidden hidden2">
                                Fangyuan Chen, Jaideep Sengupta, Jianqing Zheng
                                - 2022 - journal of consumer
                            </div>
                            <div class="tags mt5">
                                <div class="tag cbgg cw bd f8">Q1</div>
                                <div class="tag cbgg cw bd f8">UTD21</div>
                                <div class="tag cbgg cw bd f8">管理学</div>
                            </div>
                        </div>
                        <div class="rt vcenter">
                            <div class="btn f12">删除</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="listBox" v-show="pickTab?.key == '2'">
            <div class="list">
                <div
                    class="item item3"
                    v-for="(item, index) in [{}, {}]"
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
                            人工智能对结构就业的影响
                        </div>
                        <div class="info f8 mt5 hidden hidden2">
                            <span class="cg">下载完成</span>
                            <span class="ml10">点击可查看下载链接</span>
                        </div>
                    </div>
                    <div class="rt vcenter">
                        <div class="btn f12">删除</div>
                    </div>
                </div>
            </div>
        </div>
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
    import { com } from "@/common/com";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();

    const tabs = ref([
        // {
        //     name: "点击查看对应下载记录",
        //     key: "1",
        //     isPick: true
        // }
        // {
        //     name: "批量下载记录",
        //     key: "2",
        //     isPick: false
        // }
    ]);
    const pickTab = computed(() => {
        return tabs.value.find((v) => v.isPick);
    });
    const clickTab = (item: any) => {
        for (let v of tabs.value) {
            v.isPick = false;
        }
        item.isPick = true;
    };
    const goToDetail = (item: any) => {
        push({
            url:
                "/pages/wdwx/wdwx-detail?taskId=" +
                item.id +
                "&name=" +
                item.topicName
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
                    height: 78 * 2rpx;
                    padding: 20 * 2rpx 20 * 2rpx;
                    border-bottom: 1px solid #f6f6f9;
                    &.item2 {
                        padding: 10 * 2rpx 20 * 2rpx;
                        height: 85 * 2rpx;
                    }
                    &.item3 {
                        padding: 20 * 2rpx 20 * 2rpx;
                        height: 65 * 2rpx;
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
                                margin-right: 10 * 2rpx;
                                padding: 0 5 * 2rpx;
                            }
                        }
                    }
                    .rt {
                        min-width: fit-content;
                        .btn {
                            color: #a6a6a6;
                        }
                    }
                }
            }
        }
    }
</style>
