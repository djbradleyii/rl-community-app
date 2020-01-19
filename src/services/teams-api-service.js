import TokenService from './token-service';
import config from '../config';

const TeamsApiService = {
  getAllUsersLookingForTeam() {
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
  }
};

export default TeamsApiService;
