import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { letter } from './letter';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    letter,
  },
};

export default new Vuex.Store<RootState>(store);
