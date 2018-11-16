import { userService } from '../_services';
import router from '@/router';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login: ({ dispatch, commit }, { email, password }) => {
            return userService.login(email, password, fullName);
        },
        signup: ({ dispatch, commit }, { email, password , fullName}) => {
            return userService.signup(email, password, fullName);
        },
        loginSuccess: ({ dispatch, commit }, payload) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(payload));
            commit('loginSuccess', payload);
        },
        loginFailure: ({ dispatch, commit }, payload) => {
            commit('loginSuccess', payload);
        },
        logout: ({ commit }) => {
            userService.logout();
            commit('logout');
        }
    },
    mutations: {
        loginSuccess: (state, user) => {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure: (state) => {
            state.status = {};
            state.user = null;
            userService.logout();
        },
        logout: (state) => {
            userService.logout();
            state.status = {};
            state.user = null;
        }
    }
}
