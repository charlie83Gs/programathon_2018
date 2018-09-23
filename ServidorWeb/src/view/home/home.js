import React, { Component } from 'react';
import {routes} from '../../routes/routes.js';

class Home extends Component {
  constructor(props) {
    super(props);
    
      this.state = {
       navigator: this.props.navigator
      };
      
      this.navigateChildRegister = this.navigateChildRegister.bind(this);
      this.navigateLogin = this.navigateLogin.bind(this);

    }


  navigateChildRegister(){
   this.state.navigator.goToView(routes.ChildRegister);
  }

  navigateLogin(){
   this.state.navigator.goToView(routes.Login);
  }


  render() {
    return (
      <div className="center-div-home">
        <header className="App-header">
          <h1 className="App-title">Bienvenido</h1>
        </header>
        <p className="App-intro">
          Ha ingresado.
        </p>
          <a onClick={this.navigateChildRegister}>Agregar Paciente</a><br/>
          <a onClick={this.navigateLogin}>Salir</a>
      </div>
    );
  }
}

export default Home;
