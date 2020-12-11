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
		historyApiFallback: true, // <= this lets BrowserRouter work
		proxy: {
			'/api': 'http://localhost:8080' // <= this lets us not need CORS
		  }
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
			{
				// TypeScript
				test: /\.tsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				// SCSS
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	]
};