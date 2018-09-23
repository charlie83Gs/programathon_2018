import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel,Radio,Col, InputGroup } from "react-bootstrap";
import "./child_register.css";
import {routes} from '../../routes/routes.js';

export const caract = {
  background: "#128056",
  color: "#FFFFFF"
}

class ChildRegister extends Component {
  constructor(props) {
	super(props);
  
    this.state = {
	  nombre: "",
	  cedula: "",
	  edad: "",
	  genero: "",
	  fechatratamiento: "",
	  nombremedicamento: "",
	  duraciontratam: "",
	  tratamientofisico: "",
	  enfermedades: "",
	  etnia: "",
    navigator: this.props.navigator

    };

    this.navigateHome = this.navigateHome.bind(this);

  }
  
  validateForm() {
	var nombreRE = /[A-Z][A-Za-z\s]*/;
	var numeroRE = /\d+/;

	var nombreValido = this.state.nombre.length >= 2 && this.state.nombre.length <= 35 && nombreRE.exec(this.state.nombre);
	var cedulaValida = (this.state.cedula.length === 9 && numeroRE.exec(this.state.cedula)) || (this.state.cedula.length === 0);
	var edadValida = this.state.edad.length <= 2 && this.state.edad.length >= 1 && numeroRE.exec(this.state.edad);
	var medicamentoValido = this.state.nombremedicamento.length >= 2 && this.state.nombremedicamento >= 30;
	var duracionValida = this.state.duraciontratam > 0 && this.state.duraciontratam <= 365;
	var tratFisicoValido = this.state.tratamientofisico.length >= 1 && this.state.tratamientofisico.length <= 500;
	var enfermedadValida = this.state.enfermedades.length >= 1 && this.state.enfermedades.length <= 500;
	
    return nombreValido && cedulaValida && edadValida && medicamentoValido && duracionValida && tratFisicoValido && enfermedadValida;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
    
  validateSession(){
  this.state.navigator.goToView(routes.Home);
  }

  navigateHome(){
  this.state.navigator.goToView(routes.Home);
  }  

  render() {
    return (
      <div className="ChildRegister">
        <div className={"center-div-child-reg"}>
          <h1 className={"centTitleSign"}>Registro de Nuevo Paciente</h1><br/>
          <form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="nombre" bsSize="medium">
              <ControlLabel>Nombre completo: </ControlLabel>
              <FormControl value={this.state.nombre} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="cedula" bsSize="medium">
              <ControlLabel>Número de identificación (cédula): </ControlLabel>
              <FormControl value={this.state.cedula} onChange={this.handleChange} type="number"/>
            </FormGroup>
            <FormGroup controlId="edad" bsSize="medium">
              <ControlLabel>Edad (en años cumplidos): </ControlLabel>
              <FormControl value={this.state.cedula} onChange={this.handleChange} type="number"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Género: </ControlLabel><br/>
              <Radio name="radioGroup" inline>
                Masculino
              </Radio>{' '}
              <Radio name="radioGroup" inline>
                Femenino
              </Radio>{' '}
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Etnia</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl><br/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Parentesco: </ControlLabel><br/>
              <Radio name="radioGroup">
                Hija(o)
              </Radio>
              <Radio name="radioGroup">
                Alumna(o)
              </Radio>
              <Radio name="radioGroup">
                A cuidado legalmente
              </Radio>
              
              <Radio name="radioGroup">
                    <input type="radio" aria-label="..." />
                  <FormControl type="text" />
              </Radio>
            </FormGroup>

            <FormGroup>
              <Col sm={14}>
                <Button style={caract} block bsSize="large" disabled={!this.validateForm} type="submit"> Registrar menor </Button>
                <Button style={caract} block bsSize="large" type="submit" onClick={this.navigateHome}> Cancelar </Button>
              </Col>
            </FormGroup>

          </form>

        </div>
      </div>
    );
  }
}

export default ChildRegister;
