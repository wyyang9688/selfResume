<template>
    <view class="homePage tabbarPage">
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
    onShow(() => {
        service.printMsg();
    });
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
