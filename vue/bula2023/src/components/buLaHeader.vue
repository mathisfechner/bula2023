<template>
    <header>
        <svg @click="$router.push('/')" ref="logoTop" id="logoTop" class="logo" width="2.5rem" height="2.5rem" alt="BuLa Logo">
            <use href="#bulaLogoContents"/>
          </svg>
        <div id="headerRow" :class="{'showOptions': showOptions}">
          <button ref="burgerMenu" id="burgerMenu" :class="{'showOptions': showOptions}" @click.stop="toggleMenu">
              <span aria-hidden="true">–</span>
              <span aria-hidden="true">–</span>
              <span aria-hidden="true">–</span>
          </button>
          <router-link to="/" tabindex="1"><h1 ref="BuLa">BuLa</h1></router-link>
          <svg @click="$router.push('/')" :class="{'logo': true, 'showOptions': showOptions}" style="cursor:pointer" ref="logoRight" id="logoRight" width="2.5rem" height="2.5rem" alt="BuLa Logo">
            <use href="#bulaLogoContents"/>
          </svg>
        </div>
        <nav :class="{'displayMenu': displayMenu}" :aria-hidden="!displayMenu">
          <router-link to="/team" :tabindex="displayMenu ? 0 : -1">Team | Jobs</router-link>
          <router-link to="/faq" :tabindex="displayMenu ? 0 : -1">FAQ</router-link>
          <router-link to="/lagerplatz" :tabindex="displayMenu ? 0 : -1">Lagerplatz</router-link>
        </nav>
    </header>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
  data() {
    return{
      initialised: false,
      showOptions: false,
      displayMenu: false,
    }
  },
  methods: {
    toggleMenu: function(e) {
      this.displayMenu = !this.displayMenu;
      if (this.displayMenu) {
        console.log(e.pointerType);
        if (e.pointerType=="touch") {
          window.addEventListener("touchstart", () => {
            this.displayMenu = false;
          }, {once: true})
        } else {
          window.addEventListener("click", () => {
            this.displayMenu = false;
          }, {once: true})
        }
      }
    },
    updateHeader: function() {
      const scrollY = window.pageYOffset;
      const rem = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));
      //if (scrollY > 6 * rem && this.initialised) return;
      //logoTop
      this.$refs.logoTop.style.width = Math.max(8 - 3 * scrollY / (3 * rem), 0) + "rem";
      this.$refs.logoTop.style.height = Math.max(8 - 3 * scrollY / (3 * rem), 0) + "rem";
      //if (scrollY > 2 * rem && this.initialised) return;
      //logoRight, Bula,
      this.$refs.BuLa.style.fontSize = Math.max(5.5 - 0.5 * scrollY / (2 * rem), 5) + "rem";

      this.$refs.logoRight.style.width = Math.max(8 - 3 * scrollY / (2 * rem), 5) + "rem";
      this.$refs.logoRight.style.height = Math.max(8 - 3 * scrollY / (2 * rem), 5) + "rem";

      this.$refs.burgerMenu.style.fontSize = Math.max(4 - 1 * scrollY / (2 * rem), 3) + "rem";
      this.$refs.burgerMenu.style.width = Math.max(8 - 3 * scrollY / (2 * rem), 5) + "rem";
      this.$refs.burgerMenu.style.height = Math.max(3 - 3/4 * scrollY / (2 * rem), 3-3/4) + "rem";
      this.$refs.burgerMenu.style.marginTop = Math.min(-1.5 + 0.75 * scrollY / (2 * rem), -0.75) + "rem";
      this.initialised = true;

      if (scrollY > 8.5 * rem) this.showOptions = true;
      else this.showOptions = false;
    }
  },
  mounted() {
    this.updateHeader();
    window.addEventListener("scroll", this.updateHeader)
  }
}
</script>

<style lang="less">
@import "~@/less/main.less";

main {
  padding-top: 10rem !important;
  @media (max-width: 25*16px) {
    padding-top: 16rem !important;
  }
}

header {
  pointer-events: none;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: calc(100% - 4rem);
  margin: 1rem 2rem;

  nav {
    pointer-events: all;
    align-self: flex-start;
    margin-left: -0.5rem;
    margin-top: 1rem;
    width: 15rem;
    backdrop-filter: blur(5px);
    background-color: #FFFFFF55;
    border-radius: 1rem;
    transform: translate(-200%, 0);
    .transition();
    &.displayMenu {
      transform: translate(0, 0);
    }
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    a {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
    }
    a:hover {
      background-color: white;
    }
  }

  #headerRow {
    pointer-events: all;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem;
    border-radius: 1rem;
    .transition();
  }
  #burgerMenu {
    font-size: 5rem;
    margin-top: -1.5rem;
    height: 3rem;
    width: 8rem; //gleich Breit wie Logo, damit BuLa zentriert ist
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    span {
      margin: 0rem;
      height: 0rem;
      display: flex;
      align-items: center;
      .sketchyFont();
    }
  }
  .logo {
    height: 8rem;
    width: 8rem;
  }
  #logoTop {display: none;}; 

  @media (min-width: 28*16px) {
    #headerRow {
      padding: 0.5rem 1rem;
    }
  }

  @media (max-width: 25*16px) {
    width: calc(100% - 2rem);
    margin: 1rem 1rem;
    #logoTop {display: block;};
    #logoRight {
      width: 2rem !important;
      height: 5rem !important;
      transform: translate(200%, 0);
      .transition();      
    }
    #burgerMenu {
      width: 2rem !important;
      transform: translate(-200%, 0);
      .transition();
    }
    .showOptions {
      &#burgerMenu, &#logoRight {transform: translate(0,0) !important; width: 5rem !important}
    }
  }
  @media (max-height: 20*16px) {
    h1 {font-size: 3rem !important;}
    #logoRight {
      width: 3rem !important;
      height: 3rem !important;
    }
    #burgerMenu {
      width: 3rem !important;
      font-size: 3rem !important;
      height: 2.25rem !important;
      margin-top: -.75rem !important;
    }
  }
  #headerRow.showOptions {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: #FFFFFF55;
  }
}
</style>