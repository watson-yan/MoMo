import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Button from './pages/style/button.vue'
import Item from './pages/style/item.vue'
import Input from './pages/style/input.vue'
import List from './pages/style/list.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/button', component: Button},
  {path: '/item', component: Item},
  {path: '/input', component: Input},
  {path: '/list', component: List}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router