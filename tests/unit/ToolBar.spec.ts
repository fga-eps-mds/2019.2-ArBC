import 'jest';
import { createLocalVue, mount} from '@vue/test-utils';
import ToolBar from '@/components/ToolBar.vue';
import VueRouter from 'vue-router';

let wrapper: any;
let buttons: any[];

beforeAll(() => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();

  wrapper = mount(ToolBar, {
    localVue,
    router,
  });

  buttons = [wrapper.findAll('div').at(1).findAll('button'),
    wrapper.findAll('div').at(1).findAll('a')];
});

afterAll(() => {
  wrapper.destroy();
});

describe('ToolBar.vue', () => {
    it('Toolbar exists', () => {
        expect(wrapper.classes('md-toolbar')).toBe(true);
    });

    it('Buttons exists in toolbar', () => {
        expect(buttons[0].exists()).toBe(true);
        expect(buttons[1].exists()).toBe(true);
    });

    it('matches snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('When user click in home button', () => {
        buttons[1].trigger('click');
        expect(wrapper.vm.$route.path).toEqual('/');
    });

    it('When user click in camera button', () => {
        buttons[0].trigger('click');
        setTimeout(() => {
          expect(wrapper.vm.$route.path).toEqual('/camera');
        }, 500);
    });
});
