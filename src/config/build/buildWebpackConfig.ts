import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildOptions } from "./types/config";

export function buildWebpackConfig(
  options: buildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.entry,
      clean: true,
    },

    plugins: buildPlugins(options),
  };
}
