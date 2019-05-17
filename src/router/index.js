import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { path: '/login' }  //重定向 默认启动路由
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login.vue')
        }
    ]
})
export default router