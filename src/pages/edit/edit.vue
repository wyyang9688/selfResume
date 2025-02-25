<!--  -->
<template>
    <div class="editPage">
        <div class="person" v-if="showKey == 'person'">
            <div class="header center mt10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    version="1.1"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                >
                    <defs>
                        <clipPath id="master_svg0_26_361">
                            <rect x="0" y="0" width="80" height="80" rx="40" />
                        </clipPath>
                        <clipPath id="master_svg1_26_657">
                            <rect x="22" y="22" width="36" height="36" rx="0" />
                        </clipPath>
                    </defs>
                    <g clip-path="url(#master_svg0_26_361)">
                        <rect
                            x="0"
                            y="0"
                            width="80"
                            height="80"
                            rx="40"
                            fill="#4F46E5"
                            fill-opacity="0.10000000149011612"
                            style="mix-blend-mode: passthrough"
                        />
                        <g>
                            <rect
                                x="22"
                                y="20"
                                width="36"
                                height="40"
                                rx="0"
                                fill="#000000"
                                fill-opacity="0"
                                style="mix-blend-mode: passthrough"
                            />
                            <g clip-path="url(#master_svg1_26_657)">
                                <g transform="matrix(1,0,0,-1,0,117.546875)">
                                    <g>
                                        <path
                                            d="M50.0547,67.7734375Q48.8594,69.8125375,46.8203,71.0078375Q44.7812,72.2734375,42.25,72.2734375L37.75,72.2734375Q35.2188,72.2734375,33.1797,71.0078375Q31.14062,69.8125375,29.94531,67.7734375Q31.84375,65.6640575,34.375,64.4687475Q36.9766,63.2734375,40,63.2734375Q43.023399999999995,63.2734375,45.625,64.4687475Q48.1562,65.6640575,50.0547,67.7734375ZM22,76.7734375Q22.0703125,81.6953375,24.39062,85.7734375Q26.78125,89.8515375,31,92.3828375Q35.2891,94.7734375,40,94.7734375Q44.710899999999995,94.7734375,49,92.3828375Q53.2188,89.8515375,55.6094,85.7734375Q57.9297,81.6953375,58,76.7734375Q57.9297,71.8515375,55.6094,67.7734375Q53.2188,63.6953175,49,61.1640575Q44.710899999999995,58.7734375,40,58.7734375Q35.2891,58.7734375,31,61.1640575Q26.78125,63.6953175,24.39062,67.7734375Q22.0703125,71.8515375,22,76.7734375ZM40,75.6484375Q42.8828,75.7187375,44.3594,78.1796375Q45.7656,80.7109375,44.3594,83.2422375Q42.8828,85.7031375,40,85.7734375Q37.1172,85.7031375,35.6406,83.2422375Q34.2344,80.7109375,35.6406,78.1796375Q37.1172,75.7187375,40,75.6484375Z"
                                            fill="#4F46E5"
                                            fill-opacity="1"
                                            style="mix-blend-mode: passthrough"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <weditor />
            <div class="fitem" v-for="(item, index) in pform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val">
                        {{ item.val || item.placeholder }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import weditor from "@/components/editor.vue";
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
    const showKey = ref("person");
    const pform = ref([
        {
            label: "姓名",
            type: "input",
            val: "",
            placeholder: "请输入姓名"
        },
        {
            label: "性别",
            type: "input",
            val: "",
            placeholder: "请输入性别"
        },
        {
            label: "出生日期",
            type: "input",
            val: "",
            placeholder: "请输入出生日期"
        },
        {
            label: "联系电话",
            type: "input",
            val: "",
            placeholder: "请输入联系电话"
        },
        {
            label: "电子邮箱",
            type: "input",
            val: "",
            placeholder: "请输入电子邮箱"
        },
        {
            label: "期望职位",
            type: "input",
            val: "",
            placeholder: "请输入期望职位"
        },

        {
            label: "期望工作城市",
            type: "input",
            val: "",
            placeholder: "请输入期望工作城市"
        },
        {
            label: "薪资要求",
            type: "input",
            val: "",
            placeholder: "请输入薪资要求"
        },
        {
            label: "求职状态",
            type: "input",
            val: "",
            placeholder: "请输入求职状态"
        },

        {
            label: "政治面貌",
            type: "input",
            val: "",
            placeholder: "请输入政治面貌"
        },

        {
            label: "自我总结",
            type: "editor",
            val: "",
            placeholder: "请输入自我总结"
        }
    ]);
    onLoad((op) => {
        //
        console.log(op);
        if (op?.key) {
            showKey.value = op.key;
        }
    });
</script>
<style lang="scss" scoped></style>
