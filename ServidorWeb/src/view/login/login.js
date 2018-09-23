import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import {routes} from '../../routes/routes.js';

class Login extends Component {
  constructor(props) {
	super(props);
  
    this.state = {
	   correo: "",
	   password: "",
	   navigator: this.props.navigator
    };
    
    this.validateSession = this.validateSession.bind(this);
    this.navigateRegister = this.navigateRegister.bind(this);

  }
  
  validateForm() {
	var emailRE = /\w+@\w+\.\w{2,4}$/;
    return (emailRE.exec(this.state.correo)) && (this.state.password.length > 0);
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
  
  navigateRegister(){
	this.state.navigator.goToView(routes.Register);
  }
  
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="correo" bsSize="large">
            <ControlLabel>Correo electrónico</ControlLabel>
            <FormControl autoFocus type="correo" value={this.state.correo} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Contraseña</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit" onClick={this.validateSession}> Ingresar </Button>
          <br/>
          <a onClick={this.navigateRegister}>
            <h5> Registrarse </h5>
          </a>
        </form>
      </div>
    );
  }
}

export default Login;
