import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Spenden from '@/views/Spenden.vue'
import Info from '@/views/Info.vue'
import Ueber from '@/views/Ueber.vue'
import Geschichte from '@/views/Geschichte.vue'
import Impressum from '@/views/Impressum.vue'

Vue.use(Router)
//home/spenden/info/about/geschichte/betterplace
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
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
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/über',
      name: 'Über Uns',
      component: Ueber
    },
    {
      path: '/geschichte',
      name: 'Geschichte',
      component: Geschichte
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    }
  ]
});