import React, { Component } from 'react';
import { Col, Input, Radio, Row, Select } from 'antd';
import { PropTypes } from 'prop-types';

const Options = Select.Option;
const RadioGroup = Radio.Group;
class Frames extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="frames">
        <Col xs={24} md={12}>
          <h2>¿Utilizas lentes actualmente?</h2>
          <Row className="no-padding">
            Armazón
            <RadioGroup
              name="armazon"
              onChange={this.props.handleCheckboxes}
              value={this.props.armazon}
            >
              <Radio value="si">
                Si
              </Radio>
              <Radio value="no">
                No
              </Radio>
            </RadioGroup>
          </Row>
          <Row className="no-padding">
            Contacto
            <RadioGroup
              name="contacto"
              onChange={this.props.handleCheckboxes}
              value={this.props.contacto}
            >
              <Radio value="si">
                Si
              </Radio>
              <Radio value="no">
                No
              </Radio>
            </RadioGroup>
            {this.props.contacto === 'si' &&
              <Select
                className="selectNoStyle"
                onChange={this.props.handleHours}
                size="small"
                style={{ width: 58 }}
              >
                <Options value="1">1</Options>
                <Options value="2">2</Options>
                <Options value="3">3</Options>
                <Options value="4">4</Options>
                <Options value="5">5</Options>
                <Options value="6">6</Options>
                <Options value="7">7</Options>
                <Options value="8">8</Options>
                <Options value="9">9</Options>
                <Options value="10">10</Options>
                <Options value="11">11</Options>
                <Options value="12">12</Options>
              </Select>
            }
          </Row>
          <Row>
            ¿Cuando fue la última vez que te hiciste un examen?
            <Select
              className="selectNoStyle"
              onChange={this.props.handleYear}
              size="small"
              style={{ width: 58 }}
            >
            <Options value="1">1</Options>
            </Select> Años
            <Select
              className="selectNoStyle"
              onChange={this.props.handleMonth}
              size="small"
              style={{ width: 58 }}
            >
            <Options value="1">1</Options>
            </Select> Meses
          </Row>
          <Row className="no-padding">
            <h2>¿Padeces alguna enfermedad?</h2>
            Diabetes
            <RadioGroup
              name="diabetes"
              onChange={this.props.handleCheckboxes}
              value={this.props.diabetes}
            >
              <Radio value="si">
                Si
              </Radio>
              <Radio value="no">
                No
              </Radio>
            </RadioGroup>
            {this.props.diabetes === 'si' && 
              <Input
                name="treatment"
                onChange={this.props.handleCheckboxes}
                placeholder="Tratamiento"
                style={{ width: 250 }}
                value={this.props.treatment}
              />
            }
          </Row>
          <Row className="no-padding">
            Hipertensión
            <RadioGroup
              name="hypertension"
              onChange={this.props.handleCheckboxes}
              value={this.props.hypertension}
            >
              <Radio value="si">
                Si
              </Radio>
              <Radio value="no">
                No
              </Radio>
            </RadioGroup>
            {this.props.hypertension === 'si' && 
              <Input
                name="surgeries"
                onChange={this.props.handleCheckboxes}
                placeholder="Cirugias oculares"
                style={{ width: 250 }}
                value={this.props.surgeries}
              />
            }
          </Row>
        </Col>
      </div>
    );
  }
}

Frames.propTypes = {
  handleCheckboxes: PropTypes.func.isRequired,
  armazon: PropTypes.string.isRequired,
  contacto: PropTypes.string.isRequired,
  handleHours: PropTypes.func.isRequired,
  handleMonth: PropTypes.func.isRequired,
  handleYear: PropTypes.func.isRequired,
  diabetes: PropTypes.string.isRequired,
  treatment: PropTypes.string.isRequired,
  hypertension: PropTypes.string.isRequired,
  surgeries: PropTypes.string.isRequired,
}

export default Frames;