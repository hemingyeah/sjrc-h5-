/**
 * vue 业务相关的局部视图组样配置入口
 * 多处使用到（比如大于2处以上）的地方进行全局注册
 * 否则就单独引入，或者只作为路由视图组件的局部组件引入
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export { default as ArticleAPI } from './article-api'
export { default as OrderAPI } from './order-api'
export { default as FastOrderAPI } from './fast-order-api'
export { default as BestsignAPI } from './bestsign-api'
