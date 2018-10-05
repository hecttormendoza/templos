import React, { Component } from 'react';
import Actions from '../Actions/Actions';
import logo from '../images/logo.png';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.match.params.handle,
      visible: false
    }
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
        <div className="header">
          <div className="menu">
            <div className="menu-burger" onClick={this.showDrawer}>
              <div className="bar top"></div>
              <div className="bar center"></div>
              <div className="bar bottom"></div>
            </div>
          </div>
          <div className="logo-header">
            <img src={logo} alt="Logo Ben & Frank" />
          </div>
          <Actions onClose={this.onClose} visible={this.state.visible} />
        </div>
    );
  }
}

export default Header;