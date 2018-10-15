import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Cookies from 'universal-cookie';
import { Col, Icon, Row } from 'antd';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      image: ''
    };

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();
    const user = cookies.get('user');
    if (user) {
      this.props.history.push('/recetas');
    }
  }

  responseGoogle(response) {
    let date = new Date();
    date.setTime(date.getTime() + (720*60*1000));
    const cookies = new Cookies();
    const user = response.profileObj;
    delete user.googleId;
    cookies.set('user', user, {
      path: '/',
      expires: date
    });
    this.props.history.push('/recetas');
  }
  render() {
    return (
        <div className="login">
          <Row type="flex" justify="center" align="center">
            <Col span={4}>
              <GoogleLogin
                className="button-login"
                clientId="766118980410-8hf2jppiv1mahs4a6di1q0em3m6v4qo6.apps.googleusercontent.com"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              >
                <Icon type="google" theme="outlined" /> Login
              </GoogleLogin>
            </Col>
          </Row>
        </div>
    );
  }
}

export default Login;