<template>
  <div>
    <div id="Team" :class="[expanded ? 'cluster' : 'row']">
    <div class="teamMate" v-for="person in team" :key="person.name">
      <img :src="'/persons/'+person.name+'.jpeg'" class="profilePicture" :alt="person.name">
      <img :src="'/borderCycle.png'" class="profilePictureBorder">
      <h4>{{person.name}}</h4>
      <h5>{{person.position}}</h5>
    </div>
    </div>
    <div v-if="!isExpanded" style="display: flex; justify-content: center">
      <button class="expandButton" @click="expanded = !expanded">{{expandButtonContent}}</button>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
  props: {
      isExpanded: Boolean,
      team: Array,
  },
  computed: {
    expandButtonContent: function() {
      return this.expanded ? '–' : '+';
    }
  },
  data() {
    return{
      expanded: this.isExpanded || false,
    }
  }
}
</script>

<style lang="less">
@import "~@/less/main.less";

#Team {
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  &.row {
    padding: 0 2rem;
    margin: 0 -2rem;
    mask-image: 
      linear-gradient(
          to right,
          #00000000 0rem,
          #000000FF 2rem,
          #000000FF calc( 100% - 2rem ),
          #00000000 100%);
  }
  &.cluster {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .teamMate {
    padding: 0.5rem;
    position: relative;
  }
  
  img.profilePicture {
    width: 10rem;
    clip-path: circle();
  }
  img.profilePictureBorder {
      position: absolute;
      width: calc(100% - 0.8rem);
      left: 0.4rem;
      top: 0.4rem;
  }
}
</style>