/* eslint-disable */
// import 'amfe-flexible/index.js';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

import 'echarts-gl';

import { Button,Cell,CellGroup, Progress,Field, Toast,Notify ,Sidebar, SidebarItem } from 'vant';


Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Field);
Vue.use(Progress);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.component('v-chart', ECharts);
const notifyDefaultOptions = {
   duration: 3000,
   type: 'primary',
   message: '我要发起通知咯'
};

const toastDefaultOptions = {
   duration: 3000,
};

Notify.setDefaultOptions(notifyDefaultOptions);
Toast.setDefaultOptions(toastDefaultOptions);

Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify;

// 图片预览功能
// Vue.use(preview, previewConfig)
// 主体色暴露全局
const BASE_MIXIN = {BASE_COLOR_PRIMARY:  '#ed6a0c'};
Vue.mixin({ data (){return BASE_MIXIN;} });





