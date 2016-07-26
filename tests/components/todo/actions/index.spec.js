import {
	getTodos
} from '../../../../app/modules/todo/actions';
import config from '../../../../app/config';
import superagent from 'superagent';
import superagentMock from 'superagent-mocker';
// Create mocker
const mock = superagentMock( superagent );

describe( 'Todo Actions', () => {
	it( 'should get todos', () => {
		mock.get( `${ config.api }/api/v1/todos`, ( req ) => {
			return {
				'body' : [
					{
						'id'   : '33123',
						'name' : 'test'
					}
				],
				'status' : 200
			};
		} );

		const returnDispatch = getTodos();

		returnDispatch( function ( action ) {
			let todo = action.todos[ 0 ];

			expect( action.type ).equal( 'GET_TODOS' );
			expect( todo.id ).equal( 33123 );
			expect( todo.name ).equal( 'test' );
		} );
	} );
} );
