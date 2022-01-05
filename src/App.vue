<template>
  <div id="app">
    <div class="CBg"></div>
    <div
      v-if="currentRouteName == 'KorisnikPodaci'"
      class="menu top-0 grid grid-cols-3 mb-4"
    >
      <div class="menu-item">
        <p>Status otkupa</p>
      </div>
      <div class="menu-item">
        <p>Otkup opreme</p>
      </div>
      <div class="menu-item-active">
        <p>Račun</p>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import store from "@/store";
import Vue from "vue";
import { getAuth, onAuthStateChanged } from "@/firebase";

const auth = getAuth();

import router from "@/router";

onAuthStateChanged(auth, (user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log("LOGGED IN: " + user.email);
    store.currentUser = user.email;
    if (!currentRoute.meta.needsUser) {
      console.log("test");
      if (store.currentUser === "djelatnik@gmail.com") {
        router.push({ name: "Djelatnik" });
      } else {
        router.push({ name: "KorisnikPodaci" });
      }
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
input:focus + hr {
  border: 2px solid #ff5252;
  border-radius: 16px;
}
input:focus {
  outline: none;
  caret-color: #ff5252;
}
input {
  background-color: transparent;
  width: 100%;
  height: 24px;
  border: none;
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
  opacity: 0.10;
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
  background-color: #3D3D3F;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.menu-bottom {
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 50px;
  background-color: #3D3D3F;
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
</style>
