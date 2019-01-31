import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const post = {
  namespaced: true,
  state: {
    selectedQuestion: {},
    editPost: null,
    error: {},
  },
  actions: {
    addPost({ commit }, data) {
      return authService.post(`/posts`, data);
    },
    updatePost({ commit }, data) {
      return authService.put(`/posts/${data._id}`, data);
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
    reblogPost({ commit }, id) {
      return authService.put(`/posts/${id}/reblog`, {})
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
    setEditPost({ commit }, data) {
      commit('setEditPost', data);
    }
  },
  mutations: {
    setEditPost(state, post) {
      state.editPost = post;
    },
    failure(state, err) {
      state.error = err;
    },
    setSelectedQuestion(state, payload) {
      state.selectedQuestion = payload;
    }
  }
}
