import React, { Component } from 'react';
import adoptionApiService from '../../services/adoption-api-service';

export default class AdoptionPage extends Component {
  state = {
    listOfDogs: {},
    listOfCats: {},
    currentAnimal: {},
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
      listOfDogs: this.createList(data.catQueue, []),
      listOfcats: this.createList(data.dogQueue, []),
      currentDog: data.dogQueue.first,
      currentCat: data.catQueue.first,
      currentDogForAdoption: data.dogQueue.last,
      currentCatForAdoption: data.catQueue.last,
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
        <div>
          <p>{currentCat.name}</p>
        </div>
        <div>
          <p>placeholder for current pet waiting to be adopted</p>
        </div>
        <div>
          <p>placeholder for list of humans waiting in line</p>
        </div>
        <div>
          <p>placeholder for list of pets waiting in line</p>
        </div>
      </>
    );
  }
}
