<!--  -->
<template>
    <div class="rechargePage page">
        <div class="msg f12 mt10">
            知识豆余额：
            <span class="cy">{{ coffeeAmount }}</span>
            ，选择所需数量充值，立享超值优惠
        </div>

        <div class="list">
            <div
                class="item mt10 bd"
                :class="{
                    bcg: item.isPick
                }"
                v-for="(item, index) of list"
                :key="index"
                @click="clickItem(item)"
            >
                <div class="float f10 bd">{{ item.pdIntroduc }}</div>
                <div class="lf vcenter">
                    <div class="">
                        <div class="num center black f24 bold">
                            {{
                                item.curPrice == "免费"
                                    ? "免费"
                                    : "￥" + item.curPrice
                            }}
                        </div>
                        <div class="off wcenter f12 ci">
                            <div class="text f12">
                                {{
                                    item.curPrice == "免费"
                                        ? ""
                                        : "￥" + item.oriPrice
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rt vcenter">
                    <div class="flex">
                        <div class="num f20 cy">
                            {{ item.coffeeAmount }}
                        </div>
                        <div class="imgBox vcenter">
                            <image
                                class="resImg"
                                :src="'/static/rywx/kfd.png'"
                                mode="scaleToFill"
                            />
                        </div>
                    </div>
                </div>
                <!--
                <div class="name center black mt5 f16">{{ item.pdName }}</div>
               
                -->
            </div>
        </div>
        <div class="btnGroup mt30">
            <div class="btn cbgg cw center" @click="clickBtn">
                {{ btnText }}
            </div>
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
                <div class="msg f12">
                    {{ msg }}
                </div>
            </div>
        </u-modal>
    </div>
</template>

<script setup lang="ts">
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { com } from "@/common/com";
    import { http } from "@/http/http";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const coffeeAmount = computed(() => userStore.coffeeAmount);
    const list: any = ref([
        {
            pdName: "1000",
            curPrice: "免费",
            oriPrice: "",
            coffeeAmount: 1000,
            pdIntroduc: "登录网页版获得1000知识豆",
            isPick: true
        },
        {
            pdName: "500",
            curPrice: "免费",
            oriPrice: "",
            coffeeAmount: 500,
            pdIntroduc: "邀请好友得500知识豆",
            isPick: false
        }
    ]);
    if (!userStore.userInfo?.accInfo?.showFlag || true) {
        list.value = [
            {
                pdName: "500",
                curPrice: "免费",
                oriPrice: "",
                coffeeAmount: 500,
                pdIntroduc: "邀请好友得500知识豆",
                isPick: true
            }
        ];
    }
    const getProductList = async () => {
        const res = await service.getProduct();
        console.log(res);
        if (res.code == 0) {
            list.value = [...list.value, ...(res.data as [])].map((v) => {
                return {
                    ...v,
                    isPick: v.isPick || false
                };
            });
        }
    };

    const pickItem = ref<any>({});
    pickItem.value = list.value.filter((v: any) => v.isPick)[0];
    const btnText = ref("");
    btnText.value = pickItem.value?.pdIntroduc;
    const clickItem = (item: any) => {
        for (let v of list.value) {
            v.isPick = false;
        }
        item.isPick = true;
        pickItem.value = item;
        if (item.curPrice == "免费") {
            btnText.value = item.pdIntroduc;
            return;
        } else {
            btnText.value = "立即支付：￥" + item.curPrice;
        }
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
    const query = ref<any>({});
    onLoad((op: any) => {
        query.value = op;
        try {
            uni.showLoading({
                mask: true
            });
            setTimeout(() => {
                uni.hideLoading();
            }, 1000);
            com.onMsg((e: any) => {
                if (e.oid) {
                    userStore.setKeyVal({ key: "oid", val: e.oid });
                }
            });

            com.sendMsg("oid");
        } catch (e) {
            console.log(e);
        }
        getCfAmout();
    });
    const clickBtn = async () => {
        console.log(pickItem.value);
        if (pickItem.value.curPrice == "免费") {
            //登录网页版
            if (pickItem.value.pdName == 1000) {
                msg.value = "https://ruyingreview.hentre.top";
                copyText.value = "https://ruyingreview.hentre.top";
                modalSrc.value = "/static/rywx/pc.jpg";
                openModal();
            } else {
                msg.value =
                    "请用支付宝扫码，登录后填写邀请码\n" +
                    userStore.userInfo?.accInfo?.inviCode;
                modalSrc.value = "/static/rywx/yq.jpg";
                openModal();
                copyText.value = userStore.userInfo?.accInfo?.inviCode;
            }
        } else {
            const res = await service.createOrder({
                prds: [
                    {
                        ...pickItem.value
                    }
                ],
                uid: userStore.userInfo.uid
            });
            if (res.code == 0) {
                const resp = await service.pay({
                    outTradeNo: res.data,
                    type: 4,
                    oid: userStore.oid //"2088702002217784"
                });
                if (resp.code == 0) {
                    try {
                        uni.showLoading({
                            mask: true
                        });
                        setTimeout(() => {
                            uni.hideLoading();
                        }, 2000);
                        com.onMsg((e: any) => {
                            if (e.callPayRst) {
                                com.cs(e.callPayRst);
                                if (e.callPayRst.resultCode == "6001") {
                                    toast("取消支付");
                                } else if (e.callPayRst.resultCode == "9000") {
                                    toast("支付成功");

                                    getCfAmout();
                                    setTimeout(() => {
                                        getCfAmout();
                                    }, 3000);
                                    if (query?.value?.isBack) {
                                        uni.navigateBack();
                                    }
                                } else {
                                    toast("支付失败 , " + e.callPayRst.memo);
                                }
                            }
                        });

                        com.sendMsg("callPay", {
                            tradeNO: resp.data.tradeNo
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }
    };
    const show = ref(false);
    const modalSrc = ref("/static/rywx/kfd.png");
    const openModal = () => {
        show.value = true;
    };
    const confirmModal = () => {
        show.value = false;
    };
    const msg = ref("");
    const copyText = ref("");
    onMounted(() => {
        //
        getProductList();
    });
</script>
<style lang="scss" scoped>
    .page {
        background-color: #fff;
        padding: 0 20 * 2rpx;
        .list {
            .item {
                height: 85 * 2rpx;
                width: 100%;
                border: 1px solid #a6a6a6;
                display: flex;
                padding: 0 27 * 2rpx;
                position: relative;
                justify-content: space-between;

                .float {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 18 * 2rpx;
                    z-index: 100;
                    color: #333;
                    padding: 0 10 * 2rpx;
                    background-color: #e8decf;
                }
                .lf {
                    .off {
                        .text {
                            text-align: center;
                            text-decoration: line-through;
                        }
                    }
                }
                .rt {
                    .imgBox {
                        .resImg {
                            width: 20 * 2rpx;
                            height: 20 * 2rpx;
                        }
                    }
                }
            }
        }
        .btnGroup {
            .btn {
                width: 100%;
                height: 35 * 2rpx;
                line-height: 35 * 2rpx;
                border-radius: 10 * 2rpx;
                color: #fff;
                text-align: center;
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
    }
</style>
