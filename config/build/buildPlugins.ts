import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildMiniCssExtractPlugin } from "./plugins/buildMiniCssExtractPlugin";
import { buildHtmlWebpackPlugin } from "./plugins/buildHtmlWebpackPlugin";
import { buildForkTsCheckerWebpackPlugin } from "./plugins/buildForkTsCheckerWebpackPlugin";

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
  const { isDev } = options;
  const plugins = [
    new webpack.ProgressPlugin(),
    buildHtmlWebpackPlugin(options),
    buildMiniCssExtractPlugin(),
    buildForkTsCheckerWebpackPlugin(),
  ];
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return plugins;
}