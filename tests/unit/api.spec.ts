import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import API from '@/services/api';

const CONFIG = {
  timeout: 5000,
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
};

describe('api.ts', () => {
  const API_URL: any = process.env.VUE_APP_API_URL;
  const mockedAxios: MockAdapter = new MockAdapter(axios, { delayResponse: 2000 });
  const spyOnAxiosGet: any = jest.spyOn(axios, 'get');

  describe('when response.data has a results property', () => {
    const requestURL: string = `${API_URL}/Letter`;
    const responseResults = [
      { name: 'G', image: 'https://media.giphy.com/media/7SX1EWzetp0GVAgoqp/giphy.gif' },
      { name: 'I', image: 'https://giphy.com/gifs/oh-wow-ooh-ooo-Rhdx0Vp9cOwnLiGmb6' },
      { name: 'P', image: 'https://gph.is/g/Zdov3n1' },
      { name: 'H', image: 'https://gph.is/g/EJNXwWA' },
      { name: 'Y', image: 'https://giphy.com/gifs/no-bird-shake-head-fsPcMdeXPxSP6zKxCA' },
    ];

    mockedAxios.onGet(requestURL).reply(200, responseResults);

    it ('returns the results on data.results property', async () => {
      const APIResponse: any = await API.get(requestURL);

      expect(APIResponse).toEqual(responseResults);
      expect(spyOnAxiosGet).toHaveBeenCalledWith(requestURL, CONFIG);
    });
  });

  describe('when response.data does not have a results property', () => {
    const requestURL: string = `${API_URL}/Word/BOLA`;
    const responseResult = {
      name: 'BOLA',
      image: 'https://gph.is/1k0ps5A',
    };

    mockedAxios.onGet(requestURL).reply(200, responseResult);

    it ('returns the results on data property', async () => {
      const APIResponse: any = await API.get(requestURL);

      expect(APIResponse).toEqual(responseResult);
      expect(spyOnAxiosGet).toHaveBeenCalledWith(requestURL, CONFIG);
    });
  });

  describe('when the request fail', () => {
    const requestURL: string = `${API_URL}/yonoloconozco`;
    const requestError = 'Request failed with status code 404';

    mockedAxios.onGet(requestURL).reply(404, requestError);

    it ('throws an error', async () => {
      await expect(API.get(requestURL)).rejects.toEqual(new Error(requestError));

      expect(spyOnAxiosGet).toHaveBeenCalledWith(requestURL, CONFIG);
    });
  });
});
