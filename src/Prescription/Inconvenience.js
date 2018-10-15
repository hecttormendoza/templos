import React, { Component } from 'react';
import { Checkbox, Col } from 'antd';
import PropTypes from 'prop-types';

const CheckboxGroup = Checkbox.Group;
class Inconvenience extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="inconvenience">
        <Col span={12}>
          <h2>¿tienes alguna molestia en los ojos?</h2>
          <CheckboxGroup
            options={this.props.options}
            onChange={this.props.handleInconvenience}
          />
        </Col>
      </div>
    );
  }
}
Inconvenience.propTypes = {
  options: PropTypes.array.isRequired,
  handleInconvenience: PropTypes.func.isRequired,
}
export default Inconvenience;