import { authService }  from '../_services/auth.service';
import router from '@/router';

const apiUrl = '/'
export const classes = {
  namespaced: true,
  state: {
   currentClass:{},
    error: {},
    feeds:[],
  },
  actions: {
    createClass({ commit }, payload) {
      authService.post('/classes', payload)
        .then(
          response => {console.log(response.data)},
          error => commit('failure', error)
        );
    },
    getClass({ commit }, id) {
      authService.get(`/classes/${id}`)
        .then(
          response => commit('setCurrentClass', response.data),
          error => commit('failure', error)
        );
    },
    getFeeds({ commit }) {
      authService.get(`/feed`)
        .then(
          response => commit('setFeeds', response.data),
          error => commit('failure', error)
        );
    }
  },
  mutations: {
    setCurrentClass(state, cClass) {
      state.currentClass =  cClass;
    },
    setFeeds(state, feeds) {
      state.feeds =  feeds;
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
