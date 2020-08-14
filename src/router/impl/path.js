
const routes = [
  {
    path: '/',
    name: 'Layout',
    meta: { title: '首页', keepAlive: false },
    redirect: '/index',
    component: ()=>import(/* webpackChunkName: "Layout" */ '@/views/main/Layout.vue'),
    children: [ 
       // 医生主页
       
      { path: '/doctorHome/:userId', name: 'doctorHome', meta: { title: '医生主页', keepAlive: false }, component: () => import(/* webpackChunkName: "doctorHome" */ '@/views/main/DoctorHomePage/doctorHome') },
      // // 医生评论
      // { path: '/doctorComments', name: 'doctorComments', meta: { title: '评价', keepAlive: false }, component: () => import(/* webpackChunkName: "doctorComments" */ '@/views/main/DoctorHomePage/doctorComments')},
      
      // 咨询主页
      { path: '/consultationHome/:userId', name: 'consultationHome', meta: { title: '专家问诊', keepAlive: false }, component: () => import(/* webpackChunkName: "consultationHome" */ '@/views/main/DoctorHomePage/consultationHome')},
      { path: '/goodInList', name: 'goodInList', meta: { title: '擅长方向', keepAlive: false }, component: () => import(/* webpackChunkName: "goodInList" */ '@/views/main/DoctorHomePage/goodInList')},
      { path: '/doctorNewList', name: 'doctorNewList', meta: { title: '医生列表', keepAlive: false }, component: () => import(/* webpackChunkName: "doctorNewList" */ '@/views/main/DoctorHomePage/doctorNewList')},
      
      { path: '/payOrder/:orderSn', name: 'payOrder', meta: { title: '付款', keepAlive: false }, component: () => import(/* webpackChunkName: "payOrder" */ '@/views/main/payOrder/index')},
      { path: '/payOrderDetails', name: 'payOrderDetails', meta: { title: '付款', keepAlive: false }, component: () => import(/* webpackChunkName: "payOrderDetails" */ '@/views/main/payOrder/details')},
    
      { path: '/chatConsulRecord', name: 'chatConsulRecord', meta: { title: '我的问诊', keepAlive: false }, component: () => import(/* webpackChunkName: "chatConsulRecord" */ '@/views/main/consultation/chatConsulRecord') },
      { path: '/chatConsultation/:consultId', name: 'chatConsultation', meta: { title: '咨询详情', keepAlive: false }, component: () => import(/* webpackChunkName: "chatConsultation" */ '@/views/main/consultation/chatConsultation') },
      { path: '/chatConsulOrderDetails/:orderSn', name: 'chatConsulOrderDetails', meta: { title: '订单详情', keepAlive: false }, component: () => import(/* webpackChunkName: "chatConsulOrderDetails" */ '@/views/main/consultation/chatConsulOrderDetails') },
      { path: '/openChatConsul/:consultId', name: 'openChatConsul', meta: { title: '公开问题详情', keepAlive: false }, component: () => import(/* webpackChunkName: "openChatConsul" */ '@/views/main/consultation/openChatConsul') },
      
      
      { path: '/reservationDoctor/:userId', name: 'reservationDoctor', meta: { title: '专家问诊', keepAlive: false }, component: () => import(/* webpackChunkName: "reservationDoctor" */ '@/views/main/reservation/reservationDoctor') },

      { path: '/descriptionDis', name: 'descriptionDis', meta: { title: '病情描述', keepAlive: false }, component: () => import(/* webpackChunkName: "descriptionDis" */ '@/views/main/consul/descriptionDis') },
      { path: '/decriptList', name: 'decriptList', meta: { title: '历史病情', keepAlive: false }, component: () => import(/* webpackChunkName: "decriptList" */ '@/views/main/consul/decriptList') },
      { path: '/HealthRecords', name: 'HealthRecords', meta: { title: '添加档案', keepAlive: true }, component: () => import(/* webpackChunkName: "HealthRecords" */ '@/views/main/consul/HealthRecords') },
      

      { path: '/identityAuth', name: 'identityAuth', meta: { title: '实名认证', keepAlive: false }, component: () => import(/* webpackChunkName: "identityAuth" */ '@/views/main/identityAuth/index') },
      { path: '/index', name: 'index', meta: { title: '图表', keepAlive: false }, component: () => import(/* webpackChunkName: "index" */ '@/views/main/text/index') },
      { path: '/userInfo', name: 'userInfo', meta: { title: '我的', keepAlive: false }, component: () => import(/* webpackChunkName: "userInfo" */ '@/views/main/user/userInfo') },
      { path: '/myCoupons', name: 'myCoupons', meta: { title: '我的', keepAlive: false }, component: () => import(/* webpackChunkName: "myCoupons" */ '@/views/main/user/myCoupons') },
      { path: '/myCode', name: 'myCode', meta: { title: '我的二维码', keepAlive: false }, component: () => import(/* webpackChunkName: "myCode" */ '@/views/main/user/myCode') },
      

      { path: '/hospitalDetails/:userId', name: 'hospitalDetails', meta: { title: '医院详情', keepAlive: false }, component: () => import(/* webpackChunkName: "hospitalDetails" */ '@/views/main/otherPage/hospitalDetails') },
      { path: '/drugActivityDetails/:id', name: 'drugActivityDetails', meta: { title: '详情', keepAlive: false }, component: () => import(/* webpackChunkName: "drugActivityDetails" */ '@/views/main/otherPage/drugActivityDetails') },

    ]
  },
  { path: '/ISTESTLOGIN', name: 'ISTESTLOGIN', meta: { title: '验证信息', keepAlive: false }, component: () => import(/* webpackChunkName: "ISTESTLOGIN" */ '@/components/ISTESTLOGIN') },
  { path: '/login', name: 'login', meta: { title: '登录', keepAlive: false }, component: () => import(/* webpackChunkName: "login" */ '@/views/main/user/login') },
  { path: '/mobile', name: 'mobile', meta: { title: '登录', keepAlive: false }, component: () => import(/* webpackChunkName: "mobile" */ '@/views/main/user/mobile') },
  { path: '/NOTDATA', name: 'NOTDATA', meta: { title: '', keepAlive: false }, component: () => import(/* webpackChunkName: "NOTDATA" */ '@/components/NOTDATA') },
  { path: '*', name: 'ERROR', meta: { title: '错误提示', keepAlive: false }, component: () => import(/* webpackChunkName: "ERROR" */ '@/components/ERROR') }
  
];

export default routes;
