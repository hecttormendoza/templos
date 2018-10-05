import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.match.handle
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }
  render() {
    return (
        <div className="navbar">
          <p>Login</p>
        </div>
    );
  }
}

export default Login;