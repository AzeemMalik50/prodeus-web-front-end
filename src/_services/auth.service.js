import axios from 'axios';
import { authHeader } from '../_helpers';
import httpAdapter from  'axios/lib/adapters/http';
export const authService = {
    get,
    post,
    put,
    patch,
    fileUpload,
    getMedia
};

function get(URL) {
    return axios.get(URL, { headers: authHeader() });
}

function post(URL, data) {
    return axios.post(URL, data, { headers: authHeader() });
}

function put(URL, data) {
    return axios.put(URL, data, { headers: authHeader() });
}

function patch(URL, data) {
    return axios.patch(URL, data, { headers: authHeader() });
}
function fileUpload(URL, formData) {
    return axios.post(URL, formData, { headers: authHeader({'Content-Type': 'multipart/form-data'}) });
}
function getMedia(URL){
    // 'Content-Type': 'video/mp4'
    return axios.get(URL, { headers: authHeader({}),responseType: 'stream', adapter: httpAdapter });
}