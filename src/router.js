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
import Portfolio from '@/views/Portfolio.vue';
import ClassRoom from '@/views/ClassRoom.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';
import ResetForgetPassword from '@/views/ResetForgetPassword.vue';
import QuestionDetail from '@/views/QuestionDetail.vue';
import ProjectDetail from '@/views/ProjectDetail.vue';
import Search from './components/Search.vue';
import HomePage from '@/views/HomePage.vue';
import Teach from '@/views/Teach.vue';
import Learn from '@/views/Learn.vue';
import ProDegrees from '@/views/ProDegrees.vue';





import store from './store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home,
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      children: [
        { path: '',name:'feed', component: Feeds },
        { path: 'search',name:'search', component: Search },
        {
          path: 'classes/:id', name: 'classPage', component: ClassPage, props: true,
          beforeEnter(to, from, next) {
            store.dispatch("classes/getClass", to.params.id);
            next();
          }
        },
        { path: 'class-dashboard', name: 'classDashboard', component: ClassDashBoard },
        {path: 'classes/my/:id', name: 'myClasses', component: MyClasses, props: true},
        {
          path: 'classes/student/:id', name: 'studentClasses', component: MyClasses, props: true
        },
        { path: 'profile', name:'profile', component: Portfolio },
        { path: 'profile/:userId', name:'userProfile', component: Portfolio, props: true },
        { path: 'class-room/:id', name:'classRoom', component: ClassRoom, props: true },
        { path: 'question/:postId', name:'question', component: QuestionDetail, props: true },
        { path: 'project/:postId', name:'project', component: ProjectDetail, props: true },
      ]
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/teaching',
      name: 'home-teach',
      component: Teach
    },
    {
      path: '/learning',
      name: 'home-learn',
      component: Learn
    }, {
      path: '/prodegrees',
      name: 'home-degrees',
      component: ProDegrees
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
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetForgetPassword
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
  const publicPages = ['/login', '/sign-up', '/forgot-password', '/reset-password', '/home', '/teaching', '/learning', '/prodegrees'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (!authRequired) {
    return next(/** from.path **/);
  } else if (authRequired && !loggedIn) {
    return next('/home');
  }
  next();
});

export default router;