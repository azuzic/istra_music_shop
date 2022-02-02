<template>
  <div class="p-0 m-0">

    <div>
      <router-link v-if="store.theme=='Svijetla'" to="/"><img alt="Test logo" src="../assets/logo.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Plava'" to="/"><img alt="Test logo" src="../assets/logo_dark_blue.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Crvena'" to="/"><img alt="Test logo" src="../assets/logo_dark_red.svg" /></router-link>
    </div>

    <div class="grid grid-cols-1 grid-rows-3 gap-14 mt-10 mb-10">

      <div class="grid">
        <CTitle
          class="place-self-center"
          msg1="Dobro došli u web aplikaciju"
          msg2="Istra Music Shop-a!"
        />
      </div>

      <div class="place-self-center text-center pl-8 pr-8">
        <p class="text-home">Prodajte svoje glazbene instrumente koje ne koristite pomoću automatiziranog sustava otkupa.</p>
      </div>

      <div class="place-self-center">
        <CButton
          btn="REGISTRACIJA"
          link_text="Imate račun?"
          link_href_text="Prijavite se."
          href_link="/prijava"
          href_btn="/registracija"
          :btnClickHandler="this.dummy"
        />
      </div>

    </div>

    <img @click="helpPopup = true" class="help" src="https://cdn0.iconfinder.com/data/icons/cosmo-symbols/40/help_1-512.png">
  
    <div :class="helpPopup ? 'darken-bg' : 'undarken-bg'"></div>
    
    <div @click="helpPopup = false" class="pl-4 pr-4" :class="helpPopup ? 'helpPopup' : 'closeHelp'">
      <ol class="p-4 list-disc">
        <h1 class="text-center mb-4 text-24px"><b>Kratke upute kako koristiti aplikaciju</b></h1>
        <li>Aplikacija služi svima koji žele prodati svoje glazbene instrumente. </li><br>
        <li>Prilikom registracije tražit ćemo vas OIB iz sigurnosnih razloga te radi generiranja kupoprodajnog ugovora. Također, morate unijeti IBAN računa gdje želite da Vam uplatimo novac.</li><br>
        <li>Nakon registracije odmah možete predati zahtjev za otkup na <b>OtkupOpreme</b> odabirom vašeg instrumenta među ponuđenima i popunjavanjem ostalih podataka koje vas budemo tražili.</li><br>
        <li>Tražit ćemo Vas i slike vašeg instrumenta. Zahtjev možemo odbiti ukoliko slike nisu dovoljno dobre kvalitete.</li><br>
        <li>Status vašeg zahtjeva možete pratiti na <b>StatusOtkupa</b>. Obratite pažnju ukoliko Vam naš djelatnik predloži drugu cijenu za vaš instrument, možete ju prihvatiti ili odbiti. </li><br>
      </ol>
    </div>

  </div>
</template>

<script>
import store from "@/store";
//Komponente
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";

export default {
  name: "Home",
  data() {
    return {
      store,
    };
  },
  components: {
    CTitle,
    CButton,
  },
  methods: {
    dummy() {},
  },
};
</script>

<style scoped lang="scss">
.text-home {
  color: var(--BalticSea__Squant) !important;
}
.helpPopup {
  position: fixed;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  position: fixed !important;
  z-index: 50000000;
  width: 90% !important;
  height: 400px;
  overflow-y: scroll;
  border-radius: 16px;
  background-color: var(--Snow__DarkToneInk);
  box-shadow: 0px 0px 8px hsl(0, 0%, 0%, 75%);
}
.closeHelp {
  position: fixed;
  overflow: hidden;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width: 90% !important;
  height: 0%;
}
.help {
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 40px;
  margin: 4px;
}
.undarken-bg {
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -100;
  background-color: hsl(0, 0%, 0%, 0%);
  backdrop-filter: blur(0px);
}
.darken-bg {
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 40000000;
  background-color: hsl(0, 0%, 0%, 50%);
  backdrop-filter: blur(4px);
}
</style>