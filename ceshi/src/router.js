import Vue from 'vue'
import VueRouter from 'vue-router'
import {getCookie} from './tcookie'
Vue.use(VueRouter)

import Thomess from './view/Thomess'
import Thome from './view/Thome'
import Tfenlei  from './view/Tfenlei '
import Thottest from './view/Thottest'
import Tcar from './view/Tcar'
import Tmine from './view/Tmine'
import Tlogin from './view/Tlogin'
import Txianqingye from './view/Txianqingye'
  const router = new VueRouter({
    routes : [
      {
        path: '/',//重定向
        redirect: '/Thomess/Thome',
    },
    { path: '/Tlogin' ,name:'Tlogin' ,component: Tlogin },
    { path: '/Txianqingye' ,name:'Txianqingye' ,component: Txianqingye},
    { path: '/Thomess', component: Thomess ,name:'Thomess',
      children:[
      { path: 'Tfenlei ', component: Tfenlei  ,name:'Tfenlei '},
      { path: 'Thottest', component: Thottest ,name:'Thottest'},
      {path: 'Thome', component: Thome ,name:'Thome'},
      {path: 'Tcar', component: Tcar ,name:'Tcar', meta: { requiresAuth: true } },
      { path: 'Tmine', component: Tmine ,name:'Tmine', meta: { requiresAuth: true }},
    ],
  },
    ]
  })

  //全局路由首位
   router.beforeEach((to, from, next) => {
        if(to.meta.requiresAuth){
          let uname = getCookie('name')
          if(uname){
                    next()
          }else{
           next({path:'/Tlogin'})
          }
        }else{
          next();
        }
      
    })

  export default router