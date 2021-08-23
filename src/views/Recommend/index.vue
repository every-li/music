<template>
  <div class="caroulsel">
    <Carousel :banners="banners" />
    <recommend-list :recommendSongList="recommendSongList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getBanners, getRecommendList } from '@/api/recommend';
import Carousel from '@/components/Carousel.vue';
import RecommendList from '@/views/Recommend/RecommendList.vue';

export interface BannerProps {
  pic: string;
  targetId: number;
  titleColor: string;
  typeTitle: string;
  bannerId: string;
  [propsName: string]: unknown;
}

export interface RecommendSongList {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

interface State {
  banners: BannerProps[];
  recommendSongList: RecommendSongList[];
}

export default defineComponent({
  name: 'Recommend.vue',
  components: { Carousel, RecommendList },
  setup() {
    const state = reactive<State>({
      banners: [],
      recommendSongList: [],
    });
    onMounted(async () => {
      await getBanners().then(res => {
        state.banners = res.banners;
      });
      await getRecommendList().then(res => {
        state.recommendSongList = res.result;
      });
    });
    return { ...toRefs(state) };
  },
});
</script>
