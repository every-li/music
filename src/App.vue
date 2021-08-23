<template>
  <van-loading color="#d44439" v-if="loading" />
  <Header></Header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Header from '@/components/Header.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'APP',
  components: { Header },
  setup() {
    const store = useStore();
    const loading = computed(() => {
      return store.state.loading;
    });
    return { loading };
  },
});
</script>

