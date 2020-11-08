import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export { HTTP as default };
