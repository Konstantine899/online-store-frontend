import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface buildCssLoaderParams {
  isDev: boolean;
}

export function buildCssLoader(params: buildCssLoaderParams) {
    const {isDev} = params
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes(".module."),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };
}