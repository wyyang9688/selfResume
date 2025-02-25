export const useRouter = () => {
    const navigateTo = uni.navigateTo;
    const redirectTo = uni.redirectTo;
    const navigateBack = uni.navigateBack;
    const switchTab = uni.switchTab;
    let tabbar = [
        {
            pagePath: "pages/dcenter/dcenter-index",
            text: "设计中心"
        },
        {
            pagePath: "pages/home/home-index",
            text: "首页"
        },

        {
            pagePath: "pages/community/community-index",
            text: "社区"
        },
        {
            pagePath: "pages/my/my-index",
            text: "我的"
        }
    ];
    const push = (option: UniApp.NavigateToOptions) => {
        let isTabbar = false;
        for (let v of tabbar) {
            if (option.url.includes(v.pagePath)) {
                isTabbar = true;
                break;
            }
        }
        if (isTabbar) {
            tab(option);
        } else {
            navigateTo(option);
        }
    };
    const replace = (option: UniApp.RedirectToOptions) => {
        redirectTo(option);
    };
    const back = (option?: any) => {
        navigateBack(option);
    };
    const tab = (option: UniApp.SwitchTabOptions) => {
        switchTab(option);
    };
    return { push, replace, back, tab };
};
