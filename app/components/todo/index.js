import React from 'react';
import store from '../../store';
import {
	addTodo
} from './actions';
import { v4 } from 'node-uuid';
import { connect } from 'react-redux';

export class Todo extends React.Component {
	constructor () {
		super();
	}

	render () {
		let todos = this.props.todos.map( ( todo ) => {
			return <li key={ todo.id }>{ todo.name }</li>;
		} );

		return (
			<div>
				<h1>{this.props.name}!</h1>
				<button onClick={ this.props.handleClick.bind( this ) }>Click me</button>
				<ul>
					{ todos }
				</ul>
			</div>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
		'todos' : state.todoReducer.todos
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		handleClick () {
			dispatch( addTodo( {
				'id'   : v4(),
				'name' : 'hello 1'
			} ) );
		}
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Todo );
