/**
 * 多页面的应用场景都是一些零碎的页面，虽然会有多个路由页面，但也不会非常多
 *
 */
const routes = [
  {
    path: '/',
    redirect: {
      name: 'business',
    },
  },
  {
    // 渠道合作
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "route" */ './views/business.vue'),
  },
  {
    // 渠道合作
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "route" */ './views/about.vue'),
  },
  {
    path: '*',
    redirect: {
      path: '/',
    },
  },
]

export default routes
