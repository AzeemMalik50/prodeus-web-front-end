import { authService } from '../_services/auth.service';
import router from '@/router';

const apiUrl = '/'
export const classes = {
  namespaced: true,
  state: {
    currentClass: {},
    error: {},
    feeds: [],
  },
  actions: {
    createClass({ commit }, payload) {
      authService.post('/classes', payload)
        .then(
          response => {
            router.push({ name: 'classPage', params: { id: response.data._id } });
          }, error => commit('failure', error)
        );
    },
    getClass({ commit }, id) {
      commit('setCurrentClass', {});
      authService.get(`/classes/${id}`)
        .then(response => {
          authService.getMedia(`/images/${response.data.img}`)
            .then(res => {
              response.data.totalDuration = 0;
              response.data.img = res.data;
              response.data.lessons = response.data.lessons.map(lesson => {
                response.data.totalDuration += lesson.secondsDuration;
                lesson.expanded = false;
                return lesson
              });
              response.data.totalDuration = Math.round(response.data.totalDuration);
              commit('setCurrentClass', response.data);
            });
        },
          error => commit('failure', error));
    },
    getFeeds({ commit }) {
      authService.get(`/feed`)
        .then(
          response => commit('setFeeds', response.data),
          error => commit('failure', error)
        );
    },
    uploadFile({ commit }, payload) {
      return authService.fileUpload('/uploads/video', payload);
    },
    getMedia({ commit }, mediaId) {
      return authService.getMedia(`/images/${mediaId}`);
    },
  },
  mutations: {
    setCurrentClass(state, cClass) {
      state.currentClass = cClass;
    },
    setFeeds(state, feeds) {
      state.feeds = feeds;
    },
    failure(state, error) {
      state.error = { error };
    }
  },
  getters: {
    allCategories: state => state.allCategories,
    currentClass: state => state.currentClass,
    feeds: state => state.feeds
  },
}
