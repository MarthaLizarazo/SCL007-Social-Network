import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'; // esta Dep. conecta un componente de react con un store de redux
import { firestoreConnect } from 'react-redux-firebase'; // metodo para hacer las consultas

const Usuarios = () => {
  return (
    <div>
      <h1>Usuario</h1>
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
