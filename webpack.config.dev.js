'use strict';

let webpack = require( 'webpack' );
let config  = require( './webpack.config' );

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
