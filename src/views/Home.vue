<template>
  <div class="container">
    <div class="top">
      <div><img src="@/assets/menu.svg" alt="" /></div>
      <div class="title">云音乐</div>
      <div><img src="@/assets/search.svg" alt="" /></div>
    </div>
    <div class="caroulsel">
      <Carousel :banners="banners" />
    </div>
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

<style lang='scss' scope>
.container {
  width: 100%;
  background: #d44439;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 356px;
    height: 50px;
    margin: 0 auto;
    img {
      width: 30px;
      height: 30px;
    }
    .title {
      font-size: 20px;
      color: #ffffff;
    }
  }
}
</style>