import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: sessionStorage.getItem('username'),
        roles: sessionStorage.getItem('roles'),
        newRoutes: []
    },
    mutations: {
        UPDATEUSER(state, userinfo) {
            state.username = userinfo.username
            sessionStorage.setItem('username', userinfo.username)
            state.roles = userinfo.roles
            sessionStorage.setItem('roles', userinfo.roles)
        },
        UPDATEROLES(state, newrouters) {
            state.newRoutes = newrouters
        },
        UPDATALOGOUT(state) {
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('roles')
            state.username = ''
            state.roles = ''
            state.newRoutes = []
            location.reload()
        }
    },
    actions: {}
})