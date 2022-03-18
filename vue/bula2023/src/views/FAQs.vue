<template>
  <main>
    <h2>FAQ</h2>
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