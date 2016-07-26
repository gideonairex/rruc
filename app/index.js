import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Debug from './debug';
import routes from './routes';

// Check if environment is in development
let tools;

if ( process.env.NODE_ENV === 'development' ) {
	tools = <Debug />;
}

ReactDOM.render(
	<Provider store={ store() } >
		{ routes }
	</Provider>,
	document.getElementById( 'app' )
);
