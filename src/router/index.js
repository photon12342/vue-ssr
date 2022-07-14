import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OtherView from '../views/OtherView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/other',
    name: 'other',
    // 不能使用懒加载模式，在express上会报错，已经使用ssr了也不需要使用懒加载模式
    // component: () => import('../views/OtherView')
    component: OtherView
  },
]

// express代理静态页面启动服务后 刷新页面报这个错
// Avoided redundant navigation to current location: "/".
// 需要加下面这段代码去解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes
});

// export default router

export function createRouter() {
  return router
}
