import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h3>Hello, welcome to the Petful adoption experience!</h3>
        <p>
          {' '}
          Here at Petful we pride ourselves on making sure our pets get placed
          in nice homes. Many of our pets have been abandoned, lost, or
          mistreated and could use some TLC. If you are interested in adopting
          or awesome 'Fur Babies' here's what you do:{' '}
        </p>

        <p>
          All of our adoptions are 'First Come First Serve'. To view the pet
          currently available for adoption click the button below. You will then
          be taken to our Adoption page where able to see who the next available
          adoption will be. You can view the image and more details about the
          next pet up for adoption. You can also be added to the waiting list.
          Once the next pet on the list is available, and you are the next on
          the waiting list, you and your new pet can start your new life!
        </p>
        <button>
          <Link to={'/adopt'}>Adopt A Pet Today!</Link>
        </button>
      </div>
    );
  }
}
