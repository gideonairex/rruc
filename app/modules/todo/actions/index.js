import {
	ADD_TODO,
	EDIT_TODO,
	DELETE_TODO,
	GET_TODOS
} from '../../../constants';
import resources from '../resources';

export function addTodo ( todo ) {
	return {
		'type' : ADD_TODO,
		todo
	};
}

export function editTodo ( id, todo ) {
	return {
		'type' : EDIT_TODO,
		id,
		todo
	};
}

export function deleteTodo ( id ) {
	return {
		'type' : DELETE_TODO,
		id
	};
}

export function getTodos () {
	return dispatch => {
		resources
			.getTodos()
			.then( ( todos ) => dispatch( {
				'type' : GET_TODOS,
				todos
			} ) );
	}
}
