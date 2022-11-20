<template>
  <div>
    <button style="width: 100%; padding: 0" @click="isExpanded = !isExpanded">
      <span class="question">
        <h4>{{ question.question }}</h4>
        <div class="expandButtonWrapper">
          <span class="expandButton">{{ expandButtonContent }}</span>
        </div>
      </span>
    </button>
    <p
      v-if="isExpanded && typeof question.answer == 'string'"
      v-html="question.answer"
    ></p>
    <p v-if="isExpanded && Array.isArray(question.answer)">
      <span v-for="(item, index) in question.answer" :key="index">
        <p v-if="typeof item == 'string'" v-html="item"></p>
        <span v-else-if="item.text">{{ item.text }}</span>
        <router-link v-else-if="isObject(item) && item.link" :to="item.link">{{
          item.linkText
        }}</router-link>
      </span>
    </p>
  </div>
</template>

<script>
import mixin from "@/mixin.js";
import { isArray, isObject } from "@vue/shared";

export default {
  mixins: [mixin],
  props: {
    question: Object,
  },
  computed: {
    expandButtonContent: function () {
      return this.isExpanded ? "-" : "+";
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

<style lang="less">
@import "~@/less/main.less";

.question {
  display: flex;
  align-content: center;
  justify-content: space-between;
  .expandButtonWrapper {
    display: flex;
    align-items: center;
    .expandButton {
      display: block;
      font-size: 3rem;
      height: 2rem;
      margin-top: -1.25rem;
      vertical-align: middle;
    }
  }
  h4 {
    margin: 0.5rem auto 0.5rem 0;
    text-align: left;
  }
}
td {
  padding: @spacing-small-small @spacing-normal @spacing-small-small 0;
}
</style>
