import type { StorybookConfig } from '@storybook/react-webpack5';
import webpack, { DefinePlugin } from 'webpack';

import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: { storyStoreV7: false },
  webpackFinal: async (
    config: webpack.Configuration,
  ): Promise<webpack.Configuration> => {
    const paths: BuildPath = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('ts', 'tsx');
    config.resolve!.alias = { ...config.resolve!.alias, '@': paths.src };
    config.module!.rules!.push(buildCssLoader(true));

    config.plugins!.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify(`random string`),
        __PROJECT__: JSON.stringify('storybook'), // указываю в каком режиме запускаю
      }),
    );
    return config;
  },
};
export default config;
