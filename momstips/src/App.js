import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'; // provide hace disponible a redux en toda mi aplicacion

import Usuarios from './Components/Usuarios/Usuarios';
import NuevoPost from './Components/Usuarios/NuevoPost';
import EditarPost from './Components/Usuarios/EditarPost';

import Navbar from './Components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/usuarios/nuevo" component={NuevoPost} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
