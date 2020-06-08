import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import axios from "axios";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    cmsData: undefined
  },
  mutations: {
    cmsData(state, data) {
      state.cmsData = data;
    }
  },
  actions: {
    async loadCMSData({ commit }) {
      const { data } = await axios.get(
        "https://x6ce6j7dq6.execute-api.eu-central-1.amazonaws.com/dev/info"
      );
      await commit("cmsData", data);
    }
  }
});
