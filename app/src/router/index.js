import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name:"MHome",
    component: () => import('../pages/home'),
  },
]

const router = new VueRouter({
  base: '',
  mode:'history',
  routes,
})


export default router