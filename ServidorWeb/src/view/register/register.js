import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";

class Login extends Component {
  constructor(props) {
	super(props);
  
    this.state = {
	   correo: "",
	   password: ""
    };
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
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit"> Ingresar </Button>
        </form>
      </div>
    );
  }
}

export default Login;
