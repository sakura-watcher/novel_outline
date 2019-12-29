import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import axios from 'axios'

　　Vue.prototype.$axios = axios

　　Vue.config.productionTip = false

　　axios.defaults.withCredentials = false//这个默认即为false，如果改为true，可以传递session信息，后端要做相应修改来放行，

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
