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

  public get Letters(): {[index: string]: string} {
    return this.letters;
  }

  @Mutation
  public setLetters(letters: Letter[]): void {
    letters.forEach((letter: Letter) => {
      this.letters[letter.name] = letter.image;
    });
  }

  @Action
  public async getLetters(): Promise<any> {
    const url: string = '/Letter';

    const letters: any = await API.get(url);

    this.setLetters(letters as Letter[]);
  }
}

