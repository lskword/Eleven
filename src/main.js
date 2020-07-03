/* eslint-disable */

import App from './App.vue';
import router from './router';
import store from './store';
import '@/utils/plugins';
import '@/utils/fontSize';
import '@/utils/loginFilter';

import "@/assets/css/default.css";
import "@/assets/css/animate.css";
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
