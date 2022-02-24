<template>
  <main>
    <faqs></faqs>
  </main>
</template>

<script>
import mixin from '@/mixin.js'
import faqs from '../components/faqs.vue';

export default {
  components: { faqs },
  mixins: [mixin],
  computed: {},
  data() {
    return{
    }
  }
}
</script>

<style lang="less">

</style>