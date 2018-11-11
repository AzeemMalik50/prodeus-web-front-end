import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Feeds from './views/Feeds.vue';
import ClassPage from '@/views/ClassPage.vue';
import ClassDashBoard from '@/views/ClassDashBoard.vue';
import CreatePost from '@/views/CreatePost.vue';
import Login from '@/views/Login.vue';

Vue.use(Router)

 const router = new Router({
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
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if(!authRequired && loggedIn){
  return next(/** from.path **/);
  } else if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})
export default router;