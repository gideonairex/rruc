import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

const history = syncHistoryWithStore( browserHistory, store() );

/* App components */
import Todo from './modules/todo';
import Test from './modules/test';

export default (
    <Router history={ history }>
        <Route path="/">
            <IndexRedirect to="todo"/>
            <Route path="todo" component={ Todo }/>
            <Route path="test" component={ Test }/>
        </Route>
    </Router>
);
