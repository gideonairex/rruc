import apiHandler from '../../../common/api-handler';

export default {
	/**
	 * Get todos
	 *
	 */
	getTodos () {
		return apiHandler.get( '/api/v1/todos' );
	},

	/**
	 * Edit todo
	 *
	 */
	editTodo ( id, body ) {
		return apiHandler.put( `/api/v1/todos/${ id }`, body );
	},

	/**
	 * Add todo
	 *
	 */
	addTodo ( body ) {
		return apiHandler.post( '/api/v1/todos', body );
	}
};
