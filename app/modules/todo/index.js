import React from 'react';
import {
	getTodos
} from './actions';
import { connect } from 'react-redux';
import TodoList from './components/list';
import Add from './components/add';
import Test from '../test';
import { push } from 'react-router-redux';
import {
	Grid,
	Row,
	Col
} from 'react-bootstrap';

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
			<Grid>
				<Row bsClass="center-now">
					<Col md={3} xs={6} mdOffset={3}>
						<h1>Todo List!</h1>
						<h3 onClick={ this.props.goToTest }> Go to test </h3>
						<Test { ...testParams } />
						<br />
						<Add />
					</Col>
					<Col md={3} xs={6} mdOffset={3}>
						<TodoList todos={ this.props.todos }/>
					</Col>
				</Row>
			</Grid>
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
