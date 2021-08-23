<template>
  <van-card :thumb="playlist.coverImgUrl" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { getPlayList } from '../../api/playlist';

export interface List {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  userId: number;
  createTime: number;
  updateTime: number;
  playCount: number;
  subscribedCount: number;
  description: string;
  [propsName: string]: unknown;
}

interface State {
  id: number;
  playlist: any;
}

export default defineComponent({
  name: 'PlayList',
  setup() {
    const route = useRoute();
    const state = reactive<State>({
      id: parseInt(route.params.id as string),
      playlist: {},
    });
    onMounted(() => {
      getPlayList(state.id).then(res => {
        state.playlist = res.playlist;
      });
    });
    return { ...toRefs(state) };
  },
});
</script>
