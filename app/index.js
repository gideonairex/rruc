import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Todo from './modules/todo';
import { Provider } from 'react-redux';
import Debug from './debug';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore( browserHistory, store() );

// Check if environment is in development
let tools;

if ( process.env.NODE_ENV === 'development' ) {
	tools = <Debug />;
}

ReactDOM.render(
	<Provider store={ store() } >
		<Router history={ history }>
			<Route path="/">
				<IndexRedirect to="todo"/>
				<Route path="todo" component={ Todo }/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById( 'app' )
);
