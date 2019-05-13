import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class NuevoPost extends Component {
  state = {
    comentario: ''
  };

  // agrega nuevo comentario a la base de datos
  agregarComentario = event => {
    event.preventDefault();

    // traer los valores del state
    const nuevoComentario = this.state;

    // extraer firestore (traigo los props)
    const { firestore } = this.props;

    // guardar en la base de datgos
    firestore
      .add({ collection: 'amigos' }, nuevoComentario)
      .then(() => this.props.history.push('/usuarios'));
  };

  // subir el valor del input y guardarlo en el state
  leerChat = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 mb-4">
          <Link to={'/Usuarios'} className="btn btn-secondary">
            <i className="fas fa-arrow-circle-left"> </i> {''}
            Volver al Chat
          </Link>
        </div>
        <div className="col-12">
          <h2>
            <i className="icon fab fa-weixin"> </i> Nuevo Chat
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <form onSubmit={this.agregarComentario}>
                <div className="form-group">
                  <label>Comentario</label>
                  <input
                    type="text"
                    className="form-control"
                    name="comentario"
                    placeholder="Añade un Comentario"
                    required //con required se envia los datos de cada input
                    onChange={this.leerChat}
                    value={this.state.comentario}
                  />
                </div>
                <input
                  type="submit"
                  value="Agregar Comentario"
                  className="btn btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NuevoPost.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(NuevoPost);
