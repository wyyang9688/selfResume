import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./store/store";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import uviewPlus from "uview-plus";
// import Http from "./http/http";
import "uview-plus/index.scss";
import gc from "@/components/gc.vue";
import feed from "@/components/feedquery.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "@/style/tailwind.css";
import quill from "quill";
(window as any).Quill = quill;

interface DateConstructor {
    prototype: DatePrototype;
}

interface DatePrototype {
    Format(formatStr: string): string;
    [x: string]: any;
}
(Date.prototype as any as DatePrototype).Format = function (formatStr) {
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
        this.getDate() > 9 ? this.getDate().toString() : "0" + this.getDate()
    );
    str = str.replace(/d|D/g, this.getDate().toString());

    str = str.replace(
        /hh|HH/,
        this.getHours() > 9 ? this.getHours().toString() : "0" + this.getHours()
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

pinia.use(piniaPluginPersistedstate);
const app = createSSRApp(App);
app.use(pinia);
app.use(ElementPlus, {
    locale: zhCn
});
app.component("gc", gc);
app.component("feed", feed);
export function createApp() {
    app.use(uviewPlus);
    return {
        app,
        pinia
    };
}
