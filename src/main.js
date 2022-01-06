import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/axios.config.js'
import qs from 'qs'

//引入样式框架
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)


//引入fragment
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
//引入Jquery
import $ from 'jquery'
window.isCloseHint = true;
//初始化关闭

let params={
  username:'zzl',
  age:23
}



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
