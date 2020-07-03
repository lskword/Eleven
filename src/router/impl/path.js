
const routes = [
  {
    path: '/',
    name: 'Layout',
    meta: { title: '首页', keepAlive: false },
    redirect: '/index',
    component: () => import('@/views/main/Layout.vue'),
    children: [ 
      { path: '/index', name: 'index', meta: { title: '爱乐孕', keepAlive: false }, component: () => import('@/views/main/index') },
      { path: '/about', name: 'About', meta: { title: '关于', keepAlive: false }, component: () => import('@/views/main/About') },
      { path: '/features', name: 'features', meta: { title: '特色功能', keepAlive: false }, component: () => import('@/views/main/Features') },
      { path: '/pregnancyClass', name: 'pregnancyClass', meta: { title: '好孕课堂', keepAlive: false }, component: () => import('@/views/main/pregnancyClass') },
      
      { path: '/tubiao', name: 'tubiao', meta: { title: '图表', keepAlive: false }, component: () => import('@/views/main/echarts/index') }

    ]
  },
  { path: '/login', name: 'login', meta: { title: '登录', keepAlive: false }, component: () => import('@/views/main/user/login') }
];

export default routes;
