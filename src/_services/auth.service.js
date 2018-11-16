import axios from 'axios';
import { authHeader } from '../_helpers';
export const authService = {
    get,
    post,
    put
};

function get(URL) {
    return axios.get(URL, { headers: authHeader() });
}

function post(URL, data) {
    return axios.post(URL, data, { headers: authHeader() });
}

function put(URL, data) {
    return axios.post(URL, data, { headers: authHeader() });
}
