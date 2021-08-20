<template>
  <div>{{ msg }}</div>
  <div>{{ propMsg }}</div>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Button } from 'vant';

export default defineComponent({
  name: 'Test',
  components: {
    [Button.name]: Button,
  },
  props: {
    propMsg: {
      type: String,
    },
  },
  setup() {
    const msg = ref('这是组件');
    return { msg };
  },
});
</script>
