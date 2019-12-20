import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import LandingRoute from './routes/LandingRoute/LandingRoute';
import AdoptionRoute from './routes/AdoptionRoute/AdoptionRoute';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path={'/'}>
              <LandingRoute />
            </Route>
            <Route exact path={'/adopt'}>
              <AdoptionRoute />
            </Route>
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}
