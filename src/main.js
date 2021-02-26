import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import "./assets/css/main.css";
import 'element-ui/lib/theme-chalk/index.css';


Vue.directive('document-click', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false)
  },
  inserted() {
    // console.log('insert')
  },
  update() {
    // console.log('update')
  }
})


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


