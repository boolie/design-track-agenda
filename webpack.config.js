const path = require( 'path' );
const WebpackCleanupPlugin = require( 'webpack-cleanup-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const StyleLintPlugin = require( 'stylelint-webpack-plugin' );
const MinifyPlugin = require( 'babel-minify-webpack-plugin' );
const SWPrecacheWebpackPlugin = require( 'sw-precache-webpack-plugin' );

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
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
						'postcss-loader'
					]
				})
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
			exclude: [ '*.html', 'assets/gfx/**/*.svg', 'sw.js', '*.ico', '*.json', 'assets/gfx/**/*.png' ],
			quiet: true
		}),
		new HtmlWebpackPlugin({
			filename: '../dist/index.html',
			template: './src/_assets/templates/index.template',
			inject: 'body'
		}),
		new ExtractTextPlugin( '[name].[hash].styles.css' ),
		new MinifyPlugin(),
		new SWPrecacheWebpackPlugin({
			cacheId: 'pegaworld',
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			filename: 'sw.js',
			mergeStaticsConfig: true,
			minify: true,
			stripPrefix: 'dist',
			staticFileGlobs: [
				'dist/assets/**/*.svg'
			],
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
		})
	]
};
