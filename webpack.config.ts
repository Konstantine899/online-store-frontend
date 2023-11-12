import webpack from "webpack";
import { buildWebpackConfig } from "./src/config/build/buildWebpackConfig";
import { buildPath } from "./src/config/build/types/config";
import path from "path";

const paths: buildPath = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.tsx"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";

const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
