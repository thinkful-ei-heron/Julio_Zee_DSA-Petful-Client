import React, { Component } from 'react';
import AdoptionPage from '../../components/AdoptionPage/AdoptionPage';
import AdoptionForm from '../../components/AdoptionForm/AdoptionForm';

export default class AdoptionRoute extends Component {
  state = {
    animalClicked: {},
    clicked: false,
  };
  onImageClick = animal => {
    //let path = `/adopt/form/${animal.id}`;
    this.setState({
      animalClicked: animal,
      clicked: true,
    });
  };
  render() {
    return (
      <>
        <p>
          Below we have our current line up of dogs and cats that are up for
          adoption. Get in line now and adopt a beautiful little fluff ball.
        </p>
        {this.state.clicked === false ? (
          <AdoptionPage onImageClick={this.onImageClick} />
        ) : (
          <AdoptionForm animal={this.state.animalClicked} />
        )}
      </>
    );
  }
}
