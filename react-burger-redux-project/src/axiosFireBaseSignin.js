import axios from 'axios';
import config from './Configuration';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
  params: {
    'key': config.apiKey
  }
});

export default instance;
