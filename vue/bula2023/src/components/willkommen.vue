<template>
  <div>
    <h2>Willkommen</h2>
    <p v-for="paragraph in getText('%willkommen')" :key="paragraph">
    {{paragraph}}
    </p>
    <h3 v-if="expanded">Ex Tribus Unum</h3>
    <p v-if="expanded">Jerusalem 1229 – Kaiser Friedrich II, der sich nach erfolgreichen Verhandlungen mit Sultan al-Kamil soeben zum König von Jerusalem erklärt hat, bereitet seine Abfahrt vor. Er setzt drei Statthalter ein, die gemeinsam mit dem Hohen Rat das Königreich regieren sollen. Wie wird es nach der Abreise des Kaisers weitergehen? Werden die drei in der Stadt ansässigen Ritterorden friedlich zusammenarbeiten? Und was hat es mit dem Auftrag des Kaisers an die drei Orden auf sich? Wir werden es erfahren und auf dem BuLa 2023 gemeinsam in das mittelalterliche Jerusalem eintauchen.</p>
    <div v-if="!isExpanded" style="display: flex; justify-content: center">
      <button class="expandButton" @click="expanded = !expanded">{{expandButtonContent}}</button>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
  computed: {
    expandButtonContent: function() {
      return this.expanded ? '–' : '+';
    }
  },
  data() {
    return{
      expanded: false,
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/less/main.less";

h3 {
    .text-shadow(#E3C08C);
}
</style>