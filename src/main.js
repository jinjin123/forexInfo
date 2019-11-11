// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TmpData from './common/tmpData.js'
import Tlines from './common/k-line.js'
import echarts from 'echarts'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import iView from 'iview'
// import VueSocketIO from 'vue-socket.io'
// import socketio from 'socket.io-client';

// import Table from 'iview'
// Vue.component('Table', Table)

Vue.prototype.$echarts = echarts
    // Vue.prototype.$socketio = socketio
Vue.prototype.TmpData = TmpData
Vue.prototype.Tlines = Tlines
Vue.prototype.$axios = axios.create({
    timeout: 10000,
    withCredentials: true
})
axios.defaults.baseURL = '/news';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(ElementUI)
Vue.use(iView)
    // Vue.use(VueSocketIO, 'https://sscpgdknke.jin10.com:8080/socket.io/?EIO=3&transport=polling');
    // Vue.use(new VueSocketIO({
    // connection: "https://sscpgdknke.jin10.com:8080/socket.io/?EIO=3&transport=polling"
    // }))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})