import { defineStore } from "pinia";
const setStorageSync = uni.setStorageSync;
const getStorageSync = uni.getStorageSync;
const removeStorageSync = uni.removeStorageSync;

const state = () => {
    return {
        local_token: getStorageSync("local_token"),
        isShowGc: false,
        isLogin: false
    };
};

export const useAppStore = defineStore({
    id: "app",
    state,
    getters: {
        getToken() {
            return (key: string) => this.local_token;
        }
    },
    actions: {
        changeGc(isShow: boolean = false) {
            this.isShowGc = isShow;
        },
        changeLoginState(state: boolean) {
            this.isLogin = state;
            console.log("app-store -> changeLoginState", state);
        },
        set_Token(key: string, token: string) {
            if (key == "local_token") {
                removeStorageSync("local_token");
                setStorageSync("local_token", token);
                this.local_token = token;
            }
        },
        clear_Token() {
            removeStorageSync("local_token");
            this.local_token = "";
            this.isLogin = false;
        }
    }
});
