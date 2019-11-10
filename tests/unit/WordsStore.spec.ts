import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import WordsModule from '@/store/modules/words';
import { getModule } from 'vuex-module-decorators';
import { Word, Image } from '@/store/models';
import API from '@/services/api';

const localVue = createLocalVue();
let store: Store<any>;
let wordsModule: WordsModule;

localVue.use(Vuex);

describe('WordsModule.ts', () => {
  beforeAll(() => {
    store = new Vuex.Store({
      modules: {
        words: WordsModule,
      },
    });
    wordsModule = getModule(WordsModule, store);
    API.get = jest.fn().mockImplementation((word: string) => {
      if (word === '/Word/DOMINGO') {
        return {
          name: 'DOMINGO',
          image: 'https://giphy.com/gifs/lol-FQaQtdbLnk676',
        };
      } else {
        throw new Error('invalidastes?');
      }
    });
  });

  test('Store is empty', () => {
    expect(wordsModule.Words).toMatchObject({});
  });

  test('Word are being set', () => {
    const word: Word = {
      name: 'PATO',
      image: {
        url: 'https://giphy.com/gifs/duck-2ATElMHGKoVeo',
        isValid: true,
      },
    };

    wordsModule.setWord(word);

    expect(wordsModule.Words).toMatchObject({
      PATO: word.image,
    });
  });

  test('Valid word is being requested and doesn\'t exists in store', async () => {
    const image: Image = await wordsModule.getWord('DOMINGO');
    expect(image).toMatchObject({
      url: 'https://giphy.com/gifs/lol-FQaQtdbLnk676',
      isValid: true,
    });
  });

  test('Invalid word is being requested and doesn\'t exists in store', async () => {
    const image: Image = await wordsModule.getWord('DOMIGO');
    expect(image).toMatchObject({
      url: '',
      isValid: false,
    });
  });

  test('Existing word is being requested', async () => {
    const word: Word = {
      name: 'BOLA',
      image: {
        url: 'https://giphy.com/gifs/therighteousgemstones-hbo-gemstones-gemstoneshbo-H21DItDslSGP4lxjBs',
        isValid: true,
      },
    };

    wordsModule.setWord(word);

    const image: Image = await wordsModule.getWord('BOLA');

    expect(image).toMatchObject({
      url: 'https://giphy.com/gifs/therighteousgemstones-hbo-gemstones-gemstoneshbo-H21DItDslSGP4lxjBs',
      isValid: true,
    });
  });
});
