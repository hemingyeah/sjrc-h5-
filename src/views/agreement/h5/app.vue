<template>
  <div class="page-agreement-privacy mpm-ptb20 mpm-plr32">
    <!-- <img class="business_license" src="../../../assets/images/busniess.png" alt="" /> -->
  </div>
</template>

<script>
// import APIBridge from '@/utils/api-bridge'
export default {
  mounted() {
    // setTimeout(() => {
    //   APIBridge.hideLoading({
    //     title: '', // 非必填
    //     mask: true, // （有空实现），是否显示遮罩，阻止穿透点击
    //   })
    // }, 100)
    window.location.href = 'weixin://dl/business/?t=ERkeT9lfEhq'
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 700px) {
  html {
    font-size: 13.33334/2 + vw;
  }
}

.page-agreement-privacy {
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 28px;
    margin: 20px 0;
  }

  a {
    color: blue !important;
    text-decoration: underline;
  }

  p {
    margin: 20px 0;
  }

  em {
    font-weight: bold;
  }

  ul {
    padding-left: 1em;
  }

  ul li {
    margin: 10px 0;
  }

  .bold_font {
    font-weight: 600;
  }

  .business_license {
    width: 100%;
  }
}
</style>
