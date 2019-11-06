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

Vue.prototype.$echarts = echarts
Vue.prototype.TmpData = TmpData
Vue.prototype.Tlines = Tlines
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})