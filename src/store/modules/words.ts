import API from '@/services/api';
import {
  Module,
  Action,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import {Image, Word} from '../models';

@Module({
  name: 'words',
})
export default class WordsModule extends VuexModule {
  private words: {[index: string]: Image} = {};

  public get Words() {
    return this.words;
  }

  @Mutation
  public setWord(word: Word) {
    this.words[word.name] = word.image;
  }

  @Action
  public async getWord(word: string) {
    if (!this.words.hasOwnProperty(word)) {
      const url = `/Word/${word.toUpperCase()}`;
      try {
        const response = await API.get(url);
        this.setWord(
          {name: response.name,
           image: {url: response.image, isValid: true},
          });
      } catch (error) {
        this.setWord(
          {name: word,
            image: {url: '', isValid: false},
          });
      }
    }
    return this.words[word];
  }
}
