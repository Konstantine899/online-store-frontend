import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: buildOptions): webpack.ProgressPlugin[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
}
