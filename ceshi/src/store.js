import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
     title:'首页',
     theight:0,//用来触发ajax的
    },
    
  })


  export default store