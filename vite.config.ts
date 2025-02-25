import { ConfigEnv, defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Import from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { getConfig } from "./config/cfg";

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
            })
        ],
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
