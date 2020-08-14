// 过滤器注册基地
/* eslint-disable */
const isServer = Vue.prototype.$isServer;
const ieVersion = isServer ? 0 : Number(document.documentMode);
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function toPercent(point){
  if (point==0) {
      return 0;
  }
  var str=Number(point*100).toFixed();
  str+="%";
  return str;
}
/* istanbul ignore next */
export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};
export  function orderType(value) {
  switch (value) {
    case 0:
      return '待支付';
    case 7:
      return '已取消';
    case 8:
      return '已完成';
    case 9:
      return '接诊中';
    case 10:
      return '待接诊';
    default:
      return '';
  }
}


export const getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

// 合并
export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
};

// don't delete  
export function afterLeave(instance, callback, speed = 300, once = false) {
  if (!instance || !callback) throw new Error('instance & callback is required');
  let called = false;
  const afterLeaveCallback = function() {
    if (called) return;
    called = true;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
  if (once) {
    instance.$once('after-leave', afterLeaveCallback);
  } else {
    instance.$on('after-leave', afterLeaveCallback);
  }
  setTimeout(() => {
    afterLeaveCallback();
  }, speed + 100);
};

/* 数字 格式化*/
export function numberFormatter(num, digits) {
  const si = [{
      value: 1E18,
      symbol: 'E'
    },
    {
      value: 1E15,
      symbol: 'P'
    },
    {
      value: 1E12,
      symbol: 'T'
    },
    {
      value: 1E9,
      symbol: 'G'
    },
    {
      value: 1E6,
      symbol: 'M'
    },
    {
      value: 1E3,
      symbol: 'k'
    }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 *通过数字的长度来决定分割逗号在哪里
 *  eg: 10000 => 10,000
 * @export
 * @param {*} num
 * @returns
 */
export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
/**
 *通过日期获取当前是星期几
 *
 * @export
 * @param {*} dateString
 * @returns
 */
export function getWeek(dateString) {
  var date;
  if (isNull(dateString)) {
    date = new Date();
  } else {
    var dateArray = dateString.split("-");
    date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
  }
  //var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
  //return "星期" + weeks[date.getDay()];
  return "星期" + "日一二三四五六".charAt(date.getDay());
}

/**
 *是否为空
 *
 * @export
 * @param {*} dateString
 * @returns
 */
export function isNull(object) {
  if (object == null || typeof object == "undefined") {
    return true;
  }
  return false;
}

/**
 * 苹果安卓交互公用方法
 * @param {*} data 方法交互传递的参数 
 * @param {*} funName 方法名 str类型
 */
export function iosOrAndFun({data = null,funName}) {

  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  data = JSON.stringify(data);
  try {
    if (isAndroid) {
      nativeMethod[funName](data);
    } else if (isiOS) {
      window.webkit.messageHandlers[funName](data);
    } else {
      console.warn('不是苹果也不是安卓机型');
    }
  } catch (error) {
    console.warn(`--未检测到App交互方法：${funName}, 【isAndroid】：${isAndroid}, 【isiOS】：${isiOS}`);
    throw Error(`--App交互方法：${funName}`);
  }

}


// 日期格式化
export function formatDate(date = '', fmt, text) {
  date = new Date(date.replace(/-/g, '/'));
  fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
  if (!date) {
    return text || '';
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
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

// 将名字第二个字变成星号
export function protectionName(name, num) {
  return [...name]
    .map((item, index, arr) => {
      return Math.floor(arr.length / 2) === index ? '*'.padEnd(num || 1, "*") : item;
    })
    .join('');
}


// 将数字字符串变成*隐藏起来 151****1017
// 日期格式化
export function DigitalHiding(str) {
  var t = '';
  if (!str) {
    return '暂未认证';
  }
  str = str.toString();
  if (str.length <= 7) {
    return '长度低于7位!';
  }
  for (let i = 0; i < str.length - 7; i++) {
    t += '*';
  }
  var newStr = str.substr(0, 3) + t + str.substr(-4);
  return newStr;
}

// 性别格式化
export function sexReturn(val = '0') {
  var str = '女';
  if ('1' == val.toString() || '男' == val.toString()) {
    str = '男';
  }
  return str;
}

// Base64转文件
export function dataURLtoFile(urlData) { //将base64转换为文件
  var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte  

  //处理异常,将ascii码小于0的转换为大于0  
  var ab = new ArrayBuffer(bytes.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }

  return new Blob([ab], {
    type: 'image/png'
  });
}


/**
 * result 图片地址返回
 * 图片压缩
 * @export
 * @param {*} {result}
 */
export function imgBase64({result}) {
  var _this = this;
  var formData = new FormData();
  var file = e.target.files[0];
  var fileType = file.type;
  formData.append('file', file);
  //console.log(e.target.files[0]);
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    var results = this.result.substr(this.result.indexOf(',') + 1);
    var result = e.target.result;
    var img = new Image();
    img.src = result;
    img.onload = function () {
      var that = this;
      //生成比例
      var scale = 1;
      if (this.width > 1000 || this.height > 1000) {
        //1000只是示例，可以根据具体的要求去设定  
        if (this.width > this.height) {
          scale = 1000 / this.width;
        } else {
          scale = 1000 / this.height;
        }
      }
      var w = this.width * scale,
        h = this.height * scale;

      //生成canvas
      var canvas = document.createElement('canvas');
      canvas.id = "base64_box";
      var ctx = canvas.getContext('2d');
      oBase64Box = document.querySelector('#base64_box');

      $(canvas).attr({
        width: w,
        height: h
      });
      ctx.drawImage(that, 0, 0, w, h);
      // 生成base64
      var image = canvas.toDataURL("image/jpeg", .7);
      oBase64Box.parentNode.removeChild(oBase64Box)
      return image
    };

  };
}

/**
 * 通过日期获取距离当前时间差的几分几秒
 * @export
 * @param {*} {result}
 */
export function getRemainderTime(startTime) {
  var s1 = new Date(startTime.replace(/-/g, "/")),
      s2 = new Date(),
      runTime = parseInt((s2.getTime() - s1.getTime()) / 1000);
  var year = Math.floor(runTime / 86400 / 365);
  runTime = runTime % (86400 * 365);
  var month = Math.floor(runTime / 86400 / 30);
  runTime = runTime % (86400 * 30);
  var day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  var hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  var minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  var second = runTime;
  // console.log(year,month,day,hour,minute,second);
  var titleName = ['年', "月", "天", '小时', "分钟"];
  var arr = [year, month, day, hour, minute];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element && element !== 0) {
      if (index === 4 && element <= 5) return "刚刚";
      return element + titleName[index] + '前';
    }
  }
}
/**
 * 
 * @param {支付方式} val 
 */
export function paymentType(val) {
  switch (val) {
    case 'weChatPay':
      return '微信'
    case 'aliPay':
      return '支付宝'
    default:
      return '-'
  }
}
/**
 * 
 * @param {支付状态} val 
 */
export function paymentStatus(val) {

  switch (val) {
    case 0:
      return '未支付';
    case 1:
      return '支付成功';
    case 2:
      return '已退款';
    case 3:
      return '已部分支付';
    case 4:
      return '以部分退款';
    default:
      return '支付超时';
  }
}

// 月份数字转汉子文本

export function numChangeText(val) {
  var obj = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
    '十': 10,
    '十一': 11,
    '十二': 12,
  }
  for (const key in obj) {
    if (obj[key] == parseInt(val)) {
      return key + '月'
    }
  }
}


/**
 * @description: 检测文本是否为空
 * @param {type} 
 * @return: 
 */
export var isEmpty = str=> typeof str === 'undefined' || str === null || str === "";

/**
 * @description: 文本空过滤
 * @param {type} 
 * @return: 
 */
export function checkIdCard(idcard) {
  var Errors = new Array(
    "验证通过!",
    "身份证号码位数不对!",
    "身份证号码出生日期超出范围或含有非法字符!",
    "身份证号码校验错误!",
    "身份证地区非法!"
  );

  var area = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  }

  var idcard, Y, JYM;
  var S, M;
  var ereg = "";
  var idcard_array = new Array();
  idcard_array = idcard.split("");

  //地区检验 
  if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];

  //身份号码位数及格式检验 
  switch (idcard.length) {
    case 15:
      if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 &&
          (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
      } else {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
      }
      if (ereg.test(idcard)) return Errors[0];
      else return Errors[2];

      break;
    case 18:
      if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 &&
          parseInt(idcard.substr(6, 4)) % 4 == 0)) {
        ereg = /^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
      } else {
        ereg = /^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
      }
      if (ereg.test(idcard)) { //测试出生日期的合法性 
        //计算校验位 
        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
          (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
          (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
          (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
          (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
          (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
          (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
          parseInt(idcard_array[7]) * 1 +
          parseInt(idcard_array[8]) * 6 +
          parseInt(idcard_array[9]) * 3;
        Y = S % 11;
        M = "F";
        JYM = "10X98765432";
        M = JYM.substr(Y, 1); //判断校验位 
        if (M == idcard_array[17]) return Errors[0]; //检测ID的校验位 
        else return Errors[3];
      } else return Errors[2];
      break;
    default:
      return Errors[1];
      break;
  }
}
