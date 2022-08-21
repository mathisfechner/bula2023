<template>
  <main>
    <h2>Brieffreundschaften</h2>
    <form @submit.prevent="onSubmit" v-show="!submitted">
      <h4>Infos zur Sippe</h4>
      <div>
        <BulaInput
          :id="'sippe'"
          :placeholder="'Sippenname'"
          :type="'text'"
        ></BulaInput>
        <BulaInput
          :id="'stamm'"
          :placeholder="'Stamm / Siedlung'"
          :type="'text'"
        ></BulaInput>
      </div>
      <BulaInput
        :id="'sipplinge'"
        :placeholder="'Namen der Sipplinge'"
        :type="'text'"
      ></BulaInput>
      <div>
        <BulaInput
          :id="'alter'"
          :placeholder="'Altersgruppe'"
          :type="'text'"
        ></BulaInput>
        <BulaInput
          :id="'sex'"
          :placeholder="'M / W / Gemischt'"
          :type="'text'"
        ></BulaInput>
      </div>
      <h4>Kontakt und Postadresse für Briefe</h4>
      <BulaInput
        :id="'kontakt'"
        :placeholder="'Ansprechperson'"
        :type="'text'"
      ></BulaInput>
      <div>
        <BulaInput
          :id="'tel'"
          :placeholder="'Telefonnummer'"
          :type="'tel'"
        ></BulaInput>
        <BulaInput
          :id="'mail'"
          :placeholder="'Mail Adresse'"
          :type="'email'"
        ></BulaInput>
      </div>
      <BulaInput
        :id="'adresse'"
        :placeholder="'Straße, Hausnummer'"
        :type="'text'"
      ></BulaInput>
      <div>
        <BulaInput
          :id="'plz'"
          :placeholder="'Postleitzahl'"
          :type="'text'"
        ></BulaInput>
        <BulaInput :id="'ort'" :placeholder="'Ort'" :type="'text'"></BulaInput>
      </div>
      <h4>Partnersippenwunsch</h4>
      <div>
        <BulaInput
          :id="'partner-alter'"
          :placeholder="'Altersgruppe'"
          :type="'text'"
        ></BulaInput>
        <BulaInput
          :id="'partner-sex'"
          :placeholder="'M / W / Gemischt'"
          :type="'text'"
        ></BulaInput>
      </div>
      <BulaInput
        :id="'partner-sonst'"
        :placeholder="'Sonstiges'"
        :type="'text'"
        :required="false"
      ></BulaInput>
      <button type="submit" :class="{ loading: loading }">
        <div id="loading-wrapper" v-show="loading">
          <svg id="loading">
            <use href="#bulaLogoContents" />
          </svg>
        </div>
        Abschicken
      </button>
    </form>
    <div v-show="submitted">
      <h4 ref="success">Erfolgreich abgeschickt!</h4>
      <p>
        Haltet schonmal Karte und Stift bereit. Ihr werdet demnächst über die
        angegebenen Daten kontaktiert. Viel Spaß beim Schreiben!
      </p>
      <button @click="submitted = false">Weitere Sippe anmelden</button>
    </div>
  </main>
</template>

<script>
import mixin from "@/mixin.js";
import bulaInput from "../components/bulaInput.vue";
import BulaInput from "../components/bulaInput.vue";

export default {
  components: { bulaInput, BulaInput },
  mixins: [mixin],
  data() {
    return {
      loading: false,
      submitted: false,
    };
  },
  methods: {
    onSubmit(form) {
      this.loading = true;
      var requestBody = {};
      Object.keys(form.target.elements)
        .filter((key) => {
          return key.match(/[a-z, \s, \t,\n,\r]*/g)[0] != "";
        })
        .forEach((key) => {
          requestBody[key] = form.target.elements[key].value;
        });

      console.log(requestBody);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      };

      fetch(this.baseServerURL + "/penpals", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data), (this.submitted = true);
          this.loading = false;
          form.target.reset();
          setTimeout(() => {
            this.$refs.success.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 10);
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/main.less";
h2 {
  font-size: 3.5rem;
}
form {
  display: grid;
  gap: 0.5rem;
  div {
    display: inline-grid;
    gap: 0.5rem;
    grid-auto-flow: column;
    @media (max-width: 300px) {
      grid-auto-flow: row;
      gap: 0.5rem;
    }
  }
  h4 {
    margin-top: 1rem;
  }
}
button,
.submit {
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
  #loading-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      transition: all 0.25s ease;
      width: 0;
      height: 0;
    }
  }
}
.loading {
  color: transparent;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  svg {
    animation-name: rotate;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    width: 150% !important;
    height: 150% !important;
  }
}
</style>
