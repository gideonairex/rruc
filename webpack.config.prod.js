'use strict';

let webpack             = require( 'webpack' );
let config              = require( './webpack.config' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

config.module.loaders.push( {
	'test'   : /\.css$/,
	'loader' : ExtractTextPlugin.extract( 'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' )
} );

module.exports = Object.assign( {}, config, {
	'plugins' : [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV' : JSON.stringify( 'production' )
		} ),
		new ExtractTextPlugin( 'app.css', {
			'allChunks' : true
		} )
	]
} );
