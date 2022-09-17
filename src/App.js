import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data =[
  { id: 1, nombre: 'Grand Theft Auto V.', tipo: 'Acción-aventura', clasificacion: 'Mayores de 18', plataforma: 'Multi Plataforma', precio: '$50.00'},
  { id: 2, nombre: 'Minecraft.', tipo: 'Aventura', clasificacion: 'Todo Plublico', plataforma: 'Multi Plataforma', precio: '$45.00' },
  { id: 3, nombre: 'Call of Duty: Warzone.', tipo: 'Guerra', clasificacion: 'Mayores de 18', plataforma: 'Multiplataforma', precio: '$85.00' },
  { id: 4, nombre: 'The Legend of Zelda: Links Awakening', tipo: 'Aventura', clasificacion: 'Todo Plublico', plataforma: 'Nintendo Switch', precio: '$50.00' },
  { id: 5, nombre: 'League of Legends.', tipo: 'Multijugadores en línea', clasificacion: 'Todo Publico', plataforma: 'Multi Plataforma', precio: '$15.00' },
]

class App extends React.Component{
  state = {
    data: data,
    form:{
      id: ' ',
      nombre: ' ',
      tipo: ' ',
      clasificacion: ' ',
      plataforma: ' ',
      precio: ''
    },
    modalInsertar: false,


  };
  handleChange=e=>{
    this.setState({
      form:{
      ...this.state.form,
      [e.target.name]: e.target.value,
      }
    });
  }

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
  }
  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  }

  render() {
  return (
    <>
    <Container>
    <br />
        <Button color="success" onClick={() => this.mostrarModalInsertar()}>Nuevo</Button>
    <br></br>
    <Table>
      <thead><tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Clasificacion</th>
      <th>Plataforma</th>
      <th>Precio</th>
      <th>Acciones</th>
      </tr></thead>
      <tbody>
      {this.state.data.map((elemento)=> (
        <tr>
          <td>{elemento.id}</td>
          <td>{elemento.nombre}</td>
          <td>{elemento.tipo}</td>
          <td>{elemento.clasificacion}</td>
          <td>{elemento.plataforma}</td>
          <td>{elemento.precio}</td>
          <td><Button color="primary">Editar</Button>{"  "}
            <Button color="danger">Eliminar</Button></td> {"  "}
        </tr>
      ))}

      </tbody>
    </Table>
    </Container>
      <Modal isOpen={this.state.modalActualizar}>
        <ModalHeader>
          <div><h3>Editar Registro</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>
              Id:
            </label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.data.length+ 1}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Nombre:
            </label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.personaje}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Tipo:
            </label>
            <input
              className="form-control"
              name="tipo"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Clasificacion:
            </label>
            <input
              className="form-control"
              name="clasificacion"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Plataforma:
            </label>
            <input
              className="form-control"
              name="Plataforma"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Precio:
            </label>
            <input
              className="form-control"
              name="precio"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={() => this.editar(this.state.form)}
          >
            Editar
          </Button>
          <Button
            color="danger"
            onClick={() => this.cerrarModalActualizar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>



      <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
          <div><h3>Insertar  Nuevo Video Juego</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>
              Id:
            </label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Nombre:
            </label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Tipo:
            </label>
            <input
              className="form-control"
              name="tipo"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Clasificacion:
            </label>
            <input
              className="form-control"
              name="clasificacion"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Plataforma:
            </label>
            <input
              className="form-control"
              name="Plataforma"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Precio:
            </label>
            <input
              className="form-control"
              name="precio"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.anime}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.insertar()}>Insertar</Button>
          <Button className="btn btn-danger" onClick={() =>this.ocultarModalInsertar()}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>)
  }
}


export default App;
