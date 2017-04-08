import axios from 'axios';

const get = (url, successCB, ErrorCB ) => {
  axios.get(url)
  .then((response) => {
    successCB(response.data);
  })
  .catch((error) => {
    ErrorCB('axios error', error)
  })
}

export default get;
