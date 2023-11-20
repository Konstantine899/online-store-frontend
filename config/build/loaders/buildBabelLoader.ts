import { BuildOptions } from "../types/config";

interface BuildBabelLoaderParams extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader(params: BuildBabelLoaderParams) {
  const { isTsx } = params;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          ["@babel/plugin-transform-typescript", { isTsx }],
          ["@babel/plugin-transform-runtime", {}],
        ],
      },
    },
  };
}