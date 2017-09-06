import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './pages/App.vue'
import components from './components/index.js'
import './styles/common.scss'

// 导入相关文件
Vue.use(components) // 组件
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render(h) {
    return h(App)
  }
})