<template>
  <div class="p-0 m-0 pt-16">
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4 mt-2">
        <!--===================VRSTA INSTRUMENTA===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Vrsta instrumenta</p>
          <CSelect :options="tempOptions" v-model="vrstaInstrumenta" />
        </div>
        <!--===================/VRSTA INSTRUMENTA===================-->
        <!--===================PROIZVOĐAČ===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Proizvođač</p>
          <CSelect :options="tempOptions" v-model="proizvodac" />
        </div>
        <!--===================/PROIZVOĐAČ===================-->
        <!--===================MODEL===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Model</p>
          <CSelect :options="tempOptions" v-model="model" />
        </div>
        <!--===================/MODEL===================-->
        <!--===================SERIJA===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Serija</p>
          <CSelect :options="tempOptions" v-model="serija" />
        </div>
        <!--===================/SERIJA===================-->
        <!--===================GODINA PROIZVODNJE====================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Godina proizvodnje</p>
          <input
            type="number"
            class="border rounded"
            id="emailInput"
            v-model="godinaProizvodnje"
          />
          <hr />
        </div>
        <h2 v-if="yearCheck" class="CWarning">
          Molimo unesite ispravnu godinu!
        </h2>
        <!--================/GODINA PROIZVODNJE===================-->
        <!--===================VLASNIK===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Vlasnik</p>
          <CSelect :options="[1, 2, 3]" v-model="vlasnik" />
        </div>
        <!--===================/VLASNIK===================-->
        <!--===================STANJE===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Stanje</p>
          <CSelect
            :options="['Novo', 'Rabljeno', 'Neispravno']"
            v-model="stanje"
          />
        </div>
        <!--===================/STANJE===================-->
        <!--===================SLIKE===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Slike</p>
          <div class="grid grid-rows-2 grid-cols-3 gap-2 mt-2">
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Gornja prednja</p>
              <img
                class="CCard-img img-top-left mx-auto"
                src="https://picsum.photos/500/500/"
              />
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Gornja stražnja</p>
              <img
                class="CCard-img img-top mx-auto"
                src="https://picsum.photos/500/500/"
              />
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Bočna desna</p>
              <img
                class="CCard-img img-top-right mx-auto"
                src="https://picsum.photos/500/500/"
              />
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Bočna lijeva</p>
              <img
                class="CCard-img img-bottom-left mx-auto"
                src="https://picsum.photos/500/500/"
              />
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Vrat gitare</p>
              <img
                class="CCard-img img-bottom mx-auto"
                src="https://picsum.photos/500/500/"
              />
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Glava gitare</p>
              <img
                class="CCard-img img-bottom-right mx-auto"
                src="https://picsum.photos/500/500/"
              />
            </div>
          </div>
        </div>
        <!--===================/SLIKE===================-->
        <!--===================/NAPOMENA===================-->
        <div>
          <p class="text-left text-22px m-0 p-0">Napomena</p>
          <textarea
            v-model="napomena"
            class="resize-none rounded-md w-full h-32 mb-4 mt-4 otkup-textarea"
          ></textarea>
        </div>
        <!--===================/NAPOMENA===================-->
        <!--===================/OTKUPI===================-->
        <div
          class="place-self-center mb-4"
          :class="allFilled ? 'active' : 'inactive'"
        >
          <CButtonSingle
            btn="OTKUPI"
            :btnClickHandler="allFilled ? otkupi : dummy"
          />
        </div>
        <!--===================/OTKUPI===================-->
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CSelect from "@/components/CSelect.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import store from "@/store";
import { collection, addDoc } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: "OtkupOpreme",
  data() {
    return {
      tempOptions: ["option1", "option2", "option3", "option4"],
      currentYear: 2022,
      vrstaInstrumenta: "",
      proizvodac: "",
      model: "",
      serija: "",
      godinaProizvodnje: "",
      vlasnik: "",
      stanje: "",
      napomena: "",
    };
  },
  components: {
    CTitle,
    CWarning,
    CButtonAccept,
    CButtonDecline,
    CSelect,
    CButtonSingle,
  },

  methods: {
    dummy() {},
    async otkupi() {
      try {
        const docRef = await addDoc(collection(db, "zahtjevi"), {
          korisnik: store.currentUser,
          instrument: [
            this.vrstaInstrumenta,
            this.proizvodac,
            this.model,
            this.serija,
            this.godinaProizvodnje,
            this.vlasnik,
            this.stanje,
          ],
          napomena: this.napomena,
          status: "U razradi",
          preporucenaCijena: 1500,
        });
        console.log("Predan zahtjev za otkup sa ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  computed: {
    allFilled() {
      return this.vrstaInstrumenta &&
        this.proizvodac &&
        this.model &&
        this.serija &&
        this.godinaProizvodnje &&
        this.vlasnik &&
        this.stanje
        ? 1
        : 0;
    },
    yearCheck() {
      return (this.godinaProizvodnje < 1935 ||
        this.godinaProizvodnje > this.currentYear) &&
        this.godinaProizvodnje
        ? 1
        : 0;
    },
  },
};
</script>

<style>
.otkup-div-image {
  width: 120px;
  overflow: hidden;
}

.otkup-div-image img {
  border-color: #3d3d3f;
  height: 120px;
  border-width: 2px;
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
</style>
