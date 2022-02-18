<template>
  <div>
    <main>
      <countdown></countdown>
      <willkommen></willkommen>
      <team></team>
      <faq></faq>
    </main>
  </div>
</template>

<script>
import mixin from '@/mixin.js'
import team from '../components/team.vue';
import Willkommen from '../components/willkommen.vue';
import Countdown from '../components/countdown.vue';
import faq from '../components/faq.vue';
import BuLaHeader from '../components/buLaHeader.vue';

export default {
  components: { team, Willkommen, Countdown, faq, BuLaHeader },
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