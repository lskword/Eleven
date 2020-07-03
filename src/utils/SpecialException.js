/**
 * 特殊异常处理
 */


// import 'vant/lib/checkbox-group/index.css'
import fontSize from './fontSize'
const BASE_PATH =  process.env.BASE_PATH

import fastclick from 'fastclick'
// 针对c端
if (BASE_PATH == 'CustTerminal') {
    fontSize()
      // 移动端点击延迟解决
    const deviceIsIOS = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
    // console.log(device);

    // if(!deviceIsIOS || deviceIsIOS[1] < '12.3.1') {  
      fastclick.prototype.focus = function(targetElement) {
        var length;
        //兼容处理:在iOS7中，有一些元素（如date、datetime、month等）在setSelectionRange会出现TypeError
        //这是因为这些元素并没有selectionStart和selectionEnd的整型数字属性，所以一旦引用就会报错，因此排除这些属性才使用setSelectionRange方法
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
            /*修复bug ios 11.3不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出键盘*/
            targetElement.focus();
        } else {
            targetElement.focus();
        }


    };

      fastclick.attach(document.body)
    // }

}else {
  var libFlexible = require('lib-flexible');
}
