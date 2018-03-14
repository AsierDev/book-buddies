import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css'

import './App.css';

import { Route, HashRouter } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import MainPage from './components/MainPage/MainPage'
/*import ListPage from './components/ListPage'
 */



class App extends Component {
  render() {
    return (
      <div className="App">

        <HashRouter>
          <div>
            <Route exact path="/" render={() => (
              <LandingPage />
            )} />
            <Route exact path="/login" render={() => (
              <Login />
            )} />
            <Route path="/register" render={() => (
              <Register/>
            )} />
            <Route path="/browse" render={() => (
              <MainPage />
            )} />
            {/*<Route path="/results" render={() => (
              <ListPage />
            )} /> */}

          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
