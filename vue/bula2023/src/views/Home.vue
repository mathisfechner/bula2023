<template>
  <main>
    <countdown></countdown>
    <willkommen></willkommen>
    <h2>Team</h2>
    <team :team="store.Team"></team>
    <faq></faq>
    <h2>Jobs</h2>
    <jobs></jobs>
    <h2>Karte</h2>
    <bu-la-map></bu-la-map>
  </main>
</template>

<script>
import mixin from '@/mixin.js'
import team from '../components/team.vue';
import Willkommen from '../components/willkommen.vue';
import Countdown from '../components/countdown.vue';
import faq from '../components/faqs.vue';
import BuLaHeader from '../components/buLaHeader.vue';
import Jobs from '../components/jobs.vue';
import BuLaMap from '../components/map.vue';

export default {
  components: { team, Willkommen, Countdown, faq, BuLaHeader, Jobs, BuLaMap },
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