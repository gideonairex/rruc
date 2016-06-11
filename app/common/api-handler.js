import superagent from 'superagent';
import config from '../config';

export default {
	get ( url ) {
		return new Promise( function ( resolve, reject ) {
			superagent
				.get( `${config.api}${ url }` )
				.set( 'Accept', 'application/json' )
				.end( ( error, result ) => {
					if ( error ) {
						return reject( error );
					}
					return resolve( result.body, result );
				} );
		} );
	},

	post ( url, body ) {
		return new Promise( function ( resolve, reject ) {
			superagent
				.post( `${config.api}${ url }` )
				.set( 'Accept', 'application/json' )
				.send( body )
				.end( ( error, result ) => {
					if ( error ) {
						return reject( {
							'error'  : error,
							'result' : result
						} );
					}
					return resolve( result.body, result );
				} );
		} );
	},

	put ( url, body ) {
		return new Promise( function ( resolve, reject ) {
			superagent
				.put( `${config.api}${ url }` )
				.set( 'Accept', 'application/json' )
				.send( body )
				.end( ( error, result ) => {
					if ( error ) {
						return reject( {
							'error'  : error,
							'result' : result
						} );
					}
					return resolve( result.body, result );
				} );
		} );
	},

	del ( url ) {
		return new Promise( function ( resolve, reject ) {
			superagent
				.del( `${config.api}${ url }` )
				.set( 'Accept', 'application/json' )
				.end( ( error, result ) => {
					if ( error ) {
						return reject( error );
					}
					return resolve( result.body, result );
				} );
		} );
	}
};
