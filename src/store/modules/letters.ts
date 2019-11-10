import API from '@/services/api';
import { Letter } from '@/store/models';
import {
  Module,
  Action,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({
  name: 'letters',
})
export default class LettersModule extends VuexModule {
  private letters: {[index: string]: string} = {};

  public get Letters() {
    return this.letters;
  }

  @Mutation
  public setLetters(letters: Letter[]) {
    letters.forEach((letter: Letter) => {
        this.letters[letter.name] = letter.image;
      },
    );
  }

  @Action({ rawError: true })
  public async getLetters() {
    const url = '/Letter';

    const letters = await API.get(url);

    this.setLetters(letters);
  }
}

