/**
 * OrderItem 数据模型类
 *
 * @module OrderGoodsItemModel
 * @since 1.0.0
 * @version 1.0.0
 */

import Vue from 'vue'

/**
 * @class OrderGoodsItemModel
 */
export default class OrderGoodsItemModel extends Vue {
  constructor(data = {}) {
    super({
      data() {
        return {
          ...data,
          id: data.id, // 订单商品id
          code: data.code, // 订单商品货号
          name: data.name, // 订单商品姓名
          cover: data.cover, // 订单商品封面
          totalAmount: data.totalAmount, // 订单商品价格
          totalCount: data.totalCount, // 订单商品数量
          skuList: data.skuList || [], // {id: skuItem.skuId, color: skuItem.color, size: skuItem.size, amount: skuItem.transMoney, count: skuItem.num, }
          repurchase: data.repurchase,
        }
      },
    })
  }
}
