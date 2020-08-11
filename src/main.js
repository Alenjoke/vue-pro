// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Axios from 'axios'

import 'mint-ui/lib/style.css' 
import '../static/css/globel.css'

Vue.config.productionTip = false
Vue.use(MintUI)

//给Vue原型挂载$axios属性
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://www.sinya.online/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
