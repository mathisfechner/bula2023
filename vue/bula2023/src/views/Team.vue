<template>
  <main>
    <h2>Team</h2>
    <team :team="store.Team" :isExpanded="true"></team>
    <h2 id="jobs">Offene Jobs</h2>
    <jobs></jobs>
  </main>
</template>

<script>
import team from '../components/team.vue';
import mixin from '@/mixin.js'
import Jobs from '../components/jobs.vue';

export default {
  components: { team, Jobs },
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