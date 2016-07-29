import React from 'react';
import { connect } from 'react-redux';

export class Test extends React.Component {
	constructor () {
		super();
	}

	componentWillMount () {
		this.setState( {
			'search' : this.props.defaultSearchValue,
			'name'   : this.props.defaultNameValue
		} );
	}

	onChange ( field ) {
		return function ( e ) {
			let state = this.state;

			state[ field ] = e.target.value;
			this.setState( state );
		}
	}

	render () {
		let lastEdit = <span>Last edit was { this.props.lastEdit.name }</span>;

		return (
			<div className="container-fluid">
				{ lastEdit }
				<input type="text" value={ this.state.search } onChange={ this.onChange( 'search' ).bind( this ) }/>
				<input type="text" value={ this.state.name } onChange={ this.onChange( 'name' ).bind( this ) }/>
			</div>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {
		'lastEdit' : state.todoReducer.lastEdit
	};
}

export function mapsDispatchToProps ( dispatch ) {
	return {};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Test );
