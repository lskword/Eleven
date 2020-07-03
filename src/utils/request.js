/* eslint-disable */
import {Toast} from 'vant';
import router from '@/router';

import { getToken ,getUnitId, getOpenId, removeUserInfo, removeOpenId, removeToken, getChannel} from '@/utils/auth';

const baseURL = window.WINDOW_ONE_TIME_BASE_API ?
      WINDOW_ONE_TIME_BASE_API :
      process.env.VUE_APP_BASE_API; 

const service = axios.create({
  baseURL,
  timeout: 6000,
  withCredentials: false
});
// request interceptor
service.interceptors.request.use(config => {

  config.headers['token'] = getToken();
  config.headers['openId'] = getOpenId();
  config.headers['channel'] = getChannel();
  config.headers['unitId'] = getUnitId();

  config.headers.xhrFields = true;

  return config;
}, error => {
  return Promise.reject(error.request);
});

// respone interceptor
service.interceptors.response.use(
  response => {
    var res = response.data,
        code = res.code || res.infoCode;
    if (200 === code) { 
      return JSON.parse(JSON.stringify(res).replace(/null/g, '""')); 
    } else if (code == 401 ) {
      Toast("用户身份已失效!");
      removeUserInfo();
      removeOpenId();
      removeToken();
    } else if (code == 400 ) {
      Toast(res.message);
    } else if (code === 404) {
      Toast('接口找不到，请求异常！');
    } else if (500 == code) {
      Toast('数据异常，请重试!');
      console.error( '请-求-地-址=' +  JSON.stringify(response.config.url));
    } else if (402 == code) {
      router.replace('/OnlineAuther'); 
    } else if (403 == code) {
      router.push('/autherSaveWx'); 
    } else {
      Toast('服务正在治疗中...');
    }
    return Promise.reject(res);
  },
  error => {
    if(error.message.includes('timeout')){   
      // 判断请求异常信息中是否含有超时timeout字符串
      Toast('网络超时，请重试!');
    } else if ("Request failed with status code 404" === error.message) {
      Toast('接口服务找不到，请重试!');
    } else if (error.message == 'Network Error') {
      Toast('连接失败，请检查网络!');
    } else {
      Toast('服务正在治疗中...');
    }
    return Promise.reject(error);
  });

export default service;
