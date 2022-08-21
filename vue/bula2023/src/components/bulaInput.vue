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
@import "~@/less/main.less";

input {
  &,
  & + label {
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    box-sizing: border-box;
  }
  background-color: #ffffff99;
  backdrop-filter: blur(5px);
  width: 100%;
  height: fit-content;
  border: transparent solid 2px;
  &::placeholder {
    color: transparent;
  }
}
input:invalid:not(:placeholder-shown) {
  border: @clr-red solid 2px !important;
}
input,
div {
  position: relative;
}
label {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}

input {
  &,
  & + label {
    transition: all 0.25s ease-in-out;
    transform-origin: 0 0;
    & + label {
      opacity: 0.75;
    }
  }
}
input {
  &:focus,
  &:not(:placeholder-shown) {
    border-color: rgba(white, 0.1);
    & + label {
      transform: translate(0%, -30%) scale(0.9);
      opacity: 1;
    }
    margin-top: 1rem;
  }
}
</style>
