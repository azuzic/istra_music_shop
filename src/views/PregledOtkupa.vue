<template>
  <div>
    <!--==============MENU====================================-->
    <div class="menu grid grid-cols-3 mb-4">
      <div class="menu-item-active menu-highlight">
        <router-link to="djelatnik">
          <img class="arrow ml-2" src="@/assets/arrow_icon.svg" />
        </router-link>
        <p>
          <router-link to="djelatnik"> Povratak </router-link>
        </p>
      </div>
      <div class="menu-item" :class="stanje=='U razradi' ? 'menu-item-yellow' :
                                     stanje=='Odbijeno' ? 'menu-item-red' : 'menu-item-green'">
        <p>{{stanje}}</p>  
      </div>
      <div class="menu-item">
        <p>{{ receivedFromNow }}</p>
      </div>
    </div>
    <!--==============MENU END================================-->
    <!--==============LIST ===================================-->
    <div class="grid grid-rows-auto gap-2 pl-2 pr-2 pb-16 pt-16">
      <div>
        <p><u class="text-20px">Vrsta instrumenta:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[0]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Proizvođač:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[1]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Model:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[2]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Podmodel:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[3]}}</b></p>
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div>
        <p><u class="text-20px">Godina proizvodnje:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[4]}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Vlasnik:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[5]}}.</b></p>
      </div>
      <div>
        <p><u class="text-20px">Stanje:</u></p>
        <p class="mt-1 text-18px"><b>{{store.zahtjev.instrument[6]}}</b></p>
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      
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
      <div>
        <p><u class="text-20px">Napomena:</u></p>
        <textarea disabled class="resize-none otkup-textarea mt-2" v-model="opis">
            </textarea
        >
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div>
        <p class="text-center mb-2">
          <b class="text-24px">PODACI O KLIJENTU</b>
        </p>
      </div>
      <div>
        <p><u class="text-20px">Ime i prezime:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].imePrezime}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Email:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].email}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">OIB:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].oib}}</b></p>
      </div>
      <div>
        <p><u class="text-20px">Broj telefona:</u></p>
        <p class="mt-1 text-18px"><b>{{mob}}</b></p>
      </div>
      <div>
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div>
        <p class="text-left text-18px m-0 p-0 mt-6">Nova predložena cijena:</p>
        <input
          type="text"
          name="oib"
          id="oib"
          v-model="novaCijena"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
        />
        <hr />
      </div>
      <!--==============SPREMI==============================-->
      <div
        class="place-self-center mt-4"
        :class="novaCijena ? 'active' : 'inactive'"
      >
      <div @click="updatePrice()">
        <CButtonSingle
          btn="PROMJENI"
          :btnClickHandler="0 ? dummy : dummy"
        />
      </div>
        
      </div>
      <!--==============/SPREMI=============================-->
      <!--===================ODBIJ OTKUP====================-->
      <div class="place-self-center mt-8">
        <div @click="updateStatus('Odbijeno')">
          <CButtonDecline btn="ODBIJ OTKUP" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/ODBIJ OTKUP======================-->
      <!--=================PRIHVATI OTKUP===================-->
      <div class="place-self-center mt-4">
        <div @click="updateStatus('Prihvaćeno')">
          <CButtonAccept btn="PRIHVATI OTKUP" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/PRIHVATI OTKUP===================-->
    </div>
    <!--==============LIST END================================-->
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
          <p class="pl-4 text-24px" >
            Predložena cijena:
            <b class="price">{{predlozenaCijena}}</b>
          </p>
        </div>
      </div>
    <!--==============FOOTER END==============================-->
  </div>
</template>

<script>
import CTitle from "@/components/CTitle.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CCard from "@/components/CCard.vue";
import store from "@/store";
import { db } from "@/firebase";
import { doc, collection, getDocs, updateDoc, where, query} from "@/firebase";

export default {
  name: "Djelatnik",
  components: {
    CTitle,
    CButtonSingle,
    CButtonAccept,
    CButtonDecline,
    CCard,
  },
   beforeMount(){
    this.readData()
  },
  data() {
    return {
      novaCijena: "",
      predlozenaCijena: "",
      mob: "",
      korisnik: [{
            imePrezime: "",
            email: "",
            mob: "",
            oib: ""
      }],
      opis: "",
      stanje: "",
      store,
    };
  },
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (`${doc.data().email}` == store.zahtjev.korisnik) {
          this.$set(this.korisnik,0, {
            imePrezime: (`${doc.data().imePrezime}`),
            email: (`${doc.data().email}`),
            mob: (`${doc.data().mob}`),
            oib: (`${doc.data().oib}`)
          });
          this.opis = store.zahtjev.napomena;
          this.stanje = store.zahtjev.status;
          this.predlozenaCijena = store.zahtjev.preporucenaCijena;
          let m = this.korisnik[0].mob;
          this.mob = m.slice(0,3) + "-" + m.slice(3,6) + "-" + m.slice(6);
        }
      });
    },
    async updatePrice() {
        const g = doc(db, "zahtjevi", store.zahtjev.id);
        await updateDoc(g, {
          preporucenaCijena: this.novaCijena
        });
        this.predlozenaCijena = this.novaCijena;
    },
    async updateStatus(status) {
        const g = doc(db, "zahtjevi", store.zahtjev.id);
        await updateDoc(g, {
          status: status
        });
        this.stanje = status;
    },
    async updateStatus(status) {
        const g = doc(db, "zahtjevi", store.zahtjev.id);
        await updateDoc(g, {
          status: status
        });
        this.stanje = status
    },
    dummy() {},
  },
  computed: {
    receivedFromNow() {
      return new Date(parseInt(store.zahtjev.date)).toLocaleDateString();
    },
  },
};
</script>

<style>
.menu-item-red {
  background-color: var(--ForbiddenFruit__RedPotion);
}
.menu-item-yellow {
  background-color: var(--LimonFresco__Anime);
}
.menu-item-green {
  background-color: var(--SnowPea__RichGreen);
}
.menu-item-red p {
  color: var(--GraniteBrown__Lead);
}
.menu-item-yellow p {
  color: var(--GraniteBrown__Lead);
}
.menu-item-green p {
  color: var(--GraniteBrown__Lead);
}
.menu-item-selected p {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
}
.arrow {
  width: 26px;
  opacity: 0.75;
  transform: scaleX(-1);
}
.menu-highlight {
  background-color: var(--FluorescentRed__FrenchWine);
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
.otkup-textarea:focus {
  outline: none !important;
  border-color: var(--FluorescentRed__FrenchWine);
}
</style>
