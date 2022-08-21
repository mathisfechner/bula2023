<template>
  <main>
    <faq :tag="tag"></faq>
    <faq-question-row
      v-for="(question, index) in store.FAQ.categories[tag].questions"
      :question="question"
      :key="index"
    ></faq-question-row>
  </main>
</template>

<script>
import mixin from "@/mixin.js";
import faq from "../components/faq.vue";
import FaqQuestionRow from "../components/faqQuestionRow.vue";

export default {
  components: { faq, FaqQuestionRow },
  mixins: [mixin],
  props: { tag: String },
};
</script>

<style lang="less" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
