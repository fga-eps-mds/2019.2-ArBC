import API from '@/services/api';
import {
  Module,
  Action,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({
  name: 'words',
})
export default class WordsModule extends VuexModule {
  private word: {[index: string]: any} = {};

  public get Word() {
    return this.word;
  }

  @Mutation
  public setWord(word: any) {
    this.word = word;
  }

  @Action
  public async getWord(word: string) {
    const url = `/Word/${word.toUpperCase()}`;

    const requestedWord = await API.get(url);

    this.setWord(requestedWord);
  }
}
