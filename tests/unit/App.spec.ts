import 'jest';
import 'regenerator-runtime/runtime';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import NotFound from '@/components/NotFound.vue';
import Camera from '@/components/Camera.vue';
import router from '@/router';
import Vue from 'vue';
import store from '@/store';
import API from '@/services/api';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App.vue', () => {
  beforeAll(() => {
    Vue.config.silent = true;
    API.get = jest.fn().mockReturnValueOnce([
      { name: 'A', image: 'https://gph.is/1YdJDfl' },
      { name: 'R', image: 'https://gph.is/2GcXdhf' },
      { name: 'B', image: 'https://gph.is/1HGEo1e' },
      { name: 'C', image: 'https://gph.is/1Pv6s9f' },
    ]).mockReturnValue([]);
  });
  it('renders not found via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    await router.push('/notfoundi');
    await wrapper.vm.$nextTick();

    expect(wrapper.find(NotFound).exists()).toBe(true);
  });

  it('renders Camera component via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
    });

    await router.push('/camera');
    await wrapper.vm.$nextTick();

    expect(wrapper.find(Camera).exists()).toBe(true);
  });
});
