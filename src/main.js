import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import 'lib-flexible/flexible.js'
import { post, fetch } from "@/config/axios";
import '@/assets/css/reset.css'
Vue.prototype.$get = fetch;
Vue.prototype.$post = post;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
