import { ConfigEnv, defineConfig } from "vite";
import path from "path";
import uni from "@dcloudio/vite-plugin-uni";
import Import from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { getConfig } from "./config/cfg";
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from "weapp-tailwindcss/vite";

const isH5 = process.env.UNI_PLATFORM === "h5";
const isApp = process.env.UNI_PLATFORM === "app";
const WeappTailwindcssDisabled = isH5 || isApp;

const resolve = (p) => {
    return path.resolve(__dirname, p);
};
const getViteConfig = (configEnv: ConfigEnv) => {
    const { mode } = configEnv;

    const option = {
        plugins: [
            uni(),

            Import({
                imports: ["vue", "vue-router"],
                dts: "./import.d.ts",
                eslintrc: {
                    enabled: false,
                    filepath: "./.eslintrc-auto-import.json",
                    globalsPropValue: true
                }
            }),
            Import({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            }),
            // start 引入tailwindcss增加的配置plugins
            uvwt({
                rem2rpx: true,
                disabled: WeappTailwindcssDisabled,
                // 由于 hbuilderx 会改变 process.cwd 所以这里必须传入当前目录的绝对路径
                tailwindcssBasedir: __dirname
            })
            // end 引入tailwindcss增加的配置plugins
        ],
        //
        css: {
            postcss: {
                plugins: [
                    require("tailwindcss")({
                        // 注意此处，手动传入你 `tailwind.config.js` 的绝对路径
                        config: resolve("./tailwind.config.js")
                    }),
                    require("autoprefixer")()
                ]
            }
        },
        define: {
            "import.meta.env.config": JSON.stringify(getConfig())
        },
        base: "./",
        build: {
            target: "es6"
        },
        esbuild: {},
        server: {
            host: "0.0.0.0",
            // inline: false,
            port: 3001,
            open: false,
            proxy: {
                "/proxy": {
                    // target: "https://ruyingreview.hentre.top",
                    // target: "https://rysmall.hentre.top",
                    // target: "http://172.16.8.80:8089/",
                    target: "https://ruyingsmall.hentre.top",
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/proxy/, "")
                }
            }
        }
    };
    if (mode !== "development") {
        option.esbuild = {
            // drop: ["console", "debugger"]
        };
    }
    return option;
};
// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => getViteConfig(configEnv));
