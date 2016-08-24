import React from 'react';
import TodoItem from './todo-item';
import {
	Col
} from 'react-bootstrap';

export class TodoList extends React.Component {
	constructor () {
		super();
	}

	render () {
		let todos = this.props.todos.map( ( todo ) => {
			return <li key={ todo.id }><TodoItem todoId={ todo.id } name={ todo.name }/></li>;
		} );

		return (
			<Col xs={12}>
				<ul className="list-unstyled">
					{ todos }
				</ul>
			</Col>
		);
	}
}

export default TodoList;
