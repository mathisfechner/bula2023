<template>
  <main>
    <h2>Lagerplatz</h2>
    <bu-la-map></bu-la-map>
  </main>
</template>

<script>
import team from '../components/team.vue';
import mixin from '@/mixin.js'
import Jobs from '../components/jobs.vue';
import BuLaMap from '../components/map.vue';

export default {
  components: { team, Jobs, BuLaMap },
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