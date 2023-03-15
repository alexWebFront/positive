import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PinchZoom from 'vue-pinch-zoom';

Vue.config.productionTip = false
Vue.component('pinch-zoom', PinchZoom);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
