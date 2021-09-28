/**
 * vue-router 实例配置
 *
 * 配置路由切换钩子
 * - 更改路由标题
 *
 * @since 1.0.0
 * @version 1.0.0
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = (global.$router = new VueRouter({
  mode: 'history',
  base: 'web', // 注意，这里需要与app.config中的ROUTEMAP所对应的base匹配，才能支持dev-server的fallback功能
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // },
}))

export default router
