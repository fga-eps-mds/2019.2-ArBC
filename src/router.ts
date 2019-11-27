import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/camera',
      name: 'Camera',
      component: () => import('./views/Camera.vue'),
    },
    // Always leave this as last one
    {
      path: '/*',
      name: 'not-found',
      component: () => import('./views/NotFound.vue'),
    },
  ],
});
