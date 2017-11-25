const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const manifest = require('./config/manifest');

const extractLess = new ExtractTextPlugin({
    filename: '[name].css?[id]_[contenthash]',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: [
    "babel-polyfill",
    path.join(__dirname, './app/index'),
  ],
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js',
    publicPath: './',
  },
  module: {
    rules: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            // "style-loader",
            "css-loader?sourceMap",
            "less-loader?sourceMap"
          ]
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // plugins: ["transform-decorators-legacy"],
              presets: ["env", "react"]
            }
          }
        ]
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    extractLess,
    new HtmlWebpackPlugin({
      title: manifest.name,
      template: path.join(__dirname, './app/index.ejs'),
      filename: 'index.html',
      files: {
        css: ['main.css'],
      }
    }),
    new WebpackPwaManifest(manifest),
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    // optimizations
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
