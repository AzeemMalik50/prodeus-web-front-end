import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/normalize.css';
import './styles/webflow.css';
import './styles/ongoing.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
