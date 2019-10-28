import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

const CONFIG = {
  timeout: 5000,
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
};

const requestSuccessHandler = (response: any) => {
  if (response.data.hasOwnProperty('results')) {
    return response.data.results;
  }

  return response.data;
};

export default {
  async get(path: string) {
    const response = await axios.get(path, CONFIG);

    return requestSuccessHandler(response);
  },
};