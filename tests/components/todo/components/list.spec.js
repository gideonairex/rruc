import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import {
	TodoList
} from '../../../../app/modules/todo/components/list';
import expectJSX from 'expect-jsx';
expect.extend( expectJSX );

describe( 'TodoList Component', () => {
	it( 'should render element', () => {
		// Get renderer
		const renderer = TestUtils.createRenderer();

		// Mock values
		let props = {
			'todos' : [
				{
					'id'   : '123123',
					'name' : 'test here'
				}
			]
		};

		// Shallow render
		renderer.render( <TodoList { ...props }/> );

		// Get rendered component
		const actual = renderer.getRenderOutput();
		// Have an expected render
		const expected = 'Connect name="test here" todoId="123123"';

		// Assert
		expect( actual ).toIncludeJSX( expected );
	} );
} );
