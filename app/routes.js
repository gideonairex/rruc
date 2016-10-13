import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

const history = syncHistoryWithStore( browserHistory, store() );

/* Layouts */
import Plain from './layouts/plain';
import Dashboard from './layouts/dashboard';

/* App components */
import Todo from './modules/todo';
import Test from './modules/test';

export default (
    <Router history={ history }>
        <Route path="/" component={ Dashboard }>
            <IndexRedirect to="todo"/>
            <Route path="todo" component={ Todo }/>
        </Route>
        <Route path="/test/me" component={ Plain }>
					<IndexRoute component={ Test } />
				</Route>
    </Router>
);
