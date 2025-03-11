<!--  -->
<!--  -->
<template>
    <div class="rechargePage page bg-gray-100 min-h-screen">
        <!-- 确认支付卡片 -->
        <div
            class="payment-card mx-4 my-4 bg-white rounded-lg shadow-md overflow-hidden"
        >
            <!-- 标题栏 -->
            <div class="border-b border-gray-100 p-4">
                <div class="text-center font-medium text-gray-800">
                    确认支付
                </div>
            </div>

            <!-- 产品信息 -->
            <div class="p-6 flex flex-col items-center">
                <div class="mb-4">
                    <div class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="none"
                            version="1.1"
                            width="31"
                            height="32"
                            viewBox="0 0 31 32"
                        >
                            <defs>
                                <clipPath id="master_svg0_31_0091">
                                    <rect
                                        x="0"
                                        y="0"
                                        width="31"
                                        height="32"
                                        rx="0"
                                    />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#master_svg0_31_0091)">
                                <g transform="matrix(1,0,0,-1,0,65.375)">
                                    <g>
                                        <path
                                            d="M-0.5,60.6875Q-0.4375,62.375,0.6875,63.5Q1.8125,64.625,3.5,64.6875L13.5,64.6875L13.5,56.6875Q13.5,55.8125,14.0625,55.25Q14.625,54.6875,15.5,54.6875L23.5,54.6875L23.5,45.6875L10.5,45.6875Q8.8125,45.625,7.6875,44.5Q6.5625,43.375,6.5,41.6875L6.5,32.6875L3.5,32.6875Q1.8125,32.75,0.6875,33.875Q-0.4375,35,-0.5,36.6875L-0.5,60.6875ZM23.5,56.6875L15.5,56.6875L23.5,56.6875L15.5,56.6875L15.5,64.6875L23.5,56.6875ZM10.5,42.6875L12.5,42.6875L10.5,42.6875L12.5,42.6875Q14,42.625,15,41.6875Q15.9375,40.6875,16,39.1875Q15.9375,37.6875,15,36.6875Q14,35.75,12.5,35.6875L11.5,35.6875L11.5,33.6875Q11.4375,32.75,10.5,32.6875Q9.5625,32.75,9.5,33.6875L9.5,36.6875L9.5,41.6875Q9.5625,42.625,10.5,42.6875ZM12.5,37.6875Q13.875,37.8125,14,39.1875Q13.875,40.5625,12.5,40.6875L11.5,40.6875L11.5,37.6875L12.5,37.6875ZM18.5,42.6875L20.5,42.6875L18.5,42.6875L20.5,42.6875Q21.75,42.625,22.625,41.8125Q23.4375,40.9375,23.5,39.6875L23.5,35.6875Q23.4375,34.4375,22.625,33.5625Q21.75,32.75,20.5,32.6875L18.5,32.6875Q17.5625,32.75,17.5,33.6875L17.5,41.6875Q17.5625,42.625,18.5,42.6875ZM20.5,34.6875Q21.4375,34.75,21.5,35.6875L21.5,39.6875Q21.4375,40.625,20.5,40.6875L19.5,40.6875L19.5,34.6875L20.5,34.6875ZM25.5,41.6875Q25.5625,42.625,26.5,42.6875L29.5,42.6875Q30.4375,42.625,30.5,41.6875Q30.4375,40.75,29.5,40.6875L27.5,40.6875L27.5,38.6875L29.5,38.6875Q30.4375,38.625,30.5,37.6875Q30.4375,36.75,29.5,36.6875L27.5,36.6875L27.5,33.6875Q27.4375,32.75,26.5,32.6875Q25.5625,32.75,25.5,33.6875L25.5,37.6875L25.5,41.6875Z"
                                            fill="#4F46E5"
                                            fill-opacity="1"
                                            style="mix-blend-mode: passthrough"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="text-center mb-1 text-gray-800 font-medium">
                    导出简历 PDF
                </div>
                <div class="text-center text-sm text-gray-600 mb-4">
                    支付后可立即下载简历的 PDF 文件
                </div>

                <div class="text-blue-500 text-xl font-medium mb-6">
                    ¥ {{ pickItem.curPrice }}
                </div>

                <!-- 服务说明 -->
                <div class="w-full mb-6">
                    <div class="text-sm text-gray-700 mb-2">服务说明</div>
                    <div class="flex items-start mb-2">
                        <div class="icon mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="none"
                                version="1.1"
                                width="13.5625"
                                height="14"
                                viewBox="0 0 13.5625 14"
                            >
                                <defs>
                                    <clipPath id="master_svg0_31_0096">
                                        <rect
                                            x="0"
                                            y="0"
                                            width="13.5625"
                                            height="14"
                                            rx="0"
                                        />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#master_svg0_31_0096)">
                                    <g
                                        transform="matrix(1,0,0,-1,0,28.6015625)"
                                    >
                                        <g>
                                            <path
                                                d="M-0.21875,26.55078125Q-0.1914062,27.289081250000002,0.30078099999999997,27.78128125Q0.79297,28.27348125,1.53125,28.30078125L5.90625,28.30078125L5.90625,24.80078125Q5.90625,24.41798125,6.15234,24.171871250000002Q6.39844,23.92578125,6.78125,23.92578125L10.28125,23.92578125L10.28125,19.98828125L4.59375,19.98828125Q3.8554700000000004,19.96094125,3.36328,19.46875125Q2.87109,18.97656125,2.84375,18.23828125L2.84375,14.30078125L1.53125,14.30078125Q0.79297,14.32812505,0.30078099999999997,14.82031225Q-0.1914062,15.31250125,-0.21875,16.05078125L-0.21875,26.55078125ZM10.28125,24.80078125L6.78125,24.80078125L10.28125,24.80078125L6.78125,24.80078125L6.78125,28.30078125L10.28125,24.80078125ZM4.59375,18.67578125L5.46875,18.67578125L4.59375,18.67578125L5.46875,18.67578125Q6.125,18.64844125,6.5625,18.23828125Q6.97266,17.80078125,7,17.14453125Q6.97266,16.48828125,6.5625,16.05078125Q6.125,15.64062125,5.46875,15.61328125L5.03125,15.61328125L5.03125,14.73828125Q5.00391,14.32812505,4.59375,14.30078125Q4.18359,14.32812505,4.15625,14.73828125L4.15625,16.05078125L4.15625,18.23828125Q4.18359,18.64844125,4.59375,18.67578125ZM5.46875,16.48828125Q6.07031,16.54297125,6.125,17.14453125Q6.07031,17.74609125,5.46875,17.80078125L5.03125,17.80078125L5.03125,16.48828125L5.46875,16.48828125ZM8.09375,18.67578125L8.96875,18.67578125L8.09375,18.67578125L8.96875,18.67578125Q9.51563,18.64844125,9.89845,18.29297125Q10.25395,17.91016125,10.28125,17.36328125L10.28125,15.61328125Q10.25395,15.06640625,9.89845,14.68359325Q9.51563,14.32812505,8.96875,14.30078125L8.09375,14.30078125Q7.68359,14.32812505,7.65625,14.73828125L7.65625,18.23828125Q7.68359,18.64844125,8.09375,18.67578125ZM8.96875,15.17578125Q9.37891,15.20312525,9.40625,15.61328125L9.40625,17.36328125Q9.37891,17.77344125,8.96875,17.80078125L8.53125,17.80078125L8.53125,15.17578125L8.96875,15.17578125ZM11.15625,18.23828125Q11.18355,18.64844125,11.59375,18.67578125L12.90625,18.67578125Q13.31645,18.64844125,13.34375,18.23828125Q13.31645,17.82812125,12.90625,17.80078125L12.03125,17.80078125L12.03125,16.92578125L12.90625,16.92578125Q13.31645,16.89844125,13.34375,16.48828125Q13.31645,16.07812125,12.90625,16.05078125L12.03125,16.05078125L12.03125,14.73828125Q12.00395,14.32812505,11.59375,14.30078125Q11.18355,14.32812505,11.15625,14.73828125L11.15625,16.48828125L11.15625,18.23828125Z"
                                                fill="#4F46E5"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="text-sm text-gray-600">
                            支持导出简历的 PDF 格式简历
                        </div>
                    </div>
                    <div class="flex items-start mb-2">
                        <div class="icon mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="none"
                                version="1.1"
                                width="13.859375"
                                height="14"
                                viewBox="0 0 13.859375 14"
                            >
                                <defs>
                                    <clipPath id="master_svg0_31_0101">
                                        <rect
                                            x="0"
                                            y="0"
                                            width="13.859375"
                                            height="14"
                                            rx="0"
                                        />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#master_svg0_31_0101)">
                                    <g
                                        transform="matrix(1,0,0,-1,0,28.6015625)"
                                    >
                                        <g>
                                            <path
                                                d="M12.834240625,27.699181250000002Q12.342240625,28.164081250000002,11.740840625,28.164081250000002Q11.139440625,28.164081250000002,10.647340625,27.699181250000002L9.827290625,26.87888125L12.506240625,24.19922125L13.326340625,25.01948125Q13.791040625,25.511681250000002,13.791040625,26.11328125Q13.791040625,26.714881249999998,13.326340625,27.20698125L12.834240625,27.699181250000002ZM4.633440625,21.68359125Q4.387420625,21.43750125,4.278070625,21.08203125L3.457990625,18.67578125Q3.348650625,18.29297125,3.622010625,17.99219125Q3.922700625,17.71875125,4.305410625,17.82812125L6.738320625,18.64844125Q7.066350625,18.75781125,7.312370625,19.00390125L11.904840625,23.59765125L9.225900625,26.277381249999998L4.633440625,21.68359125ZM2.555900625,26.55078125Q1.435120625,26.52348125,0.697049625,25.78518125Q-0.041023375,25.04688125,-0.068359375,23.92578125L-0.068359375,16.92578125Q-0.041023375,15.80469125,0.697049625,15.06640625Q1.435120625,14.32812505,2.555900625,14.30078125L9.553930625,14.30078125Q10.674740625,14.32812505,11.412740625,15.06640625Q12.150840625,15.80469125,12.178140625,16.92578125L12.178140625,19.55078125Q12.178140625,19.93359125,11.932140625,20.17969125Q11.686140625,20.42578125,11.303440625,20.42578125Q10.920740625,20.42578125,10.674740625,20.17969125Q10.428640625,19.93359125,10.428640625,19.55078125L10.428640625,16.92578125Q10.428640625,16.54297125,10.182640625,16.29687125Q9.936640625,16.05078125,9.553930625,16.05078125L2.555900625,16.05078125Q2.173200625,16.05078125,1.927170625,16.29687125Q1.681150625,16.54297125,1.681150625,16.92578125L1.681150625,23.92578125Q1.681150625,24.30858125,1.927170625,24.55468125Q2.173200625,24.80078125,2.555900625,24.80078125L5.180160625,24.80078125Q5.562870625,24.80078125,5.808890625,25.04688125Q6.054910625,25.29298125,6.054910625,25.67578125Q6.054910625,26.05858125,5.808890625,26.30468125Q5.562870625,26.55078125,5.180160625,26.55078125L2.555900625,26.55078125Z"
                                                fill="#4F46E5"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="text-sm text-gray-600">
                            简历模板完全无格式，可直接定制样式
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="icon mr-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="none"
                                version="1.1"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                            >
                                <defs>
                                    <clipPath id="master_svg0_31_0106">
                                        <rect
                                            x="0"
                                            y="0"
                                            width="14"
                                            height="14"
                                            rx="0"
                                        />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#master_svg0_31_0106)">
                                    <g
                                        transform="matrix(1,0,0,-1,0,28.6015625)"
                                    >
                                        <g>
                                            <path
                                                d="M7.875,27.42578125Q7.875,27.80858125,7.62891,28.05468125Q7.38281,28.30078125,7,28.30078125Q6.61719,28.30078125,6.37109,28.05468125Q6.125,27.80858125,6.125,27.42578125L6.125,20.78125125L4.12891,22.804691249999998Q3.85547,23.05078125,3.5,23.05078125Q3.14453,23.05078125,2.87109,22.804691249999998Q2.625,22.53125125,2.625,22.17578125Q2.625,21.82031125,2.87109,21.54687125L6.37109,18.04687125Q6.64453,17.80078125,7,17.80078125Q7.35547,17.80078125,7.62891,18.04687125L11.1289,21.54687125Q11.375,21.82031125,11.375,22.17578125Q11.375,22.53125125,11.1289,22.804691249999998Q10.8555,23.05078125,10.5,23.05078125Q10.1445,23.05078125,9.87109,22.804691249999998L7.875,20.78125125L7.875,27.42578125ZM1.75,18.67578125Q1.01172,18.64844125,0.519531,18.15625125Q0.0273438,17.66406125,0,16.92578125L0,16.05078125Q0.0273438,15.31250125,0.519531,14.82031225Q1.01172,14.32812505,1.75,14.30078125L12.25,14.30078125Q12.9883,14.32812505,13.4805,14.82031225Q13.9727,15.31250125,14,16.05078125L14,16.92578125Q13.9727,17.66406125,13.4805,18.15625125Q12.9883,18.64844125,12.25,18.67578125L9.48828,18.67578125L8.23047,17.44531125Q7.68359,16.92578125,7,16.92578125Q6.28906,16.92578125,5.76953,17.44531125L4.53906,18.67578125L1.75,18.67578125ZM11.8125,17.14453125Q12.4141,17.08984125,12.4688,16.48828125Q12.4141,15.88672125,11.8125,15.83203125Q11.2109,15.88672125,11.1562,16.48828125Q11.2109,17.08984125,11.8125,17.14453125Z"
                                                fill="#4F46E5"
                                                fill-opacity="1"
                                                style="
                                                    mix-blend-mode: passthrough;
                                                "
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="text-sm text-gray-600">
                            支持多次下载，编辑简历继续有效果
                        </div>
                    </div>
                </div>

                <!-- 价格信息 -->
                <div class="w-full border-t border-gray-100 pt-4 mb-4">
                    <div class="flex justify-between mb-2">
                        <span class="text-sm text-gray-600">商品金额</span>
                        <span class="text-sm text-gray-800"
                            >¥{{ pickItem.curPrice }}</span
                        >
                    </div>
                    <!-- <div class="flex justify-between">
                        <span class="text-sm text-gray-600">优惠金额</span>
                        <span class="text-sm text-gray-800">-¥0.0</span>
                    </div> -->
                </div>

                <!-- 支付金额 -->
                <div class="w-full flex justify-between mb-6">
                    <span class="text-sm text-gray-700">实付金额</span>
                    <span class="text-blue-500 font-medium"
                        >¥{{ pickItem.curPrice }}</span
                    >
                </div>

                <!-- 支付按钮 -->
                <button
                    class="w-full bg-blue-500 text-white rounded-md font-medium"
                    @click="clickBtn"
                >
                    确认支付
                </button>

                <div
                    @click="goBack"
                    class="cancle flex justify-center mt-4 text-xs text-gray-600 hover:text-gray-900"
                >
                    取消支付
                </div>
            </div>
        </div>
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
    const list = ref<any>([
        // {
        //     pdName: "1000",
        //     curPrice: "免费",
        //     oriPrice: "",
        //     coffeeAmount: 1000,
        //     pdIntroduc: "登录网页版获得1000知识豆",
        //     isPick: true
        // },
        // {
        //     pdName: "500",
        //     curPrice: "免费",
        //     oriPrice: "",
        //     coffeeAmount: 500,
        //     pdIntroduc: "邀请好友得500知识豆",
        //     isPick: false
        // }
    ]);
    if (!userStore.userInfo?.accInfo?.showFlag || true) {
        list.value = [
            // {
            //     pdName: "500",
            //     curPrice: "免费",
            //     oriPrice: "",
            //     coffeeAmount: 500,
            //     pdIntroduc: "邀请好友得500知识豆",
            //     isPick: true
            // }
        ];
    }
    const goBack = () => {
        back();
    };
    const getProductList = async () => {
        const res = await service.getJlProduct({ productType: 1 });
        console.log(res);
        if (res.code == 0) {
            list.value = [...list.value, ...(res.data as [])].map((v, i) => {
                return {
                    ...v,
                    isPick: i == 0 //v.isPick || false
                };
            });
            pickItem.value = list.value.filter((v: any) => v.isPick)[0];
        }
    };

    const pickItem = ref<any>({});
    if (list.value.length > 0)
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
    const jlId = ref("");
    const tempName = ref("");
    onLoad((op: any) => {
        query.value = op;
        jlId.value = op.jlId;
        tempName.value = op.tempName;
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
        // getCfAmout();
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
                resumeRecordId: jlId.value,
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
                        com.onMsg(async (e: any) => {
                            if (e.callPayRst) {
                                com.cs(e.callPayRst);
                                if (e.callPayRst.resultCode == "6001") {
                                    toast("取消支付");
                                } else if (e.callPayRst.resultCode == "9000") {
                                    toast("支付成功");
                                    const res = await service.getPdfSrc({
                                        uid: userStore.userInfo.uid,
                                        tempName: tempName.value,
                                        resumeRecordId: jlId.value
                                    });
                                    if (res.code == 0) {
                                        let downloadPdfUrl =
                                            res.data.downloadPdfUrl;
                                        com.copyMsg(
                                            downloadPdfUrl,
                                            true,
                                            "下载链接已复制"
                                        );
                                        com.setItem("payRefresh", true);
                                        setTimeout(() => {
                                            goBack();
                                        }, 1000);
                                        // push({
                                        //     url:
                                        //         "/pages/tjwx/viewPdf?pdf_url=" +
                                        //         downloadPdfUrl
                                        // });
                                    }
                                    // getCfAmout();
                                    // setTimeout(() => {
                                    //     getCfAmout();
                                    // }, 3000);
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
<style lang="scss" scoped></style>
<style lang="scss" scoped>
    .rechargePage {
        @apply bg-gray-100;
    }

    .payment-card {
        @apply bg-white rounded-lg shadow-sm max-w-md mx-auto;
    }

    /* 自定义图标样式 */
    .iconfont {
        font-family: "iconfont" !important;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-pdf:before {
        content: "\e6dd"; /* 使用PDF图标的Unicode */
        @apply text-blue-600 text-4xl;
    }

    .icon-check:before {
        content: "\e645"; /* 使用对勾图标的Unicode */
        @apply text-blue-600;
    }

    /* 确保按钮有正确的颜色和过渡效果 */
    button {
        @apply transition duration-200;
    }

    button:active {
        @apply bg-blue-600;
    }
</style>
