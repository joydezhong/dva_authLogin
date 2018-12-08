import React from 'react';
import { connect } from 'dva';

class PublicPage extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<h1>this is Pubilc page</h1>
				<p>公共页面</p>
			</div>
			)
	}
}


PublicPage.propTypes = {

};

export default connect()(PublicPage);
