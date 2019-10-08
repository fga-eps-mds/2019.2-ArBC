import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { WordState } from './types';
import { RootState } from '../types';

export const state: WordState = {
  word: {},
};

const namespaced: boolean = true;

export const word: Module<WordState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
