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
 
// Vue.prototype.$getTime = getTime()
Vue.use(Vant).use(Search).use(Mint).use(Button)
// Vue.component(Indicator)
Vue.prototype.$lod = Indicator  
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
