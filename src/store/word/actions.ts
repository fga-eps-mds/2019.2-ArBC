import { ActionTree } from 'vuex';
import { WordState } from './types';
import { RootState } from '../types';
import API from '../../services/api';

export const actions: ActionTree<WordState, RootState> = {
  getWord({ commit }, word): any {
    const url = `/Word/${word}`;

    return API.get(url)
      .then((response: any) => {
        commit('setWord', response);

        return response;
      });
  },
};
