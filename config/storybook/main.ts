import type { StorybookConfig } from '@storybook/react-webpack5';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
    'storybook-addon-remix-react-router',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime:
            'automatic' /* После вкл данной опции не требуется import React в каждую stories,
           он импортироуется автоматически*/,
        },
      },
    },
  }),

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

    /*В storybook есть собственный loader обрабатывающий svg. Для того что бы подключить @svgr/webpack,
     * необходимо исключить из rules exclude loader svg, и далее подключить @svgr/webpack */
    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    // Добавляю правило для обработки svg
    config.module!.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

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
