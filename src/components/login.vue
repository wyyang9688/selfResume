<template>
    <div class="gcCom coms" v-show="isShowGc" @click="clickbg">
        <div class="outterBox">
            <div class="loginBox" @click.stop="clickLogin">
                <div class="contentBox">
                    <div
                        class="topBox"
                        :style="{
                            paddingBottom: editType == 1 ? '40rpx' : '0rpx'
                        }"
                    >
                        <div class="logo">
                            <image
                                v-show="editType == 1"
                                class="resImg resImg1"
                                src="/static/ai/logo.png"
                                mode="scaleToFill"
                            />
                            <image
                                v-show="editType == 2"
                                class="resImg resImg2"
                                src="/static/ai/qb.png"
                                mode="scaleToFill"
                            />
                        </div>
                        <div class="title" v-show="editType == 1">注册登录</div>
                        <div class="title title2" v-show="editType == 2">
                            为了更精准的为您服务，企业 用户请填写以下信息；
                        </div>
                    </div>
                    <div class="formBox">
                        <div class="info" v-show="editType == 1">
                            *新用户请输入手机号码和密码，可直接注册并登录
                        </div>
                        <div class="row" v-show="editType == 1">
                            <div class="label">手机号</div>
                            <div class="val">
                                <input
                                    v-model="pn"
                                    class="myInput"
                                    placeholder=""
                                    placeholder-class="pl"
                                    type="number"
                                    :maxlength="11"
                                />
                            </div>
                        </div>
                        <div class="row" v-show="editType == 2">
                            <div class="label">公司名称</div>
                            <div class="val">
                                <input
                                    v-model="epname"
                                    class="myInput"
                                    placeholder=""
                                    placeholder-class="pl"
                                />
                            </div>
                        </div>
                        <div class="row" v-show="editType == 2">
                            <div class="label">行业</div>
                            <div
                                class="val"
                                @click="showOption"
                                style="padding-left: 20rpx; line-height: 80rpx"
                            >
                                <div class="icon vcenter">
                                    <up-icon
                                        name="arrow-down"
                                        color="rgba(51, 51, 51, 1)"
                                        size="20"
                                    ></up-icon>
                                </div>
                                {{ industry }}
                            </div>
                        </div>
                        <div
                            class="row"
                            style="margin-top: 35rpx"
                            v-show="editType == 1"
                        >
                            <div class="label">密码</div>
                            <div class="val">
                                <input
                                    v-model="pwd"
                                    class="myInput"
                                    placeholder=""
                                    placeholder-class="pl"
                                    type="password"
                                />
                            </div>
                        </div>

                        <div
                            class="btnBox center"
                            v-show="editType == 1"
                            @click="login"
                        >
                            <div class="btn vcenter">确定</div>
                        </div>
                        <div
                            class="btnBox center"
                            v-show="editType == 2"
                            @click="reg"
                        >
                            <div class="btn vcenter">确定</div>
                        </div>
                        <!-- <div
                            class="btnBox center qbtn"
                            style="margin-top: 46rpx"
                            v-show="editType == 2"
                            @click="login"
                        >
                            <div class="btn vcenter">我是个人用户</div>
                        </div> -->

                        <div class="agreeBox">
                            <div
                                class="icon vcenter"
                                @click="isAgree = !isAgree"
                            >
                                <up-icon
                                    name="checkmark-circle"
                                    :color="isAgree ? '#0271fd' : 'gray'"
                                    size="18"
                                ></up-icon>
                            </div>
                            <div
                                @click="isAgree = !isAgree"
                                class="textBox"
                                :class="{
                                    isAgree: isAgree
                                }"
                            >
                                请先阅读并同意
                                <span class="text" @click.stop="openAgreePop"
                                    >《 用户服务协议 》</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <up-picker
            ref="uPickerRef"
            @confirm="confirm"
            @cancel="cancel"
            @change="changeHandler"
            :show="show"
            keyName="label"
            :columns="options"
        ></up-picker>

        <div class="agreePop" v-if="isShowAgreePop">
            <div class="outBox">
                <div class="close" @click.stop="isShowAgreePop = false">
                    <up-icon name="close" color="gray" size="28"></up-icon>
                </div>
                <div class="innerBox">
                    <div class="container">
                        <h1>用户隐私协议</h1>

                        <div class="section">
                            <h2>1. 引言</h2>
                            <p>
                                本隐私协议（以下简称“本协议”）旨在明确您（以下简称“用户”）在使用Whizz（以下简称“本小程序”）时，我们如何收集、使用、保护和共享您的个人信息。请在使用本小程序前仔细阅读并理解本协议。
                            </p>
                        </div>

                        <div class="section">
                            <h2>2. 适用范围</h2>
                            <p>
                                本协议适用于用户在使用本小程序提供的所有服务时个人信息的收集、使用、保护和共享。
                            </p>
                        </div>

                        <div class="section">
                            <h2>3. 个人信息的定义</h2>
                            <p>
                                个人信息是指以电子或其他方式记录的能够单独或与其他信息结合识别用户身份的各种信息，包括但不限于用户的姓名、电话号码、公司名称等。
                            </p>
                        </div>

                        <div class="section">
                            <h2>4. 信息的收集与使用</h2>
                            <h3>4.1 信息收集</h3>
                            <p>
                                我们仅在以下情况下收集您的个人信息：<br />
                                - 用户注册或登录本小程序时；<br />
                                - 用户使用本小程序提供的具体服务时；<br />
                                - 根据法律法规要求或征得用户同意的其他情况。
                            </p>
                            <h3>4.2 信息使用</h3>
                            <p>
                                我们收集您的个人信息用于以下目的：<br />
                                - 提供、维护和改进我们的服务；<br />
                                - 向您发送通知和更新信息；<br />
                                - 遵守法律法规或保护用户权益。
                            </p>
                        </div>

                        <div class="section">
                            <h2>5. 信息的保护</h2>
                            <p>
                                我们采取行业标准的安全措施来保护您的个人信息不被未经授权的访问、披露、使用或修改。这些措施包括但不限于数据加密、防火墙、安全协议等。
                            </p>
                        </div>

                        <div class="section">
                            <h2>6. 信息的共享</h2>
                            <p>
                                我们不会与任何第三方共享您的个人信息，除非：<br />
                                - 法律法规要求或允许；<br />
                                -
                                为了提供服务或执行本协议需要与第三方服务提供商共享；<br />
                                - 用户事先同意共享。
                            </p>
                        </div>

                        <div class="section">
                            <h2>7. 用户权利</h2>
                            <p>
                                用户有权访问、更正、删除其个人信息，或撤回对本小程序的同意。用户可以通过本小程序提供的联系方式与我们联系以行使这些权利。
                            </p>
                        </div>

                        <div class="section">
                            <h2>8. 隐私政策的变更</h2>
                            <p>
                                我们可能会不时更新本协议。任何重大变更将通过本小程序通知用户，并在变更生效前给予用户足够的时间来审阅。
                            </p>
                        </div>

                        <div class="section">
                            <h2>9. 联系方式</h2>
                            <p>
                                如用户对本协议有任何疑问或需要帮助，可以通过以下方式联系我们：
                                <br />- 客服电话：4008062933
                            </p>
                        </div>

                        <div class="section">
                            <h2>10. 生效日期</h2>
                            <p>本隐私协议自2024年8月14日起生效。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { toast } from "@/common/toast";
    import { useAppStore } from "@/store/app-store";
    import { onLoad } from "@dcloudio/uni-app";
    import { getConfig } from "@/data/config";
    import { com } from "@/common/com";
    import { service } from "@/http/service";
    import { useUserStore } from "@/store/user-store";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const editType = ref(1);
    const isShowGc = computed(() => appStore.isShowGc);
    const clickLogin = () => {};
    const clickbg = () => {
        appStore.changeGc();
    };
    const isAgree = ref(false);
    const isShowAgreePop = ref(false);
    const openAgreePop = () => {
        console.log("openAgreePop");
        isShowAgreePop.value = true;
    };

    const getCode = () => {
        uni.login({
            success: function (loginRes) {
                console.log(loginRes);
                code.value = loginRes.code;
            }
        });
    };
    onLoad(() => {
        //
        console.warn("gc");
        getCode();
    });
    const code = ref("");
    const industry = ref("");
    const epname = ref("");
    const pn = ref("");
    const pwd = ref("");
    const mode = ref(28);
    const show = ref(false);
    const options = ref<any>([]);
    const getOptions = async () => {
        const res = await service.getIndustryType();
        if (res.code == 0) {
            options.value = [
                res.data.map((v: any) => {
                    return {
                        ...v,
                        label: v.csStyleItemName,
                        value: v.csStyleItemCode
                    };
                })
            ];
        }
    };
    getOptions();
    const uPickerRef = ref<any>();
    const changeHandler = (e: any) => {
        const { columnIndex, value, values, index } = e;
        // console.log(e);
        // if (columnIndex === 0) {
        //     uPickerRef.value.setColumnValues(1, columnData[index]);
        // }
    };
    const showOption = () => {
        show.value = true;
    };
    interface PickItem {
        label: string;
        value: string;
        [index: string]: any;
    }
    const pickItem = ref<PickItem>();
    const confirm = (e: any) => {
        pickItem.value = e.value[0];
        show.value = false;
        console.log(pickItem.value);
        industry.value = pickItem.value?.csStyleItemName;
    };
    const cancel = () => {
        show.value = false;
    };
    const setVal = (item: PickItem) => {
        pickItem.value = item;
    };
    const reg = async () => {
        let params = {
            pn: pn.value,
            pwd: pwd.value,
            mode: mode.value,
            // code: code.value,
            industry: pickItem.value?.value,
            epname: epname.value
        };
        if (!epname.value) {
            toast("请填写公司名称");
            return;
        }
        if (!pickItem.value?.label) {
            toast("请选择一个行业");
            return;
        }
        if (!isAgree.value) {
            toast("请先同意用户服务协议");
            return;
        }
        try {
            const res = await service.reg(params);
            uni.hideLoading();
            if (res.code == 0) {
                userStore.set_user_info(res.data);
                appStore.changeLoginState(true);
                appStore.set_Token(
                    "local_token",
                    res.data.uid + "" + res.data.security
                );

                toast("注册成功");
                emitLogin({
                    key: "regIn"
                });
                appStore.changeGc();
            } else {
                editType.value = 1;
            }
        } catch (error) {
            console.error(error);
        }
    };
    const emits = defineEmits({
        login: (item: any) => true
    });
    const emitLogin = (item: any) => {
        emits("login", item);
    };
    const login = async () => {
        let params = {
            pn: pn.value,
            pwd: pwd.value,
            mode: mode.value,
            code: code.value
        };
        if (!com.isValidPhoneNumber(params.pn)) {
            toast("请填写正确的手机号码");
            return;
        }
        if (!isAgree.value) {
            toast("请先同意用户服务协议");
            return;
        }
        try {
            const res = await service.login(params);
            if (res.code == 0) {
                userStore.set_user_info(res.data);
                appStore.changeLoginState(true);
                appStore.set_Token(
                    "local_token",
                    res.data.uid + "" + res.data.security
                );

                toast("登录成功");
                emitLogin({
                    key: "loginIn"
                });
                appStore.changeGc();
            } else if (res.code == -2) {
                uni.hideLoading();
                editType.value = 2;
            }
        } catch (error) {
            uni.hideLoading();
        }
    };
