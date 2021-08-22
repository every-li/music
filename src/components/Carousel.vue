<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="banner in banners" :key="banner.bannerId">
      <van-image :src="banner.pic" radius="10" class="img"></van-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BannerProps } from '@/views/Home.vue';

export default defineComponent({
  name: 'Carousel',
  props: {
    banners: {
      type: Array as PropType<BannerProps[]>,
      require: true,
    },
  },
});
</script>
<style lang="scss">
.van-swipe {
  width: 356px;
  margin: 0 auto;
}
.img {
  width: 356px;
}
</style>
