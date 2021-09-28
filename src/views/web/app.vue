<template>
  <div class="root-app">
    <sjrc-header />
    <router-view />
    <sjrc-footer />
  </div>
</template>

<script>
import Header from './_components/header.vue'
import Footer from './_components/footer.vue'

export default {
  components: {
    'sjrc-header': Header,
    'sjrc-footer': Footer,
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.root-app {
  min-height: 100vh;
  background-color: #f8f8f8;
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
}

img[detection-support-webp] {
  display: block;
  font-size: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  width: 0;
}
</style>
