import Vue from 'vue';
import Router from 'vue-router';
import LettersModule from '@/store/modules/letters';
import {getModule} from 'vuex-module-decorators';
import store from '@/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      beforeEnter(to: any, from: any, next: any) {
        const module = getModule(LettersModule, store);
        module.fetchLetters()
          .then(() => next());
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
