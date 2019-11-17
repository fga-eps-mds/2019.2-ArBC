import Vue from 'vue';
import Vuex from 'vuex';
import LettersModule from './modules/letters';
import PatternsModule from './modules/patterns';
import WordsModule from './modules/words';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    letters: LettersModule,
    words: WordsModule,
    patterns: PatternsModule,
  },
});

export default store;
