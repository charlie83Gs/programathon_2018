import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import "./register.css";
import {routes} from '../../routes/routes.js';
import * as stringSimilarity from 'string-similarity';
import {constants} from '../../component/constants.js';

export const caract = {
  background: "#128056",
  color: "#FFFFFF"
}

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
	  tipoError: "",
	  errorCount: 0,
      navigator: this.props.navigator
    };

    this.navigateLogin = this.navigateLogin.bind(this);
    this.validateSession = this.validateSession.bind(this);
  }
  
  navigateLogin(){
    this.state.navigator.goToView(routes.Login);
  }

  
  validateForm() {
	var emailRE = /(\w|\.|-)+@\w+\.\w{2,4}$/;
	var passMayusRE = /.*[A-Z].*/;
	var passMinusRE = /.*[a-z].*/;
	var passNumeroRE = /.*\d.*/;
	var passEspecRE = /.*(!|@|\$|%|\*|\(|\)|<|>|\?|:|{|}|\+|-|~).*/;
	var passNoRepRE = /^(?!.*(.)\1{2,}).+$/;
	var passCompNombre = stringSimilarity.compareTwoStrings(this.state.nombre, this.state.password); 
	var passCompCorreo = stringSimilarity.compareTwoStrings(this.state.correo, this.state.password); 

	var nombreRE = /[A-Z][A-Za-z\s]*/;
	var numeroRE = /\d+/;

	var tamCorreo = this.state.correo.length >= 7 && this.state.correo.length <= 255;
	var formatoCorreo = emailRE.exec(this.state.correo);
	var correoValido = formatoCorreo && tamCorreo;

	var tamPass = this.state.password.length > 6;
	var caracPass = passMayusRE.exec(this.state.password) && passMinusRE.exec(this.state.password) && passNumeroRE.exec(this.state.password) && passEspecRE.exec(this.state.password);
    var repetPass = passNoRepRE.exec(this.state.password);
    var noSimPass = passCompNombre < 0.6 && passCompCorreo < 0.6;
	var passValido = tamPass && caracPass && repetPass && noSimPass;

    var tamTelef = this.state.telefono.length === 8;
    var tipoTelef = numeroRE.exec(this.state.telefono);
	var telefValido = tamTelef && tipoTelef;

    var tamNombre = this.state.nombre.length >= 2 && this.state.nombre.length <= 35;
    var inputNombre = nombreRE.exec(this.state.nombre);
	var nombreValido = tamNombre && inputNombre;

    var tamCedula = this.state.cedula.length === 9;
    var tipoCedula = numeroRE.exec(this.state.cedula);
	var cedulaValida = tamCedula && tipoCedula;
	
	let errors = 0;
	let errorString = "";

	if(!tipoCedula){
		errors++;
		errorString = "La identificación debe estar compuesta únicamente por dígitos."		
	}
	if(!tamCedula){
		errors++;
		errorString = "La identificación debe estar compuesta por 9 dígitos."		
	}
	if(!inputNombre){
		errors++;
		errorString = "Su nombre como encargado sólo debe contener símbolos alfabéticos (Aa-Zz)."		
	}
	if(!tamNombre){
		errors++;
		errorString = "Su nombre debe estar entre los 2 y los 35 caracteres."		
	}
	if(!tipoTelef){
		errors++;
		errorString = "El número de teléfono debe componerse sólo de dígitos numéricos."		
	}
	if(!tamTelef){
		errors++;
		errorString = "El número de teléfono debe estar compuesto por 8 dígitos."		
	}
	if(!noSimPass){
		errors++;
		errorString = "La contraseña no puede ser similar a su nombre y/o correo.";
	}
	if(!repetPass){
		errors++;
		errorString = "La contraseña no puede tener más de 2 caracteres repetidos consecutivos.";
	}
	if(!caracPass){
		errors++;
		errorString = "La contrseña debe contener al menos: Una mayúscula, una minúscula, un número, y un símbolo especial.";
	}
	if(!tamPass){
		errors++;
		errorString = "Su contraseña debe tener 7 caracteres, como mínimo.";
	}
	if(!formatoCorreo){
		errors++;
		errorString = "El formato del correo no es válido (ej. ejemplo@hotmail.com)."
	}
	if(!tamCorreo){
		errors++;
		errorString = "El tamaño del correo debe estar entre 7 y 255 caracteres."
	}
	
	let existerr = errors > 0;
	console.log(tamCorreo);
	if(errors !== this.state.errorCount){
		this.setState({errorCount: errors,
						textError: errorString,
						flagError: existerr});
		//this.forceUpdate();
	
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
  	 fetch(constants.API_URL + ":"+ constants.API_PORT+
  	 	"/register?username="+this.state.nombre+
  	 	"&password="+this.state.password +
  	 	"&correo="+this.state.correo +
  	 	"&cedula="+this.state.cedula +
  	 	"&phone="+this.state.telefono

  	 	).then(
        results => {
        	console.log(results)
          return results.json();
        }).then((result) =>{ 
        	 	this.state.navigator.goToView(routes.Login);
        	}
          );	
  } 



  render() {
    return (
      <div className="Register">
        <div className={"center-div-sign"}>
          <h1 className={"centTitleSign"}>Registro Cube Medic</h1>
          <form horizontal onSubmit={this.handleSubmit}>
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
            <FormGroup>
              <Col>
                <Button className={"tamButtonSign"} style={caract} block bsSize="large" disabled={!this.validateForm()} onClick={this.validateSession}> Registrar usuario</Button>
                <Button className={"tamButtonSign"} style={caract} block bsSize="large" type="submit" onClick={this.navigateLogin}> Cancelar</Button>
              </Col>
            </FormGroup>
          </form>
          <h6>{this.state.flagError? this.state.textError : ""}</h6>
        </div>
      </div>
    );
  }
}

export default Register;
