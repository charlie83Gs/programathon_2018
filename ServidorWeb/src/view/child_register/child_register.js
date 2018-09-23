import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Radio, Col, InputGroup} from "react-bootstrap";
import {RadioGroup} from "react-radio-group";
import "./child_register.css";
import {routes} from '../../routes/routes.js';
import {constants} from '../../component/constants.js';

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
    parentesco: "",
	  fechatratamiento: "",
	  nombremedicamento: "",
	  duraciontratam: "",
	  tratamientofisico: "",
	  enfermedades: "",
	  etnia: 1,
    navigator: this.props.navigator,
    etnias: []

    };

    this.navigateHome = this.navigateHome.bind(this);
    this.validateSession = this.validateSession.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEtniaChange = this.handleEtniaChange.bind(this);
    fetch(constants.API_URL + ":"+ constants.API_PORT+"/getEtnias",{
      method: 'GET',
      credentials: 'same-origin'}).then(
        results => {
          return results.json();
        }).then((result) =>{ 
          //console.log(result.etnias);
          this.loadEtnias(result.etnias);
        }
    );
  }
  
  loadEtnias(result){
    this.setState({etnias : result});
  }
  
  validateForm() {
	var nombreRE = /[A-Z][A-Za-z\s]*/;
	var numeroRE = /\d+/;

	var nombreValido = this.state.nombre.length >= 2 && this.state.nombre.length <= 35 && nombreRE.exec(this.state.nombre);
	var cedulaValida = (this.state.cedula.length === 9 && numeroRE.exec(this.state.cedula)) || (this.state.cedula.length === 0);
	var edadValida = this.state.edad.length <= 2 && this.state.edad.length >= 1 && numeroRE.exec(this.state.edad);
	var generoValido = this.state.genero != undefined;
	var etniaValida = this.state.etnia != undefined;
	//var medicamentoValido = this.state.nombremedicamento.length >= 2 && this.state.nombremedicamento >= 30;
	//var duracionValida = this.state.duraciontratam > 0 && this.state.duraciontratam <= 365;
	//var tratFisicoValido = this.state.tratamientofisico.length >= 1 && this.state.tratamientofisico.length <= 500;
	//var enfermedadValida = this.state.enfermedades.length >= 1 && this.state.enfermedades.length <= 500;
	
    return nombreValido && cedulaValida && edadValida && generoValido && etniaValida; /*&& medicamentoValido && duracionValida && tratFisicoValido && enfermedadValida*/
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleEtniaChange(event) {
    //console.log("changing etnia");
    this.setState({etnia: event.target.value});
  }
  handleGenderChange = event => {
    this.setState({
      genero: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
    
  validateSession(){
    let id = localStorage.getItem('session-id');
    fetch(constants.API_URL + ":"+ constants.API_PORT+
      "/createpacient?username="+this.state.nombre+
      "&edad="+this.state.edad +
      "&parentesco="+this.state.parentesco +
      "&genero="+this.state.genero +
      "&etnia="+this.state.etnia +
      "&cedula="+this.state.cedula +
      "&user_id="+id
      ).then(
        results => {
          //console.log(results);
          return results.json();
        }).then((result) =>{
          this.state.navigator.goToView(routes.Home);
        }
        ); 
	   //this.state.navigator.goToView(routes.Home);
  }  

  navigateHome(){
    this.state.navigator.goToView(routes.Home);
  }  

  render() {
    return (
      <div className="ChildRegister">
        <div className={"center-div-child-reg"}>
          <h1 className={"centTitleSign"}>Registro de Nuevo Paciente</h1><br/>
          <form horizontal="true" onSubmit={this.handleSubmit}>
            <FormGroup controlId="nombre" bsSize="large">
              <ControlLabel>Nombre completo: </ControlLabel>
              <FormControl value={this.state.nombre} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="cedula" bsSize="large">
              <ControlLabel>Número de identificación (cédula): </ControlLabel>
              <FormControl value={this.state.cedula} onChange={this.handleChange} type="number"/>
            </FormGroup>
            <FormGroup controlId="edad" bsSize="large">
              <ControlLabel>Edad (en años cumplidos): </ControlLabel>
              <FormControl value={this.state.edad} onChange={this.handleChange} type="number"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Género: </ControlLabel><br/>
              <RadioGroup name="genero" selectedValue={this.state.genero} onChange={this.handleChange}>
                <Radio name="genero" value="Masculino" inline defaultChecked/> Masculino
                <Radio name="genero" value="Femenino" inline/> Femenino
              </RadioGroup>
            </FormGroup>
            
            <FormGroup controlId="formControlsSelect" >
              <ControlLabel>Etnia</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.state.etnia} onChange={this.handleEtniaChange}>

                 {this.state.etnias.map(function(name, index){
                    return <option key={name} value={index}>{name}</option>;
                  })}
            </FormControl>
            </FormGroup>

            <FormGroup>
             <RadioGroup name="Parentesco" selectedValue={this.state.parentesco} onChange={this.handleChange}>
              <ControlLabel>Parentesco: </ControlLabel><br/>
              <Radio name="Parentesco" value={this.state.parentesco} defaultChecked>
                Hija(o)
              </Radio>
              <Radio name="Parentesco" value={this.state.parentesco} >
                Alumna(o)
              </Radio>
              <Radio name="Parentesco" value={this.state.parentesco} >
                A cuidado legalmente
              </Radio>
              
              <Radio name="Parentesco" value={this.state.parentesco} >
                    <input type="text" aria-label="..." />

              </Radio>
            </RadioGroup>
            </FormGroup>

            <FormGroup>
              <Col sm={14}>
                <Button style={caract} block bsSize="large" disabled={!this.validateForm()} onClick={this.validateSession}> Registrar menor </Button>
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
