import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor';
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/normalize.css';
import './styles/webflow.css';
import './styles/ongoing.css';

// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
Vue.config.productionTip = false
Vue.use(VueQuillEditor, /* { default global options } */);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
