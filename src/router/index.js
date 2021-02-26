import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '../views/DefaultPage.vue'
import BlankPage from '../views/BlankPage.vue'
import Index from '../page/index.vue';
import ChangeCity from '../page/changeCity.vue'
import goodsList from '../page/goodsList.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DefaultPage',
    component: DefaultPage,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: ChangeCity
    }, {
      path: 's/:name',
      name: 'goods',
      component: goodsList
    }]
  },
  {
    path: '/blank',
    name: 'BlankPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: BlankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
