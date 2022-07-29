import { BasicLayout } from '../layout'
const routes = [
  { 
    path: '/',
    // 路由的懒加载
    redirect: '/index',
    component: BasicLayout,
    children: [
      { 
        path: '/index',
        component: () => import('@/views/IndexPage/IndexPage')
      }
    ]
  },
]

export default routes