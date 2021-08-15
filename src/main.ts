import Vue from 'vue'
import App from './App.vue'
import './css/main.css'
import './css/reset.css'


Vue.config.productionTip = false
Vue.component(
  'app-btn', () => import('./components/CButton'),
)
Vue.component(
  'app-title', () => import('./components/CProductTitle')
)
Vue.component(
  'app-subtitle', () => import('./components/CProductSubtitle')
)

new Vue({
  render: h => h(App),
}).$mount('#app')
