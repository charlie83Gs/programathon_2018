import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel,Radio,Col, InputGroup,Modal, Table } from "react-bootstrap";
import './registro_antecedentes.css';

export const caract = {
  background: "#128056",
  color: "#FFFFFF"
}

class registro_antecedentes extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <div className={"center-div-antecedentes"}><br/>
          <h1 className={"centTitleSign"}>Antecedentes de un Paciente</h1>

          <div>

            <FormGroup align="center" controlId="formControlsSelect">
              <ControlLabel className={"tablaDim"}>Seleccione a su Paciente</ControlLabel>
              <FormControl className={"tablaDim"} componentClass="select" placeholder="select">
                <option value="other">aca se cargan los niños</option>
              </FormControl><br/>
            </FormGroup>


            <Table align="center" className={"tablaDim"} striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre del Archivo</th>
                  <th>Descripción</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <Button className={"tamButtom"}  block bsSize="small" type="submit" onClick={this.validateSession}> Borrar</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                </tr>
              </tbody>
            </Table>
          </div>
        

          <div align="center">
            <Button style={caract}  bsSize="large" onClick={() => this.setState({ show: true })}>
              Agregar un tipo de antecedente
            </Button>
          </div>


          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Formato de Antecedente
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
  Seleccione el tipo de archivo en el que quiere importar el antecedente. El archivo soporta los siguientes formatos: pdf, txt, docx, jpg, png y tiff.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Archivo</Button>
              <Button onClick={this.handleHide}>Enlace</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default registro_antecedentes;
