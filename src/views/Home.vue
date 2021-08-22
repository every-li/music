<template>
  <div class="container">
    <div class="top">
      <div><img src="@/assets/menu.svg" alt="" /></div>
      <div class="title">云音乐</div>
      <div><img src="@/assets/search.svg" alt="" /></div>
    </div>
    <van-tabs
      v-model:active="active"
      animated
      background="#d44439"
      color="#ffffff"
      title-inactive-color="#e4e4e4"
      title-active-color="#f1f1f1"
    >
      <van-tab title="推荐">推荐</van-tab>
      <van-tab title="歌手">歌手</van-tab>
      <van-tab title="排行榜">排行榜</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const active = ref(2);

    return { active };
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