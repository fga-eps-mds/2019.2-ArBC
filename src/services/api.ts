import axios, { AxiosResponse } from 'axios';

const API_URL: any = process.env.VUE_APP_API_URL;

const CONFIG: object = {
  timeout: 5000,
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
};

const requestSuccessHandler = (response: any): object => {
  if (response.data.hasOwnProperty('results')) {
    return response.data.results;
  }

  return response.data;
};

export default {
  async get(path: string): Promise<object> {
    const response: AxiosResponse<any> = await axios.get(path, CONFIG);

    return requestSuccessHandler(response);
  },
};
