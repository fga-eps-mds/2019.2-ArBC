import 'jest';
import { mount } from '@vue/test-utils';
import HomeCardComponent from '@/components/HomeCard.vue';

let wrapper: any;
let HomeCard: any;

describe('HomeCard.vue', () => {
  beforeAll(async () => {
    wrapper = mount(HomeCardComponent, {
      propsData: {
        $data: {
          icon: 'camera_alt',
          iconColor: '#ff985c',
          targetBlank: false,
          path: '/camera',
          content: 'A camera é a parte mais difícil de testar da aplicação toda, venha',
        },
      },
    });
    HomeCard = wrapper.vm;
  });

  describe('check if route can be changed', () => {
    test('Invalid path', () => {
      const spyOnStorageGetItem: any = jest.spyOn(Storage.prototype, 'getItem');

      expect(HomeCard.canRoute('/yo-lo-no-conozco')).resolves.toBeUndefined();
      expect(spyOnStorageGetItem).toBeCalledWith('showHowToUseDialog');
    });

    test('Valid path', () => {
      const spyOnStorageGetItem: any = jest.spyOn(Storage.prototype, 'getItem');

      expect(HomeCard.canRoute('/camera')).rejects.toBeUndefined();
      expect(spyOnStorageGetItem).toBeCalledWith('showHowToUseDialog');
    });
  });
});
