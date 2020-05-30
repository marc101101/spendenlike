import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home.vue";
import Spenden from "../components/spenden.vue";
import Ueber from "../components/ueber.vue";
import Impressum from "../components/impressum.vue";
import FAQ from "../components/faq.vue";

Vue.use(Router);
//home/spenden/info/about/geschichte/betterplace
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/spenden",
      name: "Spenden",
      component: Spenden
    },
    {
      path: "/über",
      name: "Über Uns",
      component: Ueber
    },
    {
      path: "/faq",
      name: "FAQ",
      component: FAQ
    },
    {
      path: "/impressum",
      name: "Impressum",
      component: Impressum
    }
  ]
});
