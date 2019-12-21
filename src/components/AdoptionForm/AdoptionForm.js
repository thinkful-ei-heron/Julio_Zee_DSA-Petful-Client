import React, { Component } from 'react';
import AdoptionApiService from '../../services/adoption-api-service';

export default class AdoptionForm extends Component {
  onRegisterSumbit = () => {
    //put shit in here which will respond that the user has correctly inputted information and has been placed in a queue
  };
  render() {
    let { imageURL, imageDesc, name, sex, age, story } = this.props.animal;
    return (
      <>
        <div>
          <img src={imageURL} alt={imageDesc}></img>
          <h2>{name}</h2>
          <p>{sex}</p>
          <p>{age} Years Old</p>
          <p>{story}</p>
        </div>
        <div>
          <h2>Fill out this form to sign up for adoption !</h2>
        </div>
      </>
    );
  }
}
