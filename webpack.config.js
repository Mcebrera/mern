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
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015', 'react']
				}
			},
			{
        test: /\.css$/,
        use: [
          { 
          	loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
		]
	}
}