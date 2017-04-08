import axios from 'axios';

const get = (url, successCB, ErrorCB ) => {
  axios.get(url)
  .then((response) => {
    console.log(response, 'inside fetch')
    successCB(response.data);
  })
  .catch((error) => {
    ErrorCB('axios error', error)
  })
}

export default get;
