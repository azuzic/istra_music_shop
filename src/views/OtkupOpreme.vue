<template>
  <div class="p-0 m-0 pt-16">
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4 mt-2 mb-16">
        <!--===================VRSTA INSTRUMENTA===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Vrsta instrumenta</p>
          <CSelect
            :options="vrste"
            :default="otkupSave.odabranaVrsta"
            v-model="odabranaVrsta"
          />
        </div>
        <!--===================/VRSTA INSTRUMENTA===================-->
        <!--===================PROIZVOĐAČ===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Proizvođač</p>
          <CSelect
            :options="proizvodacSet"
            :default="otkupSave.odabraniProizvodac"
            v-model="odabraniProizvodac"
          />
        </div>
        <!--===================/PROIZVOĐAČ===================-->
        <!--===================MODEL===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Model</p>
          <CSelect
            :options="modelSet"
            :default="otkupSave.odabraniModel"
            v-model="odabraniModel"
          />
        </div>
        <!--===================/MODEL===================-->
        <!--===================SERIJA===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Serija</p>
          <CSelect
            :options="serijaSet"
            :default="otkupSave.odabranaSerija"
            v-model="odabranaSerija"
          />
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
          <CSelect
            :options="['1', '2', '3']"
            :default="otkupSave.vlasnik"
            v-model="vlasnik"
          />
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
            :default="otkupSave.stanje"
            v-model="stanje"
          />
        </div>
        <!--===================/STANJE===================-->
        <!--===================SLIKE===================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Slike</p>
          <div class="grid grid-rows-2 grid-cols-3 gap-3 mt-2">

            <div>
              <p class="otkup-img-text">Gornja prednja</p>
              <div class="square img_1-1 img-top-left">
                <router-link to="/ucitaj-sliku">
                  <button class="square-img2" @click="pictures.selected = 1">Učitaj sliku</button> 
                  <img class="square-img" :src="pictures.guitarPictures[0].url"/>
                </router-link>
              </div>
            </div> 

            <div>
              <p class="otkup-img-text">Gornja stražnja</p>
              <div class="square img_1-1 img-top">
                <router-link to="/ucitaj-sliku">
                  <button class="square-img2" @click="pictures.selected = 2">Učitaj sliku</button> 
                  <img class="square-img" :src="pictures.guitarPictures[1].url"/>
                </router-link>
              </div>
            </div> 

            <div>
              <p class="otkup-img-text">Bočna desna</p>
              <div class="square img_1-1 img-top-right">
                <router-link to="/ucitaj-sliku">
                  <button class="square-img2" @click="pictures.selected = 3">Učitaj sliku</button> 
                  <img class="square-img" :src="pictures.guitarPictures[2].url"/>
                </router-link>
              </div>
            </div> 

            <div>
              <p class="otkup-img-text">Bočna lijeva</p>
              <div class="square img_1-1 img-bottom-left">
                <router-link to="/ucitaj-sliku">
                  <button class="square-img2" @click="pictures.selected = 4">Učitaj sliku</button> 
                  <img class="square-img" :src="pictures.guitarPictures[3].url"/>
                </router-link>
              </div>
            </div> 

            <div>
              <p class="otkup-img-text">Vrat gitare</p>
              <div class="square img_1-1 img-bottom">
                <router-link to="/ucitaj-sliku">
                  <button class="square-img2" @click="pictures.selected = 5">Učitaj sliku</button> 
                  <img class="square-img" :src="pictures.guitarPictures[4].url"/>
                </router-link>
              </div>
            </div> 

            <div>
              <p class="otkup-img-text">Glava gitare</p>
              <div class="square img_1-1 img-bottom-right">
                <router-link to="/ucitaj-sliku">
                  <button class="square-img2" @click="pictures.selected = 6">Učitaj sliku</button> 
                  <img class="square-img" :src="pictures.guitarPictures[5].url"/>
                </router-link>
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
          <img
            v-if="store.darkToggle"
            class="money"
            src="@/assets/money_icon.svg"
          />
          <img
            v-if="!store.darkToggle"
            class="money"
            src="@/assets/money_icon_dark.svg"
          />
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
import CWarning from "@/components/CWarning.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CSelect from "@/components/CSelect.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import store from "@/store";
import { collection, addDoc } from "@/firebase";
import { db } from "@/firebase";
import pictures from "@/pictures";
import otkupSave from "@/otkupSave";

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
      pictures,
      otkupSave,
    };
  },
  components: {
    CWarning,
    CButtonAccept,
    CButtonDecline,
    CSelect,
    CButtonSingle,
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "UcitajSliku") {
      otkupSave.vrstaInstrumenta = this.vrstaInstrumenta;
      otkupSave.odabraniProizvodac = this.odabraniProizvodac;
      otkupSave.odabraniModel = this.odabraniModel;
      otkupSave.odabranaSerija = this.odabranaSerija;

      otkupSave.godinaProizvodnje = this.godinaProizvodnje;
      otkupSave.vlasnik = this.vlasnik;
      otkupSave.stanje = this.stanje;
      otkupSave.napomena = this.napomena;
      next();
      return;
    }
    this.$dialog
      .confirm(
        "Jeste li sigurni da želite napustiti stranicu? Promjene neće biti spremljene."
      )
      .then(function () {
        otkupSave.resetData();
        next();
      })
      .catch(function () {
        next(false);
      });
  },

  mounted() {
    this.vrstaInstrumenta = otkupSave.vrstaInstrumenta;
    this.odabraniProizvodac = otkupSave.odabraniProizvodac;
    this.odabraniModel = otkupSave.odabraniModel;
    this.odabranaSerija = otkupSave.odabranaSerija;
    this.godinaProizvodnje = otkupSave.godinaProizvodnje;
    this.vlasnik = otkupSave.vlasnik;
    this.stanje = otkupSave.stanje;
    this.napomena = otkupSave.napomena;
    this.preporucenaCijena = this.izracunCijene;
  },

  methods: {
    loadSelectedData(data) {
      return data;
    },
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
          slike:[
            pictures.guitarPictures[0].url,
            pictures.guitarPictures[1].url,
            pictures.guitarPictures[2].url,
            pictures.guitarPictures[3].url,
            pictures.guitarPictures[4].url,
            pictures.guitarPictures[5].url,
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

      switch (parseInt(this.vlasnik)) {
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
    picturesCheck() {
      function checkUpload(uploaded) {
        return (uploaded = true);
      }
      return pictures.guitarPictures.every(checkUpload);
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
        !this.stanjeCheck &&
        this.picturesCheck
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
  border-color: var(--StretchLimo__ChromaphobicBlack);
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
  border-color: var(--FluorescentRed__FrenchWine);
}
.bg-bottom {
  position: absolute;
  width: 100%;
  background-color: var(--Transparent__BleachedSilk);
  height: 50px;
}
.menu-item5 p {
  color: var(--Snow__Lead) !important;
}
.CCard-img2 {
  width: auto;
  height: 100%;
  background-color: rgb(80, 59, 59);
}
.img-upload {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.square {
  background-color: var(--Snow__DarkToneInk);
    overflow: hidden;
    float:left;
    position: relative;
    display: flex;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    padding-bottom: 100%;
    border-color: var(--StretchLimo__ChromaphobicBlack);
    border-width: 2px;
}

.square-img {
    position: absolute;
    width: 100%;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
.square-img2 {
    position: absolute;
    width: 100%;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    color: var(--BalticSea__Squant);
    font-size: 12px;
    letter-spacing: 0.25px;
}
</style>
