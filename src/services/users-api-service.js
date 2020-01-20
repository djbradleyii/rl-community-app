import TokenService from './token-service';
import config from '../config';

const UsersApiService = {
  getAllUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
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
  getUserById(userid) {
    return fetch(`${config.API_ENDPOINT}/users/${userid}`, {
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
  getActiveUsersStats(userid) {
    return fetch(`${config.API_ENDPOINT}/users/stats`, {
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
  getAllItemsByUserId(userid) {
    return fetch(`${config.API_ENDPOINT}/users/${userid}`, {
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
  insertUser(newUser) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        newUser,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  updateUserById(userUpdates) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(userUpdates),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
      });
  },
};

export default UsersApiService;
