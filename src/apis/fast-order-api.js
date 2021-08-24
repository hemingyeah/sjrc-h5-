/**
 * FastOrderAPI 示例 接口操作类
 *
 * @module DemoAPI
 * @since 1.0.0
 * @version 1.0.0
 */

import http from './http'

/**
 * @class FastOrderAPI
 */
export default class FastOrderAPI {
  /**
   * 白板开单，小票详情
   *
   * @since 1.0.0
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getFastPrintOrderDetail(options) {
    return http.get({
      ...options,
      url: '/api/simple-order/order/printOrderDetail/:orderID',
    })
  }
}
