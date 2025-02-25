<template>
    <div class="myPage page tabbarPage">
        <div class="userBox sd bd mt10">
            <div class="lf vcenter">
                <div class="imgBox">
                    <image
                        class="resImg"
                        :src="'/static/ai/user.png'"
                        mode="scaleToFill"
                    />
                </div>
            </div>
            <div class="med ml10">
                <div class="username f14">
                    {{ userStore.userInfo.pn || "如影用户" }}
                </div>
                <div class="code cg f10">
                    邀请码:{{ userStore.userInfo?.accInfo?.inviCode || "" }}
                </div>
            </div>
            <div class="rt vcenter">
                <div
                    class="btn cbgg cw f14"
                    @click="copy(userStore.userInfo?.accInfo?.inviCode)"
                >
                    复制邀请码
                </div>
            </div>
        </div>
        <div class="userBox sd bd mt20">
            <div class="lf vcenter">
                <div class="imgBox">
                    <image
                        class="resImg"
                        :src="'/static/rywx/kfd.png'"
                        mode="scaleToFill"
                    />
                </div>
            </div>
            <div class="med ml10">
                <div class="username f14">
                    知识豆余额：{{ coffeeAmount || 0 }}
                </div>
                <div class="code cg f10 cd">内测期间充值享2.5折</div>
            </div>
            <div class="rt vcenter">
                <div class="btn cbgg cw f14 center" @click="goToRecharge">
                    充值
                </div>
            </div>
        </div>

        <div class="toolBox sd bd mt20">
            <div class="tools">
                <div
                    class="item"
                    @click="clickTool(item)"
                    v-for="(item, index) in tools"
                    :key="index"
                >
                    <div class="lf">
                        <div class="imgBox vcenter">
                            <image
                                class="resImg"
                                :src="item.icon"
                                mode="scaleToFill"
                            />
                        </div>
                        <div
                            class="name f14 ml5"
                            :class="{
                                bold: item.isBold
                            }"
                        >
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="med f10">{{ item.info }}</div>
                    <div class="rt vcenter ml5">
                        <div class="imgBox vcenter">
                            <up-icon
                                name="arrow-right"
                                color="gray"
                                size="10"
                            ></up-icon>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <canvas
                id="qrcode"
                canvas-id="qrcode"
                style="width: 200px; height: 200px"
            ></canvas> -->
        </div>
        <u-modal
            :show="show"
            @confirm="confirmModal"
            ref="uModal"
            :asyncClose="true"
        >
            <div class="mBox" @click="com.copy(copyText)">
                <div class="imgBox center">
                    <image class="resImg" :src="modalSrc" mode="scaleToFill" />
                </div>
                <div class="msg f12 center">
                    {{ msg }}
                </div>
            </div>
        </u-modal>
        <tabbar />
        <!-- <gc @login="onLogin" /> -->
    </div>
</template>

