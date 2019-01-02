import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const post = {
  namespaced: true,
  state: {
    selectedQuestion: {},
    error: {},
  },
  actions: {
    addPost({ commit }, data) {
      return authService.post(`/posts`, data);
    },
    addPostComment({ commit }, data) {
      return authService.post(`/posts/${data.postId}/discussion`, data);
    },
    getPost({ commit }, id) {
      return authService.get(`/posts/${id}`);
    },
    likePost({ commit }, id) {
      return authService.put(`/posts/${id}/like`, {})
    },
    removeLikePost({ commit }, id) {
      return authService.put(`/posts/${id}/unlike`, {})
    },
    votePost({ commit }, data) {
      return authService.put(`/posts/${data.postId}/vote`, data);
    },
    setSelectedQuestion({ commit }, data) {
      commit('setSelectedQuestion', data);
    },
    viewPost({ commit }, id) {
      return authService.put(`/posts/${id}/view`, {})
    },
  },
  mutations: {
    failure(state, err) {
      state.error = err;
    },
    setSelectedQuestion(state, payload) {
      state.selectedQuestion = payload;
    }
  }
}
