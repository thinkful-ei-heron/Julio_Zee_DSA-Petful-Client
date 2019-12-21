import React, { Component } from 'react';
import './AnimalInfo.css';

export default class AnimalInfo extends Component {
  render() {
    return (
      <div>
        <div className="animal__Card">
          <img
            src={this.props.animal.imageURL}
            alt={this.props.animal.imageDesc}
            onClick={() => this.props.onImageClick(this.props.animal)}
          ></img>
          <h2>{this.props.animal.name}</h2>
          <p>{this.props.animal.sex}</p>
          <p>{this.props.animal.age} Years Old</p>
          <p>{this.props.animal.story}</p>
        </div>
      </div>
    );
  }
}
