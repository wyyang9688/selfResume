<template>
    <view class="container">
        <!-- 状态栏 -->
        <view class="status-bar">
            <text>15:54</text>
            <view class="flex-row items-center">
                <text class="iconfont icon-signal"></text>
                <text class="iconfont icon-wifi ml-2"></text>
                <text class="ml-2">84%</text>
                <text class="iconfont icon-battery-three-quarters ml-2"></text>
            </view>
        </view>

        <!-- 主内容区域 -->
        <scroll-view scroll-y class="main-content">
            <!-- 顶部导航 -->
            <view class="px-3 py-2 mb-0">
                <!-- 增加顶部边距 -->
                <view class="mt-3"></view>

                <!-- 广告横幅 - 更突出的位置 -->
                <view class="px-1 mb-0">
                    <view class="ad-banner mb-1">
                        <image
                            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            mode="aspectFill"
                            class="w-full h-40"
                        ></image>
                        <view
                            class="absolute bottom-0 left-0 right-0 bg-gradient"
                        >
                            <view class="text-white font-bold text-lg p-4"
                                >校园节水挑战赛</view
                            >
                            <view
                                class="text-white text-sm opacity-90 px-4 pb-4"
                                >参与赢取丰厚奖品</view
                            >
                        </view>
                        <view class="ad-tag">广告</view>
                    </view>
                </view>
            </view>

            <!-- 常用设备卡片 -->
            <view class="px-3 mb-3 mt-1">
                <view class="water-machine-card">
                    <view class="flex-row justify-between items-start">
                        <view>
                            <view class="flex-row items-center">
                                <text class="text-sm opacity-80">常用设备</text>
                                <view
                                    class="bg-white-20 px-2 py-0.5 rounded-full text-xs ml-4"
                                >
                                    <text
                                        class="iconfont icon-star mr-1"
                                    ></text>
                                    <text>收藏</text>
                                </view>
                            </view>
                            <text class="text-lg font-bold mt-1"
                                >第四教学楼 1楼-101</text
                            >
                        </view>
                    </view>

                    <view class="flex-row items-center justify-between mt-3">
                        <button class="secondary-button">
                            <text class="iconfont icon-random mr-1"></text>
                            <text>使用其他设备</text>
                        </button>
                        <button class="action-button">
                            <text class="iconfont icon-arrow-right mr-1"></text>
                            <text>去使用</text>
                        </button>
                    </view>

                    <view class="water-stats">
                        <view class="water-stat-item">
                            <text class="water-stat-label">余额</text>
                            <text class="water-stat-value">1,280</text>
                            <view class="water-stat-button">
                                <text>充值</text>
                            </view>
                        </view>
                        <view class="water-stat-item">
                            <text class="water-stat-label">金币</text>
                            <text class="water-stat-value">3</text>
                            <view class="water-stat-button">
                                <text>兑换</text>
                            </view>
                        </view>
                        <view class="water-stat-item">
                            <text class="water-stat-label">今日用水</text>
                            <text class="water-stat-value">1.2L</text>
                            <view class="water-stat-button">
                                <text>查看</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <!-- 功能入口 - 整合版 -->
            <view class="px-4 mb-4">
                <view class="grid-container">
                    <view
                        class="feature-item"
                        v-for="(item, index) in features"
                        :key="index"
                        @tap="navigateToFeature(item.name)"
                    >
                        <view class="feature-icon" :class="item.iconBg">
                            <text class="iconfont" :class="item.icon"></text>
                        </view>
                        <view class="text-xs mt-1 font-medium relative">
                            <text>{{ item.name }}</text>
                            <text v-if="item.badge" class="badge">{{
                                item.badge
                            }}</text>
                        </view>
                    </view>
                </view>
            </view>

            <!-- 校园精选 -->
            <view class="px-4 mb-4">
                <view class="flex-row justify-between items-center mb-2">
                    <view class="flex-row items-center">
                        <text
                            class="iconfont icon-star text-indigo-500 mr-2"
                        ></text>
                        <text class="section-title mb-0">校园精选</text>
                    </view>
                    <text class="text-indigo-500 text-sm font-medium"
                        >更多 ></text
                    >
                </view>

                <scroll-view
                    scroll-x
                    class="scroll-container"
                    show-scrollbar="false"
                >
                    <view class="flex-row space-x-3">
                        <view
                            class="campus-card"
                            v-for="(item, index) in campusSelections"
                            :key="index"
                        >
                            <image
                                :src="item.image"
                                mode="aspectFill"
                                class="w-full h-24"
                            ></image>
                            <view class="p-2">
                                <text class="text-sm font-medium">{{
                                    item.title
                                }}</text>
                                <text class="text-xs text-gray-500 mt-0.5">{{
                                    item.desc
                                }}</text>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>

            <!-- 精选内容 -->
            <view class="px-4 mb-6">
                <view class="flex-row justify-between items-center mb-2">
                    <view class="flex-row items-center">
                        <text
                            class="iconfont icon-newspaper text-indigo-500 mr-2"
                        ></text>
                        <text class="section-title mb-0">精选内容</text>
                    </view>
                </view>

                <view
                    class="news-card"
                    v-for="(item, index) in newsItems"
                    :key="index"
                >
                    <view class="p-3">
                        <view
                            class="flex-row justify-between items-center mb-2"
                        >
                            <text class="font-medium">{{ item.title }}</text>
                            <text class="text-xs text-gray-500">{{
                                item.time
                            }}</text>
                        </view>
                        <text class="text-sm text-gray-700 mb-2">{{
                            item.desc
                        }}</text>
                        <image
                            :src="item.image"
                            mode="aspectFill"
                            class="news-image rounded-lg"
                        ></image>
                    </view>
                </view>
            </view>
        </scroll-view>

        <!-- 快速用水悬浮按钮 -->
        <view class="quick-water-button" @tap="quickWater">
            <text class="iconfont icon-tint text-2xl"></text>
        </view>

        <!-- 底部导航栏 -->
        <view class="nav-bar">
            <view class="nav-item active-nav" @tap="switchTab('home')">
                <view class="nav-icon">
                    <text class="iconfont icon-home"></text>
                </view>
                <text class="nav-text">首页</text>
            </view>
            <view class="nav-item" @tap="switchTab('ai')">
                <view class="nav-icon">
                    <text class="iconfont icon-robot"></text>
                </view>
                <text class="nav-text">AI社区</text>
            </view>
            <view class="center-nav" @tap="scanCode">
                <text
                    class="iconfont icon-qrcode"
                    style="font-size: 32px"
                ></text>
            </view>
            <view class="nav-item" @tap="switchTab('earn')">
                <view class="nav-icon">
                    <text class="iconfont icon-coins"></text>
                </view>
                <text class="nav-text">赚小钱</text>
            </view>
            <view class="nav-item" @tap="switchTab('profile')">
                <view class="nav-icon">
                    <text class="iconfont icon-user"></text>
                </view>
                <text class="nav-text">我的</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                features: [
                    {
                        name: "预约",
                        icon: "icon-calendar-check",
                        iconBg: "bg-blue-50"
                    },
                    {
                        name: "账单",
                        icon: "icon-file-alt",
                        iconBg: "bg-blue-50"
                    },
                    {
                        name: "客服",
                        icon: "icon-headset",
                        iconBg: "bg-blue-50"
                    },
                    {
                        name: "水卡管理",
                        icon: "icon-credit-card",
                        iconBg: "bg-blue-50 text-indigo-600"
                    },
                    {
                        name: "赚小钱",
                        icon: "icon-coins",
                        iconBg: "bg-blue-50 text-indigo-600",
                        badge: "热门"
                    },
                    {
                        name: "塔罗占卜",
                        icon: "icon-moon",
                        iconBg: "bg-purple-50 text-purple-600"
                    },
                    {
                        name: "宿舍排行",
                        icon: "icon-trophy",
                        iconBg: "bg-red-50 text-red-500"
                    },
                    {
                        name: "恋爱指南",
                        icon: "icon-heart",
                        iconBg: "bg-green-50 text-green-600"
                    },
                    {
                        name: "时光机",
                        icon: "icon-clock",
                        iconBg: "bg-yellow-50 text-yellow-600"
                    },
                    {
                        name: "更多",
                        icon: "icon-ellipsis-h",
                        iconBg: "bg-gray-50 text-gray-500"
                    }
                ],
                campusSelections: [
                    {
                        title: "AI论文助手",
                        desc: "智能创作，提升效率",
                        image: "https://images.unsplash.com/photo-1577017040065-650ee4d43339?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: "校园团购",
                        desc: "享受优惠，买得更省",
                        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    },
                    {
                        title: "恋爱指南",
                        desc: "校园脱单秘籍",
                        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    }
                ],
                newsItems: [
                    {
                        title: "每日健康小贴士",
                        time: "2分钟前",
                        desc: "饮用温开水的健康小知识：每天8杯水，喝对时间更健康",
                        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        title: "每日离谱大赏",
                        time: "2分钟前",
                        desc: "打游戏很暴躁，放了苦萨在电脑旁",
                        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    }
                ]
            };
        },
        methods: {
            navigateToFeature(name) {
                uni.showToast({
                    title: `点击了${name}功能`,
                    icon: "none"
                });
            },
            switchTab(tab) {
                uni.showToast({
                    title: `切换到${tab}标签`,
                    icon: "none"
                });
            },
            scanCode() {
                uni.scanCode({
                    success: (res) => {
                        uni.showToast({
                            title: "扫码成功: " + res.result,
                            icon: "none"
                        });
                    },
                    fail: () => {
                        uni.showToast({
                            title: "扫码失败",
                            icon: "none"
                        });
                    }
                });
            },
            quickWater() {
                uni.showToast({
                    title: "快速用水",
                    icon: "none"
                });
            }
        }
    };
