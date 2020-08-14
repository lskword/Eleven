# small-preject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




#一键发布到服务器方法：
`
npm run deploy:test  // 此命令（发布到测试版）
以下皆为正式环境。
npm run deploy:prod // 此命令（发布到公共版）
`

/drugActivityDetails/{id}   药品详情;
/hospitalDetails/{userId}  医院详情;
/doctorHome/{userId}   医生主页
/consultationHome/{userId}   医生主页;


# ios or and 端交互方法
 eg：
import {iosOrAndFun} from '@/utils/filter'
iosOrAndFun({ funName: "appInfo" });
userInvalid 跳转登陆页面
backHomeFnApi 返回首页 
backToList 关闭当前视图窗口
isApp 检测当前环境是否是app
goCamera 唤起摄像机（扫码报到）
appInfo 获取app版本号以及app签名信息
getUserInfoFnApi  更新用户信息

DoctorListApi   医生列表
cameraApi  相机
albumApi 相册
shotApi 拍摄
openVideo 打开视频

backFnApi  关闭当前webView

@JavascriptInterface
public Map appInfo() {
    Map map = new HashMap();
    map.put("app_version", BuildConfig.VERSION_CODE);
    map.put("app_name", BuildConfig.VERSION_NAME);
    map.put("app_packge", AppUtils.getAppPackageName());
    map.put("app_sign", "");
    map.put("app_type", "android");
    return map;
}




# utils目录
    # 全局拦截器
    loginFilter.js

    # 全局过滤器
    filter.js

    # 全局公用方法
    public.js
    # 插件配置基地
    plugins.js

    # 全局色值控制基地
    globalCss.js

    # 全局Cookies存取基地
    auth.js

##store
    # vuex中间站
    index.js
    # 获取全局属性值桥梁
    getters.js
    # 模块分包器   根据不同业务场景分模块
    modules.js

## router
    # 地址栏路由控制器
    index.js
# path.js
    # 路由地址配置器

## components 
    小模块包管理
    Footer 页面底部导航
    Header 页面头部
    upload 上传图片组件

# 开启页面缓存功能(默认开启)
    this.$route.meta.keepAlive = true

# 返回按钮安装地址(返回地址)
    this.BackPath({path: '本地路由地址' funName: 'app交互方法名'}) 
    属性不生效特殊写法
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */


# 图片预览功能 给每一个img 添加  preview 属性 (相同则同步预览)
```图片上传 热更新 异步数据需要搭配 需要调用api ---- >this.$previewRefresh()   
    eg：<img class="demo-paper-img" :src="item.imgUrl" :preview-text="item.alt" preview='1' :alt="index">
     this.$previewRefresh()   
# 图片懒加载 v-lazy => "src"
    <img class="demo-paper-img" v-lazy="item.imgUrl" :preview-text="item.alt" preview='1' :alt="index">
# 条形码生成
    <vue-barcode class='qr_img' value="Hello, World!" :options="{ displayValue: false }"></vue-barcode>

# 二维码生成 api文档(https://github.com/Binaryify/vue-qr)
    <vue-qrcode :bgSrc='src' :logoSrc="src2" text="Hello world!" :size="200"></vue-qrcode>

/** path 跳转的地址
 *  data 参数 =>  注意：默认自带 token openId unitId 
 *  type 跳转类型 => 默认是consult 目前有两个类型（consult , patient）
 *  callback 跳转之前执行的回调
 */

 eg: this.winJmpToPage({
    path:"/doctorHome",
    data: {
        userId,
        unitId: 168  //默认自带 token openId unitId , 支持自定义
    },
    callback: ()=>{
        // 跳转之前执行的函数
        alert("1")
    }
})

# 
``` 
/** copy使用模板
*   ele 随便页面寻找一个元素class 内名
*   text 是需要复制的文本内容
*/

this.copyText({ele: '.copy', text: '数据'}).then(({data})=> {
          this.$toast('复制成功')
        }).catch((err)=> {
          this.$toast('复制失败')
        })
```
    
this.$ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  startPosition: 1,
  onClose() {
    // do something
  },
});

https://youzan.github.io/vant/#/zh-CN/image-preview

# 测试接口
 axios.post("http://192.168.0.104/hc-clinic/jeeplu/list",{},{headers: {token: 12312}}).then((res) => { console.log(res.data.data); })
 
# 针对input单击对不上  
	加上类名 needsclick  eg：<input type="text" class="left_input needsclick" v-model="seachText" placeholder="请输入要查找的中心">
```
For a detailed explanation on how things work check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
