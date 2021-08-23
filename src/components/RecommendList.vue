<template>
  <div>
    <div class="title">推荐歌单</div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-image
        v-for="(item, index) in recommendSongList"
        :key="index"
        width="100"
        height="100"
        :src="item.picUrl"
      />
    </van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from 'vue';
import { RecommendSongList } from '@/views/Recommend.vue';

export default defineComponent({
  name: 'RecommendList',
  props: {
    recommendSongList: {
      required: true,
      type: Array as PropType<RecommendSongList[]>,
    },
  },
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const recommendSongList = props.recommendSongList;
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (recommendSongList.length >= 30) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      recommendSongList,
      onLoad,
      loading,
      finished,
    };
  },
});
</script>
