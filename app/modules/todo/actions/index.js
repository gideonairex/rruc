import {
	ADD_TODO,
	EDIT_TODO,
	DELETE_TODO,
	GET_TODOS
} from '../../../constants';
import resources from '../resources';

export function getTodos () {
	return async dispatch => {
		try {
			// Get todos
			let todos = await resources.getTodos();

			dispatch( {
				'type' : GET_TODOS,
				todos
			} );
		} catch ( error ) {
			/* Do something with error */
		}
	};
}

export function addTodo ( todo ) {
	return async dispatch => {
		try {
			await resources.addTodo( todo );
			// send event for add todo
			dispatch( {
				'type' : ADD_TODO,
				todo
			}  );
			// send event for get todos
			dispatch( getTodos() );
		} catch ( error ) {
			/* Do something with error */
		}
	};
}

export function editTodo ( id, todo ) {
	return async dispatch => {
		try {
			await resources
				.editTodo( id, {
					'name' : todo.name
				} );
			// send event for edit todo
			dispatch( {
				'type' : EDIT_TODO,
				id,
				todo
			} );
			// Get todos
			dispatch( getTodos() );
		} catch ( error ) {
			/* Do something with error */
		}
	};
}

export function deleteTodo ( id ) {
	return {
		'type' : DELETE_TODO,
		id
	};
}
