<!--  -->
<template>
    <div class="cjyjPage pages">
        <div class="pageContent">
            <div class="title">如影助手，帮你更懂学术</div>
            <div class="stitle mt10">仅需三步，AI助手帮你快速生成文献总结</div>
            <div class="step mt30">
                <div class="item">
                    <div class="imgBox w100 center">
                        <image
                            class="resImg"
                            :src="'/static/rywx/step1.png'"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text w100 center">检索文献</div>
                </div>
                <div class="lineBox">
                    <div class="vcenter">
                        <div class="line"></div>
                    </div>
                    <div class="vcenter">
                        <div class="square"></div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgBox w100 center">
                        <image
                            class="resImg"
                            :src="'/static/rywx/step2.png'"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text w100 center">筛选文献</div>
                </div>
                <div class="lineBox">
                    <div class="vcenter">
                        <div class="line"></div>
                    </div>
                    <div class="vcenter">
                        <div class="square"></div>
                    </div>
                </div>
                <div class="item">
                    <div class="imgBox w100 center">
                        <image
                            class="resImg"
                            :src="'/static/rywx/step3.png'"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text w100 center">批量总结</div>
                </div>
            </div>
            <div class="searchBox mt30">
                <div class="search sd bd">
                    <div class="inputBox">
                        <input
                            v-model="kw"
                            class="searchInput"
                            placeholder="内测阶段仅支持经管类学科文献检索"
                        />
                        <div class="iconBox" @click="clickSearch">
                            <up-icon
                                name="search"
                                color="#009963"
                                size="28"
                            ></up-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="infoBox mt20">
                <div class="row mt10 myFlex flexs">
                    <div class="imgBox center">
                        <image
                            style="width: 40rpx; height: 40rpx"
                            class="resImg"
                            :src="'/static/rywx/book1.png'"
                            mode="scaleToFill"
                        />
                    </div>
                    <div class="text ml5">你可以用以下方式检索：</div>
                </div>
                <div class="row mt10">
                    <div class="text">【多个关键词】数字政府 绿色创新</div>
                </div>
                <div class="row mt10">
                    <div class="text">【完整选题】人工智能对就业结构的影响</div>
                </div>
                <div class="row mt10">
                    <div class="text">
                        【句子描述】我想了解人工智能的相关研究
                    </div>
                </div>
                <!-- <div class="row wcenter center f10 mt40">
                    更完整AI学术功能请使用电脑访问
                    <span
                        class="cg"
                        @click="com.copy('https://ruyingreview.hentre.top')"
                        >https://ruyingreview.hentre.top</span
                    >
                </div> -->
            </div>
        </div>

        <!-- startPop -->
        <div class="clearModal" v-if="isShowTypeVisible">
            <div class="outerBox">
                <div class="innerBox center">
                    <div class="container">
                        <div class="close" @click="clickClose">
                            <up-icon
                                name="close"
                                color="#333"
                                size="20"
                            ></up-icon>
                        </div>
                        <div class="title f12 bold">写这篇综述是为了完成：</div>
                        <div class="list mt15">
                            <div
                                class="item f10"
                                v-for="(item, index) of typeList"
                                @click="clickTypeList(item)"
                                :key="index"
                                :class="{
                                    bcg: item.isPick,
                                    cg: item.isPick
                                }"
                            >
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="info f8 mt10 alf">
                            {{ pickItem?.info }}
                        </div>
                        <div class="center">
                            <div class="btn cbgg mt15 f12" @click="goSearch">
                                确定
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- endPop -->

        <gc @login="onLogin" />
        <div class="clearModal" v-if="isShowHellowVisible">
            <div class="outter">
                <div class="innerBox">
                    <div class="hylb">
                        <div
                            class="box"
                            :style="{
                                height: isShareFlag
                                    ? 480 * 2 + 'rpx'
                                    : 460 * 2 + 'rpx'
                            }"
                        >
                            <div
                                class="close"
                                @click="isShowHellowVisible = false"
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                        fill="#F5F7FA"
                                    />
                                    <path
                                        d="M21.6568 11.343L10.3428 22.6567M10.3428 11.343L21.6568 22.6567"
                                        stroke="#999999"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                            <div class="title center f24 bold">
                                <span
                                    >{{
                                        isShareFlag ? "邀请" : "欢迎"
                                    }}礼包：</span
                                >
                                <span class="cg"
                                    >{{
                                        isShareFlag ? "500" : "1000"
                                    }}知识豆</span
                                >
                            </div>
                            <div class="f14 ci center hello" v-if="isShareFlag">
                                嗨，你已受邀领取500知识豆！
                            </div>
                            <div class="f14 ci center hello" v-if="isShareFlag">
                                你也可以邀请好友~
                            </div>
                            <div
                                class="f14 ci center hello"
                                v-if="!isShareFlag"
                            >
                                嗨！首次见面，送你{{
                                    isShareFlag ? "500" : "1000"
                                }}知识豆免费体验
                            </div>
                            <div class="msg f14 bold center mt10">
                                使用知识豆即可在小程序上实现：
                            </div>
                            <div class="dv mt5">
                                <div class="dv"></div>
                            </div>

                            <div class="row myFlex flexs w100 mt10">
                                <div class="lf">
                                    <div class="imgBox w100 center">
                                        <image
                                            class="resImg"
                                            :src="'/static/rywx/step2.png'"
                                            mode="scaleToFill"
                                        />
                                    </div>
                                </div>
                                <div class="title vcenter f16 fg ml10">
                                    AI 智选文献
                                </div>
                                <div class="count vcenter f14">1~3次</div>
                            </div>
                            <div class="row myFlex flexs w100 mt10">
                                <div class="lf">
                                    <div class="imgBox w100 center">
                                        <image
                                            class="resImg"
                                            :src="'/static/rywx/zip.png'"
                                            mode="scaleToFill"
                                        />
                                    </div>
                                </div>
                                <div class="title vcenter f16 fg ml10">
                                    文献批量下载
                                </div>
                                <div class="count vcenter f14">50次</div>
                            </div>
                            <div class="row myFlex flexs w100 mt10">
                                <div class="lf">
                                    <div class="imgBox w100 center">
                                        <image
                                            class="resImg"
                                            :src="'/static/rywx/step3.png'"
                                            mode="scaleToFill"
                                        />
                                    </div>
                                </div>
                                <div class="title vcenter f16 fg ml10">
                                    单篇文献总结
                                </div>
                                <div class="count vcenter f14">10次</div>
                            </div>
                            <div class="f12 ci center mt5">
                                以上次数为每个功能单独使用时的预计可用次数
                            </div>
                            <div
                                @click="isShowHellowVisible = false"
                                class="gbtn center vcenter mt5 bd f16"
                            >
                                立即使用
                            </div>
                        </div>
                    </div>
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
    import { http, ajax } from "@/http/http";
    import { com } from "@/common/com";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const isShowTypeVisible = ref(false);
    const showTypeListPop = () => {
        isShowTypeVisible.value = true;
        uni.setStorageSync("pickSc", pickItem.value);
    };

    const feedRef = ref<any>(null);
    const receiveMsg = (msg: any) => {
        console.log(msg);
        // push({
        //     url: "/pages/tjwx/wxzs?taskId=" + pickTaskItem.value.id
        // });
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
            hasCount: true,
            taskState: 2
        });
        hasLoading.value = false;
        uni.hideLoading();
        if (res.code == 0) {
            if (type == "init") {
                total.value = res.size;
                xtList.value = res.data || [];
                if (xtList.value.length) {
                    if (userStore.userInfo.accInfo!.isCollectinsFlag) {
                        nextTick(() => {
                            feedRef.value.openPop();
                        });
                        return;
                    }
                }
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
    onShow(() => {
        //
    });
    const clickClose = () => {
        isShowTypeVisible.value = false;
    };
    const isShowHellowVisible = ref(false);
    const typeList = ref([
        {
            name: "课程论文",
            key: "0",
            isPick: true,
            info: "课程论文一般为3000-5000字，学术挑战性适中"
        },
        {
            name: "开题报告",
            key: "1",
            isPick: false,
            info: "开题报告一般为8000-1.2万字，有一定学术挑战性"
        },
        {
            name: "发表论文",
            key: "2",
            isPick: false,
            info: "发表论文一般为1.2万-1.5万字，学术挑战性较高"
        }
    ]);
    const pickItem = computed(() => {
        return typeList.value.find((v) => v.isPick);
    });
    const clickTypeList = (item: any) => {
        for (let v of typeList.value) {
            v.isPick = false;
        }
        item.isPick = true;
        uni.setStorageSync("pickSc", pickItem.value);
    };
    const kw = ref("");
    const clickSearch = () => {
        console.log(kw.value);
        showTypeListPop();
    };
    const goSearch = () => {
        if (!kw.value) {
            toast("请输入关键词");
            return;
        }
        ajax.post("/school/info/api/task/save", {
            taskmsg: {
                uid: userStore.userInfo.uid,
                topicName: kw.value,
                target: pickItem?.value?.key,
                completeTime: com.format(
                    new Date(new Date()),
                    "YYYY-MM-DD hh:mm:ss"
                )
            }
        }).then((res: any) => {
            console.log(res);
            if (res.data.code == 0) {
                //   this.$message.success('选题创建成功')
                //   this.$emit('receiveMsg', {
                //     key: 'updateScList',
                //     id: res.data
                //   })
                isShowTypeVisible.value = false;
                uni.setStorageSync("XT", kw.value);
                push({
                    url: "/pages/tjwx/tjwx?taskId=" + res.data.data
                });
            } else {
                toast(res.data.msg);
            }
        });
    };
    const query = ref<any>();
    onLoad((op: any) => {
        query.value = op;
        console.log("queryOptions");
        console.log(query.value);
        com.cs("queryOptions");
        com.cs(query.value);
        uni.setNavigationBarTitle({
            title: ""
        });
    });
    const eid = ref("");
    const extensionCode = ref("");
    onMounted(async () => {
        //
        let pn = "";
        try {
            uni.showLoading({
                mask: true
            });
            setTimeout(() => {
                uni.hideLoading();
            }, 2000);
            com.onMsg((e: any) => {
                if (e.pn) {
                    pn = e.pn;
                    eid.value = e.eid || "";
                    extensionCode.value = e.extensionCode || "";
                    login(pn);
                } else if (!e.pn) {
                    com.sendMsg("reLogin");
                }
                if (e.oid) {
                    userStore.setKeyVal({ key: "oid", val: e.oid });
                }
            });

            com.sendMsg("pn");
        } catch (e) {
            console.log(e);
        }
        if (location.href.includes("localhost") && !pn) {
            // login("15348401122");
            login("13647494174");
        }
    });
    const login = async (pn: string) => {
        const res = await service.loginIn({
            pn,
            mode: 30,
            loginstr: 0,
            eid: eid.value,
            extensionCode: extensionCode.value
        });
        uni.hideLoading();
        if (res.code == 0) {
            userStore.set_user_info(res.data as any);

            appStore.set_Token(
                "local_token",
                res.data.uid + "" + res.data.security
            );
            appStore.changeLoginState(true);
            if (res.data.accInfo?.isNewUser) {
                isShowHellowVisible.value = true;
                isShareFlag.value = false;
                appStore.changeGc(true);
            }
            // if (!res.data.accInfo?.itschoolId) {
            //     appStore.changeGc(true);
            // }
            setTimeout(() => {
                if (
                    res.data.uid + "" + res.data.security ==
                    uni.getStorageSync("local_token")
                )
                    getXTList("init");
            }, 500);
        }
    };
    const isShareFlag = ref(false);
    const onLogin = (e: any) => {
        console.log("saveInfo");
        console.log(e);
        if (e.isShareFlag) {
            isShowHellowVisible.value = true;
            isShareFlag.value = true;
        }
    };
</script>
<style lang="scss" scoped>
    .cjyjPage {
        .pageContent {
            padding: 0 28 * 2rpx;
            > .title {
                margin-top: 48 * 2rpx;
                font-size: 24 * 2rpx;
                color: #1f3349;
                font-weight: bold;
            }
            > .stitle {
                color: #7d7e80;
            }
            .step {
                display: flex;
                justify-content: space-between;
                .item {
                    text-align: center;
                    .imgBox {
                        .resImg {
                            width: 40 * 2rpx;
                            height: 40 * 2rpx;
                        }
                    }
                    .text {
                        font-size: 10 * 2rpx;
                        margin-top: 15 * 2rpx;
                        width: 100%;
                        text-align: center;
                    }
                }
                .lineBox {
                    display: flex;
                    .vcenter {
                        height: 40 * 2rpx;
                    }
                    .line {
                        height: 2 * 2rpx;
                        width: 80 * 2rpx;
                        background: #000;
                    }
                    .square {
                        width: 10 * 2rpx;
                        height: 10 * 2rpx;
                        background: #000;
                        transform: rotate(45deg);
                    }
                }
            }
            .searchBox {
                height: 70 * 2rpx;
                width: 100%;
                .search {
                    height: 70 * 2rpx;
                    width: 100%;
                    .inputBox {
                        position: relative;
                        .iconBox {
                            position: absolute;
                            right: 20 * 2rpx;
                            top: 20 * 2rpx;
                        }
                        .searchInput {
                            border: none;
                            outline: none;
                            height: 70 * 2rpx;
                            width: 100%;
                            line-height: 70 * 2rpx;
                            font-size: 11 * 2rpx;
                            padding: 0 20 * 2rpx;
                        }
                    }
                }
            }
            .infoBox {
                .row {
                    .text {
                        font-size: 13 * 2rpx;
                        color: #1f3349;
                    }
                }
            }
        }
        .clearModal {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 600;
            // background: rgba(0, 0, 0, 0.7);
            .outerBox {
                position: absolute;
                top: 184 * 2rpx;
                left: 0rpx;

                padding: 50rpx 40rpx;
                width: 100%;
                .innerBox {
                    .container {
                        position: relative;
                        background-color: #fff;
                        width: 252 * 2rpx;
                        height: 170 * 2rpx;
                        border-radius: 30rpx;
                        border: 1px solid #333;
                        padding: 26 * 2rpx 20 * 2rpx;
                        .close {
                            position: absolute;
                            right: 10rpx;
                            top: 10rpx;
                            z-index: 800rpx;
                        }
                        .title {
                            padding: 5 * 2rpx 10 * 2rpx;
                            text-align: left;
                            border-bottom: 1px solid #a1824a;
                        }
                        .list {
                            display: flex;
                            justify-content: space-between;
                            padding: 0 13 * 2rpx;
                            .item {
                                padding: 4 * 2rpx 7 * 2rpx;
                                border: 1px solid #a6a6a6;
                                border-radius: 10 * 2rpx;
                            }
                        }
                        .info {
                            padding: 0 10 * 2rpx;
                        }
                        .btn {
                            color: #fff;
                            min-width: 84 * 2rpx;
                            height: 20 * 2rpx;
                            line-height: 20 * 2rpx;
                            border-radius: 30rpx;
                        }
                    }
                }
            }
        }
        .hylb {
            background-color: rgba(1, 1, 1, 0.2);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0 20 * 2rpx;
            display: flex;
            justify-content: center;
            .box {
                width: 325 * 2rpx;
                height: 460 * 2rpx;
                background-color: #fff;
                margin-top: 60 * 2rpx;
                border-radius: 15 * 2rpx;
                padding: 0 16 * 2rpx;
                padding-bottom: 30 * 2rpx;
                padding-top: 50 * 2rpx;
                position: relative;
                .close {
                    position: absolute;
                    right: 10 * 2rpx;
                    top: 10 * 2rpx;
                }
                .msg {
                    color: #666666;
                }
                .hello {
                    margin-top: 3 * 2rpx;
                }
                > .ci {
                    color: #666666;
                }
                .dv {
                    .dv {
                        height: 1 * 2rpx;
                        background: #d9d9d9;
                    }
                }
                .row {
                    background-color: #f5f7fa;
                    padding: 12 * 2rpx 16 * 2rpx;
                    border-radius: 8 * 2rpx;
                    .lf {
                        .resImg {
                            width: 40 * 2rpx;
                            height: 40 * 2rpx;
                        }
                    }
                    .title {
                        color: #333;
                    }
                    .fg {
                        flex-grow: 1;
                        text-align: left;
                        align-items: flex-start;
                    }
                    .count {
                        color: #999999;
                    }
                }
                .gbtn {
                    background-color: #009963;
                    color: #fff;
                    height: 44 * 2rpx;
                }
            }
        }
    }
</style>
