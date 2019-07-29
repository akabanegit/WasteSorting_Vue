import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topic from './views/Topic.vue'
import Download from './views/Download.vue'
import Comment from './views/Comment.vue'
import gan from './views/waste/gan.vue'
import huishou from './views/waste/huishou.vue'
import shi from './views/waste/shi.vue'
import youhai from './views/waste/youhai.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {path:'/',component:Home,redirect:'/Home/shi',children:[
      {path:'/Home/shi',component:shi},
      {path:'/Home/gan',component:gan},
      {path:'/Home/huishou',component:huishou},
      {path:'/Home/youhai',component:youhai},
    ]},
    {path:'/Home',component:Home,redirect:'/Home/shi',children:[
      {path:'/Home/shi',component:shi},
      {path:'/Home/gan',component:gan},
      {path:'/Home/huishou',component:huishou},
      {path:'/Home/youhai',component:youhai},
    ]},
    {path:'/Topic',component:Topic},
    {path:'/Download',component:Download},
    {path:'/Comment',component:Comment},

  ]
})
