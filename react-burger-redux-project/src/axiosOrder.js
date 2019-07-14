import axios from 'axios';
import config from './Configuration';

const instance = axios.create({
  baseURL: config.databaseURL
});

export default instance;
