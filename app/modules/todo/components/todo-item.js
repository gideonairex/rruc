import React from 'react';
import { connect } from 'react-redux';
import {
	editTodo,
	getTodos
} from '../actions';
import resources from '../resources';

export class TodoItem extends React.Component {
	constructor () {
		super();
	}

	componentWillMount () {
		this.setState( {
			'editMode' : false,
			'name'     : this.props.name
		} );
	}

	changeValue ( field ) {
		return ( e ) => {
			let state = this.state;

			state[ field ] = e.target.value;
			this.setState( state );
		};
	}

	changeEditMode ( value ) {
		return () => {
			this.setState( {
				'editMode' : value
			} );
		};
	}

	render () {
		let todoItem = <h3>{ this.props.name }&nbsp;&nbsp;<button className="btn btn-default" onClick={ this.changeEditMode( true ) }>edit</button></h3>;

		if ( this.state.editMode ) {
			todoItem = <div>
				<input className="form-control" type="text" value={ this.state.name } onChange={ this.changeValue( 'name' ) }/>
				<button className="btn btn-default" onClick={ this.props.save.bind( this ) }>save</button>
				<button className="btn btn-default" onClick={ this.changeEditMode( false ) }>cancel</button>
				</div>;
		}

		return (
			<div>
				{ todoItem }
			</div>
		);
	}
}

export function mapsDispatchToProps ( dispatch ) {
	return {
		// When clicked edit
		save () {
			resources
				.editTodo( this.props.todoId, {
					'name' : this.state.name
				} )
				.then( () => {
					// Update last edit
					dispatch( editTodo( this.props.todoId, {
						'id'   : this.props.todoId,
						'name' : this.state.name
					} ) );

					// Get full list again
					return resources.getTodos();
				} )
				.then( ( todos ) => {
					dispatch( getTodos( todos ) );

					// Return mode
					this.changeEditMode( false )();
				} );
		}
	};
}

export default connect( null, mapsDispatchToProps )( TodoItem );
