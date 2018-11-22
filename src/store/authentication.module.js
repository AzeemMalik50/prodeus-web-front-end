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
            return userService.login(email, password);
        },
        signup: ({ dispatch, commit }, { email, password, fullName }) => {
            return userService.signup(email, password, fullName);
        },
        loginSuccess: ({ dispatch, commit }, payload) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(payload));
            commit('loginSuccess', payload);
        },
        loginFailure: ({ dispatch, commit }, payload) => {
            commit('loginFailure', payload);
        },
        logout: ({ commit }) => {
            userService.logout();
            commit('logout');
        },
        facebookAuth: ({ commit }, payload) => {
            userService.facebookAuth(payload).then(res => {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                commit('loginSuccess', res.data.user);
            }, err => {
                console.error(err);
            })
        },
        googleAuth: ({ commit }, payload) => {
            userService.googleAuth(payload).then(res => {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                commit('loginSuccess', res.data.user);
            }, err => {
                console.error(err);
            })
        }
    },
    mutations: {
        loginSuccess: (state, user) => {
            state.status = { loggedIn: true };
            state.user = user;
            router.push({ name: 'home' });            
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
            router.push({ name: 'login' });
        }
    }
}
