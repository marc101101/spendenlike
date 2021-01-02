import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../layouts/Home.vue';
import Spenden from '../layouts/Spenden.vue';
import Ueber from '../layouts/Ueber.vue';
import Impressum from '../layouts/Impressum.vue';
import FAQ from '../layouts/Faq.vue';

Vue.use(VueRouter);

const routes: Array<any> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/spenden',
    name: 'Spenden',
    component: Spenden
  },
  {
    path: '/ueber',
    name: 'Über Uns',
    component: Ueber
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;