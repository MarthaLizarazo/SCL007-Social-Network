import React, { Component } from 'react';
import logoMoms from './momsTips01.png';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'; // para la autenticacion de Usuarios

import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types'; // para Documentarlo

class Navbar extends Component {
  state = {
    usuarioLogueado: false
  };

  // método que recibe los Props de manera automatica
  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    // el uid quiere decir que está autenticado
    if (auth.uid) {
      return { usuarioLogueado: true };
    } else {
      return { usuarioLogueado: false };
    }
  }

  // Cerrar Sesion
  cerrarSesion = () => {
    const { firebase } = this.props; // me traigo con los props los metodos de firebase
    firebase.logout();
  };

  render() {
    const { usuarioLogueado } = this.state;

    // extrae datos de autenticacion
    const { auth } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-5">
        <nav className="navbar navbar-light">
          <img src={logoMoms} className="logoNavbar" />
          <span className="navbar-brand mb-0 h1"> Moms' Tips</span>
        </nav>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          {usuarioLogueado ? (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/Usuarios'} className="nav-link">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Amigos'} className="nav-link">
                  Amigos
                </Link>
              </li>
            </ul>
          ) : null}
          {usuarioLogueado ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#!" className="nav-link colorText">
                  {auth.email}
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.cerrarSesion}
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  firebase: PropsTypes.object.isRequired,
  auth: PropsTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Navbar);
