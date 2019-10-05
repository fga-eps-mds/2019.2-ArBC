import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { LetterState } from './types';
import { RootState } from '../types';

export const state: LetterState = {
  letters: [],
};

const namespaced: boolean = true;

export const letter: Module<LetterState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
