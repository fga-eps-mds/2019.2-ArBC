import 'jest';
import 'regenerator-runtime/runtime';
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import Camera from '@/components/Camera.vue';
import { Image, Marker, Word } from '@/store/models';
import store from '@/store';
import LettersModule from '@/store/modules/letters';
import WordsModule from '@/store/modules/words';
import * as THREE from 'three';
import AEntity from './__mocks__/Entity.vue';
import AMarker from './__mocks__/AMarker.vue';
import { getModule } from 'vuex-module-decorators';
import API from '@/services/api';
import { randomNum, fakeMarkers, fakeAMarkers } from './helpers/generateFakeData';

let camera: any;
let cameraWrapper: Wrapper<Camera>;
let lettersModule: LettersModule;
let wordsModule: WordsModule;

beforeEach(async () => {
  Vue.config.ignoredElements = ['a-scene', 'a-entity', 'a-marker'];
  Vue.config.silent = true;
  const localVue = createLocalVue();

  API.get = jest.fn().mockReturnValueOnce([
    { name: 'A', image: 'https://gph.is/1YdJDfl' },
    { name: 'R', image: 'https://gph.is/2GcXdhf' },
    { name: 'B', image: 'https://gph.is/1HGEo1e' },
    { name: 'C', image: 'https://gph.is/1Pv6s9f' },
    { name: 'N', image: 'https://gph.is/1Pv6s9f' },
    { name: 'E', image: 'https://gph.is/1Pv6s9f' },
    { name: 'S', image: 'https://gph.is/1Pv6s9f' },
    { name: 'O', image: 'https://gph.is/1Pv6s9f' },
    { name: 'U', image: 'https://gph.is/1Pv6s9f' },
    { name: 'P', image: 'https://gph.is/1Pv6s9f' },
    { name: 'R', image: 'https://gph.is/1Pv6s9f' },
    { name: 'T', image: 'https://gph.is/1Pv6s9f' },
    { name: 'I', image: 'https://gph.is/1Pv6s9f' },
  ]).mockReturnValue([]);

  wordsModule = getModule(WordsModule, store);
  lettersModule = getModule(LettersModule, store);

  cameraWrapper = mount(Camera, {
    localVue,
    store,
    attachToDocument: true,
    stubs: {
      'a-entity': AEntity,
    },
  });

  camera = cameraWrapper.vm;
  await cameraWrapper.vm.$nextTick();
});

