<!--  -->
<template>
    <div class="editPage">
        <div class="person" v-if="showKey == 'person'">
            <div class="header center mt10" @click="selectImg('')">
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
            <div class="item" v-for="(item, index) in fileList" :key="index">
                <image :src="item.url" class="resImg" mode="scaleToFill" />
            </div>
            <!-- <weditor /> -->
            <div class="fitem" v-for="(item, index) in pform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val" v-if="item.type == 'input'">
                        <div class="inputBox">
                            <input
                                class="myInput"
                                v-model="item.val"
                                :placeholder="item.placeholder"
                                placeholder-class="input-placeholder"
                                @input="inputChange($event, item)"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'date'">
                        <div class="inputBox dateBox" style="padding: 0">
                            <el-date-picker
                                class="myInput"
                                v-model="item.val"
                                value-format="YYYY.MM.DD"
                                type="date"
                                placeholder="选择日期"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'options'">
                        <div
                            class="selectBox inputBox vcenter"
                            style="padding: 0"
                        >
                            <!-- <selectPick
                                :options="[item?.op]"
                                :placehodle="item.placeholder"
                                @confirm="selectChange($event, item)"
                            /> -->
                            <el-select
                                class="myInput"
                                v-model="item.val"
                                clearable
                                :placeholder="item.placeholder"
                            >
                                <el-option
                                    v-for="item in item?.op"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'editor'">
                        <div class="editorBox">
                            <weditor
                                ref="editorRef"
                                @editorChange="editorChange($event, item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="person" v-if="showKey == 'experience'">
            <div
                class="msg mt10"
                style="
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 42rpx;
                    letter-spacing: 0px;
                    color: #6b7280;
                "
            >
                从最近一份工作经历写起
            </div>
            <div class="fitem" v-for="(item, index) in exform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val" v-if="item.type == 'input'">
                        <div class="inputBox">
                            <input
                                class="myInput"
                                v-model="item.val"
                                :placeholder="item.placeholder"
                                placeholder-class="input-placeholder"
                                @input="inputChange($event, item)"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'date'">
                        <div class="inputBox dateBox" style="padding: 0">
                            <el-date-picker
                                class="myInput"
                                value-format="YYYY.MM.DD"
                                v-model="item.val"
                                type="date"
                                placeholder="选择日期"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'options'">
                        <div class="selectBox inputBox vcenter">
                            <!-- <selectPick
                                :options="[item?.op]"
                                :placehodle="item.placeholder"
                                @confirm="selectChange($event, item)"
                            /> -->
                            <el-select
                                class="myInput"
                                v-model="item.val"
                                clearable
                                :placeholder="item.placeholder"
                            >
                                <el-option
                                    v-for="item in item?.op"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'editor'">
                        <div class="editorBox">
                            <weditor
                                ref="editorRef"
                                @editorChange="editorChange($event, item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="person" v-if="showKey == 'education'">
            <div
                class="msg mt10"
                style="
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 42rpx;
                    letter-spacing: 0px;
                    color: #6b7280;
                "
            >
                从最高学历写起
            </div>
            <div class="fitem" v-for="(item, index) in eform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val" v-if="item.type == 'input'">
                        <div class="inputBox">
                            <input
                                class="myInput"
                                v-model="item.val"
                                :placeholder="item.placeholder"
                                placeholder-class="input-placeholder"
                                @input="inputChange($event, item)"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'date'">
                        <div class="inputBox dateBox" style="padding: 0">
                            <el-date-picker
                                class="myInput"
                                value-format="YYYY.MM.DD"
                                v-model="item.val"
                                type="date"
                                placeholder="选择日期"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'options'">
                        <div class="selectBox inputBox vcenter">
                            <!-- <selectPick
                                :options="[item?.op]"
                                :placehodle="item.placeholder"
                                @confirm="selectChange($event, item)"
                            /> -->
                            <el-select
                                class="myInput"
                                v-model="item.val"
                                clearable
                                :placeholder="item.placeholder"
                            >
                                <el-option
                                    v-for="item in item?.op"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'editor'">
                        <div class="editorBox">
                            <weditor
                                ref="editorRef"
                                @editorChange="editorChange($event, item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="person" v-if="showKey == 'projects'">
            <!-- <div
                class="msg mt10"
                style="
                    font-family: Roboto;
                    font-size: 28rpx;
                    font-weight: normal;
                    line-height: 42rpx;
                    letter-spacing: 0px;
                    color: #6b7280;
                "
            >
                从最高学历写起
            </div> -->
            <div class="fitem" v-for="(item, index) in prform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val" v-if="item.type == 'input'">
                        <div class="inputBox">
                            <input
                                class="myInput"
                                v-model="item.val"
                                :placeholder="item.placeholder"
                                placeholder-class="input-placeholder"
                                @input="inputChange($event, item)"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'date'">
                        <div class="inputBox dateBox" style="padding: 0">
                            <el-date-picker
                                class="myInput"
                                value-format="YYYY.MM.DD"
                                v-model="item.val"
                                type="date"
                                placeholder="选择日期"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'options'">
                        <div class="selectBox inputBox vcenter">
                            <!-- <selectPick
                                :options="[item?.op]"
                                :placehodle="item.placeholder"
                                @confirm="selectChange($event, item)"
                            /> -->
                            <el-select
                                class="myInput"
                                v-model="item.val"
                                clearable
                                :placeholder="item.placeholder"
                            >
                                <el-option
                                    v-for="item in item?.op"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'editor'">
                        <div class="editorBox">
                            <weditor
                                ref="editorRef"
                                @editorChange="editorChange($event, item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="person" v-if="showKey == 'skills'">
            <div class="fitem" v-for="(item, index) in sform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val" v-if="item.type == 'input'">
                        <div class="inputBox">
                            <input
                                class="myInput"
                                v-model="item.val"
                                :placeholder="item.placeholder"
                                placeholder-class="input-placeholder"
                                @input="inputChange($event, item)"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'date'">
                        <div class="inputBox dateBox" style="padding: 0">
                            <el-date-picker
                                class="myInput"
                                value-format="YYYY.MM.DD"
                                v-model="item.val"
                                type="date"
                                placeholder="选择日期"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'options'">
                        <div class="selectBox inputBox vcenter">
                            <!-- <selectPick
                                :options="[item?.op]"
                                :placehodle="item.placeholder"
                                @confirm="selectChange($event, item)"
                            /> -->
                            <el-select
                                class="myInput"
                                v-model="item.val"
                                clearable
                                :placeholder="item.placeholder"
                            >
                                <el-option
                                    v-for="item in item?.op"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'editor'">
                        <div class="editorBox">
                            <weditor
                                ref="editorRef"
                                @editorChange="editorChange($event, item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="person" v-if="showKey == 'certification'">
            <div class="fitem" v-for="(item, index) in cform" :key="index">
                <div class="row">
                    <div class="label">{{ item.label }}</div>
                    <div class="val" v-if="item.type == 'input'">
                        <div class="inputBox">
                            <input
                                class="myInput"
                                v-model="item.val"
                                :placeholder="item.placeholder"
                                placeholder-class="input-placeholder"
                                @input="inputChange($event, item)"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'date'">
                        <div class="inputBox dateBox" style="padding: 0">
                            <el-date-picker
                                class="myInput"
                                value-format="YYYY.MM.DD"
                                v-model="item.val"
                                type="date"
                                placeholder="选择日期"
                            />
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'options'">
                        <div class="selectBox inputBox vcenter">
                            <!-- <selectPick
                                :options="[item?.op]"
                                :placehodle="item.placeholder"
                                @confirm="selectChange($event, item)"
                            /> -->
                            <el-select
                                class="myInput"
                                v-model="item.val"
                                clearable
                                :placeholder="item.placeholder"
                            >
                                <el-option
                                    v-for="item in item?.op"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <div class="val" v-if="item.type == 'editor'">
                        <div class="editorBox">
                            <weditor
                                ref="editorRef"
                                @editorChange="editorChange($event, item)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="btn mt50"
            @click="saveEdit"
            style="
                width: 686rpx;
                height: 88rpx;
                border-radius: 8rpx;
                opacity: 1;
                background: #4f46e5;
                font-family: Roboto;
                font-size: 32rpx;
                font-weight: 500;
                line-height: 88rpx;
                text-align: center;
                letter-spacing: 0px;
                color: #ffffff;
            "
        >
            保存
        </div>
    </div>
