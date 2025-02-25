<template>
    <view class="loginPage page">
        <div class="logo center">
            <image
                class="resImg"
                style="width: 532rpx; height: 158rpx"
                mode="scaleToFill"
                :src="getConfig().imgBasicUrl + 'logo.png'"
                :lazy-load="false"
            >
            </image>
        </div>
        <div class="bg">
            <image
                class="resImg"
                :src="getConfig().imgBasicUrl + 'loginBg.png'"
                :lazy-load="false"
            >
            </image>
        </div>
        <div class="float">
            <div class="formBox">
                <div class="row">
                    <div class="label">账号</div>
                    <div class="val">
                        <input
                            v-model="pn"
                            class="myInput"
                            placeholder="请输入手机号"
                            placeholder-class="pl"
                            type="number"
                            :maxlength="11"
                        />
                    </div>
                </div>
                <div class="row" style="margin-top: 35rpx">
                    <div class="label">密码</div>
                    <div class="val">
                        <input
                            v-model="pwd"
                            class="myInput"
                            placeholder="请输入密码"
                            placeholder-class="pl"
                            type="password"
                        />
                    </div>
                </div>

                <div class="row" style="margin-top: 35rpx" v-show="isEdit">
                    <div class="label">新密码</div>
                    <div class="val">
                        <input
                            class="myInput"
                            placeholder="请输入密码"
                            placeholder-class="pl"
                            type="password"
                        />
                    </div>
                </div>
            </div>
            <div class="btnBox center">
                <div class="btn vcenter" @click="login">
                    {{ isEdit ? "确认修改" : "注册/登录" }}
                </div>
            </div>
            <!-- <button
                class="login fm"
                open-type="getPhoneNumber"
                @getphonenumber="getPhoneNumberAndLogin"
            >
                授权登录
            </button> -->
        </div>
    </view>
</template>

