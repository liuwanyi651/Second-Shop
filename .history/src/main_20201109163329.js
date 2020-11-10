import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api'


//把api挂载在this上面  这个$是为了避免与组件变量重名
Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
