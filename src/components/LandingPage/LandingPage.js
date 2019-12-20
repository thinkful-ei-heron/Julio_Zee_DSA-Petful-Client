import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h3>Hello, welcome to out adoption website !</h3>
        <button>
          <Link to={'/adopt'}>Adopt A Pet Today!</Link>
        </button>
      </div>
    );
  }
}
