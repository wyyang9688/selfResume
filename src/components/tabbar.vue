<template>
    <div class="tabbarBox">
        <up-tabbar
            style="z-index: 500"
            :value="tabbarIndex"
            @change="changeTabbar"
            :fixed="true"
            :placeholder="false"
            activeColor="#009963"
            inactiveColor="#333"
            :safeAreaInsetBottom="false"
        >
            <up-tabbar-item
                v-for="(item, index) in list"
                :key="index"
                :text="item.text"
                @click="clickTabbar(item, index)"
            >
                <template #active-icon>
                    <image
                        class="u-page__item__slot-icon"
                        :src="item.imgFill"
                    ></image>
                </template>
                <template #inactive-icon>
                    <image
                        class="u-page__item__slot-icon"
                        :src="item.img"
                    ></image>
                </template>
            </up-tabbar-item>
        </up-tabbar>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from "@/common/route";
    import { useComStore } from "@/store/com-store";
    import { com as common } from "@/common/com";
    import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
    const props = withDefaults(
        defineProps<{
            index?: number;
        }>(),
        { index: 0 }
    );
    const com = useComStore();

    uni.hideTabBar();
    const { push, replace, back, tab } = useRouter();
    interface Tabbar {
        text: string;
        icon: string;
        to: string;
        type?: string;
        img?: string;
        imgFill?: string;
        pageType?: string;
    }
    const list: Tabbar[] = [
        {
            text: "首页",
            icon: "home",
            img: "/static/rywx/01.png",
            imgFill: "/static/rywx/01Fill.png",
            to: "/pages/home/home-index"
        },
        {
            text: "创建研究",
            icon: "photo",
            img: "/static/rywx/02.png",
            imgFill: "/static/rywx/02Fill.png",
            to: "/pages/cjyj/cjyj"
            // type: "push"
        },
        {
            text: "我的研究",
            icon: "photo",
            img: "/static/rywx/03.png",
            imgFill: "/static/rywx/03Fill.png",

            to: "/pages/wdyj/wdyj"
        },
        {
            text: "我的文献",
            icon: "photo",
            img: "/static/rywx/04.png",
            imgFill: "/static/rywx/04Fill.png",
            to: "/pages/wdwx/wdwx"
        },
        {
            text: "个人中心",
            icon: "account",
            img: "/static/rywx/05.png",
            imgFill: "/static/rywx/05Fill.png",
            to: "/pages/my/my-index"
        }
    ];
    const tabbarIndex = computed((): number => com.tabbarIndex);
    const clickTabbar = (item: Tabbar, index: number) => {
        com.setTabbarIndex(index);
        if (item.text == "首页") {
            common.sendMsg("reHome");
            return;
        }
        if (item.type == "push") push({ url: item.to });
        else tab({ url: item.to });
    };
    const changeTabbar = (e: any) => {};
    onShow(() => {
        let route = getCurrentPages()[0].route;
        console.log(route);
        for (let i = 0; i < list.length; i++) {
            if (route && list[i].to.includes(route)) {
                com.setTabbarIndex(i);
            }
        }
    });
</script>
<style lang="scss">
    .tabbarBox {
        position: fixed;
        z-index: 500;
        background: #ffffff;
        box-shadow: 0px -5 5px 0px rgba(127, 127, 127, 0.09);
        .u-page__item__slot-icon {
            width: 20px;
            height: 20px;
        }
        .u-tabbar-item__text {
            span {
            }
        }
    }
</style>