<script setup lang="ts">
    import { http, ajax } from "@/http/http";
    import tabbar from "@/components/tabbar.vue";
    import tabs from "@/components/tabs.vue";

    import { useRouter } from "@/common/route";
    import { onReachBottom, onShow } from "@dcloudio/uni-app";
    import { useUserStore } from "@/store/user-store";
    import { toast } from "@/common/toast";

    import { onLoad, onUnload } from "@dcloudio/uni-app";
    import utils from "@/utils/utils";
    import { getConfig } from "@/data/config";
    import { service } from "@/http/service";
    import { com } from "@/common/com";
    import UQRCode from "uqrcodejs";
    const coffeeAmount = computed(() => userStore.coffeeAmount || 0);
    // import { myService } from "./service";
    // const mservice = myService().service;
    const mservice = {};
    const copy = (code: any) => {
        if (!code) return;
        uni.setClipboardData({
            data: code,
            success: function () {
                toast("复制成功");
            }
        });
    };
    const userStore = useUserStore();
    const onLogin = () => {
        console.log("登录");
    };
    const createQrCode = (code: string = "wyyang") => {
        var qr = new UQRCode();
        // 设置二维码内容
        qr.data = code;
        // 设置二维码大小，必须与canvas设置的宽高一致
        qr.size = 200;
        // 调用制作二维码方法
        qr.make();
        // 获取canvas上下文
        var canvasContext = uni.createCanvasContext("qrcode", this); // 如果是组件，this必须传入
        // 设置uQRCode实例的canvas上下文
        qr.canvasContext = canvasContext;
        // 调用绘制方法将二维码图案绘制到canvas上
        qr.drawCanvas();
    };
    const APPID = ref("");
    onLoad(() => {
        try {
            com.onMsg((e: any) => {
                if (e.appId) {
                    APPID.value = e.appId;
                }
            });
            com.sendMsg("appId");
        } catch (e) {
            console.log(e);
        }
        nextTick(() => {});
        if (!com.checkLogin()) {
            return;
        }
    });
    const show = ref(false);
    const modalSrc = ref("/static/rywx/kfd.png");
    const openModal = () => {
        show.value = true;
    };
    const confirmModal = () => {
        show.value = false;
    };
    const getCfAmout = () => {
        http.post("/api/it/order/balance", {
            uid: userStore.userInfo.uid
        }).then((res: any) => {
            res = res.data;
            if (res.code == 0) {
                userStore.setKeyVal({
                    key: "coffeeAmount",
                    val: res.data.balance.coffeeAmount || 0
                });
                userStore.set_info(res.data.acc || {});
            }
        });
    };
    onShow(() => {
        getCfAmout();
    });
    // const service = communityService().service;

    const { push, replace, back } = useRouter();
    const tabsRef = ref();
    const tools = ref([
        // {
        //     name: "体验网页版",
        //     key: "1",
        //     info: "成功登录网页版如影，可获得1000知识豆",
        //     icon: "/static/rywx/pc.png",
        //     isBold: true
        // },
        {
            name: "邀请好友",
            key: "2",
            info: "成功邀请本校新用户注册，可获得500知识豆",
            icon: "/static/rywx/gift.png",
            isBold: true
        },
        {
            name: "用户反馈",
            key: "3",
            info: "",
            icon: "/static/rywx/feed.png",
            isBold: false
        },
        {
            name: "知识豆明细",
            key: "5",
            info: "",
            icon: "/static/rywx/mx.png",
            isBold: false
        },
        {
            name: "联系客服",
            key: "4",
            info: "",
            icon: "/static/rywx/help.png",
            isBold: false
        }
    ]);
    const goToRecharge = () => {
        push({
            url: "/pages/my/recharge"
        });
    };
    const msg = ref("");
    const copyText = ref("");
    const clickTool = (item: any) => {
        console.log(item);
        if (item.key == 1) {
            msg.value = "https://ruyingreview.hentre.top";
            copyText.value = "https://ruyingreview.hentre.top";
            modalSrc.value = "/static/rywx/pc.jpg";
            openModal();
        } else if (item.key == 2) {
            msg.value =
                "请用支付宝扫码，登录后填写邀请码\n" +
                userStore.userInfo?.accInfo?.inviCode;
            if (APPID.value == "2018122062626336") {
                //校源网
                modalSrc.value = "/static/rywx/yq.jpg";
            } else if (APPID.value == "2021004164633040") {
                //青柠
                modalSrc.value = "/static/rywx/yqQNXY.png";
            } else if (APPID.value == "2021002173653161") {
                //海香会
                modalSrc.value = "/static/rywx/yqHXH.jpg";
            } else if (APPID.value == "2021004163631322") {
                modalSrc.value = "/static/rywx/yqKPXY.jpg";
            } else {
                modalSrc.value = "/static/rywx/yq.jpg";
            }
            com.cs(modalSrc.value);
            openModal();
            copyText.value = userStore.userInfo?.accInfo?.inviCode;
        } else if (item.key == 3) {
            push({
                url: "/pages/my/feedback"
            });
        } else if (item.key == 4) {
            // msg.value = "请扫码添加客服联系信息";
            // openModal();
            // uni.makePhoneCall({
            //     phoneNumber: "18229971302"
            // });
            com.sendMsg("callPhone", { pn: "18229971302" });
        } else if (item.key == 5) {
            push({
                url: "/pages/my/rechargeDetail"
            });
        }
    };
    // uni.setNavigationBarTitle({
    //     title: "我的"
    // });
</script>

<style lang="scss" scoped>
    .page {
        background-color: #f6f6f9;
        min-height: 100vh;
        padding: 0 9 * 2rpx;
        .userBox {
            display: flex;
            background-color: #fff;
            height: 50 * 2rpx;
            padding: 8 * 2rpx 10 * 2rpx;
            .lf {
                .imgBox {
                    width: 30 * 2rpx;
                    height: 30 * 2rpx;
                    // background-color: gray;
                    border-radius: 50%;
                    .resImg {
                    }
                }
            }
            .med {
                flex-grow: 1;
                .username {
                }
                .code {
                }
            }
            .rt {
                min-width: fit-content;
                .btn {
                    padding: 0 10 * 2rpx;
                    height: 30 * 2rpx;
                    line-height: 30 * 2rpx;
                    border-radius: 30rpx;
                    min-width: 90 * 2rpx;
                }
            }
        }
        .toolBox {
            background-color: #fff;
            .tools {
                .item {
                    padding: 0 15 * 2rpx;
                    height: 43 * 2rpx;
                    line-height: 43 * 2rpx;
                    display: flex;
                    border-bottom: 1px solid rgba(219, 219, 219, 0.5);
                    .lf {
                        display: flex;
                        min-width: fit-content;
                        .imgBox {
                            .resImg {
                                width: 15 * 2rpx;
                                height: 15 * 2rpx;
                            }
                        }
                    }
                    .med {
                        flex-grow: 1;
                        color: #a6a6a6;
                        text-align: right;
                    }
                }
            }
        }
    }
    .mBox {
        .imgBox {
            .resImg {
                width: 200 * 2rpx;
                height: 200 * 2rpx;
            }
        }
    }
    .myModal {
    }
</style>
