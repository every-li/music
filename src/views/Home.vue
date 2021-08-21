<template>
  <div class="caroulsel">
    <Carousel :banners="banners" />
  </div>
</template>

<script lang="ts">
import { getBanners } from '@/api/home';
import Carousel from '@/components/Carousel.vue';
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
export interface BannerProps {
  pic: string;
  targetId: number;
  titleColor: string;
  typeTitle: string;
  bannerId: string;
  [propsName: string]: unknown;
}

interface State {
  banners: BannerProps[];
  // isGetBanners: boolean;
}

export default defineComponent({
  components: { Carousel },
  setup() {
    const state = reactive<State>({
      banners: [],
      // isGetBanners: false,
    });
    onMounted(async () => {
      await getBanners().then(res => {
        state.banners = res.banners;
        // state.isGetBanners = true;
      });
    });

    return { ...toRefs(state) };
  },
});
</script>

<style scoped>
.caroulsel {
  width: 356px;
  margin: 0 auto;
}
</style>