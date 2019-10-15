import {VuexModule, Module, Action, Mutation} from 'vuex-module-decorators';
import {Word} from '@/store/models';
import API from '@/services/api';

@Module({
  name: 'words',
})
export default class WordsModule extends VuexModule {
  private words: {[index: string]: any} = {};

  public get Words() {
    return this.words;
  }

  @Mutation
  public setWords(words: any) {
    words.forEach((word: Word) => {
        this.words[word.name] = word.image;
      },
    );
  }

  @Action
  public async fetchWords() {
    const url = '/Word';
    const words = await API.get(url);
    this.context.commit('setWords', words);
  }
}
