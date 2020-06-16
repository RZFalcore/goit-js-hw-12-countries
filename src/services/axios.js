import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountry(query) {
  return axios
    .get(`${query}`)
    .then(response => {
      return response.data;
    })
    .catch(console.warn);
}
