import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import superagent from 'superagent';
import superagentMock from 'superagent-mocker';
import config from '../../../app/config';
import {
	Todo,
	mapsStateToProps,
	mapsDispatchToProps
} from '../../../app/modules/todo';
// Extend jsx
import expectJSX from 'expect-jsx';
expect.extend( expectJSX );

// Create mocker
const mock = superagentMock( superagent );

describe( 'Todo Component', () => {
	it( 'should render element', () => {
		// Get renderer
		const renderer = TestUtils.createRenderer();

		// Mock values
		let props = {
			getTodos () {}
		};

		// Shallow render
		renderer.render( <Todo name="Our List" { ...props }/> );

		// Get rendered component
		const actual = renderer.getRenderOutput();
		// Have an expected render
		const expected = <h1>Our List!</h1>;

		// Assert
		expect( actual ).toIncludeJSX( expected );
	} );

	it( 'should return todos', () => {
		let todos = {
			'todoReducer' : {
				'todos' : [
					{
						'id'   : 1,
						'name' : 'hello'
					}
				]
			}
		};
		let actual = mapsStateToProps( todos );

		expect( actual.todos.length ).toEqual( 1 );
	} );

	it( 'should return dispatch to props', () => {
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

		let mockdispatch = function ( getTodo ) {
			let todo = getTodo.todos[ 0 ];

			expect( getTodo.type ).toEqual( 'GET_TODOS' );
			expect( todo.id ).toEqual( '33123' );
			expect( todo.name ).toEqual( 'test' );
		};

		let actual = mapsDispatchToProps( mockdispatch );

		actual.getTodos();
	} );
} );
