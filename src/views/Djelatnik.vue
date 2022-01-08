<template>
  <div>
    <!--==============LIST ============================-->
    <div class="grid grid-rows-auto gap-5 pl-2 pr-2 pb-16 pt-16">
      <CCard  
        v-for="(z, i) of zahtjevi"
            :key="i"
            :zahtjev = z
      />
    </div>
    <!--==============LIST END=========================-->
    <!--==============FOOTER===========================-->
    <div class="menu-bottom grid grid-cols-4 mt-4">
      <div 
      class="menu-item" 
      :class="state == 'U razradi' ? 'menu-item-selected menu-item-yellow' : ''"
      @click="state = 'U razradi', readData()">
        <p>U razradi</p>
      </div>
      <div 
      class="menu-item" 
      :class="state == 'Prihvaćeno' ? 'menu-item-selected menu-item-green' : ''"
      @click="state = 'Prihvaćeno', readData()">
        <p>Prihvaćeno</p>
      </div>
      <div 
      class="menu-item" 
      :class="state == 'Riješeno' ? 'menu-item-selected menu-item-green' : ''"
      @click="state = 'Riješeno', readData()">
        <p>Riješeno</p>
      </div>
      <div 
      class="menu-item" 
      :class="state == 'Odbijeno' ? 'menu-item-selected menu-item-red' : ''"
      @click="state = 'Odbijeno', readData()">
        <p>Odbijeno</p>
      </div>
    </div>
    <!--==============FOOTER END========================-->
  </div>
</template>

<script>
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";
import CCard from "@/components/CCard.vue";
import { collection, getDocs } from "@/firebase";
import { db } from "@/firebase";

export default {
  name: "Djelatnik",
  data() {
    return {
      state: "U razradi",
      zahtjevi: [],
    };
  },
  components: {
    CTitle,
    CButton,
    CCard,
  },
  mounted() {
    this.readData();
  },
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "zahtjevi"));
      let b = 0;
      this.zahtjevi = [];
      querySnapshot.forEach((doc) => {
        if (`${doc.data().status}` == this.state)
         this.$set(this.zahtjevi, b, {
            instrument: 
            [
              (`${doc.data().instrument[0]}`),
              (`${doc.data().instrument[1]}`),
              (`${doc.data().instrument[2]}`),
              (`${doc.data().instrument[3]}`),
              (`${doc.data().instrument[4]}`),
              (`${doc.data().instrument[5]}`),
              (`${doc.data().instrument[6]}`),
            ],
            korisnik: (`${doc.data().korisnik}`),
            napomena: (`${doc.data().napomena}`),
            preporucenaCijena: (`${doc.data().preporucenaCijena}`),
            status: (`${doc.data().status}`),
            img: "https://picsum.photos/500/500/",
         });
         b++;
        for (let k=0; k<b; k++) {
          console.log(this.zahtjevi[k]);
        };
      });
    },
    dummy() {},
  },
};
</script>

<style>
.menu-item-red {
  background-color: #ff7f7f;
}
.menu-item-yellow {
  background-color: #fff383;
}
.menu-item-green {
  background-color: #6dd277;
}
.menu-item-selected p {
  width: 100%;
  font-weight: bold;
  color: #3f2c28;
}
</style>
