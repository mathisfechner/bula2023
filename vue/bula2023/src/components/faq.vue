<template>
    <router-link :to="'/faq/'+tag" :class="['FAQ', faq.class]">
        <h4>{{faq.title}}</h4>
        <p>{{faq.description}}</p>
    </router-link>
</template>

<script>
import mixin from '@/mixin.js'

export default {
    mixins: [mixin],
    props: {
        tag: String
    },
    computed: {
        faq: function() {
            return this.store.FAQ.categories[this.tag]
        }
    }
}
</script>

<style lang="less">
@import "~@/less/main.less";
.FAQ {
  border-radius: 1rem;
  border: 0.25rem solid black;
  text-align: center;
  height: auto;
  margin: auto;
  h4 {
    margin-top: 1rem;
    text-transform: uppercase;
  }
  @border-offset: 0.1rem;
  @border-radius: 0.2rem;
  @border-color: #FFFFFF;
  @drop-shadow: drop-shadow(@border-offset @border-offset @border-radius @border-color) drop-shadow(-@border-offset @border-offset @border-radius @border-color) drop-shadow(@border-offset -@border-offset @border-radius @border-color) drop-shadow(-@border-offset -@border-offset @border-radius @border-color);
  &.hoverYellow:hover {
    @border-color: fadeout(@clr-yellow, 15%);
    filter:  @drop-shadow;
  }
  &.hoverBlue:hover {
    @border-color: fadeout(@clr-blue, 60%);
    filter:  @drop-shadow;
  }
  &.hoverRed:hover {
    @border-color: fadeout(@clr-red, 60%);
    filter:  @drop-shadow;
  }
  &.bubble1 {
      border-image: url('/borderBubble1.png') 21% 20% 25% 17% ~"/" 1.5rem 2rem 1.5rem 1.5rem;
      padding: 0.75rem 2.25rem 0.75rem 1.75rem;
  }
  &.bubble2 {
      border-image: url('/borderBubble2.png') 13% 9% 36% 19% ~"/" 1.5rem 1.5rem 1.5rem 3rem;
      padding: 0.75rem 1.5rem 0.75rem 3rem;
  }
}
</style>