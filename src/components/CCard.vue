<template>
  <div class="CCard flex">
    <div class="CCard-image flex-none">
        <img class="CCard-img mx-auto" :src="zahtjev.img">
    </div>
    <div class="CCard-data">
      <div class="CCard-header">
        <p class="CCard-title pl-1 pt-1 pb-2 font-bold">
          {{zahtjev.instrument[1]}} {{zahtjev.instrument[2]}}
          <b class="CCard-date float-right pr-1">
            {{zahtjev.instrument[4]}}
          </b>
        </p>
        <p class="CCard-subtitle pl-1">
          {{zahtjev.instrument[3]}}
          <b class="CCard-price float-right pr-1">
            {{zahtjev.preporucenaCijena}} kn
          </b>
        </p>
      </div>
      <div class="CCard-footer grid" :class="zahtjev.status!='Riješeno' ? 'grid-cols-3':'grid-cols-1'">
        <div v-if="zahtjev.status!='Riješeno'" class="CCard-icon-1" :class="zahtjev.status!='Odbijeno' ? 'tranparent-10':''">
          <img class="CCard-svg mx-auto mt-2" src="@/assets/deny_icon.svg">
          <p class="CCard-icontext">ODBIJENO</p>
        </div>
        <div v-if="zahtjev.status!='Riješeno'" class="CCard-icon-2" :class="zahtjev.status!='U razradi' ? 'tranparent-10':''">
          <img class="CCard-svg mx-auto mt-2" src="@/assets/load_icon.svg">
          <p class="CCard-icontext">U RAZRADI</p>
        </div>
        <div v-if="zahtjev.status!='Riješeno'" class="CCard-icon-3" :class="zahtjev.status!='Prihvaćeno' ? 'tranparent-10':''">
            <img class="CCard-svg mx-auto mt-2" src="@/assets/accept_icon.svg">
            <p class="CCard-icontext">PRIHVAĆENO</p>
        </div>
        <div v-if="zahtjev.status=='Riješeno'" class="CCard-icon-3">
            <img class="CCard-svg2 mx-auto mt-1" src="@/assets/deal_icon.svg">
            <p class="CCard-icontext2">RIJEŠENO</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CCard",
  props: {
    zahtjev: ""
  },
};
</script>
<style>
.CCard {
  width: 100%;
  height: 120px;
  background: #3D3D3F;
  box-shadow: 0px 0px 2.5px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
}
.CCard-image {
  width: 120px;
  height: 120px;
  background: #3D3D3F;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
}
.CCard-img {
  height: 100%;
  width: auto;
}
.CCard-data {
  width: 100%;
  height: 120px;
  background: rgb(150, 164, 165);
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
.CCard-header {
  width: 100%;
  height: 48px;
  background: rgb(255, 255, 255);
  border-top-right-radius: 8px;
}
.CCard-footer {
  width: 100%;
  height: 72px;
  background: #3D3D3F;
  border-bottom-right-radius: 8px;
}
.CCard-icon-1 {
  height: 100%;
  background: #FF8080;
}
.CCard-icon-2 {
  height: 100%;
  background: #FFF383;
}
.CCard-icon-3 {
  height: 100%;
  background: #6DD277;
  border-bottom-right-radius: 8px;
}
.CCard-icontext {
  position: relative;
  text-align: center;
  font-size: 12px;
  top: 4px;
  font-weight: bold;
  letter-spacing: -1px;
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
  font-size: 18px;
  top: 2px;
}
.CCard-subtitle {
  position: relative;
  font-size: 11px;
  letter-spacing: -0.5px;
  bottom: 2px;
}
.CCard-date {
  position: relative;
  bottom: 4px;
  font-size: 12px;
}
.CCard-price {
  position: relative;
  bottom: 0px;
  font-size: 12px;
  color: #e93a3a !important;
}
</style>