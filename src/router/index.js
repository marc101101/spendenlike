import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import Spenden from '../components/spenden.vue'
import Info from '../components/info.vue'
import Ueber from '../components/ueber.vue'
import Geschichte from '../components/geschichte.vue'
import Impressum from '../components/impressum.vue'

Vue.use(Router)
//home/spenden/info/about/geschichte/betterplace
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Homey
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