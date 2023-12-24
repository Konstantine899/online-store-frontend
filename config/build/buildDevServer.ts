import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer({port, isDev}: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: isDev ? ['http://localhost:3000/online-store'] : [''],
        historyApiFallback: true, // для single page application proxy index.html
        hot: true,

    };
}
