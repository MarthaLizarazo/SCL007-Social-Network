import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Usuarios from './Components/Usuarios/Usuarios';
import NuevoPost from './Components/Usuarios/NuevoPost';
import EditarPost from './Components/Usuarios/EditarPost';

import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/usuarios/nuevo" component={NuevoPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
