import axios from 'axios';
import { authHeader } from '../_helpers';
export const userService = {
    login,
    logout,
    signup
};

function login(email, password) {
    return axios.post(`/login`, { email, password });
}
function signup(email, password, fullName) {
    return axios.post(`/signup`, { email, password, fullName });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
