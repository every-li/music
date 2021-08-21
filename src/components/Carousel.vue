<template>
  <van-swipe
    v-for="banner in banners"
    :key="banner.bannerId"
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
  >
    <van-swipe-item>
      <van-image :src="banner.pic"></van-image>
    </van-swipe-item>
  </van-swipe>

  <div>这是组件</div>
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

<style scope>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>