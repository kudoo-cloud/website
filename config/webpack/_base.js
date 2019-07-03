import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import config from "../../config";
import ModernizrWebpackPlugin from "modernizr-webpack-plugin";
import WebpackPwaManifest from "webpack-pwa-manifest";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";
import glob from "glob";
let CopyWebpackPlugin = require("copy-webpack-plugin");
let Dotenv = require("dotenv-webpack");
const paths = config.get("utils_paths");
import marked from "marked";
const markdownRenderer = new marked.Renderer();
import babelConfig from "../../.babelrc.js";

const aliasPaths = {
  images: path.resolve(
    __dirname,
    "../../node_modules/@kudoo/components/build/assets/images"
  )
};

const webpackConfig = {
  name: "client",
  target: "web",
  entry: {
    app: [paths.project(config.get("dir_src")) + "/index.js"]
  },
  output: {
    filename: "[name].[hash].js",
    path: paths.project(config.get("dir_dist")),
    publicPath: "/"
  },
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin([
      {
        from: paths.project(config.get("path_project")) + "/sitemap.xml",
        to: paths.project(config.get("dir_dist")) + "/sitemap.xml"
      },
      {
        from: paths.project(config.get("path_project")) + "/robots.txt",
        to: paths.project(config.get("dir_dist")) + "/robots.txt"
      },
      {
        from: path.resolve(aliasPaths.images, "./logo1200px.png"),
        to: paths.project(config.get("dir_dist")) + "/images/logo1200px.png"
      },
      {
        from: path.resolve(aliasPaths.images, "./favicon.ico"),
        to: paths.project(config.get("dir_dist")) + "/images/favicon.ico"
      },
    ]),
    new Dotenv({
      path: "./.env",
      systemvars: true
    }),
    new ModernizrWebpackPlugin(),
    new ExtractTextPlugin({ filename: "css/[name].[hash].css" }),
    new webpack.ProvidePlugin({
      fetch:
        "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
      Promise:
        "imports-loader?this=>global!exports-loader?global.Promise!es6-promise",
      $: "jquery",
      jQuery: "jquery"
    }),
    new WebpackPwaManifest({
      name: "Kudoo | Where big ideas grow",
      short_name: "Kudoo",
      description:
        "Kudoo Cloud is an open source ERP system built to democratize enterprise business systems and bring them to everybody.",
      background_color: "#ffffff",
      theme_color: "#2bc88f",
      display: "standalone",
      icons: [
        {
          src: path.resolve(aliasPaths.images, "./logo.png"),
          sizes: [36, 48, 72, 96, 144, 192] // multiple sizes
        }
      ]
    })
  ],
  resolve: {
    alias: aliasPaths,
    modules: ["node_modules"],
    extensions: [".json", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /.*(node_modules|kudoo-shared-components).*/,
        enforce: "pre",
        options: {
          fix: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /.*(node_modules|kudoo-shared-components).*/,
        use: {
          loader: "babel-loader",
          options: babelConfig
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!postcss-loader"
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!postcss-loader!sass-loader"
        })
      },
      {
        test: /vendor\/.+\.(jsx|js)$/,
        use: "imports-loader?jQuery=jquery,$=jquery,this=>window"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /.*node_modules\/(?!@kudoo\/components).*/,
        use: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /.*node_modules\/(?!@kudoo\/components).*/,
        loader: "file-loader?prefix=images/&name=[path][name].[ext]"
      },
      {
        test: /\.(png|jpg|jpeg|svg)(\?.*)?$/,
        exclude: /.*node_modules\/(?!@kudoo\/components).*/,
        loader: "url-loader?limit=1024&name=images/[name].[ext]"
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /.*node_modules\/(?!@kudoo\/components).*/,
        loader: "graphql-tag/loader"
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer: markdownRenderer
            }
          }
        ]
      }
    ]
  },
  externals: {
    cheerio: "window",
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    fs: "empty"
  },
  devServer: {
    port: config.get("port")
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: 2
    }
  }
};
// const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
//   name: 'vendor',
//   filename: '[name].[hash].js',
// });
// webpackConfig.plugins.push(commonChunkPlugin);
export default webpackConfig;