<script setup lang="ts">
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import type { ButtonOnGetphonenumber } from "@uni-helper/uni-app-types";
    import { onLoad } from "@dcloudio/uni-app";
    import { useLoginService } from "./service";
    import { useRouter } from "@/common/route";
    import { service } from "@/http/service";
    import { getConfig } from "@/data/config";
    import { com } from "@/common/com";
    import { toast } from "@/common/toast";
    const { push, replace, tab } = useRouter();
    const { LoginService } = useLoginService();
    const userStore = useUserStore();
    const appStore = useAppStore();
    const code = ref("");
    const pn = ref("");
    const isEdit = ref(false);

    const option = ref<any>();
    const eid = ref("");
    const sharePackId = ref("");
    const obtainPackId = ref("");
    const isShareFlag = ref("");
    const actId = ref("");
    const shareUid = ref("");
    const ori = ref("");
    const checkParams = (url: string) => {
        console.log(url);
        eid.value = com.getQueryParam(url, "eid");
        sharePackId.value = com.getQueryParam(url, "sharePackId");
        obtainPackId.value = com.getQueryParam(url, "obtainPackId");
        isShareFlag.value = com.getQueryParam(url, "isShareFlag");
        actId.value = com.getQueryParam(url, "actId");
        shareUid.value = com.getQueryParam(url, "shareUid");
        ori.value = com.getQueryParam(url, "ori");
    };

    onLoad((options: any) => {
        console.log(options);
        /****测试代码 */
        // console.error("测试代码开启");
        // options.q = encodeURIComponent(
        //     "https://local.hentre.com/test/4?shareUid=17ddf2103e55f18c&actId=17def1037540dade&eid=17dee671a090560c&pid=17dee635693179e8&sharePackId=17deedec072dce04&obtainPackId=17deedf00a8643e8&isShareFlag=0&ori=b"
        // );
        /****测试代码 */
        if (options.sq) {
            options.q = options.sq;
        }
        option.value = options;
        com.setShareParams(options);
        if (options.q) {
            let url = decodeURIComponent(options.q);
            checkParams(url);
        }
        if (options.scancode_time) {
            console.log(options.scancode_time);
        }
        // checkParams(
        //     "https://local.hentre.com/test/2?shareUid=1705f34e1efb4150&actId=17dd088ea685c1e0&eid=172678d04880c400&pid=158d9bdeb62e3686&sharePackId=17dd0bc380598686&obtainPackId=17dd0bc380598686&isShareFlag=1&ori=b"
        // );
        // checkParams(
        //     "https://local.hentre.com/test/2?ori=c&eid=172678d04880c400&sharePackId=17dd0bc380598686&obtainPackId=17dd0bc380598686&shareUid=17dd1c9ca727cb6c&actId=17dd088ea685c1e0&isShareFlag=0"
        // );
        getCode();
    });
    const getCode = () => {
        uni.login({
            success: function (loginRes) {
                console.log(loginRes);
                code.value = loginRes.code;
            }
        });
    };
    const pwd = ref("");
    const model = ref(8388604);
    const login = async () => {
        let params = {
            pn: pn.value,
            pwd: pwd.value,
            model: model.value,
            oid: code.value
        };
        if (!com.isValidPhoneNumber(params.pn)) {
            toast("请填写正确的手机号码");
            return;
        }
        try {
            const res = await service.login(params as any);
            if (res.code == 0) {
                userStore.set_user_info(res.data);
                appStore.changeLoginState(true);
                appStore.set_Token(
                    "local_token",
                    res.data.did + "" + res.data.security
                );
                try {
                    let params = {
                        iDisplayStart: 0,
                        iDisplayLength: 20,
                        hasCount: true,
                        eid: eid.value,
                        actconfig: {
                            actState: 1,
                            actType: 200,
                            id: actId.value
                        },
                        isCall: true
                    };

                    const adRes = await service.getActDetail(params);
                    if (
                        adRes.code == 0 &&
                        adRes.data.length &&
                        adRes.data[0].actState == 1 &&
                        new Date().getTime() > adRes.data[0].actStartTime &&
                        new Date().getTime() < adRes.data[0].actEndTime
                    ) {
                        // if (ori.value == "b") {
                        rechargePlug(res.data.did);
                        // } else {
                        //     rechargePlugShare(res.data.did);
                        // }
                    } else {
                        toastMsg.value = "活动已失效";
                        loginIn();
                    }
                } catch (error) {
                    console.log(error);
                }
            } else if (res.code == -2) {
                goToReg();
            }
        } catch (error) {}
    };
    const rechargePlug = async (uid: string) => {
        let params = {
            sharedata: {
                sharePackInfoId: sharePackId.value,
                distObtainPackInfoId: obtainPackId.value,
                distObtainUid: uid,
                actId: actId.value,
                shareUid: shareUid.value,
                isShareFlag: isShareFlag.value
            },
            eid: eid.value
        };

        try {
            const res = await service.rechargePlug(params, params);
            if (res.code == 0) {
                toastMsg.value = "参与成功";
                loginIn();
            } else if (res.code == -1) {
                toastMsg.value = "您已参与过活动";
                loginIn();
            }
        } catch (error) {
            console.warn(error);
        }
    };
    const rechargePlugShare = async (uid: string) => {
        let params = {
            // sharePackInfoId: sharePackId.value,
            // distObtainPackInfoId: obtainPackId.value,
            // distObtainUid: uid,
            // actId: actId.value,
            // shareUid: shareUid.value,
            eid: eid.value,
            sharedata: {
                sharePackInfoId: sharePackId.value,
                distObtainPackInfoId: obtainPackId.value,
                distObtainUid: uid,
                actId: actId.value,
                shareUid: shareUid.value,
                isShareFlag: isShareFlag.value
            }
        };
        try {
            const res = await service.rechargePlugUserShare(params);
            if (res.code == 0) {
                loginIn();
            }
        } catch (error) {
            console.warn(error);
        }
    };
    const goToReg = () => {
        const { push } = useRouter();
        let params = {
            pn: pn.value,
            pwd: pwd.value
        };
        if (option.value?.q) {
            let url =
                "/pages/login/loginInfo?q=" +
                option.value?.q +
                "&" +
                com.qs(params);
            console.warn(url);
            push({
                url
            });
        } else {
            push({
                url: "/pages/login/loginInfo?" + com.qs(params)
            });
        }
    };
    const showTestParams = () => {
        toast(
            JSON.stringify({
                eid: eid.value,
                sharePackId: sharePackId.value,
                obtainPackId: obtainPackId.value,
                isShareFlag: isShareFlag.value,
                actId: actId.value,
                shareUid: shareUid.value,
                ori: ori.value
            })
        );
    };
    const toastMsg = ref("");
    const loginIn = () => {
        console.log("loginIn");
        if (ori.value) {
            if (toastMsg.value) {
                toast(toastMsg.value);
            }
            setTimeout(() => {
                tab({
                    url: "/pages/home/home-index"
                });
            }, 2000);
        } else {
            toast("登录成功");
            tab({
                url: "/pages/home/home-index"
            });
        }
    };
    const getPhoneNumberAndLogin = async (e: ButtonOnGetphonenumber | any) => {
        console.log("getPhoneNumberAndLogin", e);
        uni.showLoading({
            title: "登录中，请稍等"
        });
        const { detail } = e;
        const showToast = uni.showToast;
        const { login } = uni;
        if (detail.errno === 104) {
            // showAgreementFunc();
            uni.hideLoading();
            return;
        }
        if (detail.errMsg.includes("ok")) {
            try {
                let o = {
                    sign: detail.sign,
                    response: detail.encryptedData
                };
                let params: {
                    eid: string;
                    [index: string]: string | undefined;
                } = {
                    code: detail.code || undefined,
                    alires: JSON.stringify(o) || undefined,
                    eid: "x012345678901234"
                };
                for (let k in params) {
                    if (params[k] == undefined) delete params[k];
                }
                const res = await LoginService.getPhoneNumber(params);
                console.log(res);
                if (res.code == 0) {
                    const data = JSON.parse(res.data);
                    console.log(data);
                    pn.value = data.phoneNumber || data;
                    const loginRes = await LoginService.loginIn({
                        pn: pn.value,
                        mode: 2097152
                    });
                    console.log(loginRes);
                    // userStore.set_user_info(loginRes.data);
                    appStore.changeLoginState(true);
                    appStore.set_Token(
                        "local_token",
                        loginRes.data.uid + "" + loginRes.data.security
                    );
                    tab({
                        url: "/pages/home/home-index"
                    });
                }
            } catch {
                uni.hideLoading();
                showToast({
                    title: "登录失败，请稍后再试",
                    icon: "none"
                });
            }
        } else {
            showToast({
                title: "登录失败，请稍后再试",
                icon: "none"
            });
        }
    };
