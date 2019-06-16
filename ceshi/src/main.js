import Vue from 'vue'
import App from './App.vue'



import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import {Search,Button} from 'vant'
import Mint from 'mint-ui';
import {Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css';
import {getCookie,setCookie,delCookie} from './tcookie'
// Vue.prototype.$getTime = getTime()
Vue.use(Vant).use(Search).use(Mint).use(Button)
// Vue.component(Indicator)
Vue.prototype.$tcookie = {
  getCookie,setCookie,delCookie
}
Vue.prototype.$lod = Indicator  //把加载挂摘到原型下面
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
