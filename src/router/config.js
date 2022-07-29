import { BasicLayout } from '../layout'
const routes = [
  { 
    path: '/',
    // 路由的懒加载
    redirect: '/index',
  },
]

const indexRs = [
  { 
    path: '/index',
    name: 'index',
    component: BasicLayout,
    redirect: 'index-page',
    children: [
      {
        path: '/index-page',
        name: 'index-page',
        component: () => import('@/views/IndexPage/IndexPage'),
      }
    ]
  },
]

const homeRs = [
  { 
    path: '/home',
    name: 'home',
    component: BasicLayout,
    redirect: 'home-page',
    children: [
      {
        path: '/home-page',
        name: 'home-page',
        component: () => import('@/views/Home'),
      }
    ]
  },
]

const aboutRs = [
  { 
    path: '/about',
    name: 'about',
    component: BasicLayout,
    redirect: 'about-page',
    children: [
      {
        path: '/about-page',
        name: 'about-page',
        component: () => import('@/views/About'),
      }
    ]
  },
]

const rs = routes.concat(indexRs).concat(homeRs).concat(aboutRs)

export default rs