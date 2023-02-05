<template>
  <main>
    <h2>Essensumfrage</h2>
    <p>
      Wir als BuLa Küchenteam wollen euch mit hineinnehmen in eine der
      wichtigsten Lagerentscheidungen: <b>Was soll es zu Essen geben?</b>
    </p>
    <p>
      Wenn ihr uns unterstützen wollt, tragt schnell eure Mailadresse in das
      Textfeld ein und stimmt dann über die Gerichtsvorschläge ab!
      <br />Euer Lieblingsgericht ist noch nicht dabei? Dann tragt es einfach in
      das Formular weiter unten auf der Seite ein.
    </p>
    <p>
      Wir geben uns dann größte Mühe, eure Favoriten mit in den Speiseplan
      aufzunehmen.
    </p>
    <div style="position: relative" v-show="showMailInput" ref="login">
      <input
        v-model="mail"
        placeholder="mail Adresse"
        type="email"
        id="input-mail-kitchen"
      />
      <label :for="'input-mail-kitchen'">e-Mail Adresse</label>
      <button @click="onMailEntered()">Abstimmen</button>
    </div>

    <div v-for="meal in meals" :key="meal.id" class="meal">
      <div>
        <h4>{{ meal.title }}</h4>
        <p>{{ meal.description }}</p>
      </div>
      <div class="rating">
        <button
          @click="like(meal.id)"
          class="vote"
          :class="{ selected: meal.vote }"
        >
          {{ "<" }}
        </button>
        <p class="count">{{ meal.count }}</p>
        <button
          @click="dislike(meal.id)"
          class="vote"
          :class="{ selected: !mail?.vote && mail?.vote != null }"
        >
          {{ ">" }}
        </button>
      </div>
    </div>
    <form @submit.prevent="onSubmit" v-show="!submitted">
      <h4>Neues Gericht vorschlagen</h4>
      <BulaInput
        :id="'title'"
        :placeholder="'Titel'"
        :type="'text'"
      ></BulaInput>
      <BulaInput
        :id="'description'"
        :placeholder="'Beschreibung'"
        :type="'text'"
      ></BulaInput>
      <BulaInput
        :id="'mail'"
        :placeholder="'Mail Adresse'"
        :type="'email'"
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
    <div v-show="submitted && !error">
      <h4 ref="success">Erfolgreich abgeschickt!</h4>
      <p>
        Danke für die Idee! Wenn wir Fragen zu deiner Anregung haben, melden wir
        uns bei dir.
      </p>
      <button @click="submitted = false">Weiteren Vorschlag einreichen</button>
    </div>
    <div v-show="submitted && error">
      <h4>Es gab leider einen Fehler.</h4>
      <p>
        Du kannst uns die Daten gerne Per Mail schicken. Klicke dafür einfach
        auf folgenden button, wir füllen dann alles für dich aus:
        <a
          :href="
            'mailto:web@bula2023.de?subject=Fehler Essensvorschlag&body=Moin, im Folgenden die Daten der Anfrage: ' +
            JSON.stringify(requestBody)
          "
          >Vorschlag per Mail versenden.</a
        >
      </p>
      <button
        @click="
          submitted = false;
          error = false;
        "
      >
        Erneut versuchen / Weiteren Vorschlag einreichen
      </button>
    </div>
  </main>
</template>

<script>
import mixin from "@/mixin.js";
import { tupleExpression } from "@babel/types";
import BulaInput from "../components/bulaInput.vue";

export default {
  components: { BulaInput },
  mixins: [mixin],
  data() {
    return {
      loading: false,
      submitted: false,
      error: false,
      requestBody: {},
      mail: null,
      meals: null,
      showMailInput: true,
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

      this.requestBody = requestBody;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      };

      fetch(this.baseServerURL + "/meal", requestOptions)
        .then((response) => response.json())
        .then(() => {
          this.submitted = true;
          this.loading = false;
          form.target.reset();
          setTimeout(() => {
            this.$refs.success.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 10);
          this.fetchMeals();
        })
        .catch((error) => {
          this.error = true;
          this.submitted = true;
          console.log(error);
          this.requestBody.error = error;
        });
    },
    like(id) {
      if (!this.showMailInput) {
        fetch(this.baseServerURL + "/likemeal/" + id + "/" + this.mail, {
          method: "POST",
        }).then(this.fetchMeals());
      } else {
        this.$refs.login.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    dislike(id) {
      if (!this.showMailInput) {
        fetch(this.baseServerURL + "/dislikemeal/" + id + "/" + this.mail, {
          method: "POST",
        }).then(this.fetchMeals());
      } else {
        this.$refs.login.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    fetchMeals() {
      fetch(
        this.baseServerURL +
          "/meals" +
          (this.showMailInput ? "" : "/" + this.mail),
        { method: "GET" }
      )
        .then((response) => response.json())
        .then((data) => {
          this.meals = data;
        });
    },
    onMailEntered() {
      if (!!this.mail && this.mail.includes("@")) {
        this.showMailInput = false;
        this.fetchMeals();
      }
    },
  },
  mounted() {
    this.fetchMeals();
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

.meal {
  display: flex;
  border-radius: 1rem;
  border: 0.25rem solid black;
  padding: 1.5rem;
  border-image: url("/jobborder.png") 20% 3% 19% 4% ~"/" 1rem 1rem 1rem 1rem;
  margin: 0.5rem 0;
  gap: 1rem;
  justify-content: space-between;

  h4 {
    margin: 0;
    text-align: left;
  }
  .rating {
    justify-content: center;
    p,
    button {
      .sketchyFont();
      font-size: 1.5rem;
      margin: 0;
      text-align: center;
      background-color: transparent;
      color: black;
    }
    button:hover {
      .text-shadow(#E3C08C);
    }

    .selected {
      .text-shadow(@clr-blue);
    }

    .vote {
      transform: rotate(90deg);
    }
  }
}
</style>
