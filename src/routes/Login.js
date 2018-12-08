import React from 'react';
import { connect } from 'dva';

import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const FormItem = Form.Item;
const success = (mesg) => {
  message.success(mesg);
};

class LoginForm extends React.Component {
	constructor(props){
		super(props)
	}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.username && values.password){
        	success('登录成功')
        	localStorage.setItem('token', values.username + values.password)
        	setTimeout(()=>this.props.history.push('./RoutePage'), 1500)
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<Row>
	      <Col span={18} offset={3} style={{paddingTop: '40px'}}>
	      	
	      	<Form onSubmit={this.handleSubmit} className="login-form">
		        <FormItem>
		          {getFieldDecorator('username', {
		            rules: [{ required: true, message: '输入用户名!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入用户名" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '输入密码!' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入密码" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(
		            <Checkbox>记住</Checkbox>
		          )}
		          <a className="login-form-forgot" href="">忘记密码</a>
		        </FormItem>
		        <FormItem>
		        	 <Button type="primary" htmlType="submit" className="login-form-button">
		            登录
		          </Button>
		          或 <a href="">现在注册!</a>
		        </FormItem>
		      </Form>

	      </Col>
	    </Row>
    );
  }
}

const Login = Form.create()(LoginForm);


Login.propTypes = {

};

export default connect()(Login);