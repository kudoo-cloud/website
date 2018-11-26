import path from 'path';
import webpack from 'webpack';
import webpackConfig from './_base';
import config from '../../config';
const paths = config.get('utils_paths');
import HtmlWebpackPlugin from 'html-webpack-plugin';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
webpackConfig.devtool = 'cheap-module-source-map';

webpackConfig.plugins.push(
	new HtmlWebpackPlugin({
		template: paths.src('../index.html'),
		hash: false,
		filename: 'index.html',
		inject: 'body',
		env: "production",
		minify: {
			collapseWhitespace: true,
		},
	}),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'production',
  })
);

webpackConfig.plugins.push(new webpack.DefinePlugin(config.get('globals')));

webpackConfig.plugins.push(
  new HtmlCriticalPlugin({
    base: path.join(path.resolve(__dirname), '../../build/'),
    src: 'index.html',
    inline: true,
    minify: true,
    dest: 'index.html',
  })
);

webpackConfig.plugins.push(
  new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        unused: true,
        warnings: true,
        dead_code: true,
      },
      output: {
        comments: false,
        beautify: false,
      },
    },
  })
);
export default webpackConfig;
