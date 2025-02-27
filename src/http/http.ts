import { getConfig } from "../data/config";
import { useRouter } from "@/common/route";
import { com } from "@/common/com";
import pinia from "../store/store";
import { useUserStore } from "@/store/user-store";
import { useAppStore } from "@/store/app-store";
const appStore = useAppStore(pinia);
const userStore = useUserStore(pinia);
export const isFullUrl = (text: string) => {
    return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(
        text
    );
};
interface Config {
    timeout: number;
    baseUrl: string;
    isShowLoading?: boolean;
}
interface SData<T> {
    data: BaseData<T>;
}
export interface BaseData<T> {
    code: number;
    msg: string;
    massags: string;
    data: T;
    body: T;
    size: number;
    messages: any[];
}

const config = getConfig();
interface RequestConfig<T = any> {
    url: string;
    method: UniNamespace.RequestOptions["method"];
    data?: T;
    params?: T;
    header?: any;
    baseUrl?: string;
    dataType?: string;
    responseType?: string;
    withCredentials?: boolean;
    showToast?: boolean;
    needLogin?: boolean;
}
export interface BaseDataStruct<T> {
    code: number;
    msg: string;
    massags: string;
    data: T;
    body: T;
    size: number;
}
const reLogin = async () => {
    // useRouter().push({
    //     url: "/pages/login/login"
    // });
    appStore.changeLoginState(false);
    uni.reLaunch({
        url: "/pages/cjyj/cjyj"
    });
    // uni.removeStorageSync("local_token");
    // let data = {
    //     pn: "15348401122",
    //     mode: 30,
    //     loginstr: 0
    // };
    // const serviceData = await ajax.post<AnyObject>(
    //     `/api/acc/login`,
    //     data,
    //     {
    //         ...data
    //     },
    //     {
    //         showToast: true
    //     }
    // );
    // uni.hideLoading();
    // if (serviceData.data.code == 0) {
    //     userStore.set_user_info(serviceData.data.data as any);
    //     appStore.changeLoginState(true);
    //     appStore.set_Token(
    //         "local_token",
    //         serviceData.data.data.uid + "" + serviceData.data.data.security
    //     );
    // }
};
class Http {
    defaultOption: object = {
        url: "",
        method: "GET",
        header: {
            "content-type": "application/json",
            Authorization: "Authorization"
        }
    };
    timeout: number;
    baseUrl: string;
    loadUrl: string;
    async http<T>(op: RequestConfig): Promise<any> {
        if (this.isShowLoading) {
            this.loadUrl = op.url;
            uni.showLoading({
                title: "加载中...",
                mask: true
            });
        }
        try {
            let ops = { ...op, timeout: this.timeout };
            if (ops.method == "GET") {
                ops.data = undefined;
            }
            console.log("接口调用->", { url: ops.url, data: ops.data });
            const res = (await uni.request(ops)) as any;
            if (this.isShowLoading) {
                if (this.loadUrl == ops.url) {
                    // setTimeout(() => {
                    //     uni.hideLoading();
                    // }, 5000);
                }
            }
            console.log("接口返回->", { url: ops.url, data: res.data.data });
            if (op.showToast && res.data.code != 0 && res.data.msg) {
                if (this.isShowLoading && this.loadUrl == ops.url) {
                    uni.hideLoading();
                }
                if (res.data.code == -99) {
                    reLogin();
                    if (op.needLogin) {
                        // reLogin();
                        // useRouter().push({
                        //     url: "/pages/login/login"
                        // });
                        uni.showToast({
                            title: "登录失效，请重新登录",
                            icon: "none"
                        });
                    } else {
                        uni.showToast({
                            title: "该功能需要登录后才能正常使用",
                            icon: "none"
                        });
                    }
                    console.log("需要登录");
                } else {
                    console.log("msg->" + res.data.msg);
                    if (res.data.msg.includes("请登录")) {
                        reLogin();
                    }
                    uni.showToast({
                        title: res.data.msg,
                        icon: "none",
                        mask: true,
                        duration: 3000
                    });
                }
            }
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    isShowLoading: boolean | undefined = false;
    constructor(options: Config) {
        this.timeout = options.timeout;
        this.baseUrl = options.baseUrl;
        this.isShowLoading = options.isShowLoading;
        this.loadUrl = "";
        /** */
    }
    async $download<T>(url: string): Promise<T> {
        if (!isFullUrl(url)) {
            url = this.baseUrl + url;
        }
        let op = {
            url,
            responseType: "arraybuffer",
            header: {
                Authorization: uni.getStorageSync("local_token")
            }
        };
        console.log(op);
        const res = (await uni.request(op)) as any;
        return res;
    }
    async upload<T>(
        url: string,
        tempFilePath: string,
        tempFile: any,
        option?: RequestConfig
    ): Promise<T> {
        if (!isFullUrl(url)) {
            url = this.baseUrl + url;
        }
        com.cs(url);
        com.cs(JSON.stringify(tempFilePath));
        return new Promise((resolve, reject) => {
            uni.uploadFile({
                url,
                header: {
                    Authorization: uni.getStorageSync("local_token")
                    // "Content-Type":
                    //     "multipart/form-data; boundary=<calculated when request is sent>"
                    // "image/"
                },
                fileType: "image",
                name: "file",

                // file: tempFile,
                filePath: tempFilePath,
                success: (resp: any) => {
                    const _res = JSON.parse(resp.data);
                    com.cs(JSON.stringify(_res));
                    if (_res.code == 0) {
                        uni.showToast({
                            type: "none",
                            title: "上传成功",
                            icon: "none",
                            duration: 1500,
                            success: () => {
                                uni.hideLoading();
                            }
                        });
                        resolve(_res);
                    } else {
                        uni.showToast({
                            type: "none",
                            title: _res.msg,
                            icon: "none",
                            duration: 1500,
                            success: () => {
                                // uni.hideLoading();
                            }
                        });
                        if (_res.code == -99) {
                            reLogin();
                        }
                        resolve(_res);
                    }
                },
                fail: function (err: any) {
                    com.cs(JSON.stringify(err));
                    uni.showToast({
                        type: "none",
                        title: "上传失败，请重试",
                        icon: "none",
                        duration: 1500,
                        success: () => {
                            uni.hideLoading();
                        }
                    });
                    reject(err);
                }
            });
        });
    }
    param(data: { [key: string]: any } | undefined, url: string): string {
        if (!data) {
            return url;
        }
        let ret = "";
        for (const key in data) {
            if (com.typesof(data[key]) == "array") {
                for (let v of data[key]) {
                    if (ret) ret += "&";
                    ret += key + "=" + v;
                }
            } else if (com.typesof(data[key]) == "object") {
                if (ret) ret += "&";
                ret += key + "=" + "object";
            } else {
                if (ret) ret += "&";

                ret += key + "=" + data[key];
            }
        }
        url.indexOf("?") > 0
            ? (url = url + "&" + ret)
            : (url = url + "?" + ret);
        return url;
    }
    get<T>(
        url: string,
        data?: object,
        option?: Optional<RequestConfig> // Optional<Omit<RequestConfig, "data">>
    ) {
        url = this.param(data, url);
        return this.request<T>({
            ...option,
            url,
            method: "GET"
        });
    }
    post<T>(
        url: string,
        data?: object,
        params?: object,
        option?: Optional<RequestConfig>
    ) {
        url = this.param(params, url);

        return this.request<T>({
            ...option,
            url,
            data,
            method: "POST"
        });
    }

    put<T>(
        url: string,
        data?: object,
        params?: object,
        option?: RequestConfig
    ) {
        url = this.param(params, url);

        return this.request<T>({
            ...option,
            url,
            data,
            method: "PUT"
        });
    }

    private request<T>(option: RequestConfig): Promise<SData<T>> {
        // const token = "";
        option = Object.assign(this.defaultOption, option);
        option.header.Authorization = option.header.Authorization ?? "token";
        // delete option.header._Authorization;
        if (!isFullUrl(option.url)) {
            option.url = this.baseUrl + option.url;
        }

        return this.http<BaseData<T>>({ ...option });
    }
}
export default Http;

uni.addInterceptor("request", {
    invoke(args) {
        // console.log(args);
        args.header.Authorization = //"CENTER 17fed1731515fa0247d8e2c7f0f3afa9";
            uni.getStorageSync("local_token") || "Authorization";
    },
    success(args) {
        // 请求成功后，修改code值为1
        // console.log("interceptor-success", args);
    },
    fail(err) {
        console.warn(err);
        uni.hideLoading();
        uni.showToast({
            title: "网络错误，请稍后重试",
            icon: "none"
        });
    },
    complete(res) {
        if (res.statusCode != 200) {
            // uni.showLoading();
            uni.hideLoading();
            uni.showToast({
                title: "网络错误，请稍后重试",
                icon: "none"
            });
            console.warn(res);
        }
        if (res.data && res.data.code !== 0) {
            console.log(res.data.msg);
            // if (res.data.code == -99) {
            //     useRouter().push({
            //         url: "/pages/login/login"
            //     });
            // }
        }
    }
});

uni.addInterceptor({
    returnValue(args) {
        return args;
    }
});
export const http: Http = new Http({
    baseUrl: config.BASE_URL,
    timeout: 60000
});
export const ajax: Http = new Http({
    baseUrl: config.BASE_URL,
    timeout: 60000,
    isShowLoading: true
});
export const httpM: Http = new Http({
    baseUrl: config.BASE_Mid_URL,
    timeout: 60000
});
export const ajaxM: Http = new Http({
    baseUrl: config.BASE_Mid_URL,
    timeout: 60000,
    isShowLoading: true
});
export const httpA: Http = new Http({
    baseUrl: config.BASE_Ai_URL,
    timeout: 60000 * 3
});
export const ajaxA: Http = new Http({
    baseUrl: config.BASE_Ai_URL,
    timeout: 60000 * 3,
    isShowLoading: true
});
