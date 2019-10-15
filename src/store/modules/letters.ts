import {VuexModule, Module, Action, Mutation} from 'vuex-module-decorators';
import {Letter} from '@/store/models';
import API from '@/services/api';

@Module({
  name: 'letters',
})
export default class LettersModule extends VuexModule {
  private letters: {[index: string]: any} = {};

  public get Letters() {
    return this.letters;
  }

  @Mutation
  public setLetters(letters: any) {
    letters.forEach((letter: Letter) => {
        this.letters[letter.name] = letter.image;
      },
    );
  }

  @Action
  public async fetchLetters() {
    const url = '/Letter';
    const letters = await API.get(url);
    this.context.commit('setLetters', letters);
  }
}

