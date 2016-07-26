import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import {
	Todo,
	mapsStateToProps,
	mapsDispatchToProps
} from '../../../app/modules/todo';
// Extend jsx
import expectJSX from 'expect-jsx';
expect.extend( expectJSX );

describe( 'Todo Component', () => {
	it( 'should render element', () => {
		// Get renderer
		const renderer = TestUtils.createRenderer();

		// Mock values
		let props = {
			getTodos () {}
		};

		// Shallow render
		renderer.render( <Todo { ...props }/> );

		// Get rendered component
		const actual = renderer.getRenderOutput();
		// Have an expected render
		const expected = <h1>Todo List!</h1>;

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
		let mockdispatch = function () {
			expect( true ).toEqual( true );
		};

		let actual = mapsDispatchToProps( mockdispatch );

		actual.getTodos();
	} );
} );
