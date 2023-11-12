export type buildMode = "development" | "production";
export type buildPath = {
  entry: string;
  build: string;
  html: string;
};

export interface buildOptions {
  mode: buildMode;
  paths: buildPath;
  isDev: boolean;
  port: number;
}
