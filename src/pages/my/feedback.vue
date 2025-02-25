<!--  -->
<template>
    <div class="feedbackPage page">
        <div></div>
        <div class="title f32 center" style="padding-top: 40px">用户反馈</div>
        <div class="title f15 center mt10">欢迎与我们反馈你的建议或问题</div>
        <div class="stitle mt30">问题描述*</div>
        <div class="textBox mt10">
            <textarea
                v-model="feedTextarea"
                class="textarea sd bcg"
                placeholder-style="color:gray;font-size:14px;"
                placeholder="请输入问题描述以便我们提供更好的帮助，你的反馈将会是我们改进产品的动力！"
            />
        </div>
        <div class="stitle mt30">
            上传截图（选填）（{{ fileList.length }}/4）
        </div>
        <div class="uploadBox mt10">
            <div class="item" v-for="(item, index) in fileList" :key="index">
                <image :src="item.url" class="resImg" mode="scaleToFill" />
            </div>
            <div
                v-if="fileList.length < 4"
                class="add item center vcenter"
                @click="selectImg('')"
            >
                <up-icon name="plus" color="#dbdbdb" size="40"></up-icon>
            </div>
            <!-- <u-upload
                :fileList="fileList1"
                @afterRead="afterRead"
                @delete="deletePic"
                name="1"
                multiple
                :maxCount="4"
            ></u-upload> -->
        </div>
        <div class="btnGroup mt30">
            <div @click="submit" class="btn cbgg cw center sd bd">提交</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { com } from "@/common/com";
    import { toast } from "@/common/toast";
    import { getConfig } from "@/data/config";
    import { http, ajax } from "@/http/http";
    import { service } from "@/http/service";
    import { useUserStore } from "@/store/user-store";
    const userStore = useUserStore();
    // import useStore from "element-plus/es/components/table/src/store";
    onMounted(() => {
        //
    });
    const imgItem = ref({
        src: "",
        receiveSrc: ""
    });
    const feedTextarea = ref("");
    const fileList: any = ref([
        // {
        //     url: "https://cdn.hentre.com/public/images/antfin/activity/bg_popup_tmym2.jpg",
        //     name: ""
        // }
    ]);
    const submit = async () => {
        if (feedTextarea.value.length < 10) {
            toast("请输入反馈内容,最少十个字符");
            return;
        }
        let params = {
            proposal: {
                pn: userStore.userInfo.pn,
                images: fileList.value.map((v: any) => v.name),
                proposal: feedTextarea.value
            }
        };
        const res = await service.submitFeed(params);
        if (res.code == 0) {
            toast("提交成功");
            uni.navigateBack();
        }
    };
    const fileList1: any = [];
    const deletePic = (event: any) => {
        //   fileList1.value[event.name].splice(event.index, 1)
    };
    // 新增图片
    const afterRead = async (event: any) => {
        console.log(event);
        // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
        let lists: any = [].concat(event.file);
        let fileListLen = [`fileList${[event.name]}`].length;
        lists.map((item: any) => {
            [`fileList${[event.name]}`].push({
                ...item,
                status: "uploading",
                message: "上传中"
            });
        });
        for (let i = 0; i < lists.length; i++) {
            const result = await uploadFilePromise(lists[i].url);
            let item: any = [`fileList${[event.name]}`][fileListLen];
            [`fileList${[event.name]}` as any].splice(
                fileListLen,
                1,
                Object.assign(item, {
                    status: "success",
                    message: "",
                    url: result
                })
            );
            fileListLen++;
        }
    };
    interface Config {
        BASE_URL: string;
    }
    const config: Config | undefined = inject("$config");
    const uploadFilePromise = (url: any) => {
        return new Promise(async (resolve, reject) => {
            console.log(url);
            const res = await http.upload<{
                code: Number;
                data: string;
            }>("/api/acc/integral/fileUpload", url);
            console.log(res);
            console.log(config!.BASE_URL + "/api/image/" + res.data);
            if (res.code == 0) {
                resolve(config!.BASE_URL + "/api/image/" + res.data);
            }
            // let a = uni.uploadFile({
            //     url: "/api/acc/integral/fileUpload", // 仅为示例，非真实的接口地址
            //     filePath: url,
            //     name: "file",
            //     formData: {
            //         // user: "test"
            //     },
            //     success: (res: any) => {
            //         setTimeout(() => {
            //             resolve(res.data.data);
            //         }, 1000);
            //     }
            // });
        });
    };
    const changeFile = (event: any) => {
        console.log(event);
    };

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
</script>
<style lang="scss" scoped>
    .page {
        background-color: #fff;
        padding: 0 16 * 2rpx;

        .textBox {
            .textarea {
                width: 100%;
                border: 1px solid #ccc;
                border-radius: 10 * 2rpx;
                padding: 10 * 2rpx;
                box-sizing: border-box;
                font-size: 14px;
                line-height: 1.5;
                color: #333;
                background-color: #fff;
                resize: none;
            }
        }
        .uploadBox {
            display: flex;
            justify-content: flex-start;
            .item {
                width: 80 * 2rpx;
                height: 80 * 2rpx;
                margin-right: 10 * 2rpx;
                border: 1px solid #dbdbdb;
            }
            .add {
            }
        }
        .btnGroup {
            .btn {
                width: 100%;
                height: 40 * 2rpx;
                line-height: 40 * 2rpx;
                border-radius: 10 * 2rpx;
                color: #fff;
                text-align: center;
            }
        }
    }
</style>
