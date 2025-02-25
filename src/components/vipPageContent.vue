<!--  -->
<template>
    <div class="vipContentCom Com">
        <div class="cardBox" @click="goToRecord">
            <img
                class="bgImg"
                :src="getConfig().imgBasicUrl + 'cardBg.png'"
                alt=""
            />
            <div class="showCard">
                <div class="title">当前使用套餐（该套餐仅该门店使用）</div>
                <div class="mid">
                    <div class="lf hidden2">
                        {{ item?.ep?.name }}
                    </div>
                    <div class="rt">
                        <div class="num">{{ item?.ab?.balance }}</div>
                        <div class="unit">赠送余额（元）</div>
                    </div>
                </div>
                <div class="time" v-show="item?.ab?.packinfo?.endTime">
                    有效期：{{
                        com.format(item?.ab?.packinfo?.endTime, "YYYY-MM-DD")
                    }}
                </div>
                <div class="time" v-show="!item?.ab?.packinfo?.endTime">
                    有效期：{{ "长期有效" }}
                </div>
            </div>
        </div>

        <div class="stitle" v-show="props.itemDetail?.length">已领取套餐</div>
        <div class="info" v-show="props.itemDetail?.length">
            *当前可用套餐只有一个，使用完成后将开启待使用套餐
        </div>
        <div class="listBox" v-show="props.itemDetail?.length">
            <div class="list">
                <div
                    class="item"
                    style="margin-top: 20rpx"
                    v-for="(item, index) of props.itemDetail"
                    :key="index"
                >
                    <div class="vcenter">
                        <div class="lf">
                            <div
                                class="num"
                                :style="{
                                    color:
                                        !item.isOutOfRange &&
                                        item.obtainState == 0
                                            ? ''
                                            : 'gray'
                                }"
                            >
                                {{ item?.obPackprice }}
                            </div>
                            <div
                                class="unit"
                                :style="{
                                    color:
                                        !item.isOutOfRange &&
                                        item.obtainState == 0
                                            ? ''
                                            : 'gray'
                                }"
                            >
                                元
                            </div>
                        </div>
                    </div>
                    <div class="mid">
                        <div class="title">分享有礼套餐</div>
                        <div class="time">
                            有效期至:{{
                                com.format(item?.endTime, "YYYY-MM-DD hh:mm:ss")
                            }}
                        </div>
                    </div>
                    <div class="tag vcenter">
                        <div class="imgBox vcenter center">
                            <img
                                v-show="
                                    !item.isOutOfRange && item.obtainState == 0
                                "
                                class="resImg"
                                :src="getConfig().imgBasicUrl + 'sp.png'"
                                alt=""
                            />
                            <img
                                v-show="
                                    item.isOutOfRange && item.obtainState == 0
                                "
                                class="resImg"
                                :src="getConfig().imgBasicUrl + 'sd.png'"
                                alt=""
                            />
                            <img
                                v-show="item.obtainState == 1"
                                class="resImg"
                                :src="getConfig().imgBasicUrl + 'ss.png'"
                                alt=""
                            />
                            <img
                                v-show="item.obtainState == 2"
                                class="resImg"
                                :src="getConfig().imgBasicUrl + 'sd.png'"
                                alt=""
                            />
                            <img
                                v-show="item.obtainState == 3"
                                class="resImg"
                                :src="getConfig().imgBasicUrl + 'sw.png'"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div
                    class="more"
                    style="margin-top: 30rpx; margin-bottom: -20rpx"
                    @click="loadMore"
                >
                    <up-loadmore
                        :status="props.status"
                        color="rgba(151, 151, 151, 0.5)"
                        lineColor="rgba(151, 151, 151, 0.09)"
                        line
                        loadmoreText="点击加载更多"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { getConfig } from "@/data/config";
    import { com } from "@/common/com";
    import { useRouter } from "@/common/route";
    const goToRecord = () => {
        const { push } = useRouter();
        push({
            url: "/pages/home/spend-list?eid=" + props.item?.ep?.id
        });
    };
    const props = withDefaults(
        defineProps<{
            item: any;
            itemDetail: any;
            status: any;
        }>(),
        {
            item: {},
            itemDetail: [],
            status: ""
        }
    );
    const emits = defineEmits<{
        (e: "onSearch", item: any): void;
        (e: "loadMore", item: any): void;
    }>();
    const loadMore = () => {
        emits("loadMore", props.item);
    };
    defineExpose({
        props
    });
    onMounted(() => {
        // console.log(props.itemDetail);
    });
