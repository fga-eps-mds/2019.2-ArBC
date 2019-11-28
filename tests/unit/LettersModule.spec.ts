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
      { name: 'A', image: 'https://gph.is/1YdJDfl'},
      { name: 'R', image: 'https://gph.is/2GcXdhf'},
      { name: 'B', image: 'https://gph.is/1HGEo1e'},
      { name: 'C', image: 'https://gph.is/1Pv6s9f'},
    ]);
  });

  test('Store is empty', () => {
    expect(lettersModule.Letters).toMatchObject({});
  });

  test('Letters are being changed in \'mutation\'', () => {
    const letters: Letter[] = [
      { name: 'G', image: 'https://gph.is/g/E3ywAdZ' },
      { name: 'I', image: 'https://gph.is/g/4gBWYDq' },
      { name: 'P', image: 'https://gph.is/g/Zdov3n1' },
      { name: 'H', image: 'https://gph.is/g/EJNXwWA' },
      { name: 'Y', image: 'https://gph.is/g/4DLzMv6' },
    ];

    lettersModule.setLetters(letters);

    expect(lettersModule.Letters).toMatchObject({
      G: 'https://gph.is/g/E3ywAdZ',
      I: 'https://gph.is/g/4gBWYDq',
      P: 'https://gph.is/g/Zdov3n1',
      H: 'https://gph.is/g/EJNXwWA',
      Y: 'https://gph.is/g/4DLzMv6',
    });
  });

  test('Letters are being requested from API', async () => {
    await lettersModule.getLetters();
    expect(API.get).toBeCalledTimes(1);
    expect(API.get).toBeCalledWith('/Letter');
    expect(Object.keys(lettersModule.Letters).length).not.toBe(0);
  });
});
