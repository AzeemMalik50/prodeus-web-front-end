import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Feeds from './views/Feeds.vue';
import ClassPage from '@/views/ClassPage.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '', component: Feeds },
        { path: 'class-page', component: ClassPage }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
