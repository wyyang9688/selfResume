declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module "uqrcodejs";
declare module "weapp-qrcode-canvas-2d";
declare module "@chuangkit/chuangkit-design";
declare module "crypto-js";
declare module "../data/config.ts";
declare module "../App.vue";
