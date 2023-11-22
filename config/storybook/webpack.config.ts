import webpack from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default function ({
  config,
}: {
  config: webpack.Configuration;
}): webpack.Configuration {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('ts', 'tsx');
  config.resolve.alias = { '@': paths.src };
  config.module.rules.push(buildCssLoader(true));
  return config;
}
