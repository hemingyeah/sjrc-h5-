<!--加载中组件-->
<template>
  <div class="com-landing flex center" :class="{ column: vertical }">
    <div
      class="com-loading--circular"
      :style="{
        color: color,
        width: computedSize,
        height: computedSize,
      }"
    ></div>
    <div
      v-if="$slots.default"
      class="com-loading--text mpm-ml16 mpm-tclr-cont"
      :class="{ 'mpm-pt16': vertical }"
      :style="{
        color: color,
        fontSize: computedFontSize,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComLoading',
  props: {
    // 加载图标大小
    size: { type: Number, default: 30 },
    // 加载图标颜色
    color: { type: String, default: '#999' },
    //是否垂直排列图标和文字内容
    vertical: Boolean,
  },
  computed: {
    computedSize() {
      return this.$$pxTransform(this.size)
    },
    computedFontSize() {
      return this.$$pxTransform(this.size - 2)
    },
  },
}
</script>

<style lang="scss">
.com-loading {
  &--circular {
    color: blue;
    box-sizing: border-box;
    width: 30px;
    max-width: 100%;
    max-height: 100%;
    height: 30px;
    border: 1px solid transparent;
    border-top-color: initial;
    border-radius: 100%;
    animation: rotate 0.8s linear infinite;
  }

  &--text {
    font-size: 28px;
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>
