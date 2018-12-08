import React from 'react';
import { connect } from 'dva';

class AuthRoutePage extends React.Component{
	constructor(props){
		super(props)
	}

	handleLoginOut = () => {
		localStorage.clear()
		this.props.history.push('./login')
	}

	render(){
		return(
			<div>
				<h1>this is Auth page</h1>
				<p>您已登录，正在访问授权页面</p>
				<button onClick={this.handleLoginOut}>退出登录</button>
			</div>
			)
	}
}


AuthRoutePage.propTypes = {

};

export default connect()(AuthRoutePage);
