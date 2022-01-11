<template>
  <div id="app">
    <div v-if="loadTheme()"></div>
    <div class="CBg" :class="store.darkToggle ? 'CBg-light' : 'CBg-dark'"></div>
    <!--==============DJELATNIK ============================-->
    <div  v-if="store.currentUser == 'djelatnik@gmail.com'" class="menu2 top-0 grid grid-cols-2 mb-4">

      <div :class=" currentRouteName == 'Djelatnik'       ? 'menu-item-active menu-item2 menu-top-item-grid0' : 
                    currentRouteName == 'DjelatnikRacun'  ? 'menu-item-active menu-item2 menu-top-item-grid1' : ''" >
      </div>

    </div>
    <!--===============================-->
    <div  v-if="store.currentUser == 'djelatnik@gmail.com' && currentRouteName != 'PregledOtkupa'" class="menu top-0 grid grid-cols-2 mb-4">

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

      <div :class=" currentRouteName == 'StatusOtkupa' ? 'menu-item2 menu-top2-item-grid0' : 
                    currentRouteName == 'OtkupOpreme'   ? 'menu-item2 menu-top2-item-grid1' : 
                    currentRouteName == 'KorisnikRacun' ? 'menu-item2 menu-top2-item-grid2' : ''">
      </div>
    </div>
    <!--========================================-->
    <div v-if="store.currentUser != null && store.currentUser !== 'djelatnik@gmail.com'" class="menu top-0 grid grid-cols-3 mb-4">

      <div :class="currentRouteName == 'StatusOtkupa' ? 'menu-item-active' : 'menu-item'">
        <p><router-link to="status-otkupa"> Status otkupa </router-link></p>
      </div>

      <div :class="currentRouteName == 'OtkupOpreme' ? 'menu-item-active' : 'menu-item'">
        <p><router-link to="otkup-opreme"> Otkup opreme </router-link></p>
      </div>

      <div :class="currentRouteName == 'KorisnikRacun' ? 'menu-item-active' : 'menu-item'">
        <p><router-link to="korisnik-racun"> Račun </router-link></p>
      </div>

    </div>
    <!--==============DARK MODE=============================-->
      <div :class="currentRouteName == 'KorisnikRacun' ? 'menu-item3 dark-top' : 'menu-item3 dark-top2'">
        <div class="darkModeToggle" @click="toggleDark()">
          <div class="logout2">
            <!--===<p class="mr-4 text-24px" style="width:150px;">DARK MODE</p>=====-->
            <img v-if="!store.darkToggle" height="30px" width="30px" src="../src/assets/moon_empty_icon.svg">
            <img v-if="store.darkToggle"  height="30px" width="30px" src="../src/assets/moon_full_icon.svg">
          </div>
        </div>
      </div>
    <!--==============DARK MODE END=========================-->
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
    };
  },
  methods: {
    toggleDark(){
      store.darkToggle = !store.darkToggle;
      if (store.darkToggle) this.loadLight()
      else this.loadDark()
    },
    loadTheme(){
      if (store.darkToggle) this.loadLight()
      else this.loadDark()
    },
    loadDark() {
        let r = document.querySelector(':root');
        r.style.setProperty('--snow',               'hsl(0, 0%, 7%, 100%)');  //Background
        r.style.setProperty('--balticSea',          'hsl(0, 0%, 100%, 87%)'); //Default font dark
        r.style.setProperty('--balticSea3',         'hsl(0, 0%, 100%, 60%)'); //Default font lighter
        r.style.setProperty('--balticSea2',         'hsl(0, 0%, 100%, 16%)'); //br
        r.style.setProperty('--balticSea4',         'hsl(0, 0%, 100%, 5%)');  //bg menu
        r.style.setProperty('--balticSea5',         'hsl(0, 0%, 7%, 100%)');  //bg menu2
        r.style.setProperty('--balticSea6',         'hsl(0, 0%, 7%, 100%)');  //select
        r.style.setProperty('--balticSea7',         'hsl(0, 0%, 100%, 87%)');  //select
        r.style.setProperty('--fluorescentRed',     '#ad1f47'); //Input highlight line
        r.style.setProperty('--lateo',              'hsl(0, 0%, 100%, 10%)'); //Input autofill
        r.style.setProperty('--vivaldiRed',         '#e41a3c'); //CWarning font
        r.style.setProperty('--poblano',            '#068020'); //CSuccess font
        r.style.setProperty('--paleFlower',         '#bb2a53'); //Href link font
        r.style.setProperty('--tin',                '#400F21'); //inactive button-bg
        r.style.setProperty('--solidEmpire',        '#456f74'); //link font
        r.style.setProperty('--fresco',             'hsl(0, 0%, 100%, 87%)'); //Default font light
        r.style.setProperty('--graniteBrown',       'hsl(0, 0%, 0%, 87%)');   //menu-item-active font
        r.style.setProperty('--englishBreakfast',   '#bb2a53'); //textarea font
        r.style.setProperty('--lemonPeel',          '#cec14c'); //u razradi bg
        r.style.setProperty('--snowPea',            '#258843'); //prihvaćeno/riješeno bg
        r.style.setProperty('--forbiddenFruit',     '#e41a3c'); //odbijeno bg
        r.style.setProperty('--dustySky',           '#96a4a5'); //CCard-data bg
        r.style.setProperty('--stretchLimo',        'hsl(0, 0%, 100%, 16%)'); //CSelect items-border
        r.style.setProperty('--dwarfFortress',      '#1f0309'); //CSelect isSelected font
        r.style.setProperty('--dwarfFortress2',     'hsl(0, 0%, 100%, 87%)'); //CSelect isSelected font
        r.style.setProperty('--richGreen',          '#258843'); //CSuccess bg, font
        r.style.setProperty('--white',              '#9ecfd3'); //line password
        r.style.setProperty('--grey',               '#204c4e'); //line password
        r.style.setProperty('--red',                '#8c1939'); //line password
        r.style.setProperty('--yellow',             '#c9bc4b'); //line password
        r.style.setProperty('--green',              '#258843'); //line password
      },
    loadLight() {
        let r = document.querySelector(':root');
        r.style.setProperty('--snow',               '#fff9f9'); //Background
        r.style.setProperty('--balticSea',          '#3d3d3f'); //Default font dark, bg
        r.style.setProperty('--balticSea2',         '#3d3d3f'); //Default font dark, bg
        r.style.setProperty('--balticSea3',         '#3d3d3f'); //Default font dark, bg
        r.style.setProperty('--balticSea4',         '#3d3d3f00'); //Default font dark, bg
        r.style.setProperty('--balticSea5',         '#3d3d3f'); //Default font dark, bg
        r.style.setProperty('--balticSea6',         '#fff9f9'); //Default font dark, bg
        r.style.setProperty('--balticSea7',         '#fff9f9'); //Default font dark, bg
        r.style.setProperty('--fluorescentRed',     '#ff5252'); //Input highlight line
        r.style.setProperty('--lateo',              '#e8e7e700'); //Input autofill
        r.style.setProperty('--vivaldiRed',         '#e93a3a'); //CWarning font
        r.style.setProperty('--poblano',            '#068020'); //CSuccess font
        r.style.setProperty('--paleFlower',         '#668AAC'); //Href link font
        r.style.setProperty('--tin',                '#919192'); //inactive button-bg
        r.style.setProperty('--solidEmpire',        '#635a5a'); //link font
        r.style.setProperty('--fresco',             '#f5dada'); //Default font light
        r.style.setProperty('--graniteBrown',       '#3f2c28'); //menu-item-active font
        r.style.setProperty('--englishBreakfast',   '#461717'); //textarea font
        r.style.setProperty('--lemonPeel',          '#fff383'); //u razradi bg
        r.style.setProperty('--snowPea',            '#6dd277'); //prihvaćeno/riješeno bg
        r.style.setProperty('--forbiddenFruit',     '#ff8080'); //odbijeno bg
        r.style.setProperty('--dustySky',           '#96a4a5'); //CCard-data bg
        r.style.setProperty('--stretchLimo',        '#292e32'); //CSelect items-border
        r.style.setProperty('--dwarfFortress',      '#1a0505'); //CSelect isSelected font
        r.style.setProperty('--dwarfFortress2',      '#1a0505'); //CSelect isSelected font
        r.style.setProperty('--richGreen',          '#258843'); //CSuccess bg, font
        r.style.setProperty('--white',              '#ffffff'); //line password
        r.style.setProperty('--grey',               '#808080'); //line password
        r.style.setProperty('--red',                '#ff5252'); //line password
        r.style.setProperty('--yellow',             '#c9ba39'); //line password
        r.style.setProperty('--green',              '#258843'); //line password
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

.ghj {
  color: hsl(0, 0%, 7%);
}

:root {
  --snow:               #fff9f9; //Background               var(--snow);
  --balticSea:          #3d3d3f; //Default font dark, bg    var(--balticSea);
  --balticSea2:         #3d3d3f; //bt                       var(--balticSea2);
  --balticSea3:         #3d3d3f; //bt                       var(--balticSea3);
  --balticSea4:         #3d3d3f; //bt                       var(--balticSea4);
  --balticSea5:         #3d3d3f; //bt                       var(--balticSea5);
  --balticSea6:         #3d3d3f; //bt                       var(--balticSea6);
  --balticSea7:         #3d3d3f; //bt                       var(--balticSea7);
  --fluorescentRed:     #ff5252; //Input highlight line     var(--fluorescentRed);
  --lateo:              #e8e7e7; //Input autofill           var(--lateo);
  --vivaldiRed:         #e93a3a; //CWarning font            var(--vivaldiRed);
  --poblano:            #068020; //CSuccess font            var(--poblano);
  --paleFlower:         #668AAC; //Href link font           var(--paleFlower);
  --tin:                #919192; //inactive button-bg       var(--tin);
  --solidEmpire:        #635a5a; //link font                var(--solidEmpire);
  --fresco:             #f5dada; //Default font light       var(--fresco);
  --graniteBrown:       #3f2c28; //menu-item-active font    var(--graniteBrown);
  --englishBreakfast:   #461717; //textarea font            var(--englishBreakfast);
  --lemonPeel:          #fff383; //u razradi bg             var(--lemonPeel);
  --snowPea:            #6dd277; //prihvaćeno/riješeno bg   var(--snowPea);
  --forbiddenFruit:     #ff8080; //odbijeno bg              var(--forbiddenFruit);
  --dustySky:           #96a4a5; //CCard-data bg            var(--dustySky);
  --stretchLimo:        #292e32; //CSelect items-border     var(--stretchLimo);
  --dwarfFortress:      #1a0505; //CSelect isSelected font  var(--dwarfFortress);
  --dwarfFortress2:     #1a0505; //CSelect isSelected font  var(--dwarfFortress);
  --richGreen:          #258843; //CSuccess bg, font        var(--richGreen);
  --white:              #ffffff; //line password            var(--white);
  --grey:               #808080; //line password            var(--grey);
  --red:                #ff0000; //line password            var(--red);
  --yellow:             #ffff00; //line password            var(--yellow);
  --green:              #008000; //line password            var(--green);
}

* {
  font-family: "Lora", italic;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: var(--balticSea);
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 0.5s;
}
html {
  color: #85b3b6;
  background-color: var(--snow);
}
.CBg {
  position: fixed;
  left: 0;
  right: 0;
  z-index: -9999;
  display: block;
  background-size: 50%;
  background-repeat: repeat;
  width: 100%;
  height: 200%;
  bottom: -50px;
}
.CBg-light {
  background-image: url("assets/bg_light.png");
}
.CBg-dark {
  background-image: url("assets/bg_dark.png");
}
div hr {
  border: 2px solid var(--balticSea2);
  border-radius: 16px;
}
.dotted {
  border-style: dashed;
}
input:focus + hr {
  border: 2px solid var(--fluorescentRed);
  border-radius: 16px;
}
input:focus {
  outline: none;
  caret-color: var(--fluorescentRed);
}
input {
  background-color: transparent;
  color: var(--balticSea3) !important;
  width: 100%;
  height: 24px;
  border: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px var(--lateo) inset !important;
  -webkit-text-fill-color: var(--balticSea3);
  border-radius: 0% !important;
}
.CWarning {
  color: var(--vivaldiRed) !important;
}
.CSuccess {
  color: var(--poblano) !important;
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
  color: var(--paleFlower);
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
  opacity: 1;
}
.inactive div .button-bg {
  opacity: 0.25;
}
.menu {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  z-index: 3000;
  background-color: transparent;
}
.menu-top-item-grid0 {
  margin-left: 0%;
  background-color: var(--fluorescentRed);
}
.menu-top-item-grid1 {
  margin-left: 100%;
  background-color: var(--fluorescentRed);
}
.menu-top2-item-grid0 {
  margin-left: 0%;
  background-color: var(--fluorescentRed);
}
.menu-top2-item-grid1 {
  margin-left: 100%;
  background-color: var(--fluorescentRed);
}
.menu-top2-item-grid2 {
  margin-left: 200%;
  background-color: var(--fluorescentRed);
}
.menu2 {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  z-index: 2000;
  background-color: var(--balticSea5);
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
  background-color: var(--balticSea5);
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
}
.menu-item {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: var(--balticSea4);
}

.menu-item5 {
  display: flex;
  align-items: center;
  text-align: center;
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
  color: var(--fresco);  
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.menu-item p a {
  width: 100%;
  color: var(--fresco);
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
  background-color: var(--balticSea4);
}
.menu-item-active p {
  width: 100%;
  font-weight: bold;
  color: var(--graniteBrown);
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.menu-item-active p a {
  width: 100%;
  font-weight: bold;
  color: var(--graniteBrown);
  transition: all;
  transition-timing-function: ease-in-out;
  transition: 1s;
}
.otkup-div-image {
  width: 100% !important;
  overflow: hidden;
}
.otkup-div-image img {
  border-color: var(--balticSea);
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
  padding-bottom: 2px;
}
.otkup-textarea {
  padding: 8px;
  background-color: var(--balticSea6);
  color: var(--balticSea);
  font-size: 18px;
  border-color: var(--stretchLimo);
  border-width: 2px;
  border-top-left-radius: 9.5px !important;
  border-bottom-left-radius: 2.5px !important;
  border-top-right-radius: 9.5px !important;
  border-bottom-right-radius: 2.5px !important;
  caret-color: var(--fluorescentRed);
}
.money {
  width: 43px;
  opacity: 0.75;
}
.price {
  color: var(--fluorescentRed);
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
  width: 100%;
  z-index: 1000;
}
.dark-top2 {
  margin-top: 80px !important;
  margin-bottom: -40px !important;
}
.dark-top {
  margin-top: -20px !important;
  margin-bottom: 20px !important;
}
.logout2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-item3 {
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
</style>
