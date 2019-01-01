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
    isQuestionOpen: false,
    showAnswerPost: false,
    currentPostId: '',
    goToAnswer: false,
  },
  mutations: {
    setGoToAnswer: (state, payload) => {
      state.goToAnswer = payload;
    },
    changeCreateClass: (state, payload) => {
      state.showCreateClass = payload;
    },
    toggelPostForm: (state, payload) => {
      state.showPostForm = payload;
    },
    toggelAnswerForm: (state, payload) => {
      state.showAnswerPost = payload;
    },
    toggelProjectDialog: (state, payload) => {
      state.isProjectOpen = payload;
    },
    toggelQuestionDialog: (state, payload) => {
      state.isQuestionOpen = payload;
    },
    setCurrentPostId: (state, payload) => {
      state.currentPostId = payload;
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
    toggelProjectDialog: async ({
      commit
    }, payload) => {
      commit('toggelProjectDialog', payload);
    },
    toggelQuestionDialog: async ({
      commit
    }, payload) => {
      commit('toggelQuestionDialog', payload);
    },
    setCurrentPostId({commit}, payload){
      commit('setCurrentPostId', payload);
    },
    setGoToAnswer({commit}, payload){
      commit('setGoToAnswer', payload);
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
