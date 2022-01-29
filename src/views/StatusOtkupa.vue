<template>
  <div>
    <!--==============LIST ============================-->
    <transition-group
      class="grid grid-rows-auto gap-5 pl-2 pr-2 pb-16 pt-16 overflow-x-hidden"
      name="fade"
      tag="div"
    >
      <CCard v-for="(z, i) of zahtjevi" :key="`key-${i}`" :zahtjev="z" />
    </transition-group>
    <!--==============LIST END=========================-->
  </div>
</template>

<script>
import store from "@/store";
//Komponente
import CButton from "@/components/CButton.vue";
import CCard from "@/components/CCard.vue";
//Firebase
import { collection, getDocs, query, orderBy } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: "StatusOtkupa",
  data() {
    return {
      state: this.readData("U razradi"),
      zahtjevi: [],
      store,
    };
  },
  components: {
    CButton,
    CCard,
  },
    
  mounted() {
    this.readData();
  },
  methods: {
    async readData(state) {
      if (this.state != state && state) {
        const q = query(collection(db, "zahtjevi"), orderBy("zahtjevPredan", "desc"));
        const querySnapshot = await getDocs(q);
        var highestTimeoutId = setTimeout(";");
        for (var i = 0; i < highestTimeoutId; i++) {
          clearTimeout(i);
        }
        let b = 0;
        let delay = 250; //ADJUST TIME DELAY BETWEEN CARDS
        let time = 0 - delay;
        this.state = state;
        this.zahtjevi = [];
        this.canLoad = false;
        querySnapshot.forEach((doc) => {
          if (doc.data().korisnik === store.currentUser) {
              setTimeout(() => {
                this.$set(this.zahtjevi, b, {
                  instrument: [
                    `${doc.data().instrument[0]}`,
                    `${doc.data().instrument[1]}`,
                    `${doc.data().instrument[2]}`,
                    `${doc.data().instrument[3]}`,
                    `${doc.data().instrument[4]}`,
                    `${doc.data().instrument[5]}`,
                    `${doc.data().instrument[6]}`,
                  ],
                  slike:[
                    `${doc.data().slike[0]}`,
                    `${doc.data().slike[1]}`,
                    `${doc.data().slike[2]}`,
                    `${doc.data().slike[3]}`,
                    `${doc.data().slike[4]}`,
                    `${doc.data().slike[5]}`,
                  ],
                  korisnik: `${doc.data().korisnik}`,
                  napomena: `${doc.data().napomena}`,
                  preporucenaCijena: `${doc.data().preporucenaCijena}`,
                  status: `${doc.data().status}`,
                  date: `${doc.data().zahtjevPredan}`,
                  novaPreporucenaCijena: `${doc.data().novaPreporucenaCijena}`,
                  sifra: `${doc.id}`,
                });
                b++;
              }, (time += delay));
          }
        });
      }
    },
    dummy() {},
  },
};
</script>