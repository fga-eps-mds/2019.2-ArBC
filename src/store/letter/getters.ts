import { GetterTree } from 'vuex';
import { LetterState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<LetterState, RootState> = {
  letters(state): string[] {
    return state.letters;
  },
};
