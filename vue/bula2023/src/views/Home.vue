<template>
  <main>
    <countdown></countdown>
    <willkommen></willkommen>
    <h2 @click="$router.push('/team')" class="linkingHeadline">Team</h2>
    <team :team="store.Team"></team>
    <h2 @click="$router.push('/faq')" class="linkingHeadline">FAQ</h2>
    <faq></faq>
    <h2
      @click="$router.push('/brieffreundschaften')"
      clss="linkingHeadline"
      style="font-size: 3.5rem"
    >
      Brieffreundschaften
    </h2>
    <p>
      Wir wollen euch die Monate vor dem BuLa eine Sippen-Brieffreundschaft
      ermöglichen. Von März an bis zum BuLa können ihr und eure Partnersippe
      einander Briefe schreiben und euch so gegenseitig durch die Wartezeit bis
      zum großen HALLO auf dem BuLa begleiten.
    </p>
    <p>
      Meldet eure Sippe also flugs an und freut euch auf ein Starterpaket,
      monatliche Themenvorschläge für das gemeinsame Briefe Schreiben in der
      Sippenstunde und natürlich eine herzliche Fernfreundschaft zu einer
      wunderbaren anderen Sippe in unserem Bund.
    </p>
    <div v-if="!isExpanded" style="display: flex; justify-content: center">
      <button
        class="expandButton text"
        @click="$router.push('/brieffreundschaften#anmeldung')"
      >
        zur Anmeldung
      </button>
    </div>
    <h2 @click="$router.push('/team#jobs')" class="linkingHeadline">Jobs</h2>
    <jobs></jobs>
    <h2 @click="$router.push('/lagerplatz')" class="linkingHeadline">
      Lagerplatz
    </h2>
    <bu-la-map></bu-la-map>
  </main>
</template>

<script>
import mixin from "@/mixin.js";
import team from "../components/team.vue";
import Willkommen from "../components/willkommen.vue";
import Countdown from "../components/countdown.vue";
import faq from "../components/faqs.vue";
import BuLaHeader from "../components/buLaHeader.vue";
import Jobs from "../components/jobs.vue";
import BuLaMap from "../components/map.vue";

export default {
  components: {
    team,
    Willkommen,
    Countdown,
    faq,
    BuLaHeader,
    Jobs,
    BuLaMap,
  },
  mixins: [mixin],
  computed: {},
  data() {
    return {};
  },
};
</script>

<style lang="less">
.linkingHeadline {
  cursor: pointer;
}
</style>
