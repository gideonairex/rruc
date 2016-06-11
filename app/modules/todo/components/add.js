import React from 'react';
import {
	addTodo,
	getTodos
} from '../actions';
import { v4 } from 'node-uuid';
import { connect } from 'react-redux';
import resources from '../resources';

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
				<div className="col-xs-11">
					<input className="form-control" type="text" value={ this.state.addItem } onChange={ this.changeValue( 'addItem' ) } id="todo-name" />
				</div>
				<div className="col-xs-1">
					<button className="btn btn-default btn-primary" id="add-todo" onClick={ this.props.handleClick.bind( this ) }>Add</button>
				</div>
			</div>
		);
	}
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		handleClick () {
			let name = this.state.addItem;
			let id   = v4();

			resources
				.addTodo( {
					id,
					name
				} )
				.then( () => {
					// Dispatch
					dispatch( addTodo( {
						id,
						name
					} ) );

					// Get full list again
					return resources.getTodos();
				} )
				.then( ( todos ) => {
					dispatch( getTodos( todos ) );

					this.setState( {
						'addItem' : ''
					} );
				} );
		}
	};
}

export default connect( null, mapsDispatchToProps )( Add );
