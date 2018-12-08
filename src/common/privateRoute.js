import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class PrivateRoute extends React.Component{
	componentWillMount(){
		let isAuthenticated = localStorage.getItem('token') ? true : false;
		this.setState({ isAuthenticated })
		if(!isAuthenticated){
			const { history } = this.props;
			setTimeout(() => {
				history.replace('/login')
			}, 1000)
		}
	}

	render(){
		let { component: Component, path="/", exact=false, strict=false } = this.props;
		return this.state.isAuthenticated ? (
				<Route path={path} exact={exact} strict={strict} render={(props) => (
						<Component {...props} />
					)} />
			)	: ("请重新登录")
	}
}

PrivateRoute.PropTypes = {
	path: PropTypes.string.isAuthenticated,
	exact: PropTypes.bool,
	strict: PropTypes.bool,
	component: PropTypes.func.isRequired
}

export default withRouter(PrivateRoute);