import mockedAxios from './__mocks__/axios';
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

  describe('when response.data has a results property', () => {
    const requestURL: string = `${API_URL}/Letter`;
    const responseResults = {
      data: {
        results: [
          { name: 'G', image: 'https://media.giphy.com/media/7SX1EWzetp0GVAgoqp/giphy.gif' },
          { name: 'I', image: 'https://giphy.com/gifs/oh-wow-ooh-ooo-Rhdx0Vp9cOwnLiGmb6' },
          { name: 'P', image: 'https://gph.is/g/Zdov3n1' },
          { name: 'H', image: 'https://gph.is/g/EJNXwWA' },
          { name: 'Y', image: 'https://giphy.com/gifs/no-bird-shake-head-fsPcMdeXPxSP6zKxCA' },
        ],
      },
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(responseResults));

    it ('returns the results on data.results property', async () => {
      const APIResponse: any = await API.get(requestURL);

      expect(APIResponse).toEqual(responseResults.data.results);
      expect(mockedAxios.get).toHaveBeenCalledWith(requestURL, CONFIG);
    });
  });

  describe('when response.data does not have a results property', () => {
    const requestURL: string = `${API_URL}/Word/BOLA`;
    const responseResult = {
      data: {
        name: 'BOLA',
        image: 'https://gph.is/1k0ps5A',
      },
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(responseResult));

    it ('returns the results on data property', async () => {
      const APIResponse: any = await API.get(requestURL);

      expect(APIResponse).toEqual(responseResult.data);
      expect(mockedAxios.get).toHaveBeenCalledWith(requestURL, CONFIG);
    });
  });

  describe('when the request fail', () => {
    const requestURL: string = `${API_URL}/yonoloconozco`;
    const requestError = new Error('Request failed with status code 404');

    mockedAxios.get.mockImplementationOnce(() => {
      return Promise.reject(requestError);
    });

    it ('throws an error', async () => {
      await expect(API.get(requestURL)).rejects.toEqual(requestError);

      expect(mockedAxios.get).toHaveBeenCalledWith(requestURL, CONFIG);
    });
  });
});
