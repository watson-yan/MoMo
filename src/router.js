import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Button from './pages/style/button.vue'
import Item from './pages/style/item.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/button', component: Button},
  {path: '/item', component: Item}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router