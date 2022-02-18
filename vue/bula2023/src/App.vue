<template>
  <div>
    <bu-la-header></bu-la-header>
    <router-view/>
  </div>
</template>

<script>
import mixin from '@/mixin.js'
import BuLaHeader from './components/buLaHeader.vue';

export default {
  components: { BuLaHeader },
  mixins: [mixin],
  computed: {},
  data() {
    return{
    }
  }
}
</script>

<style lang="less">
@import "~@/less/index.less";
@import "~@/less/main.less";
</style>
