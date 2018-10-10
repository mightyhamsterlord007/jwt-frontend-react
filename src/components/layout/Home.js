import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

	constructor(){
		super();
		this.state = {
			
		};
	}

	componentWillMount() {
		if (!this.props.auth.isAuthenticated) {
			this.props.history.push('/login')
		}
	}

	render(){
		
		return(
			<div>
				
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
  });

export default connect(mapStateToProps)(Home);
