import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Todo } from '../../../app/components/todo';
// Extend jsx
import expectJSX from 'expect-jsx';
expect.extend( expectJSX );

describe( 'Todo Component', () => {
	it( 'should render element', () => {
		// Get renderer
		const renderer = TestUtils.createRenderer();

		// Mock values
		let props = {
			handleClick () {},
			'todos' : [
				{ 'id' : 1, 'name' : 'hello' }
			]
		};

		// Shallow render
		renderer.render( <Todo name="My List" { ...props }/> );

		// Get rendered component
		const actual = renderer.getRenderOutput();
		// Have an expected render
		const expected = <h1>My List!</h1>;

		// Assert
		expect( actual ).toIncludeJSX( expected );
	} );
} );
