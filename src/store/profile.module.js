import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const profile = {
  namespaced: true,
  state: {
    profile: {}
  },
  actions: {
    getProfile({ commit }) {
      commit('resetProfile');
      console.log(JSON.parse(localStorage.getItem('user')))
      const UserId = JSON.parse(localStorage.getItem('user'))._id;
      authService.get(`/user/profile/${UserId}`)
        .then(response => {
          if (response.data.local.img) {
            authService.getMedia(`/images/${response.data.local.img}`)
              .then(res => {
                response.data.local.img = res.data;
                commit('setProfile', response.data);
              });
          } else {
            commit('setProfile', response.data);
          }

        },
          error => commit('failure', error));
    },

  },
  mutations: {
    setProfile(state, profileData) {
      state.profile = profileData;
    },
    resetProfile(state) {
      state.profile = {};
    },

  },
  getters: {
    profile: state => state.profile
  },
}
