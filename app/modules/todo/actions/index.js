import {
	ADD_TODO,
	EDIT_TODO,
	DELETE_TODO,
	GET_TODOS
} from '../../../constants';
import resources from '../resources';

export function getTodos () {
	return dispatch => {
		resources
			.getTodos()
			.then( ( todos ) => dispatch( {
				'type' : GET_TODOS,
				todos
			} ) );
	};
}

export function addTodo ( todo ) {
	return dispatch => {
		resources
			.addTodo( todo )
			.then( () => {
				dispatch( {
					'type' : ADD_TODO,
					todo
				}  );
				// Get todos
				dispatch( getTodos() );
			} );
	};
}

export function editTodo ( id, todo ) {
	return dispatch => {
		resources
			.editTodo( id, {
				'name' : todo.name
			} )
			.then( () => {
				dispatch( {
					'type' : EDIT_TODO,
					id,
					todo
				} );
				// Get todos
				dispatch( getTodos() );
			} );
	};
}

export function deleteTodo ( id ) {
	return {
		'type' : DELETE_TODO,
		id
	};
}
