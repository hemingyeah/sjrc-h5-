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
   * 文章分类
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getCategory(options = {}) {
    return http.post({
      ...options,
      url: `/api/base/v1/columns/search`,
    })
  }

  /**
   * 文章列表
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getList(options = {}) {
    return http.post({
      ...options,
      url: `/api/base/v1/articles/search`,
    })
  }

  /**
   * 文章详情
   * @param {object} options - http 请求参数
   * @returns {Promise} - 返回操作后的 Promise
   */
  static getDetail(options = {}) {
    return http.get({
      ...options,
      url: `/api/base/v1/articles/:id`,
    })
  }
}
