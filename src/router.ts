import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    
    {
      path: '/manage',
      name: 'manage',
      component: () => import('@/views/Manage.vue'),
      children:[
        {
          path: '/timeline',
          name: 'timeline',
            component: () => import('@/views/Timeline.vue')
        },
        {
          path: '/',
          name: 'personCard',
          component: () => import('@/views/PersonCard.vue'),
        },
        {
          path: '/personCardAdd',
          name: 'personCardAdd',
          component: () => import('@/views/PersonCardAdd.vue'),
        },
        {
          path: '/openMap',
          name: 'openMap',
          component: () => import('@/views/OpenMap.vue'),
        },
      ]
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
