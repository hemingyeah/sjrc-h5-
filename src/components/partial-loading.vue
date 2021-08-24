<!--局部加载中组件-->
<template>
  <div
    class="com-partial-loading mpm-relative"
    :class="{
      'flex center': error || nodata,
      'mpm-h100': loading || (!loading && mutatedLoading) || error || nodata,
    }"
  >
    <slot v-if="!error && !nodata"></slot>
    <div
      class="partial-loading--overlay"
      :style="{
        backgroundColor: overlayColor,
      }"
      v-if="(loading || (!loading && mutatedLoading)) && !error && !nodata"
    ></div>
    <mpm-loading v-if="mutatedLoading && !error && !nodata" class="partial-loading--loading" :vertical="vertical">
      {{ text }}
    </mpm-loading>
    <div v-if="error" class="flex-item flex center partial-loading--error mpm-plr20 mpm-tclr-cont" @tap="onReload">
      {{ errorText }}
    </div>
    <div v-else-if="nodata" class="flex-item flex center">
      <mpm-nodata class="partial-loading--nodata" :src="nodataSrc" :text="nodataText" :height="100"></mpm-nodata>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComPartialLoading',
  props: {
    // 使用局部组件时，必须指 定一个高度，波横须中不识别height:100%;
    // 是否正在加载中
    loading: { type: Boolean, default: false },
    // 加载中状态延迟0.1s加载
    loadingDelay: { type: Number, default: 50 },
    // 加载中状态保持0.3s时间
    loadingDuration: { type: Number, default: 300 },

    // 是否显示出错信息
    error: { type: Boolean, default: false },
    // 出错文案
    errorText: {
      type: String,
      default: '加载失败，请点击刷新',
    },
    text: { type: String, default: '加载中...' },
    //是否垂直排列图标和文字内容
    vertical: { type: Boolean, default: true },
    // 是否立即触发一次@load事件
    immidate: { type: Boolean, default: false },
    // 遮罩层颜色
    overlayColor: {
      type: String,
      default: 'rgba(255,255,255,0.9)',
    },
    // nodata时的逻辑属性
    nodata: { type: Boolean, default: false },
    nodataSrc: { type: String, default: '' },
    nodataText: { type: String, default: '暂无数据' },
    // @load 自定义加载事件，用于出错时，重新加载
  },
  data() {
    return {
      mutatedLoading: false,
      timeoutID: null,
    }
  },
  watch: {
    // 控制loading的消失时间
    loading: {
      immediate: true,
      handler(val) {
        // 当val被设置为true时，立即触发mutatedValue的变量，
        // 当val被设置为false时，延迟2秒触发，让他动效消失
        if (val) {
          clearTimeout(this.timeoutID)

          this.timeoutID = setTimeout(() => {
            this.mutatedLoading = val
          }, this.loadingDelay)
        } else {
          // 清空true的计时器
          clearTimeout(this.timeoutID)

          this.timeoutID = setTimeout(() => {
            this.mutatedLoading = val
          }, this.loadingDuration)
        }
      },
    },
  },

  created() {
    if (this.immidate) this.$emit('load')
  },
  methods: {
    onReload() {
      // 重新变成加载中的状态
      this.$emit('load')
    },
  },
}
</script>

<style lang="scss">
.com-partial-loading {
  position: relative;
  min-height: 120px;

  .partial-loading {
    &--overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &--nodata {
      height: 100%;
    }

    &--loading {
      position: absolute;
      z-index: 100;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
</style>