describe('Camera.vue', () => {
  test('Markers being ordered horizontally', () => {
    const Amarker: Marker = {
      key: 'A',
      position: { x: 1.5, y: 2, z: 5.1 },
      quaternion: { x: -1, y: 5, z: 6, w: 4.3 },
      scale: { x: 1.2, y: 1.1, z: 1.23 },
    };

    const Umarker: Marker = {
      key: 'U',
      position: { x: 1, y: 2.1, z: 5 },
      quaternion: { x: 7.2, y: 2, z: -3, w: 9 },
      scale: { x: 1.11, y: 1.13, z: 1.17 },
    };

    const Vmarker: Marker = {
      key: 'V',
      position: { x: 1.2, y: 1.9, z: 5.2 },
      quaternion: { x: 7, y: 9, z: 10, w: 3 },
      scale: { x: 1.07, y: 1.01, z: 0.99 },
    };

    const markers: Marker[] = [Amarker, Umarker, Vmarker];

    camera.orderLettersHorizontally(markers);

    expect(markers).toMatchObject([Umarker, Vmarker, Amarker]);
  });

  test('Marker being created from html item', async () => {
    const Obj3d: THREE.Object3D = new THREE.Object3D();
    Obj3d.position.set(0.5, 0.7, 0.9);
    Obj3d.quaternion.set(0.7, 1.42, 1.53, 2.31);
    Obj3d.scale.set(1.12, 1.21, 1.32);

    const item: object = {
      key: 'G',
      object3D: Obj3d,
    };

    const marker = camera.createMarkerFromItem(item);

    expect(marker.key).toBe('G');
    expect(marker.position).toBe(Obj3d.position);
    expect(marker.quaternion).toBe(Obj3d.quaternion);
    expect(marker.scale).toBe(Obj3d.scale);
  });

  test('Marker component being changed', () => {
    const marker: Marker = fakeMarkers(1)[0];

    const Obj3d: THREE.Object3D = new THREE.Object3D();
    Obj3d.position.set(0.5, 0.7, 0.9);
    Obj3d.quaternion.set(0.7, 1.42, 1.53, 2.31);
    Obj3d.scale.set(1.12, 1.21, 1.32);

    const target = {
      key: 'K',
      object3D: Obj3d,
    };

    camera.changeMarkerObject(marker, target);

    expect(target.object3D.position).toEqual(marker.position);
    expect(target.object3D.scale.x).toBeCloseTo(marker.scale.x * 2.5, 5);
    expect(target.object3D.scale.y).toBeCloseTo(marker.scale.y * 2.5, 5);
    expect(target.object3D.scale.z).toBeCloseTo(marker.scale.z * 2.5, 5);
  });

  test('Positions being added to \'markerStats\'', () => {
    const items = [{
      object3D: {
        position: { x: 1.2, y: 1.9, z: 5.2 },
        quaternion: { x: 7, y: 9, z: 10, w: 3 },
        scale: { x: 1.07, y: 1.01, z: 0.99 },
      }}, {
      object3D: {
        position: { x: 1, y: 2.1, z: 5 },
        quaternion: { x: 7.2, y: 2, z: -3, w: 9 },
        scale: { x: 1.11, y: 1.13, z: 1.17 },
      }}, {
      object3D: {
        position: { x: 1.5, y: 2, z: 5.1 },
        quaternion: { x: -1, y: 5, z: 6, w: 4.3 },
        scale: { x: 1.2, y: 1.1, z: 1.23 },
      }},
    ];

    const markersSet = camera.$data.markers;

    const markerStats = camera.markersStats;
    markerStats.addPosition = jest.fn();

    markersSet.add(items[0]);
    markersSet.add(items[1]);
    markersSet.add(items[2]);

    camera.addPositions();

    let item: any;
    for (item of markersSet.values()) {
      expect(markerStats.addPosition).toBeCalledWith(item.object3D.position.y + 10);

    }
  });

  describe('Rendering components', () => {
    test('Scene being rendered', () => {
      expect(cameraWrapper.find('a-scene').exists()).toBe(true);
    });

    test('Camera being rendered', () => {
      expect(cameraWrapper.findAll(AEntity).at(1).exists()).toBe(true);
    });

    test('WordGif entity being rendered with shader gif', () => {
      const wordGif = cameraWrapper.findAll(AEntity).at(0);
      expect(wordGif.exists()).toBe(true);

      expect(wordGif.props()).toMatchObject({
        geometry: 'primitive: plane',
        rotation: '0 0 0',
        material: 'shader:gif',
        visible: 'false',
      });
    });

    test('Markers being rendered after request', () => {
      expect(cameraWrapper.findAll('a-marker').length)
        .toBe(Object.keys(lettersModule.Letters).length + 13);
    });
  });

  describe('Marker found and lost events', () => {
    afterAll(() => {
      jest.clearAllMocks();
    });

    test('MarkerFound method', () => {
      const event: object = {target: new AMarker()};
      const markers = camera.$data.markers;

      expect(markers.size).toBe(0);
      camera.markerFound(event, 'A');
      expect(markers.size).toBe(1);
    });

    test('MarkerFound to init \'processLetters\'', () => {
      const event1: object = {target: new AMarker()};
      const event2: object = {target: new AMarker()};

      jest.useFakeTimers();
      camera.processLetters = jest.fn();

      camera.markerFound(event1, 'A');
      camera.markerFound(event2, 'D');

      expect(camera.$data.isReading).toBe(true);
      expect(setTimeout).toBeCalledTimes(1);
      expect(setTimeout).toBeCalledWith(expect.any(Function), 1000);

      jest.advanceTimersToNextTimer();
      expect(setInterval).toBeCalledTimes(1);
      expect(setInterval).toBeCalledWith(camera.processLetters, 16);
      expect(camera.processHandler).toBeTruthy();

      jest.advanceTimersToNextTimer();
      expect(camera.processLetters).toBeCalled();
    });

    test('Markers being removed from set', () => {
      const event1: object = {target: new AMarker()};
      const event2: object = {target: new AMarker()};
      const event3: object = {target: new AMarker()};
      const markers = camera.$data.markers;

      camera.detachWordGif = jest.fn();

      camera.markerFound(event1, 'S');
      camera.markerFound(event2, 'O');
      camera.markerFound(event3, 'L');

      expect(markers.size).toBe(3);

      camera.markerLost(event3, 'L');

      expect(markers.size).toBe(2);
    });

    test('\'processHandler\' data being cleared', () => {
      const event1: object = {target: new AMarker()};
      const event2: object = {target: new AMarker()};
      const markers = camera.$data.markers;

      camera.detachWordGif = jest.fn();

      camera.markerFound(event1, 'P');
      camera.markerFound(event2, 'A');

      expect(markers.size).toBe(2);

      camera.markerLost(event2, 'A');

      expect(markers.size).toBe(1);
      expect(clearInterval).toBeCalledTimes(1);
      expect(clearInterval).toBeCalledWith(camera.processHandler);
      expect(camera.processHandler).toBeFalsy();
    });
  });

  describe('Attaching and detaching word and letters entities', () => {
    test('attach Letters gifs', async () => {
      const letters = camera.$refs.letterGif;
      camera.atachLettersGifs();
      await camera.$nextTick();
      letters.forEach((entity: any) => {
        expect(entity.object3D.visible).toBe(true);
      });
    });

    test('detach Letters gifs', async () => {
      const letters = camera.$refs.letterGif;
      camera.detachLettersGifs();
      await camera.$nextTick();
      letters.forEach((entity: any) => {
        expect(entity.object3D.visible).toBe(false);
      });
    });

    describe('show Word gif', () => {
      let refWordGif: any;
      let markers: Marker[];
      let image: Image;

      beforeEach(() => {
        refWordGif = camera.$refs.wordGif;
        refWordGif.isPlaying = false;

        camera.detachLettersGifs = jest.fn();
        refWordGif.play.mockClear();

        markers = fakeMarkers(5, true);
        image = {
          url: 'https://gph.is/1v6FYQX',
          isValid: true,
        };
      });

      test('WordGif is not playing', async () => {
        camera.showWordGif(markers, image);

        await camera.$nextTick();

        expect(camera.detachLettersGifs).toBeCalledTimes(1);

        expect(refWordGif.play).toBeCalledTimes(1);
      });

      test('WordGif is playing', () => {
        refWordGif.isPlaying = true;
        camera.showWordGif(markers, image);

        expect(camera.detachLettersGifs).toBeCalledTimes(1);

        expect(refWordGif.play).toBeCalledTimes(0);
      });
    });

    describe('detach word gif', () => {
      let refWordGif: any;

      beforeEach(() => {
        refWordGif = camera.$refs.wordGif;

        camera.atachLettersGifs = jest.fn();
        refWordGif.pause.mockClear();
      });

      test('WordGif is not playing', () => {
        refWordGif.isPlaying = false;
        camera.detachWordGif();

        expect(camera.atachLettersGifs).toBeCalledTimes(1);

        expect(refWordGif.pause).toBeCalledTimes(0);
      });

      test('WordGif is playing', () => {
        refWordGif.isPlaying = true;
        camera.detachWordGif();

        expect(camera.atachLettersGifs).toBeCalledTimes(1);

        expect(refWordGif.pause).toBeCalledTimes(1);
      });
    });
  });

  describe('Letters being processed', () => {
    beforeEach(() => {
      wordsModule.getWord = jest.fn().mockResolvedValue({
        url: '',
        isValid: true,
      });
    });

    test('\'processLetters\' works in his common use', () => {
      const markersSet = camera.$data.markers;

      const markersStatsClearValuesSpy =
        jest.spyOn(camera.markersStats, 'clearValues');

      markersSet.add(fakeAMarkers(1)[0]);
      markersSet.add(fakeAMarkers(1)[0]);
      markersSet.add(fakeAMarkers(1)[0]);

      camera.processLetters();

      expect(markersStatsClearValuesSpy).toBeCalled();
    });

    test('\'processLetters\' when the set is empty', () => {
      const markersStatsClearValuesSpy =
        jest.spyOn(camera.markersStats, 'clearValues');

      camera.processLetters();

      expect(markersStatsClearValuesSpy).toBeCalled();
    });
  });

  describe('Add processed letters', () => {
    test('when the letters is bad positioned', () => {
      const markers: Marker[] = [];
      const markersSet = camera.$data.markers;

      markersSet.add(fakeAMarkers(1)[0]);
      markersSet.add(fakeAMarkers(1)[0]);
      markersSet.add(fakeAMarkers(1)[0]);

      camera.addProcessedLetters(500, markers);

      expect(markers.length).toBe(0);
    });

    test('when the letters is perfect positioned', () => {
      const markers: Marker[] = [];
      const markersSet = camera.$data.markers;

      markersSet.add(fakeAMarkers(1)[0]);
      markersSet.add(fakeAMarkers(1)[0]);
      markersSet.add(fakeAMarkers(1)[0]);

      camera.addProcessedLetters(0.0000001, markers);

      expect(markers.length).toBe(3);
    });
  });

  describe('setWord', () => {
    describe('When there is no markers', () => {
      const expectedWord: string = '';
      const processedLetters: Marker[] = [];

      it('Returns an empty string', () => {
        camera.orderLettersHorizontally = jest.fn()
          .mockImplementation(() => camera.orderLettersHorizontally);

        const word: string = camera.setWord(processedLetters);

        expect(word).toEqual(expectedWord);
        expect(word.length).toEqual(0);
        expect(camera.orderLettersHorizontally).toBeCalledTimes(1);
      });
    });

    describe('When there is more than one marker', () => {
      let expectedWord: string = '';
      const wordLength: number = Math.ceil(randomNum());
      const processedLetters: Marker[] = fakeMarkers(wordLength, true);

      processedLetters.forEach((marker: Marker) => {
        expectedWord = expectedWord + `${marker.key}`;
      });

      it('Return the respective word', () => {
        camera.orderLettersHorizontally = jest.fn()
          .mockImplementation(() => camera.orderLettersHorizontally);

        const word: string = camera.setWord(processedLetters);

        expect(word).toEqual(expectedWord);
        expect(word.length).toEqual(wordLength);
        expect(camera.orderLettersHorizontally).toBeCalledTimes(1);
      });
    });
  });

  describe('getGifWord', () => {
    describe('Word is not valid', () => {
      const requestedWord: Word = {
        name: 'XABLAU',
        image: {
          isValid: false,
          url: '',
        },
      };

      it('set word flag to true and returns a rejected promise', () => {
        wordsModule.getWord = jest.fn()
          .mockImplementationOnce(() => Promise.reject(requestedWord.image));

        const returnValue: Promise<any> = camera.getGifWord(requestedWord.name);

        expect(camera.wordLockFlag).toEqual(true);
        expect(returnValue).rejects.toBe(requestedWord.image);
      });
    });

    describe('Word is valid', () => {
      const word: Word = {
        name: 'BOLA',
        image: {
          isValid: true,
          url: 'urldaimagem.com/BOLA.gif',
        },
      };

      it('set word flag to true and returns a rejected promise', () => {
        wordsModule.getWord = jest.fn()
          .mockImplementation(() => Promise.resolve(word.image));

        const returnValue: Promise<any> = camera.getGifWord(word.name);

        expect(camera.wordLockFlag).toEqual(true);
        expect(returnValue).resolves.toBe(word.image);
      });
    });
  });

  describe('wordGifValidation', () => {
    describe('word gif is valid', () => {
      const processedLetters: Marker[] = fakeMarkers(randomNum(), true);
      const image: Image = {
        url: 'https://gph.is/YZCZdD',
        isValid: true,
      };

      it('Shows the word gif', () => {
        camera.showWordGif = jest.fn()
          .mockImplementationOnce(() => camera.showWordGif);

        camera.wordGifValidation(processedLetters, image);

        expect(camera.wordLockFlag).toEqual(false);
        expect(camera.showWordGif).toBeCalledTimes(1);
        expect(camera.showWordGif).toBeCalledWith(processedLetters, image);
      });
    });

    describe('word gif isn\'t valid', () => {
      const processedLetters: Marker[] = fakeMarkers(randomNum(), true);
      const image: Image = {
        url: 'https://gph.is/g/4AvxqV7',
        isValid: false,
      };

      it('Detaches the word gif', () => {
        camera.detachWordGif = jest.fn()
          .mockImplementationOnce(() => camera.detachWordGif);

        camera.wordGifValidation(processedLetters, image);

        expect(camera.wordLockFlag).toEqual(false);
        expect(camera.detachWordGif).toBeCalledTimes(1);
      });
    });
  });

  describe('Component being destroyed', () => {
    jest.useFakeTimers();

    test('It restore the processHandler property', () => {
      cameraWrapper.destroy();

      expect(clearInterval).toBeCalledTimes(1);
      expect(clearInterval).toBeCalledWith(camera.processHandler);
      expect(camera.processHandler).toBeFalsy();
    });
  });
});
