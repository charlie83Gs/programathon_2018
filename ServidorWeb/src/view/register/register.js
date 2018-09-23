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
	   cedula: "",
	   flagError: false,
	   textError: "",
	   tipoError: ""
    };
  }
  
  validateForm() {
	var emailRE = /(\w|\.|-)+@\w+\.\w{2,4}$/;
	var passMayusRE = /.*[A-Z].*/;
	var passMinusRE = /.*[a-z].*/;
	var passNumeroRE = /.*\d.*/;
	var passEspecRE = /.*(!|@|\$|%|\*|\(|\)|<|>|\?|:|{|}|\+|-|~).*/;
	var passNoRepRE = /^(?!.*(.)\1{2,}).+$/;
	var nombreRE = /[A-Z][A-Za-z\s]*/;
	var numeroRE = /\d+/;

	var tamCorreo = this.state.correo.length >= 7 && this.state.correo <= 255;
	var formatoCorreo = emailRE.exec(this.state.correo);
	var correoValido = formatoCorreo && tamCorreo;

	var tamPass = this.state.password.length > 6;
	var caracPass = passMayusRE.exec(this.state.password) && passMinusRE.exec(this.state.password) && passNumeroRE.exec(this.state.password) && passEspecRE.exec(this.state.password);
    var repetPass = passNoRepRE.exec(this.state.password);
	var passValido = tamPass && caracPass && repetPass;

    var tamTelef = this.state.telefono.length === 8;
    var tipoTelef = numeroRE.exec(this.state.telefono);
	var telefValido = tamTelef && tipoTelef;

    var tamNombre = this.state.nombre.length >= 2 && this.state.nombre.length <= 35;
    var inputNombre = nombreRE.exec(this.state.nombre);
	var nombreValido = tamNombre && inputNombre;

    var tamCedula = this.state.cedula.length === 9;
    var tipoCedula = numeroRE.exec(this.state.cedula);
	var cedulaValida = tamCedula && tipoCedula;
	
	if (this.state.flagError) {
	  switch (this.tipoError){
		case "Correo-tamaño":
		  if (tamCorreo) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Correo-formato":
		  if (formatoCorreo) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Password-tamaño":
		  if (tamPass) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Password-caracteres":
		  if (caracPass) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Teléfono-tamaño":
		  if (tamTelef) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Teléfono-número":
		  if (tipoTelef) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Nombre-tamaño":
		  if (tamNombre) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		case "Nombre-entrada":
		  if (inputNombre) {
	        this.setState({
		      flagError: false,
	          textError: "",
	          tipoError: ""
	        });
		  }
		  break;
		default:
		  break;
	  }
	}
	
	if (!this.state.flagError) {
	  if (!tamCorreo) {
	    this.setState({
		  flagError: true,
	      textError: "El correo electrónico debe estar entre 7 y 255 caracteres.",
	      tipoError: "Correo"
	    });
	  }
	  else if (!formatoCorreo){
	    this.setState({
		  flagError: true,
	      textError: "El correo electrónico no sigue el formato adecuado (ej. ejemplo@hotmail.com)."	
	    });
	  }
	}
	
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
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit"> Registrar usuario </Button>
        </form>
        <h6>{this.state.flagError? this.state.textError : "No error"}</h6>
      </div>
    );
  }
}

export default Register;
