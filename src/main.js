/* eslint-disable */
import App from './App.vue';
import router from './router';
import store from './store';

import '@/utils/plugins';
import '@/utils/fontSize';

import "@/assets/css/default.less";
import "@/assets/css/animate.css";

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
