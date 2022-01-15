<template>
  <div @click="store.zahtjev=zahtjev">
    <router-link class="CCard flex" to="pregled-otkupa">
      <div class="CCard-image flex-none">
        <div class="square img_1-1">
          <img class="square-img" :src="zahtjev.slike[0]"/>
        </div>
      </div>

      <div class="CCard-data">

        <div class="CCard-header">
          <p class="CCard-title pl-1 pt-1 pb-2 font-bold">
            {{ zahtjev.instrument[1] }} {{ zahtjev.instrument[2] }}
            <b class="CCard-date float-right pr-1">
              {{ receivedFromNow }}
            </b>
          </p>
          <p class="CCard-subtitle pl-1">
            {{ zahtjev.instrument[3] }}
            <b class="CCard-price float-right pr-1">
              {{ zahtjev.preporucenaCijena }} kn
            </b>
          </p>
        </div>

        <div class="CCard-footer grid" :class="zahtjev.status != 'Riješeno' ? 'grid-cols-3' : 'grid-cols-1'" >

          <div
            v-if="zahtjev.status != 'Riješeno'"
            class="CCard-icon-1"
            :class="zahtjev.status != 'Odbijeno' ? 'tranparent-10' : ''" >
            <img class="CCard-svg mx-auto mt-2" src="@/assets/deny_icon.svg" />
            <p class="CCard-icontext">ODBIJENO</p>
          </div>

          <div 
            v-if="zahtjev.status != 'Riješeno'"
            class="CCard-icon-2"
            :class="zahtjev.status != 'U razradi' ? 'tranparent-10' : ''" >
            <img class="CCard-svg mx-auto mt-2" src="@/assets/load_icon.svg" />
            <p class="CCard-icontext">U RAZRADI</p>
          </div>

          <div 
            v-if="zahtjev.status != 'Riješeno'"
            class="CCard-icon-3"
            :class="zahtjev.status != 'Prihvaćeno' ? 'tranparent-10' : ''">
            <img class="CCard-svg mx-auto mt-2" src="@/assets/accept_icon.svg" />
            <p class="CCard-icontext">PRIHVAĆENO</p>
          </div>

          <div v-if="zahtjev.status == 'Riješeno'" class="CCard-icon-3">
            <img class="CCard-svg2 mx-auto mt-1" src="@/assets/deal_icon.svg" />
            <p class="CCard-icontext2">RIJEŠENO</p>
          </div>

        </div>

      </div>
    </router-link>
  </div>
</template>
<script>
import moment from "moment";
import store from "@/store";
export default {
  name: "CCard",
  props: {
    zahtjev: "",
  },
  data() {
    return {
      store
    };
  },
  computed: {
    receivedFromNow() {
      return moment(parseInt(this.zahtjev.date)).fromNow();
    },
  },
};
</script>
<style>
.CCard {
  width: 100%;
  height: 120px;
  background: transparent !important;
  box-shadow: 0px 0px 4px var(--Transparent25__Transparent75);
  border-radius: 8px;
}
.CCard-image {
  width: 120px;
  height: 120px;
  background: var(--BalticSea__Lead);
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
}
.CCard-img {
  height: 100% !important;
  width: auto !important;
}
.CCard-data {
  width: 100%;
  height: 120px;
  background: var(--DustySky__Lead);
  background-color: transparent !important;
  border-color: transparent !important;
  border-radius: 0%;
}
.CCard-header {
  width: 100%;
  height: 48px;
  background: var(--White__DarkGrey);
  border-top-right-radius: 8px;
}
.CCard-footer {
  width: 100%;
  height: 72px;
  background: var(--BalticSea__DarkToneInk);
  border-bottom-right-radius: 8px;
}
.CCard-icon-1 {
  height: 100%;
  background: var(--ForbiddenFruit__RedPotion);
}
.CCard-icon-2 {
  height: 100%;
  background: var(--LimonFresco__Anime);
}
.CCard-icon-3 {
  height: 100%;
  background: var(--SnowPea__RichGreen);
  border-bottom-right-radius: 8px;
}
.CCard-icontext {
  position: relative;
  text-align: center;
  font-size: 12px;
  top: 4px;
  font-weight: bold;
  letter-spacing: -1px;
  color: var(--DwarfFortress__Belladonna);
}
.CCard-svg {
  height: 42px;
  width: 42px;
  opacity: 75%;
}
.CCard-icontext2 {
  position: relative;
  text-align: center;
  font-size: 18px;
  top: 3px;
  font-weight: bold;
  letter-spacing: -1px;
}
.CCard-svg2 {
  height: 42px;
  width: 42px;
  opacity: 75%;
}
.CCard-title {
  position: relative;
  letter-spacing: -1px;
  font-size: 16px;
  top: 2px;
  color: var(--BalticSea__Lead);
}
.CCard-subtitle {
  position: relative;
  font-size: 11px;
  letter-spacing: -0.5px;
  bottom: 2px;
  color: var(--BalticSea__Squant);
}
.CCard-date {
  position: relative;
  bottom: 4px;
  font-size: 10px;
  font-weight: normal !important;
  letter-spacing: 0.25px;
  color: var(--BalticSea__BlackMana);
}
.CCard-price {
  position: relative;
  bottom: 0px;
  font-size: 14px;
  color: var(--Flushed__LingonberryRed) !important;
}
</style>
