import React, { Component } from 'react';
import AdoptionPage from '../../components/AdoptionPage/AdoptionPage';

export default class AdoptionRoute extends Component {
  onImageClick = animal_id => {
    console.log(animal_id);
    let path = `/adopt/form/${animal_id}`;
    console.log(path, this);
    //this.props.history.push(path);
  };
  render() {
    return (
      <>
        <p>
          Below we have our current line up of dogs and cats that are up for
          adoption. Get in line now and adopt a beautiful little fluff ball.
        </p>
        <AdoptionPage onImageClick={this.onImageClick} />
      </>
    );
  }
}
