import config from '../config';

const petApiService = {
  adoptDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'GET',
    });
  },
};
