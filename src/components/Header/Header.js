import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <header>
          <Link to={'/'}>
            <h1>Ticonderoga Adoption Center</h1>
          </Link>
        </header>
      </div>
    );
  }
}
