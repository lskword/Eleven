/* eslint-disable */
import { getToken,getUnitId,getOpenId } from "@/utils/auth";
export default {
  install(Vue, options) {
    // 头部返回箭头按钮__地址控制
    Vue.prototype.BackPath = function (val) {
      this.$store.dispatch('setBackToPath', val)
    }
    // 日期格式化
    Vue.prototype.formatDate = function (date, fmt, text) {
      // console.log(date, a.getMonth());
      fmt = fmt || 'yyyy-MM-dd hh:mm:ss'
      if (!date) {
        return text || ''
      }

      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
        }
      }
      return fmt
    }

    function padLeftZero(str) {
      return ('00' + str).substr(str.length)
    }
    // 获取当前日期的前后日子  eg GetPreMonthDay(今天, 3) 三个月后的日期
    Vue.prototype.GetPreMonthDay = function transformationDate(date, month) {
      function strToDate(str) {
        var val = Date.parse(str);
        var newDate = new Date(val);
        return newDate;
      }
      var strDate;
      var oldDate = strToDate(date);
      var newDate = strToDate(date);
      newDate.setMonth(newDate.getMonth() + month);
      var yy1 = newDate.getFullYear();
      var mm1 = newDate.getMonth() + 1; //因为getMonth（）返回值是 0（一月） 到 11（十二月） 之间的一个整数。所以要给其加1
      var dd1 = newDate.getDate();
      if (mm1 < 10) {
        mm1 = '0' + mm1;
      }
      if (dd1 < 10) {
        dd1 = '0' + dd1;
      }
      //预计结束日期=开始日期+期限
      if (oldDate.getDate() == newDate.getDate()) { //月末,getDaysInMonth()获取该月的最后一天
        strDate = yy1 + "-" + mm1 + "-" + dd1;
      }else if (newDate.getMonth().toString().length==2) {
        strDate = yy1 + "-" +  newDate.getMonth() + "-" + new Date(yy1, newDate.getMonth(), 0).getDate();
      } else {
        strDate = yy1 + "-" + "0" + newDate.getMonth() + "-" + new Date(yy1, newDate.getMonth(), 0).getDate();
      }
      //    console.log(strDate);
      return strDate

    }
    // 让元素置顶
    Vue.prototype.scrollIntoView = function ({
      id,
      type
    }) {
      if (!id) throw new Error('name is not defind')
      // 置顶还是置地
      var isTopOrBottom = true
      if (type === 'bottom') {
        isTopOrBottom = false
      }
      document.getElementById(id).scrollIntoView(isTopOrBottom);
    }
    
    // 名字从第二位开始取*号 尾数不取
    Vue.prototype.protectionName = function (name) {
      return [...name]
        .map((item, index, arr) => {
          return Math.floor(arr.length / 2) === index ? '*' : item;
        })
        .join('');
    }

    // 获取地址参数
    Vue.prototype.getRequest = function (url) {
      url = url ? url.split('?')[1] : location.href.split('?')[1];
      let theRequest = new Object();
      if (url) {
        let strs = url.substr(1).split("&");
        for (var i = 0; i < strs.length; i++) {
          let paramArray = strs[i].split(/=(?=.)/);
          theRequest[paramArray[0]] = paramArray[1]
        }
      }
      return theRequest;
    }

    /**
     * 微信公众号支付
     */
    Vue.prototype.WeChatPublicPay =  function (data){
       function onBridgeReady(){
         WeixinJSBridge.invoke('getBrandWCPayRequest', data,
          function(res){
            if(res.err_msg == "get_brand_wcpay_request:ok" ){
              // 使用以上方式判断前端返回,微信团队郑重提示：
              // fn()
              window.location.href = data.return_url
            } else {
              
            }
          }); 
      }
      if (typeof WeixinJSBridge == "undefined"){
          if( document.addEventListener ){
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          }else if (document.attachEvent){
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
      }else{
        onBridgeReady();
      }
      
    }
    // 当前环境是什么环境
    Vue.prototype.isWeixin = function() {
      const u = navigator.userAgent.toLowerCase();
      if (u.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      }else{
        return false;
      }
    }

    /**
     * 复制文本内容
     * ele 目标元素点击时间绑定
     * text 需要复制的文本
     */
    Vue.prototype.copyText =  function ({ele, text}){
      return new Promise((resolve, reject) =>{
        var clipboard = new ClipboardJS(ele , {"text": ()=> text});
        clipboard.on('success', function(e) {
            // console.log(e);
            resolve(e)
        });
      
        clipboard.on('error', function(e) {
            // console.log(e);
            reject(e)
        });
      })
     
   }
   /** path 跳转的地址
   *  data 参数 =>  注意：默认自带 token openId unitId 
   *  type 跳转类型 => 默认是consult 目前有两个类型（consult , patient）
   *  callback 【跳转之前】执行的回调
   */
    Vue.prototype.winJmpToPage = async function ({path = '/', data = {}, type = 'consult', callback=()=> {}}){
      await callback();
      var url = `/${type}/#${path}?`;
      !data.token && (data.token = getToken());
      !data.unitId && (data.unitId = getUnitId());
      !data.openId && (data.openId=getOpenId());
      data.v = new Date().getTime(); 
      Object.keys(data).forEach(key => {url += `&${key}=` + data[key]});
      window.location.href = url
      return true;
   }
        

   /**
     * 是否小程序
     */
   Vue.prototype.isWeChatMiniApp = function(){
    const ua = window.navigator.userAgent.toLowerCase();
    return new Promise((resolve) => {
      if (ua.indexOf('micromessenger') == -1) {
        console.log("不在微信或者小程序中")
        resolve(false);
      } else {
        wx.miniProgram.getEnv((res) => {
          if (res.miniprogram) {
            console.log("在小程序中")
            resolve(true);
          } else {//在微信中
            console.log("在微信中")
            resolve(false);
          }
        });
      }
    });
   }

  }

}


/**
 * 判断是否为微信小程序
 * @export
 * @returns
 */
export function isWeChatMiniApp() {
  const ua = window.navigator.userAgent.toLowerCase();
  return new Promise((resolve) => {
    if (ua.indexOf('micromessenger') == -1) {
      console.log("不在微信或者小程序中")
      resolve(false);
    } else {
      wx.miniProgram.getEnv((res) => {
        if (res.miniprogram) {
          console.log("在小程序中")
          resolve(true);
        } else {//在微信中
          console.log("micromessenger")
          resolve(false);
        }
      });
    }
  });
}
