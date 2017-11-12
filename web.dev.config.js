const path = require("path");
const webpack = require("webpack");
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');
const manifest = require('./config/manifest');

module.exports = {
	devServer: {
			// this is to forcing reload while index.ejs is changed
	    contentBase: [ path.join(__dirname, "./app/index.ejs"), path.join(__dirname, "./config") ],
	    watchContentBase: true
	},
	devtool: "cheap-module-eval-source-map",
	entry: [
		// 'webpack-hot-middleware/client',
		"babel-polyfill",
		path.join(__dirname, "./app/index")
	],
	output: {
		path: path.join(__dirname, "./public"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader?sourceMap",
					"less-loader?sourceMap"
				]
			},
			{
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
			},
			{
				test: /\.json$/,
				use: ["json-loader"]
			}
		]
	},
	plugins: [
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			title: manifest.name,
			template: path.join(__dirname, "./app/index.ejs"),
			filename: "index.html"
		}),
		new WebpackPwaManifest(manifest),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development"),
				PLATFORM_ENV: JSON.stringify("web")
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
