import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel,Radio,Col, InputGroup,Modal } from "react-bootstrap";
import './registro_antecedentes.css';

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
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Selecciona el tipo de antecedente
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Contained Modal
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
    );
  }
}

export default registro_antecedentes;
