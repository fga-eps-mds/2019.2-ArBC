import { MutationTree } from 'vuex';
import { WordState } from './types';

export const mutations: MutationTree<WordState> = {
  setWord(state, word: object) {
    state.word = word;
  },
};
