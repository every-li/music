<template>
  <div>
    <div class="title">推荐歌单</div>
    <van-grid :column-num="3" icon-size="100px">
      <van-grid-item v-for="item in recommendSongList" :key="item.id">
        <router-link :to="{ name: 'playList', params: { id: item.id } }">
          <van-image :src="item.picUrl" lazy-load radius="10" />
          <span class="text">{{ item.name }}</span>
        </router-link>
      </van-grid-item>
    </van-grid>
  </div>
  <van-divider
    :style="{ color: '#d44439', borderColor: '#d44439', padding: '0 16px' }"
  >
    我是有底线的
  </van-divider>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RecommendSongList } from '@/views/Recommend.vue';

export default defineComponent({
  name: 'RecommendList',
  props: {
    recommendSongList: {
      required: true,
      type: Array as PropType<RecommendSongList[]>,
    },
  },
});
</script>

<style lang="scss" scope>
.text {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
