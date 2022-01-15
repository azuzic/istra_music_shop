<template>
  <div>
    <!--==============MENU====================================-->
    <div class="menu grid grid-cols-3 mb-4">
      <div class="menu-item-active menu-highlight">
        <router-link to="djelatnik">
          <img class="arrow ml-2" src="@/assets/arrow_icon.svg" />
        </router-link>
        <p>
          <router-link :to="store.currentUser == 'djelatnik@gmail.com' ? 'djelatnik' : 'status-otkupa'"> Povratak </router-link>
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
          <div>
            <div class="grid grid-rows-2 grid-cols-3 gap-3 mt-2">

              <div>
                <p class="otkup-img-text">Gornja prednja</p>
                <div class="square img_1-1 img-top-left">
                    <img class="square-img" :src="store.zahtjev.slike[0]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Gornja stražnja</p>
                <div class="square img_1-1 img-top">
                    <img class="square-img" :src="store.zahtjev.slike[1]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Bočna desna</p>
                <div class="square img_1-1 img-top-right">
                    <img class="square-img" :src="store.zahtjev.slike[2]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Bočna lijeva</p>
                <div class="square img_1-1 img-bottom-left">
                    <img class="square-img" :src="store.zahtjev.slike[3]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Vrat gitare</p>
                <div class="square img_1-1 img-bottom">
                    <img class="square-img" :src="store.zahtjev.slike[4]"/>
                </div>
              </div> 

              <div>
                <p class="otkup-img-text">Glava gitare</p>
                <div class="square img_1-1 img-bottom-right">
                    <img class="square-img" :src="store.zahtjev.slike[5]"/>
                </div>
              </div> 
              
            </div>
          </div>
        </div>
      <div>
        <p><u class="text-20px">Napomena:</u></p>
        <textarea disabled class="resize-none otkup-textarea mt-2" v-model="opis">
        </textarea >
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <hr class="dotted mt-2 mb-2" />
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p class="text-center mb-2">
          <b class="text-24px">PODACI O KLIJENTU</b>
        </p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">Ime i prezime:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].imePrezime}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">Email:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].email}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">OIB:</u></p>
        <p class="mt-1 text-18px"><b>{{korisnik[0].oib}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <p><u class="text-20px">Broj telefona:</u></p>
        <p class="mt-1 text-18px"><b>{{mob}}</b></p>
      </div>
      <div v-if="store.currentUser == 'djelatnik@gmail.com'">
        <hr class="dotted mt-2 mb-2" />
      </div>
      <!--==============NOVA CIJENA==============================-->
      <div v-if="store.currentUser == 'djelatnik@gmail.com'" :class="stanje=='U razradi' ? '' : 'tranparent'">
        <p class="text-left text-18px m-0 p-0 mt-6">Nova predložena cijena:</p>
        <input
          :disabled="stanje!='U razradi'"
          type="text"
          name="oib"
          id="oib"
          v-model="novaCijena"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
        />
        <hr />
      </div>
      <!--==============/NOVA CIJENA==============================-->
      <!--==============SPREMI==============================-->
      <div
        v-if="store.currentUser == 'djelatnik@gmail.com'"
        class="place-self-center mt-4"
        :class="novaCijena && stanje=='U razradi' ? 'active' : 'inactive'"
      >
      <div @click="novaCijena && stanje=='U razradi' ? updatePrice() : dummy()">
        <CButtonSingle
          btn="PROMJENI"
          :btnClickHandler="0 ? dummy : dummy"
        />
      </div>
        
      </div>
      <!--==============/SPREMI=============================-->
      <!--===================ODBIJ OTKUP====================-->
      <div  v-if="store.currentUser == 'djelatnik@gmail.com'"
            class="place-self-center mt-8" 
            :class="stanje=='U razradi' ? 'active' : 'inactive'">
        <div @click="stanje=='U razradi' ? updateStatus('Odbijeno') : dummy()">
          <CButtonDecline btn="ODBIJ OTKUP" :btnClickHandler="dummy" />
        </div>
      </div>
      <!--================/ODBIJ OTKUP======================-->
      <!--=================PRIHVATI OTKUP===================-->
      <div  v-if="store.currentUser == 'djelatnik@gmail.com'"
            class="place-self-center mt-4" 
            :class="stanje=='U razradi' ? 'active' : 'inactive'">
        <div @click="stanje=='U razradi' ? updateStatus('Prihvaćeno') : dummy()">
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
import { doc, collection, getDocs, updateDoc} from "@/firebase";

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
    updatePrice() {
      this.$dialog
        .confirm(
          "Jeste li sigurni da želite promijeniti cijenu? Nakon promjene nije više moguće mijenjati cijenu."
        )
        .then(() =>{
          const g = doc(db, "zahtjevi", store.zahtjev.id);
          updateDoc(g, {
            preporucenaCijena: this.novaCijena
          });
          this.predlozenaCijena = this.novaCijena;
        })
        .catch(() =>{
        });
    },
    updateStatus(status) {
      let msg = "";
      if (status=="Odbijeno")
        msg = "Jeste li sigurni da želite odbiti otkup. Kada odbijete otkup nije ga više moguće prihvatiti."
      else 
        msg = "Jeste li sigurni da želite prihvatiti otkup. Kada prihvatite otkup nije ga više moguće odbiti."
      this.$dialog
      .confirm(
        msg
      )
      .then(() => {
        const g = doc(db, "zahtjevi", store.zahtjev.id);
        updateDoc(g, {
          status: status
        });
        this.stanje = status;
      })
      .catch(() => {
      });
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

.square {
  background-color: var(--DustySky__Grey);
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
    box-shadow: 0px 0px 4px var(--Transparent25__Transparent75);
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
