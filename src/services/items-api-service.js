import TokenService from './token-service';
import config from '../config';

const ItemsApiService = {
  getAllItems() {
    return fetch(`${config.API_ENDPOINT}/items`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  getItemById(itemid) {
    return fetch(`${config.API_ENDPOINT}/events/${itemid}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  addItem(newItem) {
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  removeItem(itemid) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ itemid }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
      });
  }
};

export default ItemsApiService;
