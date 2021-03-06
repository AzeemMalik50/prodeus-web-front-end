import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCreateClass: false,
    isProjectOpen: false
  },
  mutations: {
    changeCreateClass: (state, payload) => {
      state.showCreateClass = payload;
    },
    updateProjectDialog: (state, payload) => {
      state.isProjectOpen = payload;
    },
  },
  actions: {
    changeCreateClass: async ({
      commit
    },payload) => {
      commit('changeCreateClass', payload);
    },
    updateProjectDialog: async ({
      commit
    },payload) => {
      commit('updateProjectDialog', payload);
    }
  },
  getters: {
    showCreateClass: state => state.showCreateClass,
    isProjectOpen: state => state.isProjectOpen,
  }
})
