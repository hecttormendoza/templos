import React, { Component } from 'react';
import { Col, Input, Radio, Row } from 'antd';
import { PropTypes } from 'prop-types';

const RadioGroup = Radio.Group;
class InfoPrescription extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="info-prescription">
        <Row gutter={16}>
          <Col xs={24} md={12}>
            Fecha
            <Input
              disabled
              placeholder="actualDate"
              value={this.props.actualDate}
            />
          </Col>
          <Col xs={24} md={12}>
            Optometrista
            <Input
              disabled
              placeholder="Optometrista"
              value={this.props.optometrist}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={24}>
            <RadioGroup
              className="prescriptionType"
              name="prescriptionType"
              onChange={this.props.handleCheckboxes}
              value={this.props.prescriptionType}
            >
              <Col xs={24} md={12}>
                <Radio value="monofocal">
                  Receta para monofocal
                </Radio>
              </Col>
              <Col xs={24} md={12}>
                <Radio value="progresiva">
                  Receta para progresiva
                </Radio>
              </Col>
            </RadioGroup>
            {this.props.prescriptionType === 'monofocal' &&
              <RadioGroup
                className="monofocalType"
                name="monofocalType"
                onChange={this.props.handleCheckboxes}
                value={this.props.monofocalType}
              >
                <Col xs={24} md={12}>
                  <Radio value="lejos">
                    Lejos
                  </Radio>
                </Col>
                <Col xs={24} md={12}>
                  <Radio value="cerca">
                    Cerca
                  </Radio>
                </Col>
              </RadioGroup>
            }
          </Col>
          <Col xs={24} md={12}>
          </Col>
        </Row>
      </div>
    );
  }
}
InfoPrescription.propTypes = {
  actualDate: PropTypes.string.isRequired,
  optometrist: PropTypes.string.isRequired,
  handleCheckboxes: PropTypes.func.isRequired,
  prescriptionType: PropTypes.string.isRequired,
  monofocalType: PropTypes.string,

}
export default InfoPrescription;