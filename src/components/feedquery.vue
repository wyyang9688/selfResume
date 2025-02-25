<template>
    <div class="gcCom coms" v-show="isShowGc" @click="clickbg">
        <div class="outterBox">
            <div class="loginBox" @click.stop="clickLogin">
                <div class="contentBox">
                    <div class="formBox">
                        <div class="close" @click="closePop">
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L9 9L1 1ZM1 9L9 1L1 9Z"
                                    fill="black"
                                />
                                <path
                                    d="M1 1L9 9M1 9L9 1"
                                    stroke="#6B7280"
                                    stroke-width="2"
                                />
                            </svg>
                        </div>
                        <div class="title f15 cg bold" v-show="qaStep == 1">
                            Hi，愿意给我们一点成长的建议吗？
                        </div>
                        <div class="info mt5 f12 bold" v-show="qaStep == 1">
                            完成问卷即可获得200知识豆✨
                        </div>
                        <div class="dv" v-show="qaStep == 1">
                            <div class="dv"></div>
                        </div>

                        <div class="qalist">
                            <div
                                class="qa"
                                v-for="(item, index) in qalist"
                                :key="index"
                                v-show="item.index == qaStep"
                            >
                                <div class="q f15 bold mt10">
                                    {{ item.q }}
                                </div>
                                <div class="alist">
                                    <div
                                        class="a f14 mt10"
                                        v-for="(a, i) in item.a"
                                        :key="i"
                                        :class="{
                                            pick: a.isPick
                                        }"
                                        @click="clickQa(a, item)"
                                    >
                                        {{ a.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dv mt10" v-show="qaStep != 3">
                            <div class="dv"></div>
                        </div>
                        <div
                            class="mt20 tool myFlex flexs"
                            v-show="qaStep != 3"
                        >
                            <div class="text f14">
                                {{ qaStep }}/{{ qalist.length }}题
                            </div>
                            <div class="step vcenter ml10">
                                <div class="w100">
                                    <u-line-progress
                                        :percentage="qaStep * 60"
                                        height="8"
                                        activeColor="#009963"
                                        :showText="false"
                                    ></u-line-progress>
                                </div>
                            </div>
                            <div
                                class="next f14 ml10"
                                v-if="qaStep == 1"
                                @click="nextQa"
                            >
                                下一题
                            </div>
                            <div
                                class="next f14 ml10"
                                v-if="qaStep == 2"
                                @click="submitQa"
                            >
                                提交
                            </div>
                        </div>
                        <div
                            class="title f24 center mt20 bold ml10"
                            v-show="qaStep == 3"
                        >
                            感谢你的反馈！
                        </div>
                        <div class="resultBox center mt15" v-show="qaStep == 3">
                            <div class="result myFlex">
                                <div class="imgBox vcenter">
                                    <image
                                        class="resImg"
                                        :src="'/static/rywx/giftBox.png'"
                                        mode="scaleToFill"
                                    />
                                </div>
                                <div class="text bold f15 ml5">
                                    200知识豆已到账
                                </div>
                            </div>
                        </div>
                        <div class="adBox center mt20" v-show="qaStep == 3">
                            <div class="ad">
                                <div class="row cg bold f16">
                                    邀请你加入「如影学术社群」
                                </div>
                                <div class="row f14">在这里，你可以：</div>
                                <div class="row f14">
                                    • 第一时间体验<span>新功能</span>
                                </div>
                                <div class="row f14">
                                    • 获得限量<span>免费</span>使用机会
                                </div>
                                <div class="row f14">
                                    • 不定期掉落学术提升<span>福利礼包</span>
                                </div>
                            </div>
                        </div>
                        <div class="btnBox center w100" v-show="qaStep == 3">
                            <div
                                class="btn sd vcenter w100"
                                style="border-radius: 10px"
                                @click="over"
                            >
                                联系客服加群
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
    const isShowGc = ref(false);
    const clickLogin = () => {};
    const clickbg = () => {
        return;
        appStore.changeGc();
    };
    const closePop = () => {
        isShowGc.value = false;
    };
    const openPop = () => {
        isShowGc.value = true;
    };
    const qaStep = ref(1);
    const nextQa = () => {
        const v1 = qalist.value[0].a.filter((item: any) => item.isPick);
        if (!v1.length) {
            toast("请选择至少一个选项");
            return;
        }
        qaStep.value++;
    };
    const qalist = ref([
        {
            index: 1,
            q: "「1. 如影哪些功能对你有帮助？」(多选)",
            type: "ms",
            a: [
                {
                    sort: 1,
                    index: 1,
                    name: "中英文献一站式搜索",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 2,
                    name: "「AI智选」推荐文献",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 3,
                    name: "单篇文献智能解读",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 4,
                    name: "多篇文献汇总分析",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 5,
                    name: "都对我没帮助",
                    isPick: false
                }
            ]
        },
        {
            index: 2,
            q: "「2. 以下哪个问题最影响您继续使用如影」(单选)",
            type: "ss",
            a: [
                {
                    sort: 1,
                    index: 1,
                    name: "文献检索结果不精准",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 2,
                    name: "「AI智选」推荐结果不精准",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 3,
                    name: "综述初稿生成质量不高",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 4,
                    name: "使用不流畅，响应速度慢",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 5,
                    name: "单次使用费用过高",
                    isPick: false
                },
                {
                    sort: 1,
                    index: 6,
                    name: "其他问题",
                    isPick: false,
                    type: "other",
                    val: ""
                },
                {
                    sort: 1,
                    index: 7,
                    name: "没有问题",
                    isPick: false
                }
            ]
        }
    ]);
    const clickQa = (a: any, item: any) => {
        if (item.type == "ss") {
            for (let v of item.a) {
                v.isPick = false;
            }
            a.isPick = true;
        } else {
            a.isPick = !a.isPick;
        }
    };
    const submitQa = async () => {
        const v0 = qalist.value[0].a.filter((item: any) => item.isPick);
        const v1 = qalist.value[1].a.filter((item: any) => item.isPick);
        if (!v1.length) {
            toast("请选择至少一个选项");
            return;
        }
        let list = JSON.parse(JSON.stringify(qalist.value));
        const params = list.map((item: any) => {
            item.a = item.a
                .filter((v: any) => v.isPick)
                .map((v: any) => {
                    return {
                        ...v
                    };
                });
            return {
                ...item
            };
        });
        const res = await service.submitQa({
            collectins: JSON.stringify(params)
        });
        uni.hideLoading();
        if (res.code == 0) {
            qaStep.value = 3;
            userStore.changeFlag({
                key: "isCollectinsFlag",
                val: false
            });
        } else {
            if (res.msg) toast(res.msg);
        }
    };
    const isAgree = ref(false);
    const isShowAgreePop = ref(false);
    const openAgreePop = () => {
        console.log("openAgreePop");
        isShowAgreePop.value = true;
    };
    defineExpose({
        closePop,
        openPop
    });
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
        // getCode();
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
        if (!sc.value) {
            toast("请选择学校");
            return;
        }

        if (!xl.value) {
            toast("请选择年级");
            return;
        }
        if (!zy.value) {
            toast("请选择专业");
            return;
        }
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
                    emitEven({
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
                emitEven({
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
        receiveMsg: (item: any) => true
    });
    const emitEven = (item: any) => {
        emits("receiveMsg", item);
    };
    const over = () => {
        com.sendMsg("callPhone", {
            pn: "18229971302"
        });
        emitEven({ key: "over" });
        isShowGc.value = false;
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
                emitEven({
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
                        min-height: 785rpx;
                        background: #ffffff;
                        border-radius: 33rpx;
                        padding: 20 * 2rpx 45rpx;
                        padding-bottom: 10 * 2rpx;
                        ::v-deep .el-select__wrapper {
                            // border: 1px solid red !important;
                        }
                        .close {
                            position: absolute;
                            top: 10rpx;
                            right: 70rpx;
                            width: 30rpx;
                            height: 30rpx;
                        }
                        .dv {
                            position: relative;
                            .dv {
                                position: absolute;
                                left: -50 * 2rpx;
                                top: 0;
                                height: 2 * 2rpx;
                                background-color: #e5e7eb;
                                width: 200%;
                            }
                        }
                        .qalist {
                            .qa {
                                .q {
                                    color: #111827;
                                }
                                .alist {
                                    .a {
                                        height: 38 * 2rpx;
                                        line-height: 38 * 2rpx;
                                        padding: 0 16 * 2rpx;
                                        color: #111827;
                                        border: 1px solid #e5e7eb;
                                    }
                                    .pick {
                                        border: 1px solid #009963;
                                        color: #009963;
                                        font-weight: bold;
                                    }
                                }
                            }
                        }
                        .tool {
                            .text {
                                color: #6b7280;
                            }
                            .step {
                                flex-grow: 1;
                            }
                        }
                        .resultBox {
                            .result {
                                width: 170 * 2rpx;
                                height: 40 * 2rpx;
                                line-height: 40 * 2rpx;
                                background-color: #ecfdf5;
                                justify-content: center;
                                border-radius: 30 * 2rpx;
                                color: #47ca9e;
                                .imgBox {
                                    .resImg {
                                        width: 20 * 2rpx;
                                        height: 20 * 2rpx;
                                        position: relative;
                                        top: -2 * 2rpx;
                                    }
                                }
                            }
                        }
                        .adBox {
                            .ad {
                                border-radius: 12 * 2rpx;
                                border: 2rpx solid #e5e7eb;
                                padding: 5 * 2rpx 16 * 2rpx;
                                padding-bottom: 15 * 2rpx;
                                text-align: left;
                                .row:not(.cg) {
                                    color: #a1824a;
                                    &.row {
                                        margin-top: 5 * 2rpx;
                                        span {
                                            font-weight: bold;
                                        }
                                    }
                                }
                            }
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
