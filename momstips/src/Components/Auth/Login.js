import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';

import logoMoms from './logoMoms.jpg';

import '../Auth/Login.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  //Iniciar Sesion en Firebase
  iniciarSesion = event => {
    event.preventDefault();

    // extraemos Firebase
    const { firebase } = this.props;

    // extraemos el state para comparar
    const { email, password } = this.state;

    // autenticar usuario, usando el metodo de firebase (login)
    firebase
      .login({
        email,
        password
      })
      .then(resolve => console.log('Iniciaste Sesión'))
      .catch(reject => console.log('Hubo un error'));
  };

  leerDatos = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-5">
            <div className="card-body text-center">
              <img src={logoMoms} className="logo" />
              <h2 className="text-center py-4">
                <i className="fas fa-lock"> </i> Inicio de Sesión
              </h2>
              <form onSubmit={this.iniciarSesion}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.leerDatos}
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.leerDatos}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-succes btn-success btn-block"
                  value="Iniciar Sesión"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default firebaseConnect()(Login);
