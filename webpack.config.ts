import { buildWebpackConfig } from "./src/config/build/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./src/config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  return buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
    port,
  });
};
