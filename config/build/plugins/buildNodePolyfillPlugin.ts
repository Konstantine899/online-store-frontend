import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

export function buildNodePolyfillPlugin() {
    return new NodePolyfillPlugin()
}