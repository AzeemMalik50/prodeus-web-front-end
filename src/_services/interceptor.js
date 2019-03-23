import axios from 'axios'
import router from '../router';
import store from '../store/index';
// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  return response;
},  (error) => {
  // Do something with response error
  console.log(error)
  if (axios.isCancel(error)) {
    console.log('Request canceled');
  }
  if(error && error.response && error.response.status === 401){
    store.dispatch('authentication/logout');
  }
  return Promise.reject(error);
});