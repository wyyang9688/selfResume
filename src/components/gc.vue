<template>
    <div class="gcCom coms" v-show="isShowGc" @click="clickbg">
        <div class="outterBox">
            <div class="loginBox" @click.stop="clickLogin">
                <div class="contentBox">
                    <!-- <div
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
                    </div> -->

                    <div class="formBox">
                        <div class="title center f18 bold">
                            填写邀请码领好礼
                        </div>
                        <div class="msg f12 center mt10" style="color: #666666">
                            新用户填邀请码可获赠500知识豆！
                        </div>
                        <!-- <div class="info mt10 f10">
                            为了更精准地为你推荐文献，【如影AI】需要与你的科研数据匹配。所有信息严格保密，仅用于个性化推荐。
                        </div> -->
                        <!-- <div class="row myFlex flexs" >
                            <div class="label">职业</div>
                            <div class="val">
                                <div class="pinputBox">
                                    <el-select
                                        class="pselect w100"
                                        v-model="career"
                                        filterable
                                        placeholder="请选择职业"
                                    >
                                        <el-option
                                            v-for="item in options.career"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="row myFlex flexs" style="margin-top: 20px">
                            <div class="label">单位/学校</div>
                            <div class="val">
                                <div class="pinputBox">
                                    <el-select
                                        @change="secChange"
                                        @blur="secFocu"
                                        :filter-method="filterSelect"
                                        class="pselect w100"
                                        v-model="sc"
                                        filterable
                                        placeholder="请输入你的学校"
                                    >
                                        <el-option
                                            v-for="item in options.scc"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                        <div class="row myFlex flexs">
                            <div class="label">年级</div>
                            <div class="val">
                                <div class="pinputBox">
                                    <el-select
                                        class="pselect w100"
                                        v-model="xl"
                                        filterable
                                        placeholder="请输入你的年级"
                                    >
                                        <el-option
                                            v-for="item in options.xl"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div> -->

                        <!-- <div class="row myFlex flexs">
                            <div class="label">专业</div>
                            <div class="val">
                                <div class="pinputBox">
                                    <el-select
                                        class="pselect w100"
                                        @blur="secFocu1"
                                        :filter-method="filterSelect1"
                                        v-model="zy"
                                        filterable
                                        placeholder="请输入你的专业"
                                    >
                                        <el-option
                                            v-for="item in options.zyy"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div> -->

                        <div class="row myFlex flexs" style="margin-top: 15px">
                            <div class="label">邀请码</div>
                            <div class="val">
                                <div class="pinputBox">
                                    <input
                                        placeholder-style="font-size:14px;color:#A8ABB2"
                                        :placeholder="'请输入好友邀请码，非必填'"
                                        :type="'number'"
                                        v-model="inviCode"
                                        class="myInput"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="btnBox center">
                            <div
                                class="btn sd vcenter btn2"
                                style="width: 100px"
                                @click="closePop"
                            >
                                跳过
                            </div>
                            <div
                                class="btn sd vcenter ml40"
                                style="width: 100px"
                                @click="saveInfo"
                            >
                                使用
                            </div>
                        </div>

                        <!-- <div class="agreeBox">
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
                        </div> -->
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
            :columns="options1"
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
    import { ajax } from "@/http/http";
    import { getConfig } from "@/data/config";
    import { com } from "@/common/com";
    import { service } from "@/http/service";
    import { useUserStore } from "@/store/user-store";
    const appStore = useAppStore();
    const userStore = useUserStore();

    const options = ref<any>({
        xl: [],
        zy: [],
        zyy: [],
        sc: [],
        scc: [],
        career: []
    });
    const sc = ref("");
    const zy = ref("");
    const xl = ref("");
    const inviCode = ref("");
    const career = ref("");
    const secFocu = () => {
        setTimeout(() => {
            options.value.scc = options.value.sc;
        }, 500);
    };
    const secFocu1 = () => {
        setTimeout(() => {
            options.value.zyy = options.value.zy;
        }, 500);
    };
    const filterSelect = (query: any) => {
        console.log(query);
        if (!query) {
            options.value.scc = options.value.sc;
        } else {
            options.value.scc = options.value.sc.filter((item: any) => {
                return (
                    item.name.indexOf(query) > -1 ||
                    item.name.indexOf("其它") > -1 ||
                    item.name.indexOf("其他") > -1
                );
            });
        }
    };
    const filterSelect1 = (query: any) => {
        console.log(query);
        if (!query) {
            options.value.zyy = options.value.zy;
        } else {
            console.log(options.value.zy);
            options.value.zyy = options.value.zy.filter((item: any) => {
                return (
                    item.name &&
                    (item.name.indexOf(query) > -1 ||
                        item.name.indexOf("其它") > -1 ||
                        item.name.indexOf("其他") > -1)
                );
            });
        }
    };
    const secChange = (v: any) => {
        console.log(v);
        setTimeout(() => {
            options.value.scc = options.value.sc;
        }, 500);
    };

    /** */
    const editType = ref(1);
    const isShowGc = computed(() => appStore.isShowGc);
    const clickLogin = () => {};
    const clickbg = () => {
        return;
        appStore.changeGc();
    };
    const closePop = () => {
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
    const options1 = ref<any>([]);
    const getOptions = async () => {
        const res = await service.getScOptions({
            type: "sc"
        });
        if (res.code == 0) {
            options.value.sc = res.data || [];
            options.value.scc = [...(res.data as [])] || [];
        }
        const res1 = await service.getScOptions({
            type: "qf"
        });
        if (res1.code == 0) {
            options.value.xl = res1.data || [];
        }
        const res2 = await service.getScOptions({
            type: "ms"
        });
        if (res.code == 0) {
            options.value.zy = res2.data || [];
            options.value.zyy = [...(res2.data as [])] || [];
        }
        const res3 = await service.getScOptions({
            type: "career"
        });
        if (res.code == 0) {
            options.value.career = res3.data || [];
        }
    };
    getOptions();
    const saveInfo = async () => {
        // if (!career.value) {
        //     toast("请选择职业");
        //     return;
        // }
        // if (!sc.value) {
        //     toast("请选择学校");
        //     return;
        // }

        // if (!xl.value) {
        //     toast("请选择年级");
        //     return;
        // }
        // if (!zy.value) {
        //     toast("请选择专业");
        //     return;
        // }
        let params = {
            uid: userStore.userInfo.uid,
            itschoolId: sc.value,
            itcareerId: career.value,
            itmsId: zy.value,
            itqfId: xl.value,
            inviCode: inviCode.value || ""
        };
        ajax.post("/api/acc/upt/acc", params).then((res: any) => {
            if (res.data.code == 0) {
                toast("保存成功");
                userStore.set_info(params);
                appStore.changeGc();
                if (res.data.data.isShareFlag) {
                    emitLogin({
                        isShareFlag: true
                    });
                }
            } else {
                toast(res.data.msg);
            }
        });
    };
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
                top: 150rpx;
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
                        height: 415rpx;
                        background: #ffffff;
                        border-radius: 33rpx;
                        padding: 48rpx 45rpx;
                        padding: 48rpx 45rpx;
                        ::v-deep .el-select__wrapper {
                            // border: 1px solid red !important;
                        }
                        .info {
                            height: 46rpx;
                            font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
                            font-weight: 400;
                            color: #a1824a;
                            line-height: 36rpx;
                            text-align: left;
                            font-style: normal;
                        }
                        .row {
                            margin-top: 10 * 2rpx;
                            padding-right: 40rpx;
                        }

                        // padding-left: 0.5rem;
                        .label {
                            line-height: 32 * 2rpx;
                            min-width: 55 * 2rpx;
                            text-align: right;
                            margin-right: 10 * 2rpx;
                            font-size: 12 * 2rpx;
                        }

                        .val {
                            width: 2.5rem;
                            flex-grow: 1;
                        }
                        .btnBox {
                            margin-top: -20 * 2rpx;
                            // padding: 0 20 * 2rpx;
                            display: flex;
                            // justify-content: space-between;
                            .btn {
                                // width: 200rpx;
                                height: 80rpx;
                                margin-top: 80rpx;
                                background: #14a16f;
                                border-radius: 25 * 2rpx;
                                font-size: 29rpx;
                                color: #ffffff;
                                line-height: 40rpx;
                            }
                            .btn2 {
                                background-color: #e0f4e9;
                                background-color: #fff;
                                color: #14a16f;
                            }
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
        .pinputBox {
            .myInput {
                height: 32 * 2rpx;
                border: 1px solid #dcdfe6;
                border-radius: 8rpx;
                padding-left: 10 * 2rpx;
                color: #606266;
                font-size: 14 * 2rpx;
            }
        }
    }
</style>
