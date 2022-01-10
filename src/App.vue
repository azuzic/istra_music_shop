<template>
  <div id="app">
    <div class="darkModeToggle" @click="toggleDark()">
      <img v-if="darkToggle" src="../src/assets/moon_empty_icon.svg">
      <img v-if="!darkToggle" src="../src/assets/moon_full_icon.svg">
    </div> 
    <div class="CBg"></div>
    <!--==============DJELATNIK ============================-->
    <div  v-if="store.currentUser == 'djelatnik@gmail.com'" class="menu2 top-0 grid grid-cols-2 mb-4">

      <div :class=" currentRouteName == 'Djelatnik'       ? 'menu-item-active menu-item2 menu-top-item-grid0' : 
                    currentRouteName == 'DjelatnikRacun'  ? 'menu-item-active menu-item2 menu-top-item-grid1' : ''" >
      </div>

    </div>
    <!--===============================-->
    <div  v-if="store.currentUser == 'djelatnik@gmail.com'" class="menu top-0 grid grid-cols-2 mb-4">

      <div :class="currentRouteName == 'Djelatnik' ? 'menu-item-active' : 'menu-item'">
        <p><router-link to="djelatnik"> Pregled otkupa </router-link></p>
      </div>

      <div :class="currentRouteName == 'DjelatnikRacun' ? 'menu-item-active' : 'menu-item'" >
        <p><router-link to="djelatnik-racun"> Račun </router-link></p>
      </div>

    </div>
    <!--==============DJELATNIK END=========================-->
    <!--==============KORISNIK =============================-->
    <div v-if="store.currentUser != null && store.currentUser !== 'djelatnik@gmail.com'" class="menu2 top-0 grid grid-cols-3 mb-4">

      <div :class=" currentRouteName == 'Status otkupa' ? 'menu-item-active menu-item2 menu-top2-item-grid0' : 
                    currentRouteName == 'OtkupOpreme'   ? 'menu-item-active menu-item2 menu-top2-item-grid1' : 
                    currentRouteName == 'KorisnikRacun' ? 'menu-item-active menu-item2 menu-top2-item-grid2' : ''">
      </div>
    </div>
    <!--==============KORISNIK END==========================-->
    <!--==============KORISNIK =============================-->
    <div v-if="store.currentUser != null && store.currentUser !== 'djelatnik@gmail.com'" class="menu top-0 grid grid-cols-3 mb-4">

      <div :class="currentRouteName == 'Status otkupa' ? 'menu-item-active' : 'menu-item'">
        <p>Status otkupa</p>
      </div>

      <div :class="currentRouteName == 'OtkupOpreme' ? 'menu-item-active' : 'menu-item'">
        <p><router-link to="otkup-opreme"> Otkup opreme </router-link></p>
      </div>

      <div :class="currentRouteName == 'KorisnikRacun' ? 'menu-item-active' : 'menu-item'">
        <p><router-link to="korisnik-racun"> Račun </router-link></p>
      </div>

    </div>
    <!--==============KORISNIK END==========================-->
    <router-view />
  </div>
