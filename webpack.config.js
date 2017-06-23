var path = require('path');
var webpack = require('webpack');

module.exports = {
	// app entry point
	entry: './client/index.js',

	// app exit point
	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}