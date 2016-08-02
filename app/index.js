import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import store from './store';
import { Provider } from 'react-redux';
import Debug from './debug';
import routes from './routes';

injectTapEventPlugin();

// Check if environment is in development
let tools;

if ( process.env.NODE_ENV === 'development' ) {
	tools = <Debug />;
}

ReactDOM.render(
	<MuiThemeProvider muiTheme={ getMuiTheme( lightBaseTheme ) }>
		<Provider store={ store() } >
			<div>
				{ tools }
				{ routes }
			</div>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById( 'app' )
);
