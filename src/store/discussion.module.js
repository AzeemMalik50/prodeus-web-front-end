import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const discussion = {
  namespaced: true,
  state: {
    error: {},
  },
  actions: {
    addLessonDiscussion({ commit }, data) {
     return  authService.post(`/discussion/classes/${data.classId}/${data.lessonId}`, data.payload)
    },
    getLessonDiscussion({ commit }, data) {
      return  authService.get(`/discussion/classes/${data.classId}/${data.lessonId}`)
     },
     createDiscussion({ commit }, payload) {
      return  authService.post(`/discussion`,payload)
     },
     likeDiscussion({ commit }, id) {
      return  authService.put(`/discussion/${id}/like`,{})
     },
     removeLikeDiscussion({ commit }, id) {
      return  authService.put(`/discussion/${id}/unlike`,{})
     },

  },
  mutations: {
    failure(state, err) {
      state.error = err;
    }
  }
}
