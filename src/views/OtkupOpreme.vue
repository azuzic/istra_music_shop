<template>
  <div class="p-0 m-0 pt-16">
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4 mt-2 mb-16">
        <!--===================VRSTA INSTRUMENTA===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Vrsta instrumenta</p>
          <CSelect :options="vrste" v-model="odabranaVrsta" />
        </div>
        <!--===================/VRSTA INSTRUMENTA===================-->
        <!--===================PROIZVOĐAČ===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Proizvođač</p>
          <CSelect :options="proizvodacSet" v-model="odabraniProizvodac" />
        </div>
        <!--===================/PROIZVOĐAČ===================-->
        <!--===================MODEL===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Model</p>
          <CSelect :options="modelSet" v-model="odabraniModel" />
        </div>
        <!--===================/MODEL===================-->
        <!--===================SERIJA===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Serija</p>
          <CSelect :options="serijaSet" v-model="odabranaSerija" />
        </div>
        <!--===================/SERIJA===================-->
        <!--===================GODINA PROIZVODNJE====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Godina proizvodnje</p>
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
          <p class="text-left text-18px m-0 p-0">Vlasnik</p>
          <CSelect :options="[1, 2, 3]" v-model="vlasnik" />
        </div>
        <!--===================/VLASNIK===================-->
        <!--===================STANJE===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Stanje</p>
          <CSelect
            :options="['Novo', 'Rabljeno', 'Neispravno']"
            v-model="stanje"
          />
        </div>
        <!--===================/STANJE===================-->
        <!--===================SLIKE===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Slike</p>
          <div class="grid grid-rows-2 grid-cols-3 gap-3 mt-2">
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Gornja prednja</p>
              <div>
                <img
                  class="CCard-img img-top-left mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Gornja stražnja</p>
              <div>
                <img
                  class="CCard-img img-top mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Bočna desna</p>
              <div>
                <img
                  class="CCard-img img-top-right mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Bočna lijeva</p>
              <div>
                <img
                  class="CCard-img img-bottom-left mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Vrat gitare</p>
              <div>
                <img
                  class="CCard-img img-bottom mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Glava gitare</p>
              <div>
                <img
                  class="CCard-img img-bottom-right mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
          </div>
        </div>
        <!--===================/SLIKE===================-->
        <!--===================/NAPOMENA===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Napomena</p>
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
      <!--==============FOOTER==================================-->
      <div class="menu-bottom3 grid grid-cols-1 mt-4">
        <div class="menu-item text-left mx-auto">
          <img class="money" src="@/assets/money_icon.svg" />
          <p class="pl-4 text-24px">
            Predložena cijena:
            <b class="price">{{ izracunCijene }}</b>
          </p>
        </div>
      </div>
      <!--==============FOOTER END==============================-->
    </div>
  </div>
</template>
<script>
import data from "../assets/JSON/InstrumentData.json";
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
      jsonData: data,
      vrste: ["Gitara", "Bubanj", "Bas gitara"],
      prikazaniProizvodaci: [],
      prikazaniModeli: [],
      prikazaneSerije: [],
      currentYear: 2022,

      odabranaVrsta: "Gitara",
      odabraniProizvodac: "Gibson",
      odabraniModel: "LesPaul",
      odabranaSerija: "Standard",
      godinaProizvodnje: "",
      vlasnik: "",
      stanje: "",
      napomena: "",
      cijeneSerija: {},
      preporucenaCijena: 0,
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
  created() {},
  methods: {
    async otkupi() {
      try {
        const docRef = await addDoc(collection(db, "zahtjevi"), {
          korisnik: store.currentUser,
          instrument: [
            this.odabranaVrsta,
            this.odabraniProizvodac,
            this.odabraniModel,
            this.odabranaSerija,
            this.godinaProizvodnje,
            this.vlasnik,
            this.stanje,
          ],
          zahtjevPredan: Date.now(),
          napomena: this.napomena,
          status: "U razradi",
          preporucenaCijena: 1500,
        });
        console.log("Predan zahtjev za otkup sa ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    dummy() {},
  },
  computed: {
    izracunCijene() {
      for (var element in this.cijeneSerija) {
        if (this.odabranaSerija === this.cijeneSerija[element].serija)
          this.preporucenaCijena = this.cijeneSerija[element].cijena;
      }
      var cijenaInstrumenta = this.preporucenaCijena;

      switch (this.vlasnik) {
        case 1:
          this.preporucenaCijena = cijenaInstrumenta;
          break;
        case 2:
          this.preporucenaCijena -= 0.15 * cijenaInstrumenta;
          break;
        case 3:
          this.preporucenaCijena -= 0.22 * cijenaInstrumenta;
          break;
      }
      switch (this.stanje) {
        case "Novo":
          this.preporucenaCijena += cijenaInstrumenta * 0.1;
          break;
        case "Rabljeno":
          this.preporucenaCijena -= cijenaInstrumenta * 0.3;
          break;
        case "Neispravno":
          this.preporucenaCijena -= cijenaInstrumenta * 0.7;
          break;
      }

      if (this.preporucenaCijena <= 0) this.preporucenaCijena = "0";
      return this.preporucenaCijena + " kn";
    },
    proizvodacSet() {
      this.prikazaniProizvodaci = [];
      this.prikazaniModeli = [];
      this.prikazaneSerije = [];
      this.cijeneSerija = [];

      if (this.odabranaVrsta === "Gitara") {
        for (const data in this.jsonData) {
          for (const data1 in this.jsonData[data]) {
            this.prikazaniProizvodaci.push(`${data1}`);
          }
        }
      } else this.prikazaniProizvodaci = [];
      this.odabraniProizvodac = this.prikazaniProizvodaci[0];
      return this.prikazaniProizvodaci;
    },
    modelSet() {
      this.prikazaniModeli = [];
      this.prikazaneSerije = [];
      this.cijeneSerija = [];
      for (const data in this.jsonData) {
        for (const data1 in this.jsonData[data]) {
          if (data1 === this.odabraniProizvodac)
            for (const data2 in this.jsonData[data][data1]) {
              this.prikazaniModeli.push(`${data2}`);
            }
        }
      }
      this.odabraniModel = this.prikazaniModeli[0];
      return this.prikazaniModeli;
    },
    serijaSet() {
      this.prikazaneSerije = [];
      for (const data in this.jsonData) {
        for (const data1 in this.jsonData[data]) {
          for (const data2 in this.jsonData[data][data1]) {
            if (data2 === this.odabraniModel)
              for (const data3 in this.jsonData[data][data1][data2]) {
                var element = {};
                element.cijena = this.jsonData[data][data1][data2][data3];
                element.serija = `${data3}`;
                this.prikazaneSerije.push(element.serija);
                this.cijeneSerija.push(element);
              }
          }
        }
      }
      this.odabranaSerija = this.prikazaneSerije[0];
      return this.prikazaneSerije;
    },

    allFilled() {
      return this.odabranaVrsta &&
        this.odabraniProizvodac &&
        this.odabraniModel &&
        this.odabranaSerija &&
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
