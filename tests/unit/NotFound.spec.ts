import 'jest';
import { mount } from '@vue/test-utils';
import NotFound from '@/components/NotFound.vue';

describe('NotFound.vue', () => {
  const wrapper = mount(NotFound);

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
