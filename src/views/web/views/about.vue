<template>
  <div class="page-about">
    <mpm-image
      class="mpm-util-block force"
      low
      :animate="1"
      width="100%"
      height="600"
      image-width="3840"
      image-height="1200"
      :prefix="false"
      :src="image.x1"
    />
    <div style="position: relative">
      <mpm-image
        class="mpm-util-block force"
        low
        :animate="1"
        width="100%"
        height="442"
        image-width="3840"
        image-height="884"
        :prefix="false"
        :src="image.x2"
      />
    </div>
  </div>
</template>

<script>
import x1 from '../assets/images/about/about-01@3x.png'
import x2 from '../assets/images/about/about-02@3x.png'
import Image from '../_components/image.vue'

export default {
  name: 'page-about',
  components: {
    'mpm-image': Image,
  },
  data() {
    return {
      image: {
        x1,
        x2,
      },
    }
  },
}
</script>
<style lang="scss">
.page-about {
  font-size: 0;
  line-height: 1;

  .about--concat-wrapper {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    width: 1080px;
  }

  .about--concat {
    margin-top: 180px;
    line-height: 2em;
    font-size: 18px;
    color: #ffffff;
  }
}
</style>
