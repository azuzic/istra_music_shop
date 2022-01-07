<template>
  <div id="app">
    <div class="CBg"></div>

    <div
      v-if="store.currentUser == 'djelatnik@gmail.com'"
      class="menu top-0 grid grid-cols-2 mb-4"
    >
      <div
        :class="
          currentRouteName == 'Djelatnik' ? 'menu-item-active' : 'menu-item'
        "
      >
        <router-link to="djelatnik"> Pregled otkupa </router-link>
      </div>
      <div
        :class="
          currentRouteName == 'DjelatnikRacun'
            ? 'menu-item-active'
            : 'menu-item'
        "
      >
        <router-link to="DjelatnikRacun"> Račun </router-link>
      </div>
    </div>
    <div
      v-else-if="
        store.currentUser != null && store.currentUser !== 'djelatnik@gmail.com'
      "
      class="menu top-0 grid grid-cols-3 mb-4"
    >
      <div
        :class="
          currentRouteName == 'Status otkupa' ? 'menu-item-active' : 'menu-item'
        "
      >
        <p>Status otkupa</p>
      </div>
      <div
        :class="
          currentRouteName == 'OtkupOpreme' ? 'menu-item-active' : 'menu-item'
        "
      >
        <p>Otkup opreme</p>
      </div>
      <div
        :class="
          currentRouteName == 'KorisnikRacun' ? 'menu-item-active' : 'menu-item'
        "
      >
        <p>Račun</p>
      </div>
    </div>
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
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alike&display=swap");
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
input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px #E8E7E7 inset !important;
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
  background-color: #3d3d3f;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.menu-bottom {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 50px;
  background-color: #3d3d3f;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
}

.menu-bottom2 {
  width: 100%;
  height: 50px;
  background-color: #3d3d3f;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
}

.menu-item {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #3d3d3f;
}
.menu-item p {
  width: 100%;
  color: #f5dada;
}
.menu-item p a {
  width: 100%;
  color: #f5dada;
}
.menu-item p b {
  width: 100%;
}
.menu-item-active {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #ff5252;
}
.menu-item-active p {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
}
.menu-item-active p a {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
}
</style>
