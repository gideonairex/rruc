'use strict';

const path  = require( 'path' );
let webpack = require( 'webpack' );
let config  = require( './webpack.config' );

config.module.loaders.push( {
	'test'    : /\.css$/,
	'loaders' : [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
	]
} );

module.exports = Object.assign( {}, config, {
	'devServer' : {
		'port'               : 9999,
		'historyApiFallback' : true
	},
	'plugins' : [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV' : JSON.stringify( 'development' )
		} )
	]
} );
