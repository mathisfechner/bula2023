<template>
  <div>
    <h2>Willkommen</h2>
    <p v-for="paragraph in getText('%willkommen')" :key="paragraph">
    {{paragraph}}
    </p>
    <h3>Ex Tribus Unum</h3>
  </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
}
</script>

<style lang="less" scoped>
@import "~@/less/main.less";

h3 {
    .text-shadow(#E3C08C);
}
</style>