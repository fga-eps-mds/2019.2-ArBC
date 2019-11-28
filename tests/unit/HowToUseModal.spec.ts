import 'jest';
import { mount } from '@vue/test-utils';
import HowToUseModalComponent from '@/components/HowToUseModal.vue';

let wrapper: any;
let HowToUseModal: any;

describe('HowToUseModal.vue', () => {
  beforeAll(() => {
    wrapper = mount(HowToUseModalComponent);
    HowToUseModal = wrapper.vm;
  });

  describe('Open modal', () => {
    it('Opens the modal', () => {
      HowToUseModal.open();

      expect(HowToUseModal.opened).toEqual(true);
    });
  });
});
