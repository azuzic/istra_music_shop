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
        <h2 v-if="stanjeCheck" class="CWarning">
          Molimo ispravno unesite podatke!
        </h2>
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
              <croppa
                :width="120"
                :height="120"
                v-model="imageReference1"
                placeholder="Učitaj sliku..."
              ></croppa>
            </div>
            <!--
            <div class="otkup-div-image flex-none">
              <p class="otkup-img-text">Gornja prednja</p>
              <div>
                <img
                  class="CCard-img img-top-left mx-auto"
                  src="https://picsum.photos/500/500/"
                />
              </div>
            </div>
            -->
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
        <div class="bg-bottom"></div>
        <div class="menu-item5 text-left mx-auto">
          <img v-if="store.darkToggle" class="money" src="@/assets/money_icon.svg" />
          <img v-if="!store.darkToggle" class="money" src="@/assets/money_icon_dark.svg" />
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
import { storage, ref, uploadBytes, getDownloadURL } from "@/firebase";

export default {
  name: "OtkupOpreme",
  data() {
    return {
      jsonData: data,
      vrste: ["Gitara"],
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
      store,

      imageReference1: null,
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
        this.imageReference1.generateBlob((blobData) => {
          let imageName =
            "zahtjevi/" + store.currentUser + "/" + Date.now() + ".png";
          const storageRef = ref(storage, imageName);
          // 'file' comes from the Blob or File API
          uploadBytes(storageRef, blobData)
            .then((result) => {
              console.log("Uploaded images!");
              getDownloadURL(ref(storage, imageName)).then((url) => {
                console.log(url);
              });
            })
            .catch((e) => {
              console.error(e);
            });
        });
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
          preporucenaCijena: this.preporucenaCijena,
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
          this.preporucenaCijena -= 0.1 * this.preporucenaCijena;
          break;
        case 3:
          this.preporucenaCijena -= 0.17 * this.preporucenaCijena;
          break;
      }
      switch (this.stanje) {
        case "Novo":
          this.preporucenaCijena += this.preporucenaCijena * 0.1;
          break;
        case "Rabljeno":
          this.preporucenaCijena -= this.preporucenaCijena * 0.32;
          break;
        case "Neispravno":
          this.preporucenaCijena -= this.preporucenaCijena * 0.6;
          break;
      }
      var year = parseInt(this.godinaProizvodnje);
      if (year >= 1960 && year < 1970)
        this.preporucenaCijena += this.preporucenaCijena * 1.5;
      else if (year >= 1970 && year < 1980)
        this.preporucenaCijena += this.preporucenaCijena * 0.5;
      else if (year >= 1980 && year < 2000)
        this.preporucenaCijena += this.preporucenaCijena * 0.1;
      else if (year >= 2000 && year < 2010)
        this.preporucenaCijena += this.preporucenaCijena * 0.05;
      this.preporucenaCijena;

      if (this.yearCheck || !this.godinaProizvodnje) return 0;
      else if (this.preporucenaCijena <= 0) return "ne vrijedi";
      else return Math.round(this.preporucenaCijena) + " kn";
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
    stanjeCheck() {
      return this.vlasnik != 1 && this.stanje == "Novo" ? 1 : 0;
    },
    allFilled() {
      return this.odabranaVrsta &&
        this.odabraniProizvodac &&
        this.odabraniModel &&
        this.odabranaSerija &&
        this.godinaProizvodnje &&
        this.vlasnik &&
        this.stanje &&
        this.preporucenaCijena > 0 &&
        this.preporucenaCijena !== "ne vrijedi" &&
        !this.stanjeCheck
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
  border-color: var(--stretchLimo);
  height: 120px;
  border-width: 2px;
}
.otkup-img-text {
  text-align: center;
  font-size: 16px;
  color: var(--balticSea);
}
.otkup-textarea:focus {
  outline: none !important;
  border-color: var(--fluorescentRed);
}
.bg-bottom {
  position: absolute;
  width: 100%;
  background-color: var(--balticSea4);
  height: 50px;
}
.menu-item5 p{
  color: var(--balticSea7) !important;
}
</style>