</script>

<style>
    /* 基础样式 */
    .container {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        background-color: #f5f7fa;
        color: #333;
        height: 100vh;
        position: relative;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .items-center {
        align-items: center;
    }

    .items-start {
        align-items: flex-start;
    }

    .justify-between {
        justify-content: space-between;
    }

    .px-1 {
        padding-left: 4px;
        padding-right: 4px;
    }
    .px-2 {
        padding-left: 8px;
        padding-right: 8px;
    }
    .px-3 {
        padding-left: 12px;
        padding-right: 12px;
    }
    .px-4 {
        padding-left: 16px;
        padding-right: 16px;
    }
    .py-0\.5 {
        padding-top: 2px;
        padding-bottom: 2px;
    }
    .py-2 {
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .p-2 {
        padding: 8px;
    }
    .p-3 {
        padding: 12px;
    }
    .p-4 {
        padding: 16px;
    }

    .mt-1 {
        margin-top: 4px;
    }
    .mt-3 {
        margin-top: 12px;
    }
    .mb-0 {
        margin-bottom: 0;
    }
    .mb-1 {
        margin-bottom: 4px;
    }
    .mb-2 {
        margin-bottom: 8px;
    }
    .mb-3 {
        margin-bottom: 12px;
    }
    .mb-4 {
        margin-bottom: 16px;
    }
    .mb-6 {
        margin-bottom: 24px;
    }
    .ml-2 {
        margin-left: 8px;
    }
    .ml-4 {
        margin-left: 16px;
    }
    .mr-1 {
        margin-right: 4px;
    }
    .mr-2 {
        margin-right: 8px;
    }

    .rounded-full {
        border-radius: 9999px;
    }
    .rounded-lg {
        border-radius: 8px;
    }

    .text-xs {
        font-size: 12px;
    }
    .text-sm {
        font-size: 14px;
    }
    .text-lg {
        font-size: 18px;
    }
    .text-2xl {
        font-size: 24px;
    }

    .font-medium {
        font-weight: 500;
    }
    .font-bold {
        font-weight: 700;
    }

    .text-white {
        color: #ffffff;
    }
    .text-gray-500 {
        color: #6b7280;
    }
    .text-gray-700 {
        color: #4b5563;
    }
    .text-indigo-500 {
        color: #6366f1;
    }
    .text-indigo-600 {
        color: #4f46e5;
    }
    .text-purple-600 {
        color: #9333ea;
    }
    .text-red-500 {
        color: #ef4444;
    }
    .text-green-600 {
        color: #16a34a;
    }
    .text-yellow-600 {
        color: #ca8a04;
    }

    .bg-white-20 {
        background-color: rgba(255, 255, 255, 0.2);
    }
    .bg-blue-50 {
        background-color: #eff6ff;
    }
    .bg-purple-50 {
        background-color: #faf5ff;
    }
    .bg-red-50 {
        background-color: #fef2f2;
    }
    .bg-green-50 {
        background-color: #f0fdf4;
    }
    .bg-yellow-50 {
        background-color: #fefce8;
    }
    .bg-gray-50 {
        background-color: #f9fafb;
    }

    .opacity-80 {
        opacity: 0.8;
    }
    .opacity-90 {
        opacity: 0.9;
    }

    .w-full {
        width: 100%;
    }
    .h-24 {
        height: 96px;
    }
    .h-40 {
        height: 160px;
    }

    .absolute {
        position: absolute;
    }
    .relative {
        position: relative;
    }

    /* 状态栏 */
    .status-bar {
        height: 44px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        font-size: 14px;
        font-weight: 600;
        position: sticky;
        top: 0;
        z-index: 50;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    }

    /* 主内容区域 */
    .main-content {
        height: calc(100vh - 127px);
        padding-bottom: 80px;
    }

    /* 广告横幅 */
    .ad-banner {
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 8px;
        position: relative;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .bg-gradient {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    }

    .ad-tag {
        position: absolute;
        top: 8px;
        right: 8px;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 4px;
    }

    /* 水机卡片 */
    .water-machine-card {
        background: linear-gradient(135deg, #4f46e5, #3b82f6);
        color: white;
        border-radius: 16px;
        padding: 15px;
        box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
        margin-bottom: 14px;
        width: 100%;
    }

    .water-stats {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        padding: 10px 6px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .water-stat-item {
        flex: 1;
        text-align: center;
        padding: 8px 2px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
    }

    .water-stat-item:last-child {
        border-right: none;
    }

    .water-stat-label {
        font-size: 10px;
        opacity: 0.9;
        margin-bottom: 2px;
    }

    .water-stat-value {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .water-stat-button {
        background-color: white;
        color: #4f46e5;
        border-radius: 10px;
        padding: 3px 10px;
        font-size: 11px;
        font-weight: bold;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .secondary-button {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: 10px;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .action-button {
        background-color: white;
        color: #4f46e5;
        border-radius: 10px;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    /* 功能图标区 */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 4px;
    }

    .feature-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 6px 0;
    }

    .feature-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
        font-size: 20px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    }

    .badge {
        position: absolute;
        top: -1px;
        right: -6px;
        background-color: #ef4444;
        color: white;
        font-size: 10px;
        padding: 0 4px;
        border-radius: 9999px;
    }

    /* 校园精选 */
    .section-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #1f2937;
    }

    .scroll-container {
        width: 100%;
        white-space: nowrap;
    }

    .campus-card {
        display: inline-block;
        width: 176px;
        flex-shrink: 0;
        background-color: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
        margin-right: 12px;
    }

    /* 新闻卡片 */
    .news-card {
        background-color: white;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 16px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
    }

    .news-image {
        width: 100%;
        height: 140px;
    }

    /* 快速用水按钮 */
    .quick-water-button {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4f46e5, #3b82f6);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        z-index: 40;
    }

    /* 底部导航栏 */
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-radius: 30px;
        padding: 8px 16px;
        margin: 0 16px 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        z-index: 50;
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 0;
        flex: 1;
    }

    .nav-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        font-size: 18px;
    }

    .nav-text {
        font-size: 12px;
        font-weight: 500;
    }

    .active-nav {
        color: #4f46e5;
    }

    .center-nav {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #4f46e5, #3b82f6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-top: -30px;
        box-shadow: 0 4px 16px rgba(79, 70, 229, 0.5);
    }
</style>
