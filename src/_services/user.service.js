import axios from 'axios';
import { authHeader } from '../_helpers';
export const userService = {
    login,
    logout,
    signup,
    facebookAuth,
    googleAuth,
    resetPassword,
    forgetPassword
};

function login(email, password) {
    return axios.post(`/login`, { email, password });
}
function forgetPassword(email) {
    return axios.post(`/forgetPassword`, { email });
}
function resetPassword(payload) {
    return axios.post(`/resetPassword`, payload);
}
function facebookAuth(payload) {
    return axios.get(`/auth/facebook/callback?access_token=${payload}`);
}
function googleAuth(payload) {
    return axios.get(`/auth/google/callback?access_token=${payload}`);
}
function signup(email, password, fullName) {
    return axios.post(`/signup`, { email, password, fullName });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
