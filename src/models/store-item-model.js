/**
 * OrderItem 数据模型类
 *
 * @module OrderItemModel
 * @since 1.0.0
 * @version 1.0.0
 */

import Vue from 'vue'

/**
 * @class OrderItemModel
 */
export default class OrderItemModel extends Vue {
  constructor(data = {}) {
    super({
      data() {
        return {
          ...data,
          name: data.name, // 店铺名
          manager: data.manager, // 店铺联系人
          phone: data.phone, // 店铺手机号
          province: data.province, // 店铺省
          city: data.city, // 店铺市
          area: data.area, // 店铺区
          address: data.address, // 店铺地址
          payee: data.payee, // 店铺收款人
          bank: data.bank, // 店铺收款银行
          account: data.account, // 店铺收款银行账号
          describe: data.describe, // 店铺自定义描述

          qrList: data.qrList || [], // 店铺二维码列表
        }
      },
      computed: {},
    })
  }
}
