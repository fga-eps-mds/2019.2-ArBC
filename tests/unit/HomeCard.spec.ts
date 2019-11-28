import 'jest';
import { mount } from '@vue/test-utils';
import HomeCardComponent from '@/components/HomeCard.vue';



describe('HomeCard.vue', () => {
  describe('check if route can be changed', () => {
    let wrapper: any;
    let HomeCard: any;
    beforeEach(async () => {
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

    test('Valid path with open camera confirmed', () => {
      Storage.prototype.getItem = jest.fn().mockReturnValue(true);
      window.location.replace = jest.fn();
      HomeCard.openCameraConfirmed = true;

      expect(HomeCard.canRoute('/camera')).resolves.toBeUndefined();
      expect(Storage.prototype.getItem).toBeCalledWith('showHowToUseDialog');
    });
  });

  describe('route', () => {
    let wrapper: any;
    let HomeCard: any;

    beforeAll(async () => {
      wrapper = mount(HomeCardComponent, {
        propsData: {
          $data: {
            icon: 'camera_alt',
            iconColor: '#ff985c',
            targetBlank: true,
            path: '/camera',
            content: 'A camera é a parte mais difícil de testar da aplicação toda, venha',
          },
        },
      });
      HomeCard = wrapper.vm;
    });

    test('target is _blank', () => {
      HomeCard.canRoute = jest.fn().mockResolvedValueOnce(() => true);
      window.open = jest.fn().mockImplementation(() => {
        expect.anything();
      });

      HomeCard.route();
    });
  });
});
