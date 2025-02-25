/// <reference types="vite/client" />
import type { Uni as _Uni } from "@dcloudio/types";
declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module "uview-plus";
declare module "uqrcodejs";

interface Config {
    BASE_URL: string;
}

declare global {
    const my: any;
    interface Uni extends _Uni {
        $u: any;
    }
}
