const routes = [
  { 
    path: '/',
    // 路由的懒加载
    component: () => import('@/views/IndexPage/IndexPage')
  },
  { 
    path: '/index',
    component: () => import('@/views/IndexPage/IndexPage')
  }
]

export default routes