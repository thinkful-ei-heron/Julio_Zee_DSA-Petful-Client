import React, { Component } from 'react';
import AdoptionPage from '../../components/AdoptionPage/AdoptionPage';

export default class AdoptionRoute extends Component {
  render() {
    return (
      <>
        <p>
          Below we have our current line up of dogs and cats that are up for
          adoption. Get in line now and adopt a beautiful little fluff ball.
        </p>
        <AdoptionPage />
      </>
    );
  }
}
