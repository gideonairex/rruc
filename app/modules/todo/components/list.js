import React from 'react';
import TodoItem from './todo-item';

export class TodoList extends React.Component {
	constructor () {
		super();
	}

	render () {
		let todos = this.props.todos.map( ( todo ) => {
			return <li key={ todo.id }><TodoItem todoId={ todo.id } name={ todo.name }/></li>;
		} );

		return (
			<div className="col-xs-12 text-left">
				<ul className="list-unstyled">
					{ todos }
				</ul>
			</div>
		);
	}
}

export default TodoList;
