import 'jest';
import { mount } from '@vue/test-utils';
import HomeCardComponent from '@/components/HomeCard.vue';

let wrapper: any;
let HomeCard: any;

describe('HomeCard.vue', () => {
  beforeAll(() => {
    wrapper = mount(HomeCardComponent);
    HomeCard = wrapper.vm;
  });

  xtest('To do', () => {
    console.log('HomeCard tests to do');
  });
});
