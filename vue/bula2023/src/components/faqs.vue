<template>
  <div>
    <h2>FAQ</h2>
    <div id="FAQWrapper">
      <faq :tag="'teilnehmende'"></faq>
      <faq :tag="'eltern'"></faq>
    </div>
    <div id="FAQWrapper">
      <faq :tag="'mitarbeitende'"></faq>
    </div>
    <div id="FAQWrapper">
      <faq :tag="'support'"></faq>
      <faq :tag="'jobs'"></faq>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'
import faq from './faq.vue'

export default {
  components: { faq },
    mixins: [mixin]
}
</script>

<style lang="less">
@import "~@/less/main.less";
#FAQWrapper {
  display: flex;
  @media (max-width: 30rem) {
      flex-direction: column;
  }
}
</style>