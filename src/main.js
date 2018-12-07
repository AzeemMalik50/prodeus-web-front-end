import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor';
import VueCookies from 'vue-cookies'
import VueVideoPlayer from 'vue-video-player'
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');
// require videojs style
import 'video.js/dist/video-js.css';
import './_services/interceptor';
//loaing component
import "vue-loading-overlay/dist/vue-loading.css";

import App from './App.vue'
import router from './router'
import store from './store'
import './styles/normalize.css';
import './styles/webflow.css';
import './styles/ongoing.css';
import './styles/styles.scss';

import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
Vue.use(VueMoment, {
  moment,
});

HelloJs.init({
  google: process.env.VUE_APP_GOOGLE_APP_CLIENT_ID,
  facebook: process.env.VUE_APP_FACEBOOK_APP_CLIENT_ID
}, {
  redirect_uri: 'authcallback/'
});
Vue.use(VueHello, HelloJs);
Vue.config.productionTip = false
Vue.use(VueQuillEditor, /* { default global options } */);
Vue.use(VueCookies);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.filter('duration', (totalSeconds) => {
  const hours = Math.ceil(Math.floor(totalSeconds / 3600));
  totalSeconds %= 3600;
  const minutes = Math.ceil(Math.floor(totalSeconds / 60));
  const seconds = Math.ceil(totalSeconds % 60);
  return hours + ":" + minutes + ":" + seconds;
});