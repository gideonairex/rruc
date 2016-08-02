import {
	ADD_TODO,
	EDIT_TODO,
	DELETE_TODO,
	GET_TODOS
} from '../../../constants';
import _ from 'lodash';
// Test store for reducer
const todoDefaultState = {
	'todos'    : [],
	'lastEdit' : {
		'id'   : '',
		'name' : ''
	},
	'lastAdded' : {}
};

export default function todoReducer ( state = todoDefaultState, action ) {
	switch ( action.type ) {
		case ADD_TODO:
			return Object.assign( {}, state, {
				'lastAdded' : action.todo
			} );
		case EDIT_TODO:
			return Object.assign( {}, state, {
				'lastEdit' : action.todo
			} );
		case DELETE_TODO:
			return state;
		case GET_TODOS:
			return Object.assign( {}, state, {
				'todos' : action.todos
			} );
		default:
			return state;
	}
}
