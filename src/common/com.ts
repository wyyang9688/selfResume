import { useAppStore } from "@/store/app-store";
import { useRouter } from "./route";
import { toast } from "@/common/toast";
class Common {
    setItem(key, data) {
        try {
            // 检查数据类型，对不同类型进行不同处理
            let jsonData;
            if (typeof data === "string") {
                // 字符串类型添加特殊前缀标记
                jsonData = JSON.stringify({ __type: "string", value: data });
            } else if (typeof data === "boolean") {
                // 布尔类型添加特殊前缀标记
                jsonData = JSON.stringify({ __type: "boolean", value: data });
            } else if (data === null || data === undefined) {
                // null或undefined直接存储
                jsonData = JSON.stringify({ __type: "null", value: null });
            } else {
                // 对象类型正常存储
                jsonData = JSON.stringify({ __type: "object", value: data });
            }
            localStorage.setItem(key, jsonData);
        } catch (error) {
            console.error("Error storing data in localStorage:", error);
        }
    }

    getItem(key) {
        try {
            const jsonData = localStorage.getItem(key);
            if (!jsonData) return null;

            const parsedData = JSON.parse(jsonData);

            // 根据存储时的类型标记返回对应类型的数据
            if (parsedData && parsedData.__type) {
                switch (parsedData.__type) {
                    case "string":
                        return parsedData.value;
                    case "boolean":
                        return parsedData.value;
                    case "null":
                        return null;
                    case "object":
                        return parsedData.value;
                    default:
                        return parsedData.value;
                }
            }

            // 兼容旧数据格式
            return parsedData;
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
        const op: any = {
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
        const typeList: any = {};
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
    copyMsg = (
        text: any = "",
        showToast: boolean = false,
        msg: string = "复制成功"
    ) => {
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
            toast(msg);
        }
    };
    checkLogin = (): boolean => {
        let flag = true;
        const token = uni.getStorageSync("local_token");
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
        for (const k in obj) {
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
            let str = formatStr;
            const Week = ["日", "一", "二", "三", "四", "五", "六"];

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
            const shareParams = {
                eid: "",
                sharePackId: "",
                obtainPackId: "",
                isShareFlag: "",
                actId: "",
                shareUid: "",
                ori: "",
                url: ""
            };
            const url = decodeURIComponent(options.q);
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
        const item = act;

        const url = item.url;
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
class Options {
    $op = (key: string) => {
        const op: any = {
            pform: [
                {
                    label: "姓名",
                    type: "input",
                    val: "",
                    key: "fullName",
                    placeholder: "请输入姓名"
                },
                {
                    label: "性别",
                    type: "options",
                    op: [
                        {
                            label: "男",
                            value: "男"
                        },
                        {
                            label: "女",
                            value: "女"
                        }
                    ],
                    val: "",

                    key: "gender",
                    placeholder: "请选择性别"
                },
                {
                    label: "出生日期",
                    type: "date",
                    val: "",

                    key: "dateOfBirth",
                    placeholder: "请选择出生日期"
                },
                {
                    label: "联系电话",
                    type: "input",
                    val: "",

                    key: "phone",
                    placeholder: "请输入联系电话"
                },
                {
                    label: "电子邮箱",
                    type: "input",
                    val: "",
                    key: "email",
                    placeholder: "请输入电子邮箱"
                },
                {
                    label: "期望职位",
                    type: "input",
                    val: "",

                    key: "jobTitle",
                    placeholder: "请输入期望职位"
                },

                {
                    label: "期望工作城市",
                    type: "input",
                    val: "",
                    key: "desiredWorkCity",
                    placeholder: "请输入期望工作城市"
                },
                {
                    label: "薪资要求",
                    type: "input",
                    val: "",

                    key: "salaryExpectation",
                    placeholder: "请输入薪资要求"
                },
                {
                    label: "求职状态",
                    type: "input",
                    val: "",
                    key: "jobSeekingStatus",
                    placeholder: "请输入求职状态"
                },

                {
                    label: "政治面貌",
                    type: "input",
                    val: "",
                    key: "politicalAffiliation",
                    placeholder: "请输入政治面貌"
                },

                {
                    label: "自我总结",
                    type: "editor",
                    val: "",

                    key: "summary",
                    placeholder: "请输入自我总结"
                }
            ],
            eform: [
                {
                    label: "学校名称",
                    type: "input",
                    val: "",

                    key: "institutionName",
                    placeholder: "请输入学校名称"
                },
                {
                    label: "学位",
                    type: "input",
                    val: "",

                    key: "degree",
                    placeholder: "请输入学位"
                },
                {
                    label: "专业",
                    type: "input",
                    val: "",

                    key: "major",
                    placeholder: "请输入学位"
                },
                // {
                //     label: "学历",
                //     type: "options",
                //     op: [
                //         {
                //             label: "男",
                //             value: "男"
                //         },
                //         {
                //             label: "女",
                //             value: "女"
                //         }
                //     ],
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择性别"
                // },
                {
                    label: "开始时间",
                    type: "date",
                    val: "",

                    key: "startDate",
                    placeholder: "请选择开始时间"
                },
                {
                    label: "结束时间",
                    type: "date",
                    val: "",

                    key: "endDate",
                    placeholder: "请选择结束时间"
                },

                {
                    label: "在校经历",
                    type: "editor",
                    val: "",

                    key: "description",
                    placeholder: "请填写在校经历"
                }
            ],
            exform: [
                {
                    label: "公司名称",
                    type: "input",
                    val: "",

                    key: "companyName",
                    placeholder: "请输入公司名称"
                },
                {
                    label: "职位",
                    type: "input",
                    val: "",

                    key: "jobTitle",
                    placeholder: "请输入职位"
                },
                // {
                //     label: "学历",
                //     type: "options",
                //     op: [
                //         {
                //             label: "男",
                //             value: "男"
                //         },
                //         {
                //             label: "女",
                //             value: "女"
                //         }
                //     ],
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择性别"
                // },
                {
                    label: "开始时间",
                    type: "date",
                    val: "",

                    key: "startDate",
                    placeholder: "请选择开始时间"
                },
                {
                    label: "结束时间",
                    type: "date",
                    val: "",

                    key: "endDate",
                    placeholder: "请选择结束时间"
                },

                {
                    label: "工作内容",
                    type: "editor",
                    val: "",

                    key: "description",
                    placeholder: "请填写工作内容"
                }
            ],
            prform: [
                {
                    label: "项目名称",
                    type: "input",
                    val: "",

                    key: "projectName",
                    placeholder: "请输入项目名称"
                },
                {
                    label: "担任角色",
                    type: "input",
                    val: "",

                    key: "role",
                    placeholder: "请输入担任角色"
                },
                // {
                //     label: "学历",
                //     type: "options",
                //     op: [
                //         {
                //             label: "男",
                //             value: "男"
                //         },
                //         {
                //             label: "女",
                //             value: "女"
                //         }
                //     ],
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择性别"
                // },
                {
                    label: "开始时间",
                    type: "date",
                    val: "",

                    key: "startDate",
                    placeholder: "请选择开始时间"
                },
                {
                    label: "结束时间",
                    type: "date",
                    val: "",

                    key: "endDate",
                    placeholder: "请选择结束时间"
                },

                {
                    label: "项目内容",
                    type: "editor",
                    val: "",

                    key: "description",
                    placeholder: "请填写项目内容"
                }
            ],
            sform: [
                {
                    label: "技能名称",
                    type: "input",
                    val: "",

                    key: "skillName",
                    placeholder: "请输入技能名称"
                },
                // {
                //     label: "担任角色",
                //     type: "input",
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请输入担任角色"
                // },
                {
                    label: "熟练程度（5为最高等级）",
                    type: "options",
                    op: [
                        {
                            label: "1",
                            value: "1"
                        },
                        {
                            label: "2",
                            value: "2"
                        },
                        {
                            label: "3",
                            value: "3"
                        },
                        {
                            label: "4",
                            value: "4"
                        },
                        {
                            label: "5",
                            value: "5"
                        }
                    ],
                    val: "",

                    key: "proficiencyLevel",
                    placeholder: "请选择技能等级"
                },
                // {
                //     label: "开始时间",
                //     type: "date",
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择开始时间"
                // },
                // {
                //     label: "结束时间",
                //     type: "date",
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择结束时间"
                // },

                {
                    label: "技能说明",
                    type: "editor",
                    val: "",

                    key: "skillKeywords",
                    placeholder: "请填写技能说明"
                }
            ],
            cform: [
                {
                    label: "证书名称",
                    type: "input",
                    val: "",

                    key: "certificationName",
                    placeholder: "请输入证书名称"
                },
                {
                    label: "颁发机构",
                    type: "input",
                    val: "",

                    key: "issuingOrganization",
                    placeholder: "请输入颁发机构"
                },
                // {
                //     label: "熟练程度（5为最高等级）",
                //     type: "options",
                //     op: [
                //         {
                //             label: "1",
                //             value: "1"
                //         },
                //         {
                //             label: "2",
                //             value: "2"
                //         },
                //         {
                //             label: "3",
                //             value: "3"
                //         },
                //         {
                //             label: "4",
                //             value: "4"
                //         },
                //         {
                //             label: "5",
                //             value: "5"
                //         }
                //     ],
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择技能等级"
                // },
                {
                    label: "颁发日期",
                    type: "date",
                    val: "",

                    key: "issueDate",
                    placeholder: "请选择颁发日期"
                },
                // {
                //     label: "发证网站",
                //     type: "input",
                //     val: "",

                //     key: "fullName",
                //     placeholder: "请选择颁发日期"
                // },
                // {
                //     label: "结束时间",
                //     type: "date",
                //     val: "",
                //
                // key:'fullName',
                // placeholder: "请选择结束时间"
                // },

                {
                    label: "证书描述",
                    type: "editor",
                    val: "",

                    key: "description",
                    placeholder: "请填写证书描述"
                }
            ]
        };
        return key ? op[key] : op;
    };
}
export const com = new Common();
export const op = new Options();
