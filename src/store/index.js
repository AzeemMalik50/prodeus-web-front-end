import Vue from 'vue'
import Vuex from 'vuex';
import { authentication } from './authentication.module';
import { categories } from './categories.module';
import { classes } from './classes.module';
import { profile } from './profile.module';
import { notification } from './notification.module';
import { discussion } from './discussion.module';
import { post } from './post.module';
import { assignment } from './assignment.module';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCreateClass: false,
    showPostForm: false,
    isProjectOpen: false,
    isAssignmentOpen: false,
    isQuestionOpen: false,
    showAnswerPost: false,
    currentPostId: '',
    goToAnswer: false,
    goToPostComment: false,
    showSocailShare: false,
    showProfileSetting: false,
    socailShareData: {
      url: '',
      title: '',
      text: ''
    },
    isOpenLogin: false,
    isOpenSignup: false
  },
  mutations: {
    setProfileSettingForm: (state, payload) => {
      state.showProfileSetting = payload;
    },
    setSocailShareModalData: (state, payload) => {
      state.socailShareData = payload;
    },
    setSocailShareModal: (state, payload) => {
      state.showSocailShare = payload;
    },
    setGoToPostComment: (state, payload) => {
      state.goToPostComment = payload;
    },
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
    toggelAssignmentDialog: (state, payload) => {
      state.isAssignmentOpen = payload;
    },
    toggelQuestionDialog: (state, payload) => {
      state.isQuestionOpen = payload;
    },
    setCurrentPostId: (state, payload) => {
      state.currentPostId = payload;
    },
    setLoginForm: (state, payload) => {
      state.isOpenLogin = payload;
    },
    setSignUpForm: (state, payload) => {
      state.isOpenSignup = payload;
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
    toggelAssignmentDialog: async ({
      commit
    }, payload) => {
      commit('toggelAssignmentDialog', payload);
    },
    toggelQuestionDialog: async ({
      commit
    }, payload) => {
      commit('toggelQuestionDialog', payload);
    },
    setCurrentPostId({ commit }, payload) {
      commit('setCurrentPostId', payload);
    },
    setGoToAnswer({ commit }, payload) {
      commit('setGoToAnswer', payload);
    },
    setGoToPostComment({ commit }, payload) {
      commit('setGoToPostComment', payload);
    },
    setSocailShareModal({ commit }, payload) {
      commit('setSocailShareModal', payload);
    },
    setSocailShareModalData({ commit }, payload) {
      commit('setSocailShareModalData', payload);
    },
    setProfileSettingForm({ commit }, payload) {
      commit('setProfileSettingForm', payload);
    },
    setLoginForm({ commit }, payload) {
      commit('setLoginForm', payload);
    },
    setSignUpForm({ commit }, payload) {
      commit('setSignUpForm', payload);
    },
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
    post,
    assignment
  }
})
