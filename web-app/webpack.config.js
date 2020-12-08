const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: 'index.js',entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
		port: 4001
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
		react: path.join(__dirname, 'node_modules', 'react'),
		},
	},
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			loader: 'babel-loader',
			},
		},
		{
			test: /\.css$/,
			use: [
			{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader',
			},
			],
		},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	]
};