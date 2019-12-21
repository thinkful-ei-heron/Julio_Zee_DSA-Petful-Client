import React, { Component } from 'react';
import adoptionApiService from '../../services/adoption-api-service';
import { Link } from 'react-router-dom';
import AdoptionForm from '../AdoptionForm/AdoptionForm';
import AnimalInfo from './AnimalInfo';
import './AdoptionPage.css';

export default class AdoptionPage extends Component {
  state = {
    listOfDogs: {},
    listOfCats: {},
    currentDog: {},
    currentCat: {},
    currentDogForAdoption: {},
    currentCatForAdoption: {},
  };

  updateState = () => {
    adoptionApiService.showAllAnimals().then(data => {
      this.updateAdoptionInfo(data);
    });
  };

  updateAdoptionInfo(data) {
    this.setState({
      listOfCats: this.createList(data.catQueue, []),
      listOfDogs: this.createList(data.dogQueue, []),
      currentDog: data.dogQueue.first.data,
      currentCat: data.catQueue.first.data,
      currentDogForAdoption: data.dogQueue.last.data,
      currentCatForAdoption: data.catQueue.last.data,
    });
  }

  createList(queue, arr) {
    let node = queue.first;
    while (node !== null) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    let {
      listOfCats,
      listOfDogs,
      currentCat,
      currentDog,
      currentCatForAdoption,
      currentDogForAdoption,
    } = this.state;
    return (
      <>
        <div className="animal__page">
          <p>Current Dog waiting to be adopted : </p>
          <AnimalInfo
            animal={currentDog}
            onImageClick={this.props.onImageClick}
          />
        </div>
        <div>
          <p>Current Cat waiting to be adopted : </p>
          <AnimalInfo
            animal={currentCat}
            onImageClick={this.props.onImageClick}
          />
        </div>
        <div>
          <p>Current Dog you can Adopt! : </p>
          <AnimalInfo
            animal={currentDogForAdoption}
            onImageClick={(this.props.onImageClick, currentDogForAdoption)}
          />
        </div>
        <div>
          <p>Current Cat you can Adopt Today! : </p>
          <AnimalInfo
            animal={currentCatForAdoption}
            onImageClick={this.props.onImageClick}
          />
        </div>
      </>
    );
  }
}
