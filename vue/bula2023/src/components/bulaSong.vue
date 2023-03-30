<template>
  <div class="video-container">
    <iframe
      v-if="acceptedYouTube"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/RUrCYsFRxSA"
      title="Bula Lied 2023 Extribus unum"
      frameborder="0"
      allow="accelerometer; autoplay;
    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <div v-else style="position: absolute; width: 100%; height: 100%">
      <div
        style="
          position: relative;
          padding: 2rem;
          height: calc(100% - 4rem);
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <img
          src="bulaSongPrev.jpg"
          alt="BuLaSong Vorschaubild"
          style="width: 100%; position: absolute"
        />
        <div
          style="
            backdrop-filter: blur(5px);
            background-color: #ffffffaa;
            border-radius: 1rem;
            padding: 1rem;
            height: fit-content;
            max-height: 100%;
            overflow: scroll;
          "
        >
          <p>
            <strong>Externer Inhalt:</strong> An dieser Stelle steht ein
            externer Inhalt von YouTube. Du kannst ihn mit einem mit einem Klick
            auf „Video anzeigen“ anzeigen lassen. Dadurch können bereits
            personenbezogene Daten an YouTube übermittelt werden. (Mehr dazu in
            der Datenschutzerklärung.)
          </p>
          <button @click="acceptedYouTube = true">Video anzeigen</button>
        </div>
      </div>
    </div>
  </div>
  <a href="Liedzettel.pdf" download><button>Liedtext runterladen</button></a>
</template>

<script>
import mixin from "@/mixin.js";

// width="928" height="522"

export default {
  mixins: [mixin],
  computed: {},
  data() {
    return {
      acceptedYouTube: false,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/main.less";

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

button {
  position: relative;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: none;
  box-sizing: border-box;
  background-color: fade(@clr-blue, 100%);
  color: white;
  font-weight: bold;
  backdrop-filter: blur(5px);
  width: 100%;
  height: fit-content;

  &:hover {
    background-color: darken(@clr-blue, 10%);
  }
}
</style>
