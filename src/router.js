import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from './views/BlogHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'blogHome',
      component: BlogHome
    },
    {
      path: '/:slug',
      name: 'blogPost',
      // route level code-splitting
      // this generates a separate chunk (post.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "blogPost" */ './views/BlogPost.vue')
    }
  ]
})
