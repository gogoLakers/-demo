import Vue from 'vue'
import App from './App.vue'
import './assets/common.css'
import { powerRoutes } from './router/index'

// 引入路由
import VueRouter from 'vue-router'
import router from '@/router/index'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};
// 使用插件
Vue.use(VueRouter)

// 引入仓库
import store from './store'

// 注册全局组件Select
import Select from '@/components/Select.vue'
Vue.component('Select', Select)

// 引入mock
import '@/mock'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 判断有无登录
  if (store.state.roles) {
    // 已经登陆
    // 判断有无动态路由
    if (store.state.newRoutes.length !== 0) {
      next()
    } else {
      let newrouters
      // 校长有全部权力
      if (store.state.roles == 'M') {
        newrouters = powerRoutes
      } else {
        // 筛选出符合角色的路由
        let newchildren = powerRoutes[0].children.filter(route => {
          if (route.meta) {
            if (store.state.roles == route.meta.roles) {
              return true
            } else {
              return false
            }
          } else {
            return true
          }
        })
        // 将子路由进行替换
        newrouters = powerRoutes;
        newrouters[0].children = newchildren;
      }
      // 添加动态路由
      router.addRoutes(newrouters);
      store.commit('UPDATEROLES', newrouters)
      next({ ...to, replace: true })
    }
  } else {
    // 未登录
    // 去登录页
    if (['/login'].indexOf(to.path) !== -1) {
      next()
    } else {
      // 不去登录页就强制去登录页
      next('/login')
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
