<template>
  <div>{{ msg }}</div>
  <Test :propMsg="propMsg" />
</template>

<script lang="ts">
import Test from '@/components/Test.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { Test },
  setup() {
    const msg = ref('这是首页')
    const propMsg = '这是prop 信息'
    return { msg, propMsg }
  },
})
</script>
