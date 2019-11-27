import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Impressum from '../components/Impressum'
import Spenden from '../components/Spenden'
import Info from '../components/Info'
import Ueber from '../components/Ueber'
import Geschichte from '../components/Geschichte'

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