import webpack from 'webpack';
import webpackConfig from './_base';
import config from '../../config';
const paths = config.get('utils_paths');
import HtmlWebpackPlugin from 'html-webpack-plugin';

webpackConfig.devtool = 'eval';
webpackConfig.plugins.push(
	new HtmlWebpackPlugin({
		template: paths.src('../index.html'),
		hash: false,
		filename: 'index.html',
		inject: 'body',
		env: "development",
		minify: {
			collapseWhitespace: true,
		},
	}),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
  })
);
webpackConfig.plugins.push(new webpack.DefinePlugin(config.get('globals')));

export default webpackConfig;
