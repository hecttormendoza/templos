import React, { Component } from 'react';
import Actions from '../Actions/Actions';
import Cookies from 'universal-cookie';
import logo from '../images/logo.png';
class Header extends Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      location: props.match.params.handle,
      visible: false,
      user: cookies.get('user')
    }
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    const cookies = new Cookies();
    this.setState({
      location: newProps.match.params.handle,
      user: cookies.get('user')
    });
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
    const { location, user } = this.state;

    return (
        <div className="header">
          {location === 'recetas' && 
            <div className="menu">
            <div className="menu-burger" onClick={this.showDrawer}>
              <div className="bar top"></div>
              <div className="bar center"></div>
              <div className="bar bottom"></div>
            </div>
          </div>
          }
          <div className="logo-header">
            <img src={logo} alt="Logo Ben & Frank" />
          </div>
          {user !== undefined && 
            <Actions
              location={this.state.location}
              onClose={this.onClose}
              visible={this.state.visible}
              user={this.state.user}
            />
          }
        </div>
    );
  }
}

export default Header;