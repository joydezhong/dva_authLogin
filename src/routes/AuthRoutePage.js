import React from 'react';
import { connect } from 'dva';

import { message } from 'antd';

const success = (mesg) => {
  message.success(mesg);
};

class AuthRoutePage extends React.Component{
	constructor(props){
		super(props)
	}

	handleLoginOut = () => {
		localStorage.clear()
		success("操作成功")
		setTimeout(()=>this.props.history.push('./login') ,1500)
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
