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
          id: data.id, // 订单ID
          code: data.code, // 订单编号
          type: data.type, // 订单类型
          status: data.status, // 订单状态
          customerID: data.customerID, // 客户姓名，客的id为空时才标记为散客
          customerName: data.customerName ? data.customerName : data.customerID ? data.customerName : '散客', // 客户姓名，客的id为空时才标记为散客
          customerPhone: data.customerPhone, // 客户电话
          remark: data.remark, // 备注
          employeeName: data.employeeName, // 销售姓名
          employeePhone: data.employeePhone, // 销售电话
          storeName: data.storeName, // 店铺名
          createDatetime: data.createDatetime, // 订单下单时间

          soldCount: data.soldCount || 0, // 销售数量
          refundCount: data.refundCount || 0, // 退货数量
          settleStatus: data.settleStatus, // 结清状态
          isEdited: data.isEdited, // 订单是否被修改过

          integralAmount: data.integralAmount || 0, // 积分抵扣金额

          integralUse: data.integralUse || 0, // 积分抵扣数
          integralProduce: data.integralProduce || 0, // 积分获得
          integralRemain: data.integralRemain || 0, // 积分剩余
          chargePaidAmount: data.chargePaidAmount || 0, // 储值支付

          soldAmount: data.soldAmount || 0, // 销售金额
          realAmount: data.realAmount || 0, // 本单应收金额
          paidAmount: data.paidAmount || 0, // 本单实收金额
          unclearAmount: data.unclearAmount || 0, // 本次结余
          customerBalance: data.customerBalance || 0, // 上次结余
          totalBalance: data.totalBalance || 0, // 累计结余

          goodsDiscountAmount: data.goodsDiscountAmount || 0, // 商品优惠
          discountAmount: data.discountAmount || 0, // 整单优惠
          cancelAmount: data.cancelAmount || 0, // 核销金额
          eraseAmount: data.eraseAmount || 0, // 抹零金额
          remainAmount: data.remainAmount || 0, // 余额(负数为欠款，正数为结余)
          otherAmount: data.otherAmount || 0, // 其他费用
          otherAmountRemark: data.otherAmountRemark, // 其他费用备注
          printCount: data.printCount || 0, // 打印次数
          printDesc: data.printDesc, // 打印备注

          payTypeList: data.payTypeList || [], // 支付方式 {id: 1, name: '名乐', amount:111}
          goodsList: data.goodsList || [], // 商品清单（使用OrderGoodsItemModel实例化）
          cancelOrderList: data.cancelOrderList || [], // 核销明细清单（使用OrderGoodsItemModel实例化）
        }
      },
      computed: {
        typeName() {
          switch (this.type) {
            case 0:
              return '销售单'
            case 1:
              return '退货单'
            case 2:
              return '换货单'
            case 3:
              return '期初欠款'
            case 4:
              return '期初结余'
            default:
              return ''
          }
        },
        statusName() {
          switch (this.status) {
            case 1:
              return '挂单'
            case 2:
              return '待发货'
            case 3:
              return '部分发货'
            case 4:
              return '已完成'
            case 5:
              return '已作废'
            default:
              return ''
          }
        },
        remainName() {
          if (this.remainAmount >= 0) {
            return '结余'
          } else {
            return '欠款'
          }
        },
      },
    })
  }
}
