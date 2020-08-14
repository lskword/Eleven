/* eslint-disable */
// import 'amfe-flexible/index.js';
import * as filters from '@/utils/filter'; // global filters
import * as Templates from '@/Templates'; // 全局引入模板
import Public from '@/utils/public';
import {setFacilityType} from '@/utils/auth';
import './request';

import {Image as VanImage, Slider, Dialog, CountDown, ActionSheet, ImagePreview, Picker,CollapseItem,Collapse, RadioGroup, Radio, CheckboxGroup, Checkbox, Switch,Skeleton,Rate,Tag,Divider, Empty,NoticeBar,Overlay,PullRefresh, Tabs,List, Tab, GridItem,Lazyload, Grid, Uploader, Notify ,Popup ,DatetimePicker, PasswordInput,Icon, NumberKeyboard, Col, Row, Button,Cell,CellGroup, Progress,Field, Toast ,Sidebar, SidebarItem ,Tabbar, TabbarItem } from 'vant';
// 全局注册
Vue.use(VanImage);

Vue.use(Slider);
Vue.use(CountDown);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(PullRefresh);
Vue.use(Divider);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Uploader);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Icon);
Vue.use(Picker);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Overlay);
Vue.use(Empty);
Vue.use(Skeleton);

Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Tag);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Field);
Vue.use(Progress);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Rate);
Vue.use(Public);
Vue.use(window.VueAwesomeSwiper);
Vue.use(ActionSheet);
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
Vue.prototype.$ImagePreview = ImagePreview;
Vue.prototype.$dialog = Dialog;
// 执行一次环境H5
setFacilityType();

// 图片预览功能
// Vue.use(preview, previewConfig)
// 主体色暴露全局
const BASE_MIXIN = {BASE_COLOR_PRIMARY:  process.env.VUE_APP_BASE_COLOR};
Vue.mixin({ data (){return BASE_MIXIN;} });


// 全局注入过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// 全局注入模板
Object.keys(Templates).forEach(key => {
  Vue.component(key, Templates[key]);
});



