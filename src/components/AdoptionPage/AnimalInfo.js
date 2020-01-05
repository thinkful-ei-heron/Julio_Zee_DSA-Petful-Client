import React, { Component } from 'react';
import './AnimalInfo.css';

export default class AnimalInfo extends Component {
  render() {
    let { onImageClick, animal } = this.props;
    return (
      <div>
        <div className="animal__Card">
          <img
            src={animal.imageURL}
            alt={animal.imageDesc}
            onClick={() => onImageClick(animal)}
          ></img>
          <h2>{animal.name}</h2>
          <p>{animal.sex}</p>
          <p>{animal.age} Years Old</p>
          <p>{animal.story}</p>
        </div>
      </div>
    );
  }
}
