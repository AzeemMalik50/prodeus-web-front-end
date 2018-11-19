import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor';
import VueCookies from 'vue-cookies'
import VueVideoPlayer from 'vue-video-player'
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
// require videojs style
import 'video.js/dist/video-js.css'
//loaing component
import "vue-loading-overlay/dist/vue-loading.css";

import App from './App.vue'
import router from './router'
import store from './store'
import './styles/normalize.css';
import './styles/webflow.css';
import './styles/ongoing.css';
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

Vue.config.productionTip = false
Vue.use(VueQuillEditor, /* { default global options } */);
Vue.use(VueCookies);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
