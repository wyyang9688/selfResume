import { useAppStore } from "@/store/app-store";
import { useRouter } from "./route";
import { toast } from "@/common/toast";
class Common {
    setItem(key, data) {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(key, jsonData);
        } catch (error) {
            console.error("Error storing data in localStorage:", error);
        }
    }
    getItem(key) {
        try {
            const jsonData = localStorage.getItem(key);
            return jsonData ? JSON.parse(jsonData) : null;
        } catch (error) {
            console.error("Error retrieving data from localStorage:", error);
            return null;
        }
    }
    sendMsg = (key: any, op: object = {}) => {
        try {
            my.postMessage({ key, ...op });
        } catch (e) {
            console.log(e);
        }
    };
    onMsg = (fn: (e: any) => void) => {
        this.cs("onMsg");
        try {
            my.onMessage = (e: any) => {
                this.cs(e);
                console.log(e); // {'sendToWebView': '1'}
                fn(e);

                this.cs("收到minipro-> " + JSON.stringify(e));
            };
        } catch (e) {
            console.log(e);
        }
    };
    cs = (log: string) => {
        if (my && my.postMessage) my.postMessage({ log });
        else {
            console.log(log);
        }
    };
    $op = (key: string) => {
        let op: any = {
            rgType: [
                {
                    label: "首次注册赠送",
                    val: 0
                },
                {
                    label: "充值购买",
                    val: 1
                },
                {
                    label: "阅读扣除",
                    val: 2
                },
                {
                    label: "选题扣除",
                    val: 3
                },
                {
                    label: "文献综述扣除",
                    val: 4
                },
                {
                    label: "邀请赠送",
                    val: 8
                },
                {
                    label: "文献下载扣除",
                    val: 9
                },
                {
                    label: "AI智选扣除",
                    val: 10
                },
                {
                    label: "单篇总结扣除",
                    val: 11
                },
                {
                    label: "小程序新用户赠送",
                    val: 12
                },
                {
                    label: "小程序被分享人赠送",
                    val: 13
                },
                {
                    label: "答题赠送",
                    val: 14
                },
                {
                    label: "系统补贴",
                    val: 15
                }
            ]
        };
        return key ? op[key] : op;
    };
    typesof = (type: any): string => {
        let typeList: any = {};
        [
            "Boolean",
            "Number",
            "String",
            "Function",
            "Array",
            "Date",
            "RegExp",
            "Object",
            "Error",
            "Symbol"
        ].forEach((item) => {
            typeList[`[object ${item}]`] = item.toLowerCase();
        });
        if (type == null) {
            return type + "";
        }
        if (typeof type === "object" || typeof type === "function") {
            return typeList[toString.call(type)] || "object";
        } else {
            return typeof type;
        }
    };
    removeHtmlTags = (str: string): string => {
        return str.replace(/<[^>]*>/g, "").replace(/\n/g, "\n");
    };
    convertSafeCharsToTags = (str: string): string => {
        str = str.replace(/&lt;/g, "<");
        str = str.replace(/&gt;/g, ">");
        str = str.replace(/&amp;/g, "&");
        str = str.replace(/&quot;/g, '"');
        str = str.replace(/&#39;/g, "'");
        str = str.replace(/&mdash;/g, "—");
        const entityMap: any = {
            "&nbsp;": " ",
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&#39;": "'",
            "&#34;": '"',
            "&#38;": "&",
            "&#60;": "<",
            "&#62;": ">",
            "&#160;": " ",
            "&#169;": "©",
            "&#174;": "®",
            "&#8211;": "–",
            "&#8212;": "—",
            "&#8216;": "‘",
            "&#8217;": "’",
            "&#8220;": "“",
            "&#8221;": "”",
            "&#8230;": "…"
        };

        return str.replace(
            /&[a-zA-Z]+;/g,
            (match: any): any => entityMap[match] || match
        );
    };
    copyMsg = (text: any = "", showToast: boolean = false) => {
        text = this.convertSafeCharsToTags(text);
        console.log(text);
        console.log(showToast);

        uni.setClipboardData({
            data: text,
            showToast: false,
            success: () => {}
        });
        if (showToast) {
            console.log("复制成功");
            toast("复制成功");
        }
    };
    checkLogin = (): boolean => {
        let flag = true;
        let token = uni.getStorageSync("local_token");
        const appStore = useAppStore();
        if (!token) {
            flag = false;

            appStore.changeGc(true);
        } else {
            appStore.changeGc();
        }

        return flag;
    };
    isValidPhoneNumber = (phoneNumber: string): boolean => {
        const phoneNumberPattern: RegExp = /^((\+?86)|(\(\+86\)))?\d{11}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    getQueryParam = (url: string, paramName: string): string => {
        const queryString = url.split("?")[1];

        if (!queryString) {
            return "";
        }

        const arr = queryString.split("&");
        const o: {
            [index: string]: string;
        } = {};
        for (const v of arr) {
            if (v) {
                const k = v.split("=");
                o[k[0]] = k[1];
            }
        }
        return o[paramName] || "";
    };
    qs = (obj: AnyObject): string => {
        let str = "";
        for (let k in obj) {
            if (str) {
                str += "&";
            }
            str += k + "=" + obj[k];
        }
        return str;
    };
    copy = (text: any, msg: string = "复制成功") => {
        if (!text) return;
        uni.setClipboardData({
            data: text,
            success: () => {
                uni.showToast({
                    title: msg,
                    icon: "none"
                });
            }
        });
    };
    format = (t: any, str: string = "yyyy-MM-dd hh:mm:ss"): string => {
        interface DatePrototype {
            Format(formatStr: string): string;
            [x: string]: any;
        }
        (Date.prototype as any).Format = function (formatStr: string) {
            var str = formatStr;
            var Week = ["日", "一", "二", "三", "四", "五", "六"];

            str = str.replace(/yyyy|YYYY/, this.getFullYear().toString());
            str = str.replace(
                /yy|YY/,
                (this.getFullYear() % 100 > 9
                    ? (this.getFullYear() % 100).toString()
                    : "0" + (this.getFullYear() % 100)
                ).toString()
            );

            str = str.replace(
                /MM/,
                +this.getMonth() + 1 > 9
                    ? (+this.getMonth() + 1).toString()
                    : "0" + (+this.getMonth() + 1)
            );
            str = str.replace(/M/g, (+this.getMonth() + 1).toString());

            str = str.replace(/w|W/g, Week[this.getDay()]);

            str = str.replace(
                /dd|DD/,
                this.getDate() > 9
                    ? this.getDate().toString()
                    : "0" + this.getDate()
            );
            str = str.replace(/d|D/g, this.getDate().toString());

            str = str.replace(
                /hh|HH/,
                this.getHours() > 9
                    ? this.getHours().toString()
                    : "0" + this.getHours()
            );
            str = str.replace(/h|H/g, this.getHours().toString());
            str = str.replace(
                /mm/,
                this.getMinutes() > 9
                    ? this.getMinutes().toString()
                    : "0" + this.getMinutes()
            );
            str = str.replace(/m/g, this.getMinutes().toString());

            str = str.replace(
                /ss|SS/,
                this.getSeconds() > 9
                    ? this.getSeconds().toString()
                    : "0" + this.getSeconds()
            );
            str = str.replace(/s|S/g, this.getSeconds().toString());

            return str;
        };
        return (new Date(t) as any).Format(str);
    };
    setShareParams = (options: any) => {
        if (options.q) {
            let shareParams = {
                eid: "",
                sharePackId: "",
                obtainPackId: "",
                isShareFlag: "",
                actId: "",
                shareUid: "",
                ori: "",
                url: ""
            };
            let url = decodeURIComponent(options.q);
            console.log(url);
            shareParams.url = url;
            shareParams.eid = this.getQueryParam(url, "eid");
            shareParams.sharePackId = this.getQueryParam(url, "sharePackId");
            shareParams.obtainPackId = this.getQueryParam(url, "obtainPackId");
            shareParams.isShareFlag = this.getQueryParam(url, "isShareFlag");
            shareParams.actId = this.getQueryParam(url, "actId");
            shareParams.shareUid = this.getQueryParam(url, "shareUid");
            shareParams.ori = this.getQueryParam(url, "ori");
            uni.setStorageSync("shareParams", shareParams);
        }
    };
    checkShowByKey = (key: string, num: string | number) => {
        num = isNaN(parseInt(num as string)) ? 0 : parseInt(num as string);

        let data = uni.getStorageSync(key);
        if (
            data &&
            data.date &&
            data.date == this.format(new Date(), "YYYYMMDD")
        ) {
        } else {
            data = {
                date: this.format(new Date(), "YYYYMMDD"),
                num: 0,
                setNum: num || 0
            };
        }

        let flag = false;
        if (data.num < num || !num) {
            flag = true;
        } else {
        }
        data.num = data.num + 1;
        data.setNum = num || 0;
        uni.setStorageSync(key, data);
        console.log(key, num, data.num, flag);
        return flag;
    };
    mActGoto = (act: any) => {
        console.log(act);

        act.url = act.url || act.actLink;
        let item = act;

        let url = item.url;
        if (act.actType || act.actType === 0 || act.actType === "0") {
            switch (act.actType) {
                case 0:
                    break;
                case 1:
                    console.log("领券跳转");
                    //   my.navigateTo({
                    //     url:
                    //       "/cardandcoupon/pages/couponDetail/couponDetail?activityId=" +
                    //       act.id +
                    //       "&cd=" +
                    //       JSON.stringify(act.watercoupon) +
                    //       "&eid=" +
                    //       that.data.ep.id +
                    //       "&source=" +
                    //       act.source,
                    //   });
                    break;
                case 3:
                    console.log("活动图片");
                    //   my.navigateTo({
                    //     url:
                    //       "/cardandcoupon/pages/couponDetail/couponDetail?activityId=" +
                    //       act.id +
                    //       "&cd=" +
                    //       JSON.stringify(act.watercoupon) +
                    //       "&eid=" +
                    //       that.data.ep.id +
                    //       "&source=" +
                    //       act.source,
                    //   });
                    break;
                case 4:
                    //   if (
                    //     item.actContext == null ||
                    //     item.actContext == "" ||
                    //     !/^[\d]{16}$/.test(item.actContext)
                    //   ) {
                    //     my.showToast({
                    //       type: "fail",
                    //       content: "小程序APPID配置错误",
                    //       duration: 2000,
                    //     });
                    //     return;
                    //   }
                    //   my.navigateToMiniProgram({
                    //     appId: item.actContext,
                    //     path: url,
                    //     success: (res) => {
                    //       // 跳转成功
                    //       console.log("success");
                    //     },
                    //     fail: (error) => {
                    //       // 跳转失败
                    //       console.log("error");
                    //     },
                    //   });
                    break;
                case 5:
                    //   if (!this.data.isReady) {
                    //     my.showToast({
                    //       type: "none",
                    //       content: "准备中请稍后",
                    //       duration: 3000,
                    //       success: () => {},
                    //     });
                    //     return;
                    //   }
                    //   // 跳转到插件活动
                    //   console.log("跳转到插件活动");
                    //   console.log(url);
                    //   if (
                    //     item.name.indexOf("信息流广告") > -1 &&
                    //     app.globalData.eid == "169c9fc63d50bcd8"
                    //   ) {
                    //     my.navigateTo({
                    //       url:
                    //         "/activitypages/pages/lightcomponent/lightcomponent?url=" + url,
                    //     });
                    //   } else {
                    //     my.navigateTo({
                    //       url: url,
                    //     });
                    //   }
                    break;
                case 6:
                    //   console.log("商城页面跳转");
                    //   url = op.server.getShopParams(url + "&plusEid=" + that.data.ep.id);
                    //   console.log(url);
                    //   my.navigateTo({
                    //     url: url,
                    //   });
                    break;
                case 90:
                    console.log("内部链接 小程序内部跳转");
                    // url = "/waste/pages/ticketWallet/ticketWallet"; // demo
                    const { push } = useRouter();
                    push({
                        url: url
                    });
                    break;
                case 91:
                    //   console.log("外部链接 小程序外部跳转");
                    //   // url = "/waste/pages/ticketWallet/ticketWallet"; // demo
                    //   if (item.url.indexOf("--CPA--") > -1) {
                    //     if (!that.data.isCPA) {
                    //       return;
                    //     }
                    //     let tao_did = that.data.dev.id;
                    //     if (tao_did == "" || tao_did == null) {
                    //       my.alert({
                    //         content: "请先扫码收藏设备，再参加领券活动",
                    //       });
                    //       return;
                    //     }
                    //     let tao_eid = that.data.ep.id;
                    //     url = basicUrl + "/dev/lst-ali";
                    //     webapp.getJSON(
                    //       url,
                    //       {
                    //         dids: tao_did,
                    //       },
                    //       (res) => {
                    //         if (null != res && res.length > 0) {
                    //           if (!that.validateTmall(res[0].dev)) {
                    //             my.alert({
                    //               content: "您收藏的设备暂时未参与活动",
                    //             });
                    //             return;
                    //           }

                    //           that.cloudcodeQuery(tao_did, tao_eid, "click");

                    //           return;
                    //         }
                    //       },
                    //       (errmg) => {
                    //         console.error(errmg);
                    //       }
                    //     );

                    //     return;
                    //   }
                    //   let base_url =
                    //     "/activitypages/pages/activityView/activityView?url=" +
                    //     encodeURIComponent(item.url);
                    //   my.navigateTo({
                    //     url: base_url,
                    //   });
                    break;
                case 95:
                    console.log("移动积分活动");

                    break;
                default:
                    console.log("*****");
                    console.log(act);
            }
        } else if (act.redirectType) {
        } else {
            console.warn("活动配置可能有误");
            console.warn(act);
        }
    };
}

export const com = new Common();
