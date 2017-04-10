import { normalize, schema } from 'normalizr';
import axios from 'axios';

export const get = (url, successCB, schema, ErrorCB) => {
  axios.get(url)
  .then((response) => {
    const normalizedData = normalize(response.data, schema);
    successCB(response.data, normalizedData);
  })
  .catch((error) => {
    console.error('axios error', error);
  });
};

const concert = new schema.Entity('concerts');
const concertSchema = { concerts: [concert] };

export const Schemas = {
  CONCERT: concertSchema,
};
