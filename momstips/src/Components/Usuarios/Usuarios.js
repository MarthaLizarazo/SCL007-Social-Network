import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'; // esta Dep. conecta un componente de react con un store de redux
import { firestoreConnect } from 'react-redux-firebase'; // metodo para hacer las consultas

const Usuarios = ({ usuario }) => {
  if (!usuario) return <h1>Cargando...</h1>;

  return (
    <div className="row">
      <div className="col-md-12 mb-4">{/* Agregar nuevos amigos */}</div>
      <div className="col-md-8">
        <h2>
          <i className="fab fa-weixin"> </i> Chat
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default compose(
  // compose aplica multiples potenciadores de store // connect va a conectar con el store
  firestoreConnect([{ collection: 'amigos' }]),
  connect((state, props) => ({
    usuario: state.firestore.ordered.amigos
  }))
)(Usuarios);
