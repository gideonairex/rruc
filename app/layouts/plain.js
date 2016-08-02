import React from 'react';

class Plain extends React.Component {
	render () {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

export default Plain;
