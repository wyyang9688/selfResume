import { defineStore } from "pinia";
import { useAppStore } from "./app-store";

const setStorageSync = uni.setStorageSync;
const getStorageSync = uni.getStorageSync;
const removeStorageSync = uni.removeStorageSync;

interface State {
    userInfo: UserInfo;
    preData: any;
    test: any;
    [key: string]: any;
}
export interface AccInfo {
    id: string;
    createTime: number;
    pn: string;
    name: string;
    gender: number;
    headImg: string;
    type: number;
    model: number;
    disEids: string[];
    industry: string;
    epName: string;
    [key: string]: any;
}

export interface UserInfo {
    security: string;
    name: string;
    uid: string;
    gender: number;
    headImg: string;
    oid: string;
    pn: string;
    accInfo?: Partial<AccInfo>;
}

export interface Ep {
    id: string;
    name: string;
    tag: string;
    type: number;
    wxCode: string;
    loc: Loc;
    mblSiteUrl: string;
    hasInlShop: boolean;
    showName: string;
    pay: AnyObject;
    graduateRefundApply: boolean;
}

export interface Loc {
    geo: Geo;
}

export interface Geo {
    type: string;
    coordinates: number[];
}

const state = (): State => {
    return {
        userInfo: getStorageSync("userInfo"),
        preData: getStorageSync("preData") || [],
        test: "1",
        refreshCharge: 0,
        refreshSc: 0,
        pickPdf: {
            pdf_url:
                "http://ms-ai.oss-cn-shenzhen.aliyuncs.com/literature/GLXBY2023P0124.pdf",
            classification: "",
            year: "",
            author: ""
        },
        pickSc: {
            id: 0,
            topicName: "",
            completeTime: "",
            createTime: "",
            taskState: 0 //0-生成中 1-完成 无字段 没有生成
        },
        info: {
            itschoolCode: 0, //学校
            itqfCode: 0 //学历
        },
        isShareManage: true,
        chargeVisible: false,
        oid: "",
        coffeeAmount: 0 //咖啡豆
    };
};

export const useUserStore = defineStore({
    id: "user",
    state,
    actions: {
        changeFlag(data: { key: string | number; val: any }) {
            if (this.userInfo && this.userInfo.accInfo) {
                this.userInfo.accInfo[data.key] = data.val;
            }
        },
        setKeyVal(data: any) {
            console.log("setKV", data);
            this[data.key] = data.val;
            console.log(this[data.key]);
        },
        set_info(data: any) {
            setStorageSync("info", data);
            console.log("user-store -> set_info", data);
            this.info = data;
        },
        setPreData(data: any) {
            removeStorageSync("preData");
            setTimeout(() => {
                setStorageSync("preData", data);
                this.preData = data;
            }, 100);
        },

        set_user_info(userInfo: UserInfo) {
            setStorageSync("userInfo", userInfo);
            console.log("user-store -> set_user_info", userInfo);
            this.userInfo = userInfo;
            this.test++;
        },
        // update_user_info<T extends keyof AccInfo>(key: T, value: AccInfo[T]) {
        //     this.userInfo.accInfo[key] = value;
        // },
        clear_user_info() {
            useAppStore().clear_Token();
            removeStorageSync("userInfo");
            removeStorageSync("local_token");
            removeStorageSync("mid_token");
            this.userInfo = {
                security: "",
                name: "",
                uid: "",
                gender: 0,
                headImg: "",
                oid: "",
                pn: "",
                accInfo: {}
            };
        }
    }
});
