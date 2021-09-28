<template>
  <header class="component-header flex items-center justify-between nowrap">
    <img class="header-logo" src="~../assets/images/common/logo@3x.png" alt="云e宝" />
    <nav class="header-navigator flex justify-between">
      <router-link class="navigator-item" :to="{ name: 'business' }">渠道合作</router-link>
      <router-link class="navigator-item" :to="{ name: 'about' }">关于我们</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'mpm-header',
}
</script>

<style lang="scss">
.component-header {
  height: 96px;
  padding-left: 50px;
  padding-right: 80px;

  .header-logo {
    width: 162px;
    height: 60px;
  }

  .header-navigator {
    //min-width: 600px;
  }

  .navigator-item {
    position: relative;
    margin-left: 60px;

    /* margin-right: 40px; */

    /* margin-left: 40px; */
    font-size: 20px;
    line-height: 28px;

    &.router-link-active {
      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
        height: 6px;
        margin-bottom: -6px;
        background-color: rgba(115, 104, 242, 1);
        border-radius: 8px;
      }
    }
  }
}
</style>
