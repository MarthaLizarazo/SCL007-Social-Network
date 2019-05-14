import React, { Component } from 'react';
import logoMoms from './logoMoms.jpg';

import '../Auth/Login.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
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
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
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
                  className="btn btn-succes btn-secondary btn-block"
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

export default Login;