</template>

<script setup lang="ts">
    import selectPick from "@/components/selectPick.vue";
    import weditor from "@/components/editor.vue";
    import { service } from "@/http/service";
    import { toast } from "@/common/toast";
    import { useRouter } from "@/common/route";
    import { useUserStore } from "@/store/user-store";
    import { useAppStore } from "@/store/app-store";
    import { http, ajax } from "@/http/http";
    import { com, op } from "@/common/com";
    import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
    const appStore = useAppStore();
    const userStore = useUserStore();
    const { push, replace, back } = useRouter();
    const showKey = ref("experience");
    const id = ref();
    const jlId = ref();
    const pform = ref(op.$op("pform"));
    const eform = ref(op.$op("eform"));
    const exform = ref(op.$op("exform"));
    const prform = ref(op.$op("prform"));
    const sform = ref(op.$op("sform"));
    const cform = ref(op.$op("cform"));
    const editorChange = (e, item) => {
        console.log(item);
        console.log(e);
        item.val = e.detail.html;
        item.text = e.detail.text;
    };
    const inputChange = (e, item) => {
        console.log(item);
        console.log(e.detail);
    };
    const selectChange = (e, item) => {
        console.log(item);
        console.log(e);
        item.val = e.value;
    };
    const editorRef = ref();
    const changeFormDataToSeverData = (formData) => {
        let obj = {};
        for (let v of formData) {
            obj[v.key] = v.val;
        }
        return obj;
    };
    const saveEdit = async () => {
        console.log("saveEdit");
        let obj = com.getItem("jlObj");
        obj.experienceList = obj.experienceList || [];
        obj.educationList = obj.educationList || [];
        obj.projectsList = obj.projectsList || [];
        obj.skillsList = obj.skillsList || [];
        obj.certificationList = obj.certificationList || [];
        let res = {};
        if (showKey.value == "person") {
            console.log("个人信息");
            console.log(pform.value);
            obj.personItem = pform.value;
            res = await service.savePersonInfo({
                uid: userStore.userInfo.uid,
                resumeRecordId: obj.id,
                person: changeFormDataToSeverData(pform.value)
            });
            // com.setItem("pform", pform.value);
        } else if (showKey.value == "education") {
            console.log("教育经历");
            console.log(eform.value);
            com.setItem("eform", eform.value);
            let params = changeFormDataToSeverData(eform.value);
            if (id.value && id.value != 0) {
                params.id = id.value;
            }
            res = await service.saveEducation({
                uid: userStore.userInfo.uid,
                resumeRecordId: obj.id,
                education: params
            });
            if (res.code == 0) {
                id.value = res.data.id;
            }
            uni.hideLoading();

            let flag = true;
            if (obj.educationList.length) {
                for (let v of obj.educationList) {
                    if (v.id == id.value) {
                        flag = false;
                        v.list = eform.value;
                    }
                }
            }
            if (flag)
                obj.educationList.push({
                    id: id.value,
                    list: eform.value
                });
        } else if (showKey.value == "experience") {
            console.log("工作经历");
            console.log(exform.value);
            let params = changeFormDataToSeverData(exform.value);
            if (id.value && id.value != 0) {
                params.id = id.value;
            }
            res = await service.saveExperience({
                uid: userStore.userInfo.uid,
                resumeRecordId: obj.id,
                experience: params
            });
            if (res.code == 0) {
                id.value = res.data.id;
            }
            uni.hideLoading();
            let flag = true;
            if (obj.experienceList.length) {
                for (let v of obj.experienceList) {
                    if (v.id == id.value) {
                        flag = false;
                        v.list = exform.value;
                    }
                }
            }
            if (flag)
                obj.experienceList.push({
                    id: id.value,
                    list: exform.value
                });
        } else if (showKey.value == "projects") {
            console.log("项目经历");
            console.log(prform.value);
            // com.setItem("prform", prform.value);
            let params = changeFormDataToSeverData(prform.value);
            if (id.value && id.value != 0) {
                params.id = id.value;
            }
            res = await service.saveProjects({
                uid: userStore.userInfo.uid,
                resumeRecordId: obj.id,
                project: params
            });
            if (res.code == 0) {
                id.value = res.data.id;
            }
            uni.hideLoading();
            let flag = true;
            if (obj.projectsList.length) {
                for (let v of obj.projectsList) {
                    if (v.id == id.value) {
                        flag = false;
                        v.list = prform.value;
                    }
                }
            }
            if (flag)
                obj.projectsList.push({
                    id: id.value,
                    list: prform.value
                });
        } else if (showKey.value == "skills") {
            console.log("技能");
            console.log(sform.value);
            com.setItem("sform", sform.value);
            let params = changeFormDataToSeverData(sform.value);
            if (id.value && id.value != 0) {
                params.id = id.value;
            }
            res = await service.saveSkills({
                uid: userStore.userInfo.uid,
                resumeRecordId: obj.id,
                skills: params
            });
            if (res.code == 0) {
                id.value = res.data.id;
            }
            uni.hideLoading();
            let flag = true;
            if (obj.skillsList.length) {
                for (let v of obj.skillsList) {
                    if (v.id == id.value) {
                        flag = false;
                        v.list = sform.value;
                    }
                }
            }
            if (flag)
                obj.skillsList.push({
                    id: id.value,
                    list: sform.value
                });
        } else if (showKey.value == "certification") {
            console.log("证书");
            console.log(cform.value);
            com.setItem("cform", cform.value);

            let params = changeFormDataToSeverData(cform.value);
            if (id.value && id.value != 0) {
                params.id = id.value;
            }
            res = await service.saveCertifications({
                uid: userStore.userInfo.uid,
                resumeRecordId: obj.id,
                certifications: params
            });
            if (res.code == 0) {
                id.value = res.data.id;
            }
            uni.hideLoading();
            let flag = true;
            if (obj.certificationList.length) {
                for (let v of obj.certificationList) {
                    if (v.id == id.value) {
                        flag = false;
                        v.list = cform.value;
                    }
                }
            }
            if (flag)
                obj.certificationList.push({
                    id: id.value,
                    list: cform.value
                });
        }
        console.log(obj);
        com.setItem("jlObj", obj);
        back();
    };
    interface Config {
        BASE_URL: string;
    }
    const config: Config | undefined = inject("$config");
    const fileList = ref<any>([
        // {
        //     url: "https://cdn.hentre.com/public/images/antfin/activity/bg_popup_tmym2.jpg",
        //     name: ""
        // }
    ]);
    const selectImg = (item: string = "") => {
        console.log(item);
        try {
            // uni.showLoading();
            com.onMsg(async (e: any) => {
                if (e.src) {
                    // const regex = /[^/]+$/;
                    // const result =
                    //     e.path.match(regex)[0].split(".")[0] + e.extension;
                    // const resp = await http.upload<{
                    //     code: Number;
                    //     data: string;
                    // }>(
                    //     "/api/acc/integral/fileUpload?imageName=" + result,
                    //     e.path,
                    //     {}
                    // );
                    // com.cs(JSON.stringify(resp));
                    // console.log(resp);
                    // console.log(config!.BASE_URL + "/api/image/" + resp.data);
                    fileList.value.push({
                        url:
                            config!.BASE_URL +
                            "/api/image/" +
                            JSON.parse(e.src).data,
                        name: JSON.parse(e.src).data
                    });
                    com.cs(JSON.stringify(fileList.value));
                    console.log(fileList.value);
                }
            });
            com.sendMsg("cImg", {
                token: uni.getStorageSync("local_token")
            });
            return;
            my.chooseImage({
                sourceType: ["album"],
                count: 1,
                sizeType: ["original"],
                success: async (res: any) => {
                    com.cs(res);
                    console.log(res);
                    console.log(JSON.stringify(res));
                    if (res.tempFiles && (res.tempFiles as File[]).length > 0) {
                        if ((res.tempFiles as File[])[0].size > 5242880) {
                            // 300k=307200   1m=1048576    5m=5242880 tempFilePaths
                            uni.showToast({
                                title: "请将图片压缩至5m以内，再上传"
                            });
                            return;
                        }
                        try {
                            com.onMsg((e: any) => {
                                if (e.fileType) {
                                    com.cs(e.fileType);
                                }
                            });
                            com.sendMsg("fileType", {
                                path: res.tempFilePaths[0]
                            });
                            my.detectFileType({
                                filePath: res.tempFilePaths[0],
                                success: async (re: any) => {
                                    console.log(re);
                                    com.cs(re);
                                    const regex = /[^/]+$/;
                                    const result =
                                        res.tempFilePaths[0]
                                            .match(regex)[0]
                                            .split(".")[0] + re;
                                    com.cs(result);
                                    const resp = await http.upload<{
                                        code: Number;
                                        data: string;
                                    }>(
                                        "/api/acc/integral/fileUpload?imageName=" +
                                            result,
                                        res.apFilePaths[0],
                                        res.tempFiles[0]
                                    );
                                    com.cs(JSON.stringify(resp));
                                    console.log(resp);
                                    console.log(
                                        config!.BASE_URL +
                                            "/api/image/" +
                                            resp.data
                                    );
                                    fileList.value.push({
                                        url:
                                            config!.BASE_URL +
                                            "/api/image/" +
                                            resp.data,
                                        name: resp.data
                                    });
                                    console.log(fileList.value);
                                },
                                fail(err: any) {
                                    console.log(err);
                                    com.cs("deteError" + JSON.stringify(err));
                                }
                            });
                        } catch (error) {
                            com.cs(
                                "detectFileTypeError" + JSON.stringify(error)
                            );
                        }

                        return;
                        uni.compressImage({
                            src: res.tempFilePaths[0],
                            // compressLevel: 1,
                            success: async (data) => {
                                console.log(data);
                                if (item == "") {
                                    imgItem.value.src = data.tempFilePath;
                                }

                                uni.showLoading({
                                    title: "图片上传中..."
                                });
                                try {
                                    const res = await http.upload<{
                                        code: Number;
                                        data: string;
                                    }>(
                                        "/api/acc/integral/fileUpload",
                                        data.tempFilePath
                                    );
                                    console.log(res);
                                    if (res.code == 0) {
                                        imgItem.value.receiveSrc =
                                            getConfig().imgBasicUrl + res.data;
                                        // formData.value.imageId = res.data;
                                    } else {
                                        console.warn(res);
                                    }
                                } catch (error) {
                                    console.warn(error);
                                }
                            }
                        });
                    } else {
                        com.cs("*********");
                    }
                    uni.hideLoading();
                },
                fail: (error: any) => {
                    com.cs(JSON.stringify(error));
                    uni.hideLoading();
                    my.showToast({
                        content: JSON.stringify(error) // 文字内容
                    });

                    console.log(JSON.stringify(error));
                    // if (error.error == 2001 || error.error == 11) {
                    //     uni.showToast({
                    //         title: "当前用户已拒绝该项授权", // 文字内容
                    //         icon: "none"
                    //     });
                    // } else if (error.error == 2002) {
                    //     // user does not allow authorization
                    //     // isPhoto_Per.value= true
                    //     // my.alert({ content: "打开失败：当前用户已拒绝该项授权，如需打开请点击右上角菜单中的设置选项重新打开,或者前往支付宝app-点击【我的】 - 右上角设置 - 【隐私】 - 【系统权限管理】，在里面看看相机、相册权限"});
                    // }
                }
            });
        } catch (error) {
            console.log(error);
            com.cs(JSON.stringify(error));
            uni.hideLoading();
        }
    };
    onLoad((op) => {
        //
        console.log(op);
        if (op?.key) {
            showKey.value = op.key;
        }
        let obj = com.getItem("jlObj");
        console.log(obj);
        jlId.value = com.getItem("jlObj").id;
        id.value = op?.id || "";
        if (op?.key == "person") {
            let pformAdd = obj.personItem;

            console.log(pformAdd);
            if (pformAdd) {
                for (let v of pform.value) {
                    for (let vv of pformAdd) {
                        if (v.label == vv.label) {
                            v.val = vv.val;
                            if (v.type == "editor") {
                                setTimeout(() => {
                                    nextTick(() => {
                                        // console.log(editorRef.value);
                                        // console.log(editorRef.value[0]);
                                        editorRef.value[0].setContent(vv.val);
                                    });
                                }, 1000);
                            }
                        }
                    }
                }
            }
        } else if (op.key == "experience") {
            if (obj.experienceList) {
                for (let v of obj.experienceList) {
                    if (v.id == id.value) {
                        exform.value = v.list;
                    }
                }
                console.log(exform.value.find((v) => v.type == "editor").val);
                setTimeout(() => {
                    nextTick(() => {
                        editorRef.value[0].setContent(
                            exform.value.find((v) => v.type == "editor").val
                        );
                    });
                }, 1000);
            }
        } else if (op.key == "education") {
            if (obj.educationList) {
                for (let v of obj.educationList) {
                    if (v.id == id.value) {
                        eform.value = v.list;
                    }
                }
                console.log(eform.value.find((v) => v.type == "editor").val);
                setTimeout(() => {
                    nextTick(() => {
                        editorRef.value[0].setContent(
                            eform.value.find((v) => v.type == "editor").val
                        );
                    });
                }, 1000);
            }
        } else if (op.key == "projects") {
            if (obj.projectsList) {
                for (let v of obj.projectsList) {
                    if (v.id == id.value) {
                        prform.value = v.list;
                    }
                }
                console.log(prform.value.find((v) => v.type == "editor").val);
                setTimeout(() => {
                    nextTick(() => {
                        editorRef.value[0].setContent(
                            prform.value.find((v) => v.type == "editor").val
                        );
                    });
                }, 1000);
            }
        } else if (op.key == "skills") {
            if (obj.skillsList) {
                for (let v of obj.skillsList) {
                    if (v.id == id.value) {
                        sform.value = v.list;
                    }
                }
                console.log(sform.value.find((v) => v.type == "editor").val);
                setTimeout(() => {
                    nextTick(() => {
                        editorRef.value[0].setContent(
                            sform.value.find((v) => v.type == "editor").val
                        );
                    });
                }, 1000);
            }
        } else if (op.key == "certification") {
            if (obj.certificationList) {
                for (let v of obj.certificationList) {
                    if (v.id == id.value) {
                        cform.value = v.list;
                    }
                }
                console.log(cform.value.find((v) => v.type == "editor").val);
                setTimeout(() => {
                    nextTick(() => {
                        editorRef.value[0].setContent(
                            cform.value.find((v) => v.type == "editor").val
                        );
                    });
                }, 1000);
            }
        }
    });
