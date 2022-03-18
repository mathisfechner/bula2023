<template>
  <div>
    <div id="Team" :class="[expanded ? 'cluster' : 'row']">
    <div :id="person.name" class="teamMate" v-for="person in team" :key="person.name">
      <img :src="'/persons/'+person.name+'.jpg'" onerror="this.onerror=null;this.src='/persons/undefined.jpg'" class="profilePicture" :alt="person.name">
      <img :src="'/borderCycle.png'" class="profilePictureBorder">
      <h4>{{person.name}}</h4>
      <h5>{{person.position}}</h5>
      <p>{{person.text}}</p>
      <div style="margin: auto 0 0 auto">
        <a v-if="person.mail" :href="'mailto:'+person.mail">Schreib mir</a>
      </div>
    </div>
    </div>
    <div v-if="!isExpanded" style="display: flex; justify-content: center">
      <button id="jobExpandButton" class="expandButton" @click="changeExpansion">{{expandButtonContent}}</button>
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
  methods: {
    changeExpansion: function() {
      this.expanded = !this.expanded;
      if (!this.expanded) {
        console.log(this.$route);
        this.$router.push(this.$route.path+'#jobExpandButton')
      }
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
  h4 {
    text-transform: uppercase;
  }
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
    width: 10rem;
    a {
      width: 100%;
      text-decoration: underline;
    }
  }
  
  img.profilePicture {
    width: 10rem;
    clip-path: circle();
  }
  img.profilePictureBorder {
      position: absolute;
      width: calc(11rem - 0.8rem);
      left: 0.4rem;
      top: 0.4rem;
  }
}
</style>