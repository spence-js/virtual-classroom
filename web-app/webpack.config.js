const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		publicPath: '/build',
		port: 4001,
		historyApiFallback: true
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
			react: path.join(__dirname, 'node_modules', 'react'),
		},
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'babel-loader',
			exclude: /node_modules/,
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