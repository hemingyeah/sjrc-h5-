/**
 * Demo 示例 接口操作类
 *
 * @module DemoAPI
 * @since 1.0.0
 * @version 1.0.0
 */

import http from './http'

/**
 * @class OrderAPI
 */
export default class OrderAPI {
  /**
   * 小票详情
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getPrintOrderDetail(options = {}) {
    return http.get({
      ...options,
      url: `/api/order/order/printOrderDetail/:id`,
    })
  }

  /**
   * 小票详情
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getPrintOrderImage(options = {}) {
    return http.get({
      ...options,
      url: `/api/goods/v1/goods/:id/pics`,
    })
  }

  /**
   * 充值单小票详情
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getChargeOrderDetail(options = {}) {
    return http.get({
      ...options,
      url: '/api/balance/v1/balanceRecord/:id',
    })
  }

  /**
   * 小票详情
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getPrintTemplate(options = {}) {
    return http.get({
      ...options,
      url: `/api/base/v1/shareBlueToothTemplates`,
    })
  }

  /**
   * 小票分享检查绑定状态
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static checkWechat(options = {}) {
    return http.get({
      ...options,
      url: `/api/thirdparty/fwh/customer/wechatInfo`,
      params: {
        ...options.params,
      },
    })
  }

  /**
   * 小票分享微信绑定
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static bindWechat(options = {}) {
    return http.post({
      ...options,
      url: `/api/thirdparty/fwh/customer/bindWechat`,
      data: {
        ...options.data,
      },
    })
  }

  /**
   * 小票分享微信解绑
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static unBindWechat(options = {}) {
    return http.post({
      ...options,
      url: `/api/thirdparty/fwh/customer/unbindWechat`,
      data: {
        ...options.data,
      },
    })
  }
}
