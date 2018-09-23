import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./register.css";
import {routes} from '../../routes/routes.js';

class Register extends Component {
  constructor(props) {
	super(props);
  
    this.state = {
	   correo: "",
	   password: "",
	   telefono: "",
	   nombre: "",
	   cedula: ""
    };
  }
  
  validateForm() {
	var emailRE = /\w+@\w+\.\w{2,4}$/;
	var passMayusRE = /.*[A-Z].*/;
	var passMinusRE = /.*[a-z].*/;
	var passNumeroRE = /.*\d.*/;
	var passEspecRE = /[A-Za-z0-9]*(!|@|\$|%|\*|\(|\)|<|>|\?|:|{|}|\+|-|~)[A-Za-z0-9]*/;

	var correoValido = emailRE.exec(this.state.correo);
	var passValido = this.state.password.length > 6 && passMayusRE.exec(this.state.password) && passMinusRE.exec(this.state.password) && passNumeroRE.exec(this.state.password)  && passEspecRE.exec(this.state.password);
	var telefValido = this.state.telefono.length === 8;
	var nombreValido = this.state.nombre.length >= 2 && this.state.nombre.length <= 35;
	var cedulaValida = this.state.cedula.length === 9;
	
    return correoValido && passValido && telefValido && nombreValido && cedulaValida;
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
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="correo" bsSize="large">
            <ControlLabel>Correo electrónico: </ControlLabel>
            <FormControl autoFocus type="correo" value={this.state.correo} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Contraseña (mayor a 6 caracteres): </ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
          </FormGroup>
          <FormGroup controlId="telefono" bsSize="large">
            <ControlLabel>Teléfono celular: </ControlLabel>
            <br/>
            <FormControl type="number" value={this.state.telefono} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="nombre" bsSize="large">
            <ControlLabel>Nombre completo: </ControlLabel>
            <FormControl value={this.state.nombre} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="cedula" bsSize="large">
            <ControlLabel>Número de identificación (cédula): </ControlLabel>
            <FormControl value={this.state.cedula} onChange={this.handleChange} type="number"/>
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit"> Registrar usuario (1/2) </Button>
        </form>
      </div>
    );
  }
}

export default Register;
