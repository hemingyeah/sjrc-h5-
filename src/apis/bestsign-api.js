/**
 * Article 示例 接口操作类
 *
 * @module ArticleAPI
 * @since 1.0.0
 * @version 1.0.0
 */

import http from './http'

/**
 * @class ArticleAPI
 */
export default class ArticleAPI {
  /**
   * 检查
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static check(options = {}) {
    return http.post({
      ...options,
      url: `/api/thirdparty/bestSign/previewContract`,
    })
  }

  /**
   * 三要素验证
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static validate(options = {}) {
    return http.post({
      ...options,
      url: `/api/thirdparty/bestSign/verifiedUrl`,
    })
  }
}
