import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { letter } from './letter/index';

// import word from './word';
// import letter from './letter';

Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     word,
//     letter,
//   },
// });

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    letter,
  },
};

export default new Vuex.Store<RootState>(store);
