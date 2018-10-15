import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import Prescription from './Prescription/Prescription';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:handle" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/recetas" component={Prescription} />
        </div>
      </Router>
    );
  }
}

export default App;
