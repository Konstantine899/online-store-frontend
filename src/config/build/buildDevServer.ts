import { buildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({ port }: buildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
  };
}
