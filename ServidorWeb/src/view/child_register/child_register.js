import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./child_register.css";
import {routes} from '../../routes/routes.js';

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
	  etnia: ""
    };
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

  render() {
    return (
      <div className="ChildRegister">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="nombre" bsSize="large">
            <ControlLabel>Nombre completo: </ControlLabel>
            <FormControl value={this.state.nombre} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="cedula" bsSize="large">
            <ControlLabel>Número de identificación (cédula): </ControlLabel>
            <FormControl value={this.state.cedula} onChange={this.handleChange} type="number"/>
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm} type="submit"> Registrar menor </Button>
        </form>
      </div>
    );
  }
}

export default ChildRegister;
