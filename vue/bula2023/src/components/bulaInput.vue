<template>
  <div>
    <input
      :id="'input-' + id"
      :type="type"
      :placeholder="placeholder"
      :required="requiredIntern"
    />
    <label :for="'input-' + id">{{ placeholder }}</label>
  </div>
</template>

<script>
import { stringLiteral } from "@babel/types";

export default {
  props: {
    id: String,
    type: "text" | "date",
    placeholder: String,
    required: Boolean | undefined,
  },
  data() {
    return {
      requiredIntern: this.required == undefined ? true : this.required,
    };
  },
};
</script>

<style lang="less" scoped>
div {
  position: relative;
}
</style>
