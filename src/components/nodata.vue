<!--空数据占位组件-->
<template>
  <div class="com-nodata flex center column">
    <!-- @TODO 图片兼容自适应怎么搞 -->
    <img
      v-if="computedSrc"
      class="com-nodata--image mpm-bg"
      :style="{
        height: computedHeight,
      }"
      :src="computedSrc"
    />
    <div v-if="text" class="com-nodata--text mpm-align-center mpm-tclr-cont mpm-mt12">{{ text }}</div>
    <slot></slot>
  </div>
</template>

<script>
import IMAGE_NODATA_PLACEHOLDER from '@/assets/images/nodata/nodata-placeholder@3x.png'

export default {
  name: 'ComNodata',
  props: {
    // 自定义图片地址
    src: { type: String, default: '' },
    // 定义图片的大小
    height: { type: Number, default: 164 },
    // 提示文本
    text: { type: String, default: '暂无数据' },
  },
  computed: {
    computedSrc() {
      return this.src || IMAGE_NODATA_PLACEHOLDER
    },
    computedHeight() {
      return this.$$pxTransform(this.height)
    },
  },
}
</script>

<style lang="scss">
.com-nodata {
  // 136是navigator-bar，94是底部的tabbar，60是容差
  // 默认值还是设置为该值比较好
  height: calc(100vh - 136px - 94px - 60px);
}
</style>
