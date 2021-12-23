import { join, resolve } from 'path';
import { webpack } from 'webpack';

export const entry = join(__dirname, 'src', 'index.js');

export const output = {
  path: resolve(__dirname, 'dist'),
};

export const plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
  }),
];
