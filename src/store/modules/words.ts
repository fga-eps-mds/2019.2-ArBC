import API from '@/services/api';
import {
  Module,
  Action,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { Word } from '../models';

@Module({
  name: 'words',
})
export default class WordsModule extends VuexModule {
  private words: {[index: string]: any} = {};

  @Mutation
  public setWord(word: any) {
    this.words[word.name] = { image: word.image, isValid: word.isValid};
  }

  @Action
  public async getWord(word: string) {
    if (!this.words.hasOwnProperty(word)) {
      const url = `/Word/${word.toUpperCase()}`;
      try {
        const response = await API.get(url);
        this.setWord(
          {name: response.name,
           image: response.image,
           isValid: true,
          });
      } catch (error) {
        this.setWord(
          {name: word,
           image: null,
           isValid: false,
          });
      }
    }
    return this.words[word];
  }
}
