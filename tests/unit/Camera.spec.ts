import 'jest';
import 'regenerator-runtime/runtime';
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import Camera from '@/components/Camera.vue';
import { Marker } from '@/store/models';
import store from '@/store';
import LettersModule from '@/store/modules/letters';
import WordsModule from '@/store/modules/words';
import * as THREE from 'three';
import AEntity from './__mocks__/Entity.vue';
import { getModule } from 'vuex-module-decorators';
import API from '@/services/api';

let camera: any;
let cameraWrapper: Wrapper<Camera>;
let lettersModule: LettersModule;
let wordsModule: WordsModule;


beforeAll(async () => {
  Vue.config.ignoredElements = ['a-scene', 'a-entity', 'a-marker'];
  const localVue = createLocalVue();

  API.get = jest.fn().mockReturnValueOnce([
    {name: 'A', image: 'https://giphy.com/gifs/new-girl-YVvTCqTBglkOs'},
    {name: 'R', image: 'https://giphy.com/gifs/teachersseries-tv-land-teacher-26Bl15BW6nqVoYUDK'},
    {name: 'B', image: 'https://giphy.com/gifs/japan-jet-alt-BemKqR9RDK4V2'},
    {name: 'C', image: 'https://giphy.com/gifs/coffee-gif-brockurealities-DrJm6F9poo4aA'},
  ]).mockReturnValueOnce([]);
  lettersModule = getModule(LettersModule, store);
  wordsModule = getModule(WordsModule, store);

  cameraWrapper = mount(Camera, {
    localVue,
    store,
    attachToDocument: true,
    stubs: {
      'a-entity': AEntity,
    },
  });
  camera = cameraWrapper.vm;
});

describe('Camera.vue', () => {
  test('Markers being ordered horizontally', () => {

    const markers: Marker[] = [{
      key: 'A',
      position: { x: 1.5, y: 2, z: 5.1 },
      quaternion: { x: -1, y: 5, z: 6, w: 4.3 },
      scale: { x: 1.2, y: 1.1, z: 1.23 },
    }, {
      key: 'U',
      position: { x: 1, y: 2.1, z: 5 },
      quaternion: { x: 7.2, y: 2, z: -3, w: 9 },
      scale: { x: 1.11, y: 1.13, z: 1.17 },
    }, {
      key: 'V',
      position: { x: 1.2, y: 1.9, z: 5.2 },
      quaternion: { x: 7, y: 9, z: 10, w: 3 },
      scale: { x: 1.07, y: 1.01, z: 0.99 },
    },
    ];

    camera.orderLettersHorizontally(markers);

    expect(markers).toMatchObject([
      {
        key: 'U',
        position: { x: 1, y: 2.1, z: 5 },
        quaternion: { x: 7.2, y: 2, z: -3, w: 9 },
        scale: { x: 1.11, y: 1.13, z: 1.17 },
      }, {
        key: 'V',
        position: { x: 1.2, y: 1.9, z: 5.2 },
        quaternion: { x: 7, y: 9, z: 10, w: 3 },
        scale: { x: 1.07, y: 1.01, z: 0.99 },
      }, {
        key: 'A',
        position: { x: 1.5, y: 2, z: 5.1 },
        quaternion: { x: -1, y: 5, z: 6, w: 4.3 },
        scale: { x: 1.2, y: 1.1, z: 1.23 },
      },
    ]);
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
        .toBe(Object.keys(lettersModule.Letters).length);
    });
  });
});
