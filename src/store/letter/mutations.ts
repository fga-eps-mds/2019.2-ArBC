import { MutationTree } from 'vuex';
import { LetterState } from './types';

export const mutations: MutationTree<LetterState> = {
  setLetters(state, letters: string[]) {
    state.letters = letters;
  },
};
