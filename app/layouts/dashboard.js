import React from 'react';
import {
	AppBar,
	Drawer,
	MenuItem,
	RaisedButton
} from 'material-ui';

class Dashboard extends React.Component {

	componentWillMount () {
		this.state = { 'open' : false };
	}

	handleToggle = () => this.setState( { 'open' : !this.state.open } );

	handleClose = () => this.setState( { 'open' : false } );

	render () {
		return (
			<div>
				<AppBar
					title="My application"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={ this.handleToggle }
				/>
				{ this.props.children }
				<Drawer
					docked={ false }
					width={ 200 }
					open={ this.state.open }
					onRequestChange={ ( open ) => this.setState( { open } ) }
				>
					<MenuItem onTouchTap={ this.handleClose }>Menu Item</MenuItem>
					<MenuItem onTouchTap={ this.handleClose }>Menu Item 2</MenuItem>
				</Drawer>
			</div>
		);
	}
}

export default Dashboard;
