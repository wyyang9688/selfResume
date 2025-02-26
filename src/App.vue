<script setup lang="ts">
    import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
    import { getConfig } from "@/data/config";
    import { http } from "./http/http";
    provide("$app", { http });
    provide("$config", getConfig());
    onLaunch((options) => {
        console.log("App Launch");
        console.log(options);
        console.log(getConfig());
    });
    onShow(() => {
        console.log("App Show");
    });
    onHide(() => {
        console.log("App Hide");
    });
</script>

<style lang="scss">
    #app {
        box-sizing: border-box;
    }
    .Page {
        background-color: #f6f6f6;
        height: 100vh;
    }
    .myModal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
    }
    .clearBtn {
        background-color: transparent;
        border: none;
        border-width: 0px;
        padding: 0;
        margin: 0;
        outline: none;
        border-radius: 0;
        border-color: transparent;
    }
    body {
        font-family: "AlibabaPuHuiTiR";
    }
    .m10 {
        margin-top: 10rpx;
    }
    .ml10 {
        margin-left: 10rpx;
    }
    .m20 {
        margin-top: 20rpx;
    }
    .ml20 {
        margin-left: 20rpx;
    }
    .m30 {
        margin-top: 30rpx;
    }
    .m40 {
        margin-top: 40rpx;
    }
    @font-face {
        font-family: "AlibabaPuHuiTiM";
        src: url("~@/static/ttf/AlibabaPuHuiM.ttf");
    }
    @font-face {
        font-family: "AlibabaPuHuiTiR";
        src: url("~@/static/ttf/AlibabaPuHuiR.ttf");
    }
    @font-face {
        font-family: "AlibabaPuHuiTiT";
        src: url("~@/static/ttf/AlibabaPuHuiT.ttf");
    }
    @font-face {
        font-family: "AlibabaPuHuiTi";
        src: url("~@/static/ttf/AlibabaPuHuiR.ttf");
    }
    *:not(span) {
        font-family:
            "Microsoft YaHei",
            sans - serif;
    }
    .page {
        min-height: 100vh;
        background-color: #f6f6f6;
    }
    .pg {
        background-color: rgba(128, 128, 128, 0.35);
    }
    .w100 {
        width: 100%;
    }
    .test {
        color: rgba(153, 153, 153, 0.38);
    }
    .flex {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .grow {
        flex-grow: 1;
    }
    .radius {
        border-radius: 27rpx;
    }
    .required::after {
        content: "*";
        color: #ee4444;
        position: relative;
        right: -5px;
        margin-left: -5px;
        font-weight: bold;
    }
    .fr {
        font-family: "AlibabaPuHuiTiR";
    }
    .fm {
        font-family: "AlibabaPuHuiTiM";
    }
    .bold {
        font-weight: bold;
        font-family: "AlibabaPuHuiTiM";
    }
    .alf {
        text-align: left;
    }
    .art {
        text-align: right;
    }
    $cp: #0271fd;
    $cp1: #82b9fe;
    $ci: #999999;
    $cg: #009963;
    $cd: #c30202;
    .cp {
        color: $cp;
    }
    .cg {
        color: $cg;
    }
    .cw {
        color: #fff;
    }
    .cy {
        color: #a1824a;
    }
    .cbgy {
        background-color: #a1824a;
    }
    .cd {
        color: $cd;
    }
    .bcg {
        border-color: $cg !important;
    }
    .cgg,
    .cbgg {
        background-color: $cg;
    }
    .cp1 {
        color: $cp1;
    }
    .cpg1 {
        background-color: $cp1;
    }
    .ci {
        color: $ci;
    }
    .cig {
        background-color: $ci;
    }
    .white {
        background-color: #fff;
    }

    .myFlex {
        display: flex;
        justify-content: space-between;
    }

    .flexs {
        justify-content: flex-start;
    }

    .flexe {
        justify-content: flex-end;
    }

    .resImg {
        width: 100%;
        height: 100%;
    }
    .center {
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .vcenter {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .pos {
        position: relative;
    }
    .wtags {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .wtag {
        display: inline-block;
        text-align: center;
        display: flex;
        justify-content: center;
        width: fit-content;
        padding: 0 30rpx;
        height: 54rpx;
        line-height: 54rpx;
        background: #e8e8e8;
        border-radius: 27rpx;
        font-family: AlibabaPuHuiTi, AlibabaPuHuiTi;
        font-weight: 400;
        font-size: 29rpx;
        color: #333333;
        font-style: normal;
        &.pick {
            background-color: $cp;
            color: #fff;
        }
    }
    .bg1 {
        background-color: #f6f6f6;
    }

    .tabbarPage {
        padding-bottom: 100rpx;
    }
    .resImg {
        max-width: 100%;
        max-height: 100%;
        vertical-align: bottom;
    }
    .bgly,
    .bglb {
        position: relative;
        z-index: 10;
    }
    .bgly::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 40%;
        width: 100%;
        background-color: rgba(255, 178, 91, 0.5);
        z-index: 1;
    }
    .bglb::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 40%;
        width: 100%;
        background-color: rgba(2, 113, 253, 0.5);
        z-index: 1;
    }
    :not(not) {
        box-sizing: border-box;
    }

    .dv {
    }
    .hidden {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
    .hidden2 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .hidden3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .chidden {
        width: 0px;
        height: 0px;
        overflow: hidden;
    }
    .mtitle {
        display: flex;
        // .title::before {
        //     content: "";
        //     display: inline-block;
        //     width: 6rpx;
        //     height: 31rpx;
        //     margin-right: 20rpx;
        //     line-height: 40rpx;
        //     position: relative;
        //     top: 4rpx;
        //     background: linear-gradient(
        //         180deg,
        //         #5c9cfd 0%,
        //         rgba(79, 112, 255, 0) 100%
        //     );
        //     border-radius: 5rpx;
        // }
        .title {
            height: 40rpx;
            font-family: AlibabaPuHuiTiM;
            font-size: 30rpx;
            color: #000000;
            text-align: left;
            font-style: normal;
            font-weight: bold;
            line-height: 40rpx;
            flex-grow: 1;
        }
        .rt {
            display: flex;
            width: fit-content;
            height: 40rpx;
            font-family: SourceHanSansSC, SourceHanSansSC;
            font-weight: 400;
            font-size: 25rpx;
            color: #acb0b7;
            line-height: 40rpx;
            text-align: left;
            font-style: normal;
            .u-icon {
                margin-left: 10rpx;
            }
        }
    }
    .tabbarBox {
        .u-tabbar__content__item-wrapper {
            height: 125rpx !important;

            .u-tabbar-item {
                height: 62.5 * 2rpx !important;
                .u-page__item__slot-icon {
                    width: 46rpx !important;
                    height: 46rpx !important;
                }
                .u-tabbar-item__text {
                    font-size: 20rpx !important;
                }
            }
        }
    }
    .bold {
        font-weight: bold;
    }

    .w100 {
        width: 100%;
    }

    .center {
        text-align: center;
    }

    .sd {
        box-shadow:
            0px 4px 8px 3px rgba(0, 0, 0, 0.15),
            0px 1px 3px rgba(0, 0, 0, 0.3);
    }

    .bd {
        border-radius: 8px;
    }
    .mt20 {
        margin-top: 20 * 2rpx;
    }

    .mt10 {
        margin-top: 10 * 2rpx;
    }

    .mt5 {
        margin-top: 5 * 2rpx;
    }

    .mt15 {
        margin-top: 15 * 2rpx;
    }

    .mt25 {
        margin-top: 25 * 2rpx;
    }

    .mt30 {
        margin-top: 30 * 2rpx;
    }

    .mt35 {
        margin-top: 35 * 2rpx;
    }

    .mt40 {
        margin-top: 40 * 2rpx;
    }

    .mt45 {
        margin-top: 45 * 2rpx;
    }

    .mt50 {
        margin-top: 50 * 2rpx;
    }

    .mt55 {
        margin-top: 55 * 2rpx;
    }

    .mt60 {
        margin-top: 60 * 2rpx;
    }

    .mt65 {
        margin-top: 65 * 2rpx;
    }

    .mt80 {
        margin-top: 80 * 2rpx;
    }

    .mt100 {
        margin-top: 100 * 2rpx;
    }

    .ml5 {
        margin-left: 5 * 2rpx;
    }

    .ml10 {
        margin-left: 10 * 2rpx;
    }

    .ml15 {
        margin-left: 15 * 2rpx;
    }

    .ml20 {
        margin-left: 20 * 2rpx;
    }

    .ml25 {
        margin-left: 25 * 2rpx;
    }

    .ml30 {
        margin-left: 30 * 2rpx;
    }

    .ml35 {
        margin-left: 35 * 2rpx;
    }

    .ml40 {
        margin-left: 40 * 2rpx;
    }

    .ml45 {
        margin-left: 45 * 2rpx;
    }

    .ml50 {
        margin-left: 50 * 2rpx;
    }

    .ml55 {
        margin-left: 55 * 2rpx;
    }

    .ml60 {
        margin-left: 60 * 2rpx;
    }
    .f48 {
        font-size: 48 * 2rpx;
    }

    .f36 {
        font-size: 36 * 2rpx;
    }

    .f32 {
        font-size: 32 * 2rpx;
    }

    .f28 {
        font-size: 28 * 2rpx;
    }

    .f24 {
        font-size: 24 * 2rpx;
    }

    .f22 {
        font-size: 22 * 2rpx;
    }

    .f20 {
        font-size: 20 * 2rpx;
    }

    .f18 {
        font-size: 18 * 2rpx;
    }

    .f16 {
        font-size: 16 * 2rpx;
    }
    .f15 {
        font-size: 15 * 2rpx;
    }

    .f14 {
        font-size: 14 * 2rpx;
    }

    .f12 {
        font-size: 12 * 2rpx;
    }

    .f10 {
        font-size: 10 * 2rpx;
    }
    .f8 {
        font-size: 8 * 2rpx;
    }

    .bold {
        font-weight: bold;
    }

    .w100 {
        width: 100%;
    }
    .pointer {
        cursor: pointer;
    }
    .uni-modal__btn_primary {
        color: $cg !important;
    }
    .clearModal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

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
        .myInput,
        .el-input,
        .el-select__wrapper {
            width: 100% !important;
            height: 100% !important;
            box-shadow: none;
            background-color: #f6f6fe;
            input {
                width: 100% !important;
                height: 100% !important;
                border: none;
            }
        }
    }
</style>
