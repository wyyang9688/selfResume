import { http, ajax, httpM, ajaxM, httpA, ajaxA } from "@/http/http";

import pinia from "../store/store";
import { useUserStore } from "@/store/user-store";
const userStore = useUserStore(pinia);
console.log(userStore);
console.log(userStore?.test);
export interface PromptSendParams {
    promptType: string;
    promptWord: string;
    promptModel: string;
    promptLabel?: string;
    imageId?: string;

    promptTitle: string;
}

export interface PageParams {
    iDisplayStart?: number | string;
    iDisplayLength?: number | string;
    hasCount?: boolean;
}
export interface RegParams {
    pn: string;
    pwd: string;
    eid: string;
    oid: string;
    name: string;
    headImage: string;
    age?: string | number;
    gender?: string | number;
}
class Service {
    async getPdfSrc(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/download/pdf`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async createResume(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/save/record`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getResumeInfo(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/info/byid`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async savePersonInfo(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/save/person`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async saveSkills(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/save/skills`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async delSkills(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/save/skills`,
            { ...data, delFlag: true },
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async saveCertifications(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/save/certifications`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async delCertifications(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/save/certifications`,
            { ...data, delFlag: true },
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async saveExperience(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/save/experience`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async delExperience(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/save/experience`,
            { ...data, delFlag: true },
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async saveEducation(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/save/education`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async delEducation(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/save/education`,
            { ...data, delFlag: true },
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async saveProjects(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/resume/save/projects`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async delProjects(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/resume/save/projects`,
            { ...data, delFlag: true },
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }

    async printMsg() {
        console.log(userStore.userInfo);
        console.log(userStore.test);
    }
    async getProduct(data: any = {}) {
        const serviceData = await http.get<AnyObject>(
            `/itproduct/api/lst`,
            data,
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async submitQa(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/save/collectins`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getRechargeList(data: any) {
        //consumeType:0充值 1：消费
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/consume/lst`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async delXT(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/school/info/api/task/del`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getDownloadList(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/small/file/docments`,
            data,
            data,
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getMulDownloadList(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/small/file/downloadzips`,
            data,
            data,
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getXTList(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/api/small/task/lst`,
            data,
            data,
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getHasAiPickList(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/records/lst`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async singleSummar(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/ai/gen/abstract`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async AITJWX(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/personalized/recommend/articles`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async downloadPdf(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/file/download`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getTjwxList(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/small/recommendarticles`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getScOptions(data: any) {
        const serviceData = await http.post<AnyObject>(
            `/school/info/api/lst`,
            data,
            data,
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async createOrder(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/it/order/add`,
            data,
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async pay(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/it/order/pay`,
            data,
            {
                ...data
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async submitFeed(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/itproduct/api/save/proposal`,
            data,
            {
                ...data
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async loginIn(data: any) {
        const serviceData = await ajax.post<AnyObject>(
            `/api/acc/login`,
            data,
            {
                ...data
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async saveUserTemplate(data: { template: object }) {
        const serviceData = await ajaxA.post<AnyObject>(
            `/botapp/api/aitemplate/save`,
            {
                ...data
            },
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getTemplateMsg(
        data: {
            channelsCode?: string; //场景
            hotflag?: string | number; //热度
            industryCode?: string; //行业
            purposeCode?: string; //用途
        } & PageParams
    ) {
        const serviceData = await httpA.post<AnyObject>(
            `/botapp/api/aitemplate/lst`,
            {
                ...data
            },
            { ...data },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getSceneList() {
        const serviceData = await httpA.post<AnyObject>(
            `/botapp/api/param/config`,
            {},
            {},
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getUserTemplateList(
        data: {
            channelsCode?: string; //场景
            hotflag?: string | number; //热度
            industryCode?: string; //行业
            purposeCode?: string; //用途
            keyword?: string; //
            uid?: string;
        } & PageParams
    ) {
        const serviceData = await httpA.post<any>(
            `/botapp/api/aitemplate/all`,
            {
                ...data
            },
            { ...data },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getZntList(data: PageParams) {
        const serviceData = await httpA.post<AnyObject>(
            `/botapp/api/lst`,
            {
                ...data
            },
            { ...data },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async sendToWxPublic(data: any) {
        const serviceData = await ajaxA.post<AnyObject>(
            `/coze/wechat/publish`,
            data,
            {
                // uid: userStore?.userInfo?.uid
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async userTokenInfo(params: { uid: string } & PageParams) {
        const serviceData = await httpA.get<AnyObject>(
            `/coze/user/token/info`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async userTokenRecord(params: { uid: string } & PageParams) {
        const serviceData = await httpA.get<AnyObject>(
            `/coze/token/record`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async sendReq(params: { userFlag: string; designId: string }) {
        const serviceData = await ajaxA.get<AnyObject>(
            `/coze/poster/source/image`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async querySrc(params: { userFlag: string; designId: string }) {
        const serviceData = await ajaxA.get<AnyObject>(
            `/coze/poster/source/image/url`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getHistoryQueryList(params: {
        uid: string | number;
        minDate?: string | number;
        // pageNo: string;
        // pageSize: string;
        // keyword?: string;
    }) {
        const serviceData = await httpA.get<AnyObject>(
            `/coze/conversation/message`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getTemplateList(params: {
        kindIds: string | number;
        pageNo: string;
        pageSize: string;
        keyword?: string;
    }) {
        const serviceData = await httpA.get<AnyObject>(
            `/coze/poster/template`,
            {
                ...params
                // uid: userStore?.userInfo?.uid
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getBotDetail(params: { botId: string; token: string }) {
        const serviceData = await httpA.post<AnyObject>(
            `/coze/bot/info`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }

    async sendQuery(params: {
        question: string;
        uid: string;
        botId?: string;
        jobId?: string;
        modelId: string;
        token?: string;
        scene?: string;
        mode?: string;
        cuewordType?: string | number; //0-default,1-title,2-content
    }) {
        let query = { ...params };
        if ("question" in query) {
            delete (query as { question?: string }).question;
        }
        const serviceData = await httpA.post<any>(
            `/coze/conversation/message/ask`,
            {
                ...params
            },
            {
                ...query
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }

    // ----------------------------------------------
    async getProDetail(params: { id: string }) {
        const serviceData = await http.get<AnyObject>(
            `/api/v3/share/proj/view`,
            {
                ...params,
                force: true
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getPlusList(
        params: PageParams & { uid: string; eid: string; obtainState?: string }
    ) {
        const serviceData = await http.post<AnyObject>(
            `/api/v3/drainage/pack/packinfo/lst`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getSpendRecord(
        params: Partial<PageParams> & { eid: string; uid: string }
    ) {
        const serviceData = await http.get<AnyObject>(
            `/pay/lst`,
            {
                ...params,
                catalogs: [2, 18],
                ninTypes: 29,
                all: true
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getShareList(
        params: Partial<PageParams> & { uid: string; eid: string }
    ) {
        const serviceData = await ajax.post<any>(
            `/api/v3/drainage/pack/share/lst`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getUserAb(params: { pn: string }) {
        const serviceData = await http.get<AnyObject>(
            `/kzy/balance/list`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getBalances(params: { did: string }) {
        const serviceData = await http.get<AnyObject>(
            `/dev/wp/billing/balance`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getDevDetail(params: { dids: string }) {
        const serviceData = await http.get<any>(
            `/dev/lst-ali`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async endDev(params: { did: string }) {
        const serviceData = await http.put<any>(
            `/dev/wp/billing/end`,
            {
                ...params
            },
            {
                ...params
            }
        );
        return serviceData.data;
    }
    async startDev(params: { did: string }) {
        const serviceData = await http.put<any>(
            `/dev/wp/billing/start`,
            {
                ...params
            },
            {
                ...params
            }
        );
        return serviceData.data;
    }
    async shortToLongUrl(params: { shortUrl: string }) {
        const serviceData = await http.get<string>(
            `/dev/short/long`,
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async login(params: { pn: string; pwd: string; mode: number }) {
        const serviceData = await ajaxA.post<any>(
            `/api/acc/login`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async reg(params: {
        pn: string;
        pwd: string;
        mode: number;
        industry?: string;
        epname?: string;
    }) {
        const serviceData = await ajaxA.post<any>(
            `/api/acc/register`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getIndustryType(styleConfigsItemsCode: number | string = 1004) {
        let params = {
            styleConfigsItemsCode
        };
        const serviceData = await httpA.post<any>(
            `/botapp/api/param/item`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }

    async rechargePlug(data: any, params: any) {
        const serviceData = await ajax.post<any>(
            `/api/v3/drainage/pack/receive`, //后台二维码
            {
                ...data
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getActDetail(params: any) {
        const serviceData = await httpM.post<any>(
            `/api/act/lst`,
            {
                ...params,
                isMiddleFlag: 1
            },
            {
                ...params,
                isMiddleFlag: 1
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async rechargePlugUserShare(params: any) {
        const serviceData = await ajax.post<any>(
            `/api/v3/drainage/pack/receive`, //所有二维码
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
        // const serviceData = await ajax.post<any>(
        //     `/api/v3/drainage/pack/share`, //用户二维码
        //     {
        //         ...params
        //     },
        //     {},
        //     {
        //         showToast: true
        //     }
        // );
        // return serviceData.data;
    }
    async regAcc(params: RegParams) {
        const serviceData = await ajax.post<any>(
            `/acc/bcq/reg`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
    async getOptions(params: { type: string; promptType?: string | number }) {
        const serviceData = await httpA.post<AnyObject>(
            `/prompt/api/get/congis`,
            {
                ...params
            },
            {
                ...params
            }
        );
        return serviceData.data;
    }
    async updateImg(params: { uid: string; name?: string; headImg?: string }) {
        const serviceData = await ajax.post<AnyObject>(
            `/prompt/api/acc/upt`,
            {
                ...params
            },
            {
                ...params
            },
            {
                showToast: true
            }
        );
        return serviceData.data;
    }
}
export const service = new Service();
