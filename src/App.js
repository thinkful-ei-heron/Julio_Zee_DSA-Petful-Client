import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Router, Switch } from 'react-router-dom';
import landingRoute from './routes/landingRoute/landingRoute';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main></main>
        <footer></footer>
      </div>
    );
  }
}
