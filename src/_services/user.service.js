import axios from 'axios';
import { authHeader } from '../_helpers';
export const userService = {
    login,
    logout
};

function login(email, password) {
    return axios.post(`/login`, { email, password });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
