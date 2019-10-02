import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

const CONFIG = {
  timeout: 5000,
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
};

export default {
  get: (path: string) => axios.get(path, CONFIG)
    .then((response: any) => response.data),
};
