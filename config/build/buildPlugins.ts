import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import { buildMiniCssExtractPlugin } from './plugins/buildMiniCssExtractPlugin';
import { buildHtmlWebpackPlugin } from './plugins/buildHtmlWebpackPlugin';
import { buildForkTsCheckerWebpackPlugin } from './plugins/buildForkTsCheckerWebpackPlugin';
import { buildNodePolyfillPlugin } from './plugins/buildNodePolyfillPlugin';

export function buildPlugins(options: BuildOptions): webpack.ProgressPlugin[] {
  const { isDev, apiUrl, project } = options;
  const isProd = !isDev;
  const plugins = [
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new webpack.ProgressPlugin(),
    buildHtmlWebpackPlugin(options),
    buildForkTsCheckerWebpackPlugin(),
    buildNodePolyfillPlugin(),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  if (isProd) {
    plugins.push(buildMiniCssExtractPlugin());
  }
  return plugins;
}
