import Vue from 'vue'
import Vuex from 'vuex';
import { authentication } from './authentication.module';
import { categories } from './categories.module';
import { classes } from './classes.module';
import { profile } from './profile.module';
import { notification } from './notification.module';
import { discussion } from './discussion.module';
import { post } from './post.module';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCreateClass: false,
    showPostForm: false,
    isProjectOpen: false,
    showAnswerPost: false
  },
  mutations: {
    changeCreateClass: (state, payload) => {
      state.showCreateClass = payload;
    },
    toggelPostForm: (state, payload) => {
      state.showPostForm = payload;
    },
    toggelAnswerForm: (state, payload) => {
      state.showAnswerPost = payload;
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
    toggelAnswerForm: async ({
      commit
    }, payload) => {
      commit('toggelAnswerForm', payload);
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
    showAnswerPost: state => state.showAnswerPost,
    isProjectOpen: state => state.isProjectOpen,
  },
  modules: {
    authentication,
    categories,
    classes,
    profile,
    notification,
    discussion,
    post
  }
})