</script>

<style lang="scss" scoped>
    .gcCom {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 600;
        background: rgba(0, 0, 0, 0.7);
        .outterBox {
            position: absolute;
            top: 0rpx;
            left: 0rpx;

            .loginBox {
                position: absolute;
                top: 280rpx;
                left: 0rpx;
                padding: 0 50rpx;
                .contentBox {
                    width: 647rpx;
                    background: #0271fd;
                    border-radius: 33rpx;
                    overflow: hidden;
                    .topBox {
                        padding: 40rpx 30rpx;
                        display: flex;
                        justify-content: space-between;
                        .logo {
                            .resImg1 {
                                width: 200rpx;
                                height: 65rpx;
                            }
                            .resImg2 {
                                width: 147rpx;
                                height: 139rpx;
                            }
                        }
                        .title {
                            height: 33rpx;
                            font-family: AlibabaPuHuiTiH;
                            font-size: 33rpx;
                            color: #ffffff;
                            line-height: 88rpx;
                            font-weight: bold;
                        }
                        .title2 {
                            position: relative;
                            top: 5rpx;
                            line-height: 50rpx;
                        }
                    }
                    .formBox {
                        width: 647rpx;
                        min-height: 705rpx;
                        height: 645rpx;
                        background: #ffffff;
                        border-radius: 33rpx;
                        padding: 48rpx 45rpx;
                        .info {
                            height: 46rpx;
                            font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
                            font-weight: 400;
                            font-size: 25rpx;
                            color: #999999;
                            line-height: 36rpx;
                            text-align: left;
                            font-style: normal;
                        }
                        .row {
                            .label {
                                height: 40rpx;
                                font-family: AlibabaPuHuiTiM;
                                font-size: 29rpx;
                                color: #333333;
                                line-height: 40rpx;
                                text-align: left;
                                font-style: normal;
                                margin-top: 20rpx;
                                margin-bottom: 15rpx;
                            }
                            .val {
                                width: 558rpx;
                                height: 80rpx;
                                position: relative;
                                background: #e5f0ff;
                                border-radius: 25rpx;
                                .myInput {
                                    line-height: 80rpx;
                                    width: 558rpx;
                                    height: 80rpx;
                                    padding-left: 20rpx;
                                }
                                .icon {
                                    position: absolute;
                                    right: 20rpx;
                                    top: 0;
                                    height: 80rpx;
                                    font-weight: bold;
                                }
                            }
                        }
                        .btnBox {
                            width: 558rpx;
                            height: 80rpx;
                            margin-top: 80rpx;
                            background: #0271fd;
                            border-radius: 25rpx;
                            font-size: 29rpx;
                            color: #ffffff;
                            line-height: 40rpx;
                        }
                        .qbtn {
                            background: rgba(2, 113, 253, 0.1);
                            color: rgba(2, 113, 253, 1);
                        }
                    }
                }
            }
        }

        .agreeBox {
            margin-top: 20rpx;
            display: flex;
            justify-content: flex-start;
            .textBox {
                font-size: 26rpx;
                color: gray;
            }
            .isAgree {
                color: #0271fd;
            }
            .text {
                color: #0271fd;
                font-size: 26rpx;
            }
        }
        .agreePop {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 600;
            background: rgba(0, 0, 0, 0.7);

            .outBox {
                position: absolute;
                top: 0rpx;
                left: 0rpx;

                padding: 50rpx 40rpx;
                width: 100%;
                height: 1120rpx;
                .close {
                    position: fixed;
                    right: 50rpx;
                    top: 60rpx;
                    z-index: 800rpx;
                }
                .innerBox {
                    background-color: #fff;
                    width: 100%;
                    border-radius: 28rpx;
                    overflow-y: auto;
                    height: 1120rpx;
                    padding: 30rpx;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    .container {
                        background-color: #fff;
                    }
                    h1,
                    h2,
                    h3 {
                        color: #333;
                        font-weight: bold;
                    }
                    h1 {
                        text-align: center;
                    }
                    .section {
                        margin-bottom: 30px;
                    }
                    p {
                        line-height: 1.6;
                    }
                }
            }
        }
    }
</style>
