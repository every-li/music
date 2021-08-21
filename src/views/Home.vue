<template>
  <Carousel :banners="banners" />
</template>

<script lang="ts">
import { getBanners } from '@/api/home';
import Carousel from '@/components/Carousel.vue';
import { defineComponent, onMounted, reactive } from 'vue';
export interface BannerProps {
  pic: string;
  targetId: number;
  titleColor: string;
  typeTitle: string;
  bannerId: string;
  [propsName: string]: unknown;
}

export default defineComponent({
  components: { Carousel },
  setup() {
    let banners = reactive<BannerProps[]>([]);
    onMounted(() => {
      getBanners().then( res => {
        banners =  res.banners;
      });
    });
    return { banners };
  },
});
</script>
