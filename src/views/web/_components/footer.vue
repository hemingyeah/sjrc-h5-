<template>
  <footer class="component-footer">
    <!--    <div class="footer-copyright">-->
    <!--      <div class="footer-wrapper">-->
    <!--        <p>版权所有 徐州万商来朝网络科技有限公司</p>-->
    <!--        <p>-->
    <!--          <span>增值电信业务经营许可证：</span>-->
    <!--          <a href="http://www.beian.miit.gov.cn/" target="_blank">苏ICP备19074197号-2</a>-->
    <!--        </p>-->
    <!--        <p>-->
    <!--          <span>网站联网备案号：</span>-->
    <!--          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32032402000375">-->
    <!--            <img class="footer-beian-img" src="~../assets/images/gonganbeian.png" />-->
    <!--            <span class="footer-beian-text">苏公网安备 32032402000375号</span>-->
    <!--          </a>-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->
  </footer>
</template>

<script>
export default {
  name: 'mpm-footer',
}
</script>

<style lang="scss">
.component-footer {
  .footer-wrapper {
    margin: 0 auto;
    max-width: 1280px;
  }

  .footer-content {
    padding-left: 36px;
    padding-right: 36px;
    text-align: center;
  }

  .footer-navigator {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  .navigator-wrapper {
    margin-right: 56px;
  }

  .navigator-title {
    font-weight: bold;
    font-size: 28px;
    line-height: 41px;
  }

  .navigator-item {
    margin-top: 12px;
    font-size: 18px;
    line-height: 25px;
    padding: 5px 17px;
    border-radius: 17px;
  }

  .navigator-item:hover {
    background-color: #e7e7e7;
  }

  .contact-phone {
    margin-top: 40px;
    width: 327px;
    height: 76px;
  }

  .contact-qrcode {
    margin-top: 16px;
  }

  .contact-qrcode-name {
    color: #333333;
    font-size: 18px;
    line-height: 25px;
  }

  .contact-qrcode-img {
    margin-top: 4px;
    width: 140px;
    height: 140px;
  }

  .footer-copyright {
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: #ececec;
    text-align: center;
    color: rgba(178, 178, 178, 1);
    font-size: 18px;
    line-height: 25px;
  }

  .footer-beian-img {
  }

  .footer-beian-img,
  .footer-beian-text {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
