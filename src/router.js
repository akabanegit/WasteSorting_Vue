import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topic from './views/Topic.vue'
import Download from './views/Download.vue'
import Comment from './views/Comment.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {path:'/',component:Home},
    {path:'/Home',component:Home},
    {path:'/Topic',component:Topic},
    {path:'/Download',component:Download},
    {path:'/Comment',component:Comment},
  ]
})
