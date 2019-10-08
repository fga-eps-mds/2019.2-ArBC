import { MutationTree } from 'vuex';
import { LetterState } from './types';

export const mutations: MutationTree<LetterState> = {
  setLetters(state, letters: any) {
    letters.forEach((letter: any) => {
      const { name, image } = letter;

      state.letters[name] = image;
    });
  },
};
