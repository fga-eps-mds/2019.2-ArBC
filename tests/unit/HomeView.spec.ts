import 'jest';
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  const wrapper = mount(Home);

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
