import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Form, Col } from "react-bootstrap";
import './interprete.css';

export const caract = {
  background: "#128056",
  color: "#FFFFFF"
}


class interprete extends Component {

  FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

  render() {
    return (

      <div className="ContentInterprete">
        
        <h1 className={"centTitle"}>Intérprete</h1>

        <FormGroup align="center" controlId="formControlsSelect">
          <ControlLabel className={"tablaDim"}>Seleccione a su Paciente</ControlLabel>
          <FormControl className={"tablaDim"} componentClass="select" placeholder="select">
            <option value="other">aca se cargan los niños</option>
          </FormControl><br/>
        </FormGroup>

        <div aling="center">
            <Button aling="center" className={"tablaDim"} style={caract}>Grabar Audio</Button>
        </div><br/>

        <div aling="center">
            <input type="file" onChange={this.tomaArchivo} accept=".pdf,.txt,.docx,.jpg,.png,.tiff,.tif"/><br/>
        </div><br/>

        <div aling="center">
            <Button aling="center" className={"tablaDim"} style={caract}>Guardar</Button>
            <Button aling="center" className={"tablaDim"} style={caract}>Cancelar</Button>
        </div>

      </div>

    );
  }

}

export default interprete;
