<template>
  <div class="page-business">
    <mpm-image
      class="mpm-util-block force"
      low
      :animate="1"
      width="100%"
      height="602"
      image-width="3840"
      image-height="1204"
      :prefix="false"
      :src="image.x1"
    />
    <mpm-image
      class="mpm-util-block force"
      low
      :animate="1"
      width="100%"
      height="602"
      image-width="3840"
      image-height="1204"
      :prefix="false"
      :src="image.x2"
    />
    <mpm-image
      class="mpm-util-block force"
      low
      :animate="1"
      width="100%"
      height="602"
      image-width="3840"
      image-height="1204"
      :prefix="false"
      :src="image.x3"
    />
    <mpm-image
      class="mpm-util-block force"
      low
      :animate="1"
      width="100%"
      height="470"
      image-width="3840"
      image-height="940"
      :prefix="false"
      :src="image.x4"
    />
  </div>
</template>

<script>
import x1 from '../assets/images/business/business-01@3x.png'
import x2 from '../assets/images/business/business-02@3x.png'
import x3 from '../assets/images/business/business-03@3x.png'
import x4 from '../assets/images/business/business-04@3x.png'
import Image from '../_components/image.vue'

export default {
  name: 'page-business',
  components: {
    'mpm-image': Image,
  },
  data() {
    return {
      image: {
        x1,
        x2,
        x3,
        x4,
      },
    }
  },
}
</script>
<style lang="scss">
.page-business {
  font-size: 0;
  line-height: 1;
}
</style>
