import config from '../config';

const adoptionApiService = {
  adoptCat() {
    return fetch(`${config.API_ENDPOINT}/pets/cats`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    });
  },
  adoptDog() {
    return fetch(`${config.API_ENDPOINT}/pets/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  showFirstInLine() {
    return fetch(`${config.API_ENDPOINT}/humans`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  showAllAnimals() {
    return fetch(`${config.API_ENDPOINT}/pets/all`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  showListOfHumans() {
    return fetch(`${config.API_ENDPOINT}/humans/all`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  enqueueHuman(name) {
    return fetch(`${config.API_ENDPOINT}/humans`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};
export default adoptionApiService;
