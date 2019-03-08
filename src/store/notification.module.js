import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const notification = {
  namespaced: true,
  state: {
    error: {},
    notifications: [],
    unreadCount: 0
  },
  actions: {
    getNotifications({ commit }) {
      authService.get(`/notifications`)
        .then(response => {
          commit('setNotifications', response.data);
        },
          error => commit('failure', error));
    },
    getNotificationsCount({ commit }) {
      authService.get(`/notifications/unread/count`)
        .then(response => {
          commit('setNotificationsCount', response.data);
        },
          error => commit('failure', error));
    },
    readNotification({ commit }, id) {
      authService.put(`/notifications/${id}/read`, {})
        .then(response => {
          authService.get(`/notifications/unread/count`)
            .then(response => {
              commit('setNotificationsCount', response.data);
            },
              error => commit('failure', error));
        },
          error => commit('failure', error));
    }
  },
  mutations: {
    setNotifications(state, notifys) {
      state.notifications = notifys;
    },
    setNotificationsCount(state, unreadCount) {
      state.unreadCount = unreadCount;
    },
    failure(state, err) {
      state.error = err;
    }
  }
}
