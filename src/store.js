import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCreateClass: false
  },
  mutations: {
    changeCreateClass: (state, payload) => {
      state.showCreateClass = payload;
    },
  },
  actions: {
    changeCreateClass: async ({
      commit
    },payload) => {
      commit('changeCreateClass', payload);
    }
  },
  getters: {
    showCreateClass: state => state.showCreateClass,

  }
})
