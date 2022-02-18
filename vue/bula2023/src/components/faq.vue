<template>
  <div>
    <h2>FAQ</h2>
    <div id="FAQWrapper">
        <button class="FAQ bubble1 hoverYellow">
            <h4>{{store.FAQ.categories[0].title}}</h4>
            <p>{{store.FAQ.categories[0].description}}</p>
        </button>
        <button class="FAQ bubble2 hoverBlue">
            <h4>{{store.FAQ.categories[1].title}}</h4>
            <p>{{store.FAQ.categories[1].description}}</p>
        </button>
    </div>
    <button class="FAQ bubble1 hoverRed">
        <h4>{{store.FAQ.categories[2].title}}</h4>
        <p>{{store.FAQ.categories[2].description}}</p>
    </button>
    <div id="FAQWrapper">
        <button class="FAQ bubble2 hoverBlue">
            <h4>{{store.FAQ.categories[3].title}}</h4>
            <p>{{store.FAQ.categories[3].description}}</p>
        </button>
        <button class="FAQ bubble1 hoverYellow">
            <h4>{{store.FAQ.categories[4].title}}</h4>
            <p>{{store.FAQ.categories[4].description}}</p>
        </button>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
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