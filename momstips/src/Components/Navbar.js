import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <nav className="navbar navvbar-light">
        <span className="navbar-brand mb-0 h1">Moms' Tips</span>
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
      </div>
    </nav>
  );
};
export default Navbar;
