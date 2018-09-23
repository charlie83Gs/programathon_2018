import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Form, Col } from "react-bootstrap";
import "./login.css";
import {routes} from '../../routes/routes.js';
import {constants} from '../../component/constants.js';


export const caract = {
  background: "#128056",
  color: "#FFFFFF"
}

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
    console.log("validating...");
    fetch(constants.API_URL + ":"+ constants.API_PORT+"/login?correo="+this.state.correo+"&password="+this.state.password).then(
        results => {
          return results.json();
        }).then((result) =>{ 
          console.log(result)
          if(result.valid){
            this.state.navigator.goToView(routes.Home);
          }
          }
        );

  //this.state.navigator.goToView(routes.Home);
  }
  
  navigateRegister(){
   this.state.navigator.goToView(routes.Register);
  }
  
  render() {
    return (
      <div className={"center-div"} >
          <h1 className={"centTitle"}>Cube Medic</h1>
          <Form className={"divCuadro"} horizontal>
            <FormGroup controlId="correo">
              <Col componentClass={ControlLabel} sm={2}>
                Correo Electrónico
              </Col>
              <Col sm={10}>
                <FormControl className={"tamText"} autoFocus type="correo" value={this.state.correo} onChange={this.handleChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="password">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl className={"tamText"} value={this.state.password} onChange={this.handleChange} type="password"/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={9}>
                <a onClick={this.navigateRegister}>Registrarse</a>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={1} sm={10}>
                <Button className={"tamButtom"} style={caract} block bsSize="large" disabled={!this.validateForm()} onClick={this.validateSession}> Ingresar </Button>
              </Col>
            </FormGroup>
          </Form>
      </div>
    );
  }
}

export default Login;

