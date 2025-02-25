<template>
    <view class="homePage tabbarPage">
        <div id="docxBox"></div>
        <div>********2.6********</div>
        <div class="container">
            <iframe
                v-if="pdfUrl"
                id="myFrame"
                :src="pdfUrl"
                width="100%"
                height="100%"
            ></iframe>
        </div>
        <!-- <image class="logo" src="/static/logo.png" mode="'scaleToFill'" /> -->
        <!-- <view class="text-area">
            <text class="title" @click="counter.increment()">{{ title }}</text>
        </view> -->
        <!-- <div class="topTitle">AI提示词助手</div> -->
        <!-- <gc @login="onLogin"></gc>
        <div class="swiperBox" v-if="swiperList && swiperList.length">
            <up-swiper
                @click="clickAct"
                class="swiper"
                keyName="imgUrl"
                :list="swiperList"
                :indicator="swiperList.length > 1"
                indicatorMode="dot"
                :height="'246rpx'"
                circular
            ></up-swiper>
        </div> -->

        <tabbar />
    </view>
</template>

<script setup lang="ts">
    import tabbar from "@/components/tabbar.vue";
    import type BaseData from "@/http/http";
    import { onLoad, onUnload } from "@dcloudio/uni-app";
    import { onReachBottom, onShow } from "@dcloudio/uni-app";
    import { toast } from "@/common/toast";

    import { useUserStore } from "@/store/user-store";
    import { useRouter } from "@/common/route";
    import { getConfig } from "@/data/config";
    import { useAppStore } from "@/store/app-store";
    import { com } from "@/common/com";
    import { renderAsync } from "docx-preview";
    const appStore = useAppStore();

    // setTimeout(() => {
    //     appStore.changeGc(true);
    // }, 5000);
    const userStore = useUserStore();
    interface Config {
        BASE_URL: string;
    }
    import { http, ajax } from "@/http/http";
    import { service } from "@/http/service";

    const config: Config | undefined = inject("$config");
    console.log(config!.BASE_URL);
    const getDocStream = async () => {
        const res = (await http.$download(
            "/school/info/api/task/pdf?url=https://hentre-user-upload.oss-cn-qingdao.aliyuncs.com/literature_review/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E8%A7%86%E8%A7%92%E4%B8%8B%E4%B8%AD%E5%B0%8F%E4%BC%81%E4%B8%9A%E8%9E%8D%E8%B5%84%E9%9A%BE%E9%97%AE%E9%A2%98%E7%A0%94%E7%A9%B6_1729732140.4855945.docx"
        )) as any;
        console.log(res);
        let blob = new Blob([res.data]);
        console.log(blob);
        const reader = new FileReader();
        let that = this;
        reader.onload = function (event: any) {
            const arrayBuffer = event.target.result;
            console.log(blob);
            setTimeout(() => {
                nextTick(() => {
                    var docData = arrayBuffer;
                    if (document.getElementById("docxBox")) {
                        renderAsync(
                            docData,
                            document.getElementById("docxBox") as HTMLElement
                        ).then(() => {
                            console.log("docx: finished");
                            nextTick(() => {
                                setTimeout(() => {
                                    let elBox: HTMLDivElement | any =
                                        document.getElementsByClassName(
                                            "docx-wrapper"
                                        )[0];
                                    elBox.style.padding = "10px";
                                    let el: HTMLDivElement | any =
                                        document.getElementsByClassName(
                                            "docx"
                                        )[0];
                                    console.log(el);
                                    console.log(el.style);
                                    el.style.width = "auto";

                                    el.style.padding = "10px";
                                    el.style.minHeight = "10px";
                                    el.style.height = "50vh";
                                    el.style.overflow = "auto";
                                    el.style.color = "#333";
                                }, 100);
                            });
                        });
                    }
                });
            }, 500);
        };
        reader.readAsArrayBuffer(blob);
    };
    getDocStream();
    let pdfUrl = ref();
    const refreshPdf = () => {
        try {
            pdfUrl.value =
                "./static/web/viewer.html?date=" +
                new Date().getTime() +
                "&file=" +
                encodeURIComponent(
                    "https://hentre-admin-upload.oss-cn-qingdao.aliyuncs.com/ZGGYJJY2022P0003.pdf"
                    // "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
                    //   this.$store.state.pickPdf.pdf_url.replace(/http/, 'https')
                );
            // alert(pdfUrl.value);
            console.log(pdfUrl.value);
        } catch (error) {
            alert(JSON.stringify(error));
        }

        setTimeout(() => {
            nextTick(() => {
                // var childWindow = $("#myFrame")[0].contentWindow;
                // this.childWindow = childWindow;
                // this.pageCount = childWindow.PDFViewerApplication.pagesCount;
                // console.log(childWindow);
            });
        }, 2500);
    };
    refreshPdf();
</script>

<style lang="scss">
    .homePage {
        .dv {
            margin: 0 10rpx;
        }
        background-color: #f6f6f6;
        // padding-left: 27rpx;
        // padding-right: 27rpx;
        min-height: 100vh;

        .container {
            height: 80vh;
            width: 100%;
            overflow-x: hidden;
        }
    }
</style>
