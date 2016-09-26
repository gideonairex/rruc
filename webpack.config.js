'use strict';

let path = require( 'path' );

module.exports = {
	/**
	 * Context on where to find the application
	 *
	 */
	'context' : path.resolve( 'app' ),

	/**
	 * Entry point for transpiling
	 *
	 */
	'entry' : [ 'babel-polyfill', './index.js', './index.html' ],

	/**
	 * Output of the transpiled code
	 *
	 */
	'output' : {
		'filename' : 'index.js',
		'path'     : path.resolve( 'dist' )
	},

	/**
	 * Include modules
	 *
	 */
	'module' : {
		'loaders' : [
			// Transpiles all javascript files
			{
				'test'    : /\.js$/,
				'exclude' : /node_modules/,
				'loaders' : [ 'babel-loader' ]
			},
			// Get file
			{
				'test'   : /\.html$/,
				'loader' : 'file?name=[name].[ext]'
			},
			{
				'test'    : /\.scss$/,
				'loaders' : [ 'style', 'css', 'sass' ]
			}
		]
	}
};
