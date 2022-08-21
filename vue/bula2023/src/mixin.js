import Store from "@/store.js";

const mixin = {
  data() {
    return {
      store: Store,
      baseServerURL:
        process.env.NODE_ENV === "production"
          ? "https://bula2023.de"
          : "http://localhost:3300",
    };
  },
  methods: {
    getText: function (tag) {
      if (tag === undefined) return;
      if (tag.length >= 2 && tag[0] === "%" && tag[1] !== "%") {
        var tagArr = tag.replace("%", "").split(".");
        var text = Store.i18n;
        for (var i = 0; i < tagArr.length && text !== undefined; i++) {
          text = text[tagArr[i]];
        }
        return text;
      } else {
        return tag.replace(/%%/gi, "%");
      }
    },
    getTexts: function (tagArr) {
      if (tagArr === undefined) return;
      return tagArr.map((element) => {
        return this.getText(element);
      });
    },
  },
};

export default mixin;
