import Vue from 'vue'
import App from './pages/App.vue'
import components from './components/index.js'

import commonStyle from './styles/common.less'
Vue.use(components)

const app = new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})