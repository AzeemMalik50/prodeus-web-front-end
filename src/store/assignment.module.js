import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const assignment = {
  namespaced: true,
  state: {
    selectedQuestion: {},
    error: {},
  },
  actions: {
    addPost({ commit }, data) {
      return authService.post(`/student-assignments`, data);
    },
    addPostComment({ commit }, data) {
      return authService.post(`/student-assignments/${data.postId}/discussion`, data);
    },
    getPost({ commit }, id) {
      return authService.get(`/student-assignments/${id}`);
    },
    likePost({ commit }, id) {
      return authService.put(`/student-assignments/${id}/like`, {})
    },
    reblogPost({ commit }, id) {
      return authService.put(`/student-assignments/${id}/reblog`, {})
    },
    removeLikePost({ commit }, id) {
      return authService.put(`/student-assignments/${id}/unlike`, {})
    },
    updateAssignmentStatus({ commit }, payload){
      return authService.put(`/student-assignments/${payload.id}/status`, payload)
    }
  },
  mutations: {
    failure(state, err) {
      state.error = err;
    }
  }
}
