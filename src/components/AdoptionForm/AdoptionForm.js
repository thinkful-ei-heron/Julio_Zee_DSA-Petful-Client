import React, { Component } from 'react';
import AdoptionApiService from '../../services/adoption-api-service';

export default class AdoptionForm extends Component {
  handleSumbit = e => {
    e.preventDefault();
    AdoptionApiService.adoptCat().then(res => console.log(res));
    this.props.onSubmitSuccess();
  };
  render() {
    console.log(this.props);
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
          <form onSubmit={e => this.handleSumbit(e)}>
            <h3>Adoption Form</h3>
            <p>Enter your name : </p>
            <input type="text" required />
            <p>Enter your Email : </p>
            <input type="text" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
