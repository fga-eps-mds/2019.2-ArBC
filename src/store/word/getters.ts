import { GetterTree } from 'vuex';
import { WordState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<WordState, RootState> = {
  word(state): object {
    return state.word;
  },
};
