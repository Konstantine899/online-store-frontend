import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import {BuildOptions} from "./types/config";
import {buildMiniCssExtractPlugin} from "./plugins/buildMiniCssExtractPlugin";
import {buildHtmlWebpackPlugin} from "./plugins/buildHtmlWebpackPlugin";
import {buildForkTsCheckerWebpackPlugin} from "./plugins/buildForkTsCheckerWebpackPlugin";
import {buildNodePolyfillPlugin} from "./plugins/buildNodePolyfillPlugin";

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
    const {isDev, apiUrl} = options;
    const plugins = [
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl),
        }),
        new webpack.ProgressPlugin(),
        buildHtmlWebpackPlugin(options),
        buildMiniCssExtractPlugin(),
        buildForkTsCheckerWebpackPlugin(),
        buildNodePolyfillPlugin(),
    ];
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}));
    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return plugins;
}
