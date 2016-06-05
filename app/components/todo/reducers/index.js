import {
	ADD_TODO
} from '../../../constants';

// Test store for reducer
const todoDefaultState = {
	'todos' : []
};

export default function todoReducer ( state = todoDefaultState, action ) {
	switch ( action.type ) {
		case ADD_TODO:
			return Object.assign( {}, state, {
				'todos' : [ ...state.todos, action.todo ]
			} );
		default:
			return state;
	}
}
