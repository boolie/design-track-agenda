const path = require( 'path' );
const WebpackCleanupPlugin = require( 'webpack-cleanup-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const StyleLintPlugin = require( 'stylelint-webpack-plugin' );
const MinifyPlugin = require( 'babel-minify-webpack-plugin' );

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve( __dirname, 'dist' )
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [{
					loader: 'babel-loader',
					options: { presets: [ 'es2015' ] }
				}, {
					loader: 'eslint-loader'
				}],
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader?sourceMap&importLoaders=1!postcss-loader',
						options: {
							minimize: true,
							sourceMap: true
						}
					}]
				})

				// test: /\.css$/,
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
				// 	use: [
				// 		{
				// 			loader: 'css-loader',
				// 			options: {
				// 				minimize: true,
				// 				sourceMap: true
				// 			}
				// 		}
				// 	]
				// })
			}
		]
	},
	devServer: {
		contentBase: path.join( __dirname, 'dist' ),
		inline: true,
		historyApiFallback: true
	},
	plugins: [
		new StyleLintPlugin({
			files: './src/**/*.css'
		}),
		new WebpackCleanupPlugin({
			exclude: ['*.html'],
			quiet: true
		}),
		new HtmlWebpackPlugin({
			filename: '../dist/index.html',
			template: './src/_assets/templates/index.template',
			inject: 'body'
		}),
		new ExtractTextPlugin( '[name].[hash].styles.css' ),
		new MinifyPlugin()
	]
};