</script>
<style lang="scss" scoped>
    .editPage {
        padding: 0 32rpx;
        padding-bottom: 30px;
        .person {
            .fitem {
                .row {
                    margin-top: 32rpx;
                    .label {
                        font-family: Roboto;
                        font-size: 28rpx;
                        font-weight: normal;
                        line-height: 40rpx;
                        letter-spacing: 0px;
                        color: #4b5563;
                    }
                    .val {
                        margin-top: 14rpx;
                        .inputBox {
                            width: 686rpx;
                            height: 96rpx;
                            line-height: 96rpx;
                            /* 自动布局 */
                            display: flex;
                            flex-direction: column;
                            padding: 0rpx 32rpx;
                            gap: 0rpx 20rpx;
                            flex-wrap: wrap;
                            align-content: flex-start;
                            border-radius: 16rpx;
                            opacity: 1;
                            background: rgba(79, 70, 229, 0.05);
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
    .editPage {
        .el-input__wrapper {
            box-shadow: none;
            background-color: #f6f6fe;
            input {
                width: 100% !important;
                height: 100% !important;
                border: none;
            }
        }
        .myInput {
            width: 100%;
            height: 100%;

            input {
                width: 100% !important;
                height: 100% !important;
                border: none;
            }
        }
    }
</style>
