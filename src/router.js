import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Feeds from './views/Feeds.vue';
import ClassPage from '@/views/ClassPage.vue';
import ClassDashBoard from '@/views/ClassDashBoard.vue';
import CreatePost from '@/views/CreatePost.vue';

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
        { path: 'class-page', component: ClassPage },
        { path: 'class-dashboard', component: ClassDashBoard }
        
      ]
    },
    {
      path: '/create-project',
      name: 'project',
      component: CreatePost
    },
    {
      path: '/create-question',
      name: 'question',
      component: CreatePost
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