</script>

<style lang="scss" scoped>
    .vipContentCom {
        padding: 24rpx;
        .cardBox {
            position: relative;
            .bgImg {
                position: absolute;
                left: 0;
                top: 0;
                width: 703rpx;
                height: 288rpx;
            }
        }
        .showCard {
            position: relative;
            background-size: 100%;
            background-repeat: no-repeat;
            width: 703rpx;
            height: 288rpx;
            color: #fff;
            padding: 34rpx;
            .title {
                height: 25rpx;
                font-family: AlibabaPuHuiTiM;
                font-size: 29rpx;
                color: #ffffff;
                line-height: 25rpx;
                text-align: left;
                font-style: normal;
            }
            .mid {
                margin-top: 48rpx;
                display: flex;
                justify-content: space-between;
                .lf {
                    width: 315rpx;
                    height: 72rpx;
                    font-family: AlibabaPuHuiTiM;
                    font-size: 33rpx;
                    color: #ffffff;
                    line-height: 36rpx;
                    text-align: left;
                    font-style: normal;
                }
                .rt {
                    .num {
                        width: 179rpx;
                        height: 33rpx;
                        font-family: AlibabaPuHuiTiM;
                        font-size: 43rpx;
                        color: #ffffff;
                        line-height: 33rpx;
                        text-align: left;
                        white-space: nowrap;
                    }
                    .unit {
                        margin-top: 22rpx;
                        height: 22rpx;
                        font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
                        font-weight: 400;
                        font-size: 22rpx;
                        color: #ffffff;
                        line-height: 22rpx;
                        text-align: left;
                        font-style: normal;
                    }
                }
            }
            .time {
                margin-top: 40rpx;
                height: 25rpx;
                font-family: AlibabaPuHuiTiR;
                font-size: 29rpx;
                color: #ffffff;
                line-height: 25rpx;
                text-align: left;
                font-style: normal;
            }
        }
        .stitle {
            margin-top: 50rpx;
            height: 45rpx;
            font-family: AlibabaPuHuiTiM;
            font-size: 33rpx;
            color: #333333;
            line-height: 45rpx;
            text-align: left;
            font-weight: bold;
        }
        .info {
            margin-top: 14rpx;
            height: 36rpx;
            font-family: AlibabaPuHuiTiR;
            font-size: 25rpx;
            color: #41a54d;
            line-height: 36rpx;
            text-align: left;
            font-style: normal;
        }
        .listBox {
            overflow-y: auto;
            height: calc(100vh - 600rpx);
            .list {
                margin-top: 25rpx;
                height: fit-content;
                .item {
                    display: flex;
                    background-color: #fff;
                    height: 130rpx;
                    padding: 22rpx 26rpx;
                    justify-content: space-between;
                    .lf {
                        display: flex;
                        height: 36rpx;
                        font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
                        font-weight: 400;
                        font-size: 38rpx;
                        color: #e73f29;
                        line-height: 31rpx;
                        text-align: left;
                        font-style: normal;
                        .num {
                        }
                        .unit {
                            font-size: 22rpx;
                            line-height: 36rpx;
                            margin-left: 5rpx;
                        }
                    }
                    .mid {
                        .title {
                            height: 36rpx;
                            font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
                            font-weight: 500;
                            font-size: 25rpx;
                            color: #333333;
                            line-height: 36rpx;
                            text-align: left;
                            font-weight: bold;
                            font-style: normal;
                        }
                        .time {
                            margin-top: 18rpx;
                            height: 31rpx;
                            font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
                            font-weight: 400;
                            font-size: 22rpx;
                            color: #666666;
                            line-height: 31rpx;
                            text-align: left;
                            font-style: normal;
                        }
                    }
                    .tag {
                        .imgBox {
                            .resImg {
                                width: 89rpx;
                                height: 67rpx;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
