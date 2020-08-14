/* eslint-disable */
import {Toast} from 'vant';
import router from '@/router';
Toast.setDefaultOptions({ 
  duration: 3000
});
import {getFacilityType, setUserInfo, setToken, setUnitId, getToken ,getUnitId, getOpenId, removeUserInfo, removeToken, getChannel} from '@/utils/auth';

// loading索引添加
const lv = config => "lv" + config.url.replace(/(.*)?api/g, '');

// 关闭加载、....
const closeLoading = config => config[lv(config)] && config[lv(config)].clear();

const authFilter = s => JSON.parse(JSON.stringify(s).replace(/("" | null)/g, '-')); 

// 开启加载、....
const isLoading = config => {

  (!config.data || (config.data && !config.data.loadingLock)) 
  &&(config[lv(config)] = Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
    loadingType: 'spinner'
  })) 
};

    
const baseURL = window.WINDOW_ONE_TIME_BASE_API ?
      WINDOW_ONE_TIME_BASE_API :
      process.env.VUE_APP_BASE_API; 

window.BASE_REQUEST_API = axios.create({
  baseURL,
  timeout: 15000,
  withCredentials: false
});

// request interceptor
BASE_REQUEST_API.interceptors.request.use( async config => {
  
  config.headers['token']   = getToken();
  config.headers['openId']  = getOpenId();
  config.headers['channel'] = getChannel();
  config.headers['unitId']  = getUnitId();
  config.headers['facilityType']  = getFacilityType();

  config.headers.xhrFields  = true;

  await isLoading(config);
  return config;
}, error => {
  return Promise.reject(error.request);
});

// respone interceptor
BASE_REQUEST_API.interceptors.response.use(async response => {
    await closeLoading(response.config);
    
    var res = response.data,
        code = res.code || res.infoCode;

    if (200 === code) { 
      return authFilter(res);
    } else if (code == 401 ) {
      // Toast("用户身份已失效!");
      removeUserInfo();
      removeToken();
      router.push('/login'); 
    } else if (code == 400 ) {
      Toast(res.message);
    } else if (code === 404) {
      Toast('接口找不到，请求异常！');
    } else if (500 == code) {
      router.push('/ERROR');
      Toast(res.message);
    } else if (402 == code) {
      let {data} = res;
      setUserInfo(data);
      setToken(data.token);
      setUnitId(data.unitId);
      router.push('/identityAuth'); 
    } else if (403 == code) {
      router.push('/autherSaveWx'); 
    } else if (502 == code) {
      router.push('/ERROR');
      Toast(res.message); 
    } else if (1111 == code) {
      // 免费订单
      router.push(`/chatConsultation/${data.consultId}`);
      Toast(res.message); 
    } else {
      Toast('服务正在接受治疗中...');
    }

    return Promise.reject(res);
  },
  error => {
    router.push('/ERROR');
    // 判断请求异常信息中是否含有超时timeout字符串
    if(error.message.includes('timeout')){   
      Toast('网络超时，请重试!');
    } else if ("Request failed with status code 404" === error.message) {
      Toast('接口服务找不到，请重试!');
    } else if (error.message == 'Network Error') {
      Toast('连接失败，网络连接异常!');
    } else {
      Toast('服务正在接受治疗中....');
    }
    return Promise.reject(error);

  });
export default BASE_REQUEST_API;
