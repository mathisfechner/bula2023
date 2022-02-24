<template>
  <main>
    <h2>Team</h2>
    <team :team="store.Team" :isExpanded="true"></team>
  </main>
</template>

<script>
import team from '../components/team.vue';
import mixin from '@/mixin.js'

export default {
  components: { team },
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