'use strict';

let webpack = require( 'webpack' );
let config  = require( './webpack.config' );

module.exports = Object.assign( {}, config, {
	'plugins' : [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV' : JSON.stringify( 'production' )
		} )
	]
} );
