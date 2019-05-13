import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'; // esta Dep. conecta un componente de react con un store de redux
import { firestoreConnect } from 'react-redux-firebase'; // metodo para hacer las consultas
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../Diseño/Spinner';
import '../Diseño/icon.css';

const Usuarios = ({ usuario, firestore }) => {
  if (!usuario) return <Spinner />;

  // Eliminar chat con firestore
  const eliminarChat = id => {
    firestore.delete({ collection: 'amigos', doc: id });
  };

  return (
    <div className="row">
      <div className="col-md-12 mb-4">{/* Agregar nuevos amigos */}</div>
      <div className="col-md-8">
        <h2>
          <i className="icon fab fa-weixin"> </i> Chat
        </h2>
      </div>
      <table className="table table-striped mt-4">
        <thead className="text-light bg-primary">
          <tr>
            <th>Foto</th>
            <th>Amigo</th>
            <th>Comentario</th>
          </tr>
        </thead>

        <tbody>
          {usuario.map(friend => (
            <tr key={friend.id}>
              <td>{friend.foto}</td>
              <td>{friend.nombre}</td>
              <td>{friend.comentario}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => eliminarChat(friend.id)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Usuarios.propTypes = {
  firestore: PropTypes.object.isRequired,
  usuario: PropTypes.array
};

export default compose(
  // compose aplica multiples potenciadores de store // connect va a conectar con el store
  firestoreConnect([{ collection: 'amigos' }]),
  connect((state, props) => ({
    usuario: state.firestore.ordered.amigos
  }))
)(Usuarios);
