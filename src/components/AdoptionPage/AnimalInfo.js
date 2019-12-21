import React, { Component } from 'react';
import './AnimalInfo.css';

export default class AnimalInfo extends Component {
  onImageClick = animal_id => {
    console.log(animal_id);
    let path = `/adopt/form/${animal_id}`;
    console.log(path, this);
    //this.props.history.push(path);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="animal__Card">
          <img
            src={this.props.animal.imageURL}
            alt={this.props.animal.imageDesc}
            onClick={() => this.onImageClick(this.props.animal.id)}
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
