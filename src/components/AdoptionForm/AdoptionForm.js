import React, { Component } from 'react';

export default class AdoptionForm extends Component {
  render() {
    return (
      <>
        <div>
          <img src={this.props.imageURL} alt={this.props.imageDesc}></img>
          <h2>{this.props.name}</h2>
          <p>{this.props.sex}</p>
          <p>{this.props.age} Years Old</p>
          <p>{this.props.story}</p>
        </div>
        <div>
          <h2>Fill out this form to sign up for adoption !</h2>
        </div>
      </>
    );
  }
}
