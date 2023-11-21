import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";
import {buildFileLoader} from "./loaders/buildFileLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;
    const tsBabelLoader = buildBabelLoader({...options, isTsx: false});
    const tsxBabelLoader = buildBabelLoader({...options, isTsx: true});
    const cssLoader = buildCssLoader(isDev);
    const svgLoader = buildSvgLoader();
    const fileLoader = buildFileLoader();
    return [tsBabelLoader, tsxBabelLoader, svgLoader, fileLoader, cssLoader];
}
