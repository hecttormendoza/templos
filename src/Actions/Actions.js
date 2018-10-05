import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Drawer, Icon, Menu } from 'antd';

class Actions extends Component {
  render() {
    return (
      <div className="actions">
        <Drawer
          closable={true}
          onClose={this.props.onClose}
          placement="left"
          title=""
          visible={this.props.visible}
        >
          <div className="hero-user">
            <Avatar
              src=""
              size="large"
              icon="user"
            />
            <small className="user-email">email@email.com</small>
            <p className="user-name">Nombre del Opto</p>
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
      </div>
    );
  }
}

Actions.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Actions;
