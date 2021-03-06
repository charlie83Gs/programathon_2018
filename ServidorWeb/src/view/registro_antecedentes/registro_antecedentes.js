import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel,Radio,Col, InputGroup,Modal, Table } from "react-bootstrap";
import './registro_antecedentes.css';
import {routes} from '../../routes/routes.js';

export const caract = {
  background: "#128056",
  color: "#FFFFFF"
}

var ending = /.pdf|.txt|.docx|.jpg|.png|.tiff|.tif/;

class registro_antecedentes extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    this.handleHideArchivo = this.handleHideArchivo.bind(this);
    this.handleHideLink = this.handleHideLink.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    this.tomaArchivo = this.tomaArchivo.bind(this);

    this.state = {
      show: false,
      showArchivo: false,
      showLink: false,
      file: undefined,
      navigator: this.props.navigator
    };
  }

  tomaArchivo(evento){
    let opening = evento.target.files[0];
    if(ending.exec(opening.name)){ 
      console.log(evento.target.files);
     this.setState({file:evento.target.files[0]});
    }
    else{
      //codigo que se ejecuta si el formato del archivo no es válido

    }

  }

  handleHide() {
    this.setState({ show: false });
  }

  handleHideArchivo() {
    this.setState({ showArchivo: false });
  }


  handleHideLink() {
    this.setState({ showLink: false });
  }


  navigateHome(){
  this.state.navigator.goToView(routes.Home);
  }

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
            <Button style={caract}  bsSize="large" onClick={() => this.setState({ show: true })}>Agregar un tipo de antecedente</Button>
            <Button style={caract}  bsSize="large" onClick={this.navigateHome}>Volver</Button>
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
              <Button onClick={() => this.setState({ showArchivo: true, show: false })}>Archivo</Button>
              <Button onClick={() => this.setState({ showLink: true, show: false })}>Enlace</Button>
            </Modal.Footer>
          </Modal>




          <Modal
            show={this.state.showArchivo}
            onHide={this.handleHideArchivo}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Agregue su archivo aquí:
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
          Por favor, suba acá el archivo.
            <input type="file" onChange={this.tomaArchivo} accept=".pdf,.txt,.docx,.jpg,.png,.tiff,.tif"/><br/>
            <FormControl align="center" className={"centroText"} type="text" value={this.state.value} placeholder="Descripción" onChange={this.handleChange}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.guardaArchivo}>Guardar</Button>
              <Button onClick={this.handleHideArchivo}>Cancelar</Button>
            </Modal.Footer>
          </Modal>


          <Modal
            show={this.state.showLink}
            onHide={this.handleHideLink}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                <div>
                  Enlace
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body align="center" >
          Por favor, suba acá el archivo.
              <FormControl align="center" className={"centroText"} type="text" value={this.state.value} placeholder="Ingrese link" onChange={this.handleChange}/><br/>
              <FormControl align="center" className={"centroText"} type="text" value={this.state.value} placeholder="Descripción" onChange={this.handleChange}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.guardaLink}>Guardar</Button>
                <Button onClick={this.handleHideLink}>Cancelar</Button>
            </Modal.Footer>
            
            </Modal>



        </div>
      </div>
    );
  }
}

export default registro_antecedentes;
