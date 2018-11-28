import Vue from 'vue'
import Vuex from 'vuex';
import { authentication } from './authentication.module';
import { categories } from './categories.module';
import { classes } from './classes.module';
import { profile } from './profile.module';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCreateClass: false,
    showPostForm: false,
    isProjectOpen: false
  },
  mutations: {
    changeCreateClass: (state, payload) => {
      state.showCreateClass = payload;
    },
    toggelPostForm: (state, payload) => {
      state.showPostForm = payload;
    },
    updateProjectDialog: (state, payload) => {
      state.isProjectOpen = payload;
    },
  },
  actions: {
    changeCreateClass: async ({
      commit
    }, payload) => {
      commit('changeCreateClass', payload);
    },
    toggelPostForm: async ({
      commit
    }, payload) => {
      commit('toggelPostForm', payload);
    },
    updateProjectDialog: async ({
      commit
    }, payload) => {
      commit('updateProjectDialog', payload);
    }
  },
  getters: {
    showCreateClass: state => state.showCreateClass,
    showPostForm: state => state.showPostForm,
    isProjectOpen: state => state.isProjectOpen,
  },
  modules: {
    authentication,
    categories,
    classes,
    profile
  }
})
