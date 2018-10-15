import React, { Component } from 'react';
import { 
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Row,
} from 'antd';
import BasicInfo from './BasicInfo';
import Inconvenience from './Inconvenience';
import Frames from './Frames';
import InfoPrescription from './InfoPrescription';
import axios from 'axios';

class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optometrist: 'Héctor Mendoza',
      actualDate: '12/10/2018',
      modalIsOpen: false,
      loading: false,
      dataSource: [],
      selectedName: '',
      phone: '',
      age: null,
      inconvenience: [
        {
          label: 'Fatiga visual al trabajar con la computadora',
          value: 'Fatiga visual al trabajar con la computadora',
        },
        {
          label: 'Mala visión lejana',
          value: 'Mala visión lejana',
        },
        {
          label: 'Mala visión cercana',
          value: 'Mala visión cercana',
        },
        {
          label: 'Sensibilidad a la luz solar',
          value: 'Sensibilidad a la luz solar',
        },
        {
          label: 'Sensibilidad a la luz artificial',
          value: 'Sensibilidad a la luz artificial',
        },
      ],
      armazon: '',
      contacto: '',
      diabetes: '',
      treatment: '',
      hypertension: '',
      surgeries: '',
      prescriptionType: '',
      monofocalType: '',
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleInconvenience = this.handleInconvenience.bind(this);
    this.handleCheckboxes = this.handleCheckboxes.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  handleChange(value) {
    if (value === undefined) {
      this.setState({
        selectedName: ''
      });
    }
  }

  handleModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  handleOk = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  handleSelect (value, option) {
    this.setState({
      selectedName: value
    })
  }
  handleSearch(value) {
    // const searchUrl = 'https://backend.benandfrank.com/clinicas/receta.php?action=getMatches&word=';
    const searchUrl = 'https://faas.benandfrank.com/drtemplo';
    if (value.length === 7) {
      axios.get(searchUrl)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    }
  }

  handleChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  handleChangeAge(value) {
    this.setState({
      age: value
    })
  }

  handleInconvenience(checkedValues) {
    console.log('--->',checkedValues);
  }

  handleCheckboxes(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleHours(value) {
    console.log(`lente contacto ${value} hrs`);
  }

  handleYear(value) {
    console.log(value);
  }

  handleMonth(value) {
    console.log(value);
  }
  render() {
    return (
      <div className="prescription">
        <h1>Historia Clínica</h1>
        <Form layout="inline">
          <BasicInfo
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
            handleSelect={this.handleSelect}
            handleModal={this.handleModal}
            selectedName={this.state.selectedName}
            handleChangeAge={this.handleChangeAge}
            age={this.state.age}
            handleChangePhone={this.handleChangePhone}
            phone={this.state.phone}
          />
          <Row gutter={16}>
            <Inconvenience
              options={this.state.inconvenience}
              handleInconvenience={this.handleInconvenience}
            />
            <Frames
              handleCheckboxes={this.handleCheckboxes}
              armazon={this.state.armazon}
              contacto={this.state.contacto}
              handleHours={this.handleHours}
              handleMonth={this.handleMonth}
              handleYear={this.handleYear}
              diabetes={this.state.diabetes}
              treatment={this.state.treatment}
              hypertension={this.state.hypertension}
              surgeries={this.state.surgeries}
            />
          </Row>
          <Divider dashed />
          <InfoPrescription
            actualDate={this.state.actualDate}
            optometrist={this.state.optometrist}
            prescriptionType={this.state.prescriptionType}
            handleCheckboxes={this.handleCheckboxes}
            monofocalType={this.state.monofocalType}
          />
        </Form>
        <Modal
          title="Agregar nuevo cliente"
          visible={this.state.modalIsOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="back"
              onClick={this.handleCancel}
            >
              Cancelar
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.state.loading}
              onClick={this.handleOk}
            >
              Enviar
            </Button>,
          ]}
        >
        <Input
          name="surgeries"
          onChange={this.handleCheckboxes}
          placeholder="Cirugias oculares"
          style={{ width: 250 }}
          value={this.state.surgeries}
        />
        </Modal>
      </div>
    );
  }
}

export default Prescription;