export type BuildMode = "development" | "production";
export type BuildPath = {
    entry: string;
    build: string;
    html: string;
    src: string;
};

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string

}
