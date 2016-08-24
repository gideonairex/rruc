import React from 'react';
import {
	addTodo,
	getTodos
} from '../actions';
import {
	TextField
} from 'material-ui';
import { v4 } from 'node-uuid';
import { connect } from 'react-redux';
import resources from '../resources';
import RaisedButton from 'material-ui/RaisedButton';
import {
	Col
} from 'react-bootstrap';

export class Add extends React.Component {
	constructor () {
		super();
	}

	componentWillMount () {
		this.setState( {
			'addItem' : ''
		} );
	}

	changeValue ( field ) {
		return ( e ) => {
			let state = this.state;

			state[ field ] = e.target.value;
			this.setState( state );
		};
	}

	render () {
		return (
			<div>
				<Col xs={11}>
					<TextField name="add-item" defaultValue={ this.state.addItem } onChange={ this.changeValue( 'addItem' ) } id="todo-name" />
				</Col>
				<Col xs={1}>
					<RaisedButton label="Add" id="add-todo" onClick={ this.props.handleClick.bind( this ) } />
				</Col>
			</div>
		);
	}
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		handleClick () {
			let name = this.state.addItem;
			let id   = v4();

			dispatch( addTodo( {
				id,
				name
			} ) );
			this.setState( {
				'addItem' : ''
			} );
		}
	};
}

export default connect( null, mapsDispatchToProps )( Add );
