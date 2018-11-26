import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Feeds from './views/Feeds.vue';
import ClassPage from '@/views/ClassPage.vue';
import ClassDashBoard from '@/views/ClassDashBoard.vue';
import CreatePost from '@/views/CreatePost.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import MyClasses from '@/views/MyClasses.vue';
import store from './store'
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
        {
          path: 'classes/:id', name: 'classPage', component: ClassPage, props: true,
          beforeEnter(to, from, next) {
            store.dispatch("classes/getClass", to.params.id);
            next();
          }
        },
        { path: 'class-dashboard', name: 'classDashboard', component: ClassDashBoard },
        {
          path: 'classes/instructor/:id', name: 'instructorClasses', component: MyClasses, props: true,
          beforeEnter(to, from, next) {
            store.dispatch("classes/getMyClasses", { id: to.params.id, type: 'instructor' });
            next();
          }
        },
        {
          path: 'classes/student/:id', name: 'studentClasses', component: MyClasses, props: true,
          beforeEnter(to, from, next) {
            store.dispatch("classes/getMyClasses", { id: to.params.id, type: 'student' });
            next();
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/sign-up'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (!authRequired && loggedIn) {
    return next(/** from.path **/);
  } else if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});

export default router;