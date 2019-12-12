import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import Spenden from '../components/spenden.vue'
import Info from '../components/info.vue'
import Ueber from '../components/ueber.vue'
import Geschichte from '../components/geschichte.vue'
import Impressum from '../components/impressum.vue'
import Betterplace from '../components/betterplace.vue'


Vue.use(Router)
//home/spenden/info/about/geschichte/betterplace
export default new Router({
  mode: 'history',
  routes: [
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
      path: '/betterplace',
      name: 'Betterplace',
      redirect: to => {
        window.location.href = "https://www.betterplace.org/en/projects/73873"
      }    
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