import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Drawer, Icon, Menu } from 'antd';

class Actions extends Component {
  render() {
    const location = this.props.location;
    return (
      <div className="actions">
        {location === 'recetas' && 
          <Drawer
            closable={true}
            onClose={this.props.onClose}
            placement="left"
            title=""
            visible={this.props.visible}
          >
            <div className="hero-user">
              <Avatar
                src={this.props.user.imageUrl}
                size="large"
                icon="user"
              />
              <small className="user-email">
                {this.props.user.email}
              </small>
              <p className="user-name">
                {this.props.user.name}
              </p>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              inlineCollapsed={false}
            >
              <Menu.Item key="1">
                <Icon type="file-text" theme="outlined" />
                <span>Recetas</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="coffee" theme="outlined" />
                <span>Sala de espera</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="logout" theme="outlined" />
                <span>Salir</span>
              </Menu.Item>
            </Menu>
          </Drawer>
        }
      </div>
    );
  }
}

Actions.propTypes = {
  location: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Actions;
