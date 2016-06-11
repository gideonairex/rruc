import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import todoReducer from './modules/todo/reducers';
import DevTools from './debug';

// Initialize store
let store;

// Default value for root store
const defaultState = {
	'todoReducer' : {
		'todos' : []
	}
};

// Return a function so we can configure it
export default ( initialState = defaultState ) => {
	if ( store ) {
		return store;
	}

	// List all reducers
	let reducers = {
		todoReducer
	};

	/** List all middlewares to add
	 * example:
	 * let plugins = [ applyMiddleware() ];
	 */
	let plugins = [];

	if ( process.env.NODE_ENV === 'development' ) {
		plugins.push( DevTools.instrument() );
	}

	// Enhancers
	const enhancer = compose( ...plugins );

	// Create store
	store = createStore(
		combineReducers( reducers ),
		initialState,
		enhancer
	);

	// Explicit update of store when active hot-loader
	if ( module.hot ) {
		module.hot.accept( reducers, () => {
			const nextRootReducer = reducers;

			store.replaceReducer( nextRootReducer );
		} );
	}

	return store;
};