</template>
<script>
import store from "@/store";
import { getAuth, onAuthStateChanged } from "@/firebase";
import router from "@/router";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log("LOGGED IN: " + user.email);
    store.currentUser = user.email;
    if (!currentRoute.meta.needsUser) {
      store.currentUser === "djelatnik@gmail.com"
        ? router.replace({ name: "DjelatnikRacun" })
        : router.replace({ name: "KorisnikRacun" });
    }
  } else {
    console.log("NO USER");
    store.currentUser = null;
    if (currentRoute.meta.needsUser) {
      router.push({ name: "Prijava" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
      darkToggle: true,
    };
  },
  methods: {
    toggleDark(){
      this.darkToggle = !this.darkToggle;
      var r = document.querySelector(':root');
      if (this.darkToggle) r.style.setProperty('--bg1', 'invert(0)');
      else r.style.setProperty('--bg1', 'invert(1)');
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alike&display=swap");

:root {
  --bg1: invert(0);
}

* {
  font-family: "Lora", italic;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #3d3d3f;
}
html {
  background-color: #fff9f9;
}
.CBg {
  position: fixed;
  left: 0;
  right: 0;
  z-index: -9999;
  display: block;
  filter: var(--bg1);
  background-image: url("assets/bg.png");
  background-size: 50%;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
}
div hr {
  border: 2px solid #3d3d3f;
  border-radius: 16px;
}
.dotted {
  border-style: dashed;
}
input:focus + hr {
  border: 2px solid #ff5252;
  border-radius: 16px;
}
input:focus {
  outline: none;
  caret-color: #ff5252;
}
input {
  background-color: #ff525200;
  width: 100%;
  height: 24px;
  border: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px #e8e7e7 inset !important;
}
.CWarning {
  color: #e93a3a !important;
}
.CSuccess {
  color: #068020 !important;
}
.href-link {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #275d8fab;
}
.tranparent-10 {
  opacity: 0.1;
}
.tranparent {
  opacity: 0.35;
}
.tranparent-25 {
  opacity: 0.25;
}
.tranparent-50 {
  opacity: 0.5;
}
.tranparent-65 {
  opacity: 0.65;
}
.tranparent-75 {
  opacity: 0.75;
}
.active div .button-bg {
  background: #3d3d3f !important;
}
.inactive div .button-bg {
  background: #919192 !important;
}

.menu {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  z-index: 500;
  background-color: transparent;
}
.menu-top-item-grid0 {
  margin-left: 0%;
  background-color: #ff5252;
}
.menu-top-item-grid1 {
  margin-left: 100%;
  background-color: #ff5252 ;
}
.menu-top2-item-grid0 {
  margin-left: 0%;
  background-color: #ff5252;
}
.menu-top2-item-grid1 {
  margin-left: 100%;
  background-color: #ff5252 ;
}
.menu-top2-item-grid2 {
  margin-left: 200%;
  background-color: #ff5252 ;
}
.menu2 {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  z-index: 500;
  background-color: #3d3d3f;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.menu-bottom {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
}

.menu-bottom3 {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 50px;
  background-color: #3d3d3f;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
}

.menu-item {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: transparent;
}
.menu-item2 {
  position: absolute;
  height: inherit;
  width: inherit;
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 0.75s;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 100;
}
.menu-item p {
  width: 100%;
  color: #f5dada;  
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.menu-item p a {
  width: 100%;
  color: #f5dada;
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.menu-item p b {
  width: 100%;
}
.menu-item-active {
  display: flex;
  align-items: center;
  text-align: center;
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.menu-item-active p {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.menu-item-active p a {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.otkup-div-image {
  width: 100% !important;
  overflow: hidden;
}

.otkup-div-image img {
  border-color: #3d3d3f;
  height: 100% !important;
  border-width: 2px;
}

.img-top-left {
  border-top-left-radius: 9.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
}
.img-top {
  border-radius: 2.5px;
}
.img-top-right {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 9.5px;
  border-bottom-right-radius: 2.5px;
}
.img-bottom-left {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 9.5px;
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
}
.img-bottom {
  border-radius: 2.5px;
}
.img-bottom-right {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 9.5px;
}
.otkup-img-text {
  text-align: center;
  font-size: 16px;
  color: #3f2c28;
}
.otkup-textarea {
  padding: 8px;
  color: #461717;
  font-size: 18px;
  width: 100%;
  border-color: #3d3d3f;
  height: 128px;
  border-width: 2px;
  border-top-left-radius: 9.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 9.5px;
  border-bottom-right-radius: 2.5px;
}
.money {
  width: 43px;
  opacity: 0.75;
}
.price {
  color: #ff5252;
}
.fade-enter-active, .fade-leave-active {
  margin-left: 0%;
  margin-top: 0%;
  opacity: 100%;
  transition:  .95s;
}
.fade-enter, .fade-leave-to {
  margin-top: -50%;
  opacity: 0%;
  transition: .5s;
}
.darkModeToggle {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 42px;
  height: 42px;
  padding: 8px;
  z-index: 2000;
}
</style>
