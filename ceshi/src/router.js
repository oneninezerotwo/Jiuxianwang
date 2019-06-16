import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Thomess from './view/Thomess'
import Thome from './view/Thome'
import Tfenlei  from './view/Tfenlei '
import Thottest from './view/Thottest'
import Tcar from './view/Tcar'
import Tmine from './view/Tmine'
import Tlogin from './view/Tlogin'
  const router = new VueRouter({
    routes : [
      {
        path: '/',//重定向
        redirect: '/Thomess/Thome',
    },
    { path: '/Tlogin' ,name:'Tlogin' ,component: Tlogin },
    { path: '/Thomess', component: Thomess ,name:'Thomess',
      children:[
      { path: 'Tfenlei ', component: Tfenlei  ,name:'Tfenlei '},
      { path: 'Thottest', component: Thottest ,name:'Thottest'},
      {path: 'Thome', component: Thome ,name:'Thome'},
      {path: 'Tcar', component: Tcar ,name:'Tcar'},
      { path: 'Tmine', component: Tmine ,name:'Tmine'},
    ],
  },
  
    ]
  })
  export default router