</script>

<style lang="scss" scoped>
    .page {
        height: 100vh;
        overflow: hidden;
        .bg {
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;

            .resImg {
                width: 100%;
                height: 100vh;
            }
        }
        .logo {
            position: fixed;
            top: 200rpx;
            left: 0;
            width: 100%;
            z-index: 10;
            .resImg {
                width: 419rpx;
                height: 194rpx;
            }
        }
        .float {
            position: fixed;
            left: 0;
            top: 450rpx;
            width: 100%;
            z-index: 10;
            .login {
                width: 638rpx;
                height: 105rpx;
                background: #0271fd;
                border-radius: 53rpx;
                line-height: 105rpx;
                color: #fff;
            }
            .formBox {
                padding: 0 72rpx;
                .row {
                    .label {
                        height: 45rpx;
                        font-family: AlibabaPuHuiTiM;
                        font-size: 33rpx;
                        color: #ffffff;
                        line-height: 45rpx;
                        text-align: left;
                        font-style: normal;
                        opacity: 0.5;
                    }
                    .val {
                        font-family: AlibabaPuHuiTiR;
                        font-size: 33rpx;
                        color: #ffffff;
                        line-height: 45rpx;
                        text-align: left;
                        font-style: normal;
                        margin-top: 27rpx;
                        padding-bottom: 12rpx;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                        .myInput {
                            width: 100%;
                        }
                        ::v-deep .pl {
                            font-family: AlibabaPuHuiTiR;
                            font-size: 33rpx;
                            color: #ffffff;
                            line-height: 45rpx;
                            opacity: 0.9;
                            text-align: left;
                            font-style: normal;
                        }
                    }
                }
            }
            .btnBox {
                margin-top: 145rpx;
                .btn {
                    width: 658rpx;
                    height: 80rpx;
                    background: #ffffff;
                    border-radius: 22rpx;

                    font-family: AlibabaPuHuiTiM;
                    font-size: 33rpx;
                    color: #333333;
                    text-align: center;
                    font-style: normal;
                    font-weight: bold;
                }
            }
        }
    }
</style>
