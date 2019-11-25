import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import LettersModule from '@/store/modules/letters';
import { getModule } from 'vuex-module-decorators';
import { Letter } from '@/store/models';
import API from '@/services/api';

const localVue = createLocalVue();
let store: Store<any>;
let lettersModule: LettersModule;

localVue.use(Vuex);

describe('LettersModule.ts', () => {
  beforeAll(() => {
    store = new Vuex.Store({
      modules: {
        letters: LettersModule,
      },
    });
    lettersModule = getModule(LettersModule, store);

    API.get = jest.fn().mockReturnValue([
      { name: 'A', image: 'https://giphy.com/gifs/new-girl-YVvTCqTBglkOs'},
      { name: 'R', image: 'https://giphy.com/gifs/teachersseries-tv-land-teacher-26Bl15BW6nqVoYUDK'},
      { name: 'B', image: 'https://giphy.com/gifs/japan-jet-alt-BemKqR9RDK4V2'},
      { name: 'C', image: 'https://giphy.com/gifs/coffee-gif-brockurealities-DrJm6F9poo4aA'},
    ]);
  });

  test('Store is empty', () => {
    expect(lettersModule.Letters).toMatchObject({});
  });

  test('Letters are being changed in \'mutation\'', async () => {
    const letters: Letter[] = [
      { name: 'G', image: 'https://media.giphy.com/media/7SX1EWzetp0GVAgoqp/giphy.gif' },
      { name: 'I', image: 'https://giphy.com/gifs/oh-wow-ooh-ooo-Rhdx0Vp9cOwnLiGmb6' },
      { name: 'P', image: 'https://giphy.com/gifs/netflix-nx-daybreak-daybreaknetflix-f9vsutCLIvq8k6lX0g' },
      { name: 'H', image: 'https://giphy.com/gifs/gifsthatkeepongiving-gifs-that-keep-on-giving-iIj9WrlVHeRdX2JcWN' },
      { name: 'Y', image: 'https://giphy.com/gifs/no-bird-shake-head-fsPcMdeXPxSP6zKxCA' },
    ];

    await lettersModule.setLetters(letters);

    expect(lettersModule.Letters).toMatchObject({
      G: 'https://media.giphy.com/media/7SX1EWzetp0GVAgoqp/giphy.gif',
      I: 'https://giphy.com/gifs/oh-wow-ooh-ooo-Rhdx0Vp9cOwnLiGmb6',
      P: 'https://giphy.com/gifs/netflix-nx-daybreak-daybreaknetflix-f9vsutCLIvq8k6lX0g',
      H: 'https://giphy.com/gifs/gifsthatkeepongiving-gifs-that-keep-on-giving-iIj9WrlVHeRdX2JcWN',
      Y: 'https://giphy.com/gifs/no-bird-shake-head-fsPcMdeXPxSP6zKxCA',
    });
  });

  test('Letters are being requested from API', async () => {
    await lettersModule.getLetters();
    expect(API.get).toBeCalledTimes(1);
    expect(API.get).toBeCalledWith('/Letter');
    expect(Object.keys(lettersModule.Letters).length).not.toBe(0);
  });
});
