import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui';
import './styles/element-variables.scss';
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/vars.scss'
import VueRouter from 'vue-router'
import routes from './routes'
import i18n from './lang'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ElementUI,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
