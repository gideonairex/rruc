import React from 'react';
import { connect } from 'react-redux';

export class Test extends React.Component {
	constructor () {
		super();
	}

	componentWillMount () {
	}

	render () {
		return (
			<div className="container-fluid">
				Test
			</div>
		);
	}
}

export function mapsStateToProps ( state ) {
	return {};
}

export function mapsDispatchToProps ( dispatch ) {
	return {};
}

export default connect( mapsStateToProps, mapsDispatchToProps )( Test );
