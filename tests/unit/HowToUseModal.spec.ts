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

  describe('Open camera button clicked', () => {
    it('Emits onConfirmed event', () => {
      HowToUseModal.$emit = jest.fn()
        .mockImplementationOnce(() => HowToUseModal.$emit);

      HowToUseModal.openCamera();

      expect(HowToUseModal.$emit).toBeCalledTimes(1);
      expect(HowToUseModal.$emit).toBeCalledWith('onConfirmed');
    });
  });

  describe('Save hide dialog option', () => {
    it('Saves the option on navigator storage', () => {
      const spyOnStorageSetItem: any = jest.spyOn(Storage.prototype, 'setItem');

      HowToUseModal.saveHideDialogOption();

      expect(spyOnStorageSetItem).toBeCalledTimes(1);
      expect(spyOnStorageSetItem)
        .toBeCalledWith('showHowToUseDialog', `${!HowToUseModal.hideDialog}`);
    });
  });
});
