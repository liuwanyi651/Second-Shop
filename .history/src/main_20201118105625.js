import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局引入 vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
//引入api
import api from './http/api'
import {checkLogin} from './utils/index'


//把api挂载在this上面  这个$是为了避免与组件里变量重名
Vue.prototype.$api = api
Vue.prototype.$checkLogin = checkLogin

Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
