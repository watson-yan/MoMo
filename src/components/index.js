import tabs from './tabs.vue'
import tabbar from './tabbar.vue'
import navbar from './navbar.vue'

export default (Vue) => {
  Vue.component('tabs', tabs)
  Vue.component('tab-bar', tabbar)
  Vue.component('nav-bar', navbar)
}