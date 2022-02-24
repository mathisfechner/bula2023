<template>
  <main>
    <faq :tag="tag"></faq>
  </main>
</template>

<script>
import mixin from '@/mixin.js'
import faq from '../components/faq.vue';

export default {
  components: { faq },
  mixins: [mixin],
  props: {tag: String}
}
</script>

<style lang="less" scoped>
main {
    display: flex;
    flex-direction: column;
}
</style>