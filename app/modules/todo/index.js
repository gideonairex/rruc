import React from 'react';
import {
	getTodos
} from './actions';
import { connect } from 'react-redux';
import TodoList from './components/list';
import Add from './components/add';
import Test from '../test';
import { push } from 'react-router-redux';

export class Todo extends React.Component {
	constructor () {
		super();
	}

	componentWillMount () {
		this.props.getTodos();
	}

	render () {
		let testParams = {
			'defaultSearchValue' : 'beleo',
			'defaultNameValue'   : 'gideon'
		};

		return (
			<div className="container-fluid">
				<div className="row text-center">
					<div className="col-md-offset-3 col-xs-6 col-md-offset-3">
						<h1>Todo List!</h1>
						<h3 onClick={ this.props.goToTest }> Go to test </h3>
						<Test { ...testParams } />
						<br />
						<Add />
					</div>
					<br />
					<div className="col-md-offset-3 col-xs-6 col-md-offset-3">
						<TodoList todos={ this.props.todos }/>
					</div>
				</div>
			</div>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
		'todos' : state.todoReducer.todos
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		getTodos () {
			dispatch( getTodos() );
		},
		goToTest () {
			dispatch( push( '/test' ) );
		}
	};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Todo );
