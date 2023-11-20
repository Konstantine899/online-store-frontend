import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildTypescriptLoader } from "./loaders/buildTypescriptLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const typeScriptLoader = buildTypescriptLoader();
  const cssLoader = buildCssLoader({ isDev });
  return [typeScriptLoader, cssLoader];
}
