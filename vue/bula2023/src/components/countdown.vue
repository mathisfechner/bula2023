<template>
  <div class="countdown" v-if="!eventisover">
      <div class="item" @click="updateDifference">
          <h3 class="days">{{days}}</h3>
          <h4>TAGE</h4>
      </div>
      <div class="item">
          <h3 class="hours">{{hours}}</h3>
          <h4>STD</h4>
      </div>
      <div class="item">
          <h3 class="minutes">{{minutes}}</h3>
          <h4>MIN</h4>
      </div>
      <div class="item">
          <h3 class="seconds">{{seconds}}</h3>
          <h4>SEK</h4>
      </div>
  </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
  data() {
      return {
          enddate: new Date(2023, 6, 29, 14, 0, 1),// 29. Juli 2023 um 13:00:00 (Monate starten bei null, Uhrzeit vermutlich wegen Zeitverschiebung Stunde später)
          days: "∞",
          hours: "∞",
          minutes: "∞",
          seconds: "∞",
          eventisover: false
      }
  },
  methods: {
      updateDifference: function() {
          let difference = this.enddate - Date.now();
          if (difference < 0) return this.eventisover = true;
          this.days = Math.floor(difference/(1000*60*60*24));
          difference -= this.days * 1000*60*60*24;
          this.hours = Math.floor(difference/(1000*60*60));
          difference -= this.hours * 1000*60*60;
          this.minutes = Math.floor(difference/(1000*60));
          difference -= this.minutes * 1000*60;
          this.seconds = Math.floor(difference/(1000));
          setTimeout(() => {this.updateDifference()}, 1000);
      }
  },
  mounted() {
      this.updateDifference();
  }
}
</script>

<style lang="less" scoped>
@import "~@/less/main.less";

.countdown {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.item {
    margin: 0 1rem;
}
.days {
    .text-shadow(@clr-red);
    font-size: 3rem;
}
.hours {
    .text-shadow(@clr-blue);
    font-size: 2.75rem;// 2.567rem;
}
.minutes {
    .text-shadow(#E3C18C);
    font-size: 2.25rem;//1.892rem;
}
.seconds {
    .text-shadow(#E3C08C);
    font-size: 1.25rem; //0.3rem;
}
</style>111 95 70