import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import LandingRoute from './routes/LandingRoute/LandingRoute';
import AdoptionRoute from './routes/AdoptionRoute/AdoptionRoute';
import SuccessRoute from './routes/SuccessRoute/SuccessRoute';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingRoute}></Route>
            <Route exact path={'/adopt'} component={AdoptionRoute}></Route>
            <Route
              path={'/adopt/form/:animalId'}
              renderer={props => <SuccessRoute {...props} />}
            ></Route>
            <Route exact path={'/success'} component={SuccessRoute} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}
