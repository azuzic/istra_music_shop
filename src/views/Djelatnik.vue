<template>
  <div>
    <!--==============LIST ============================-->
    <div class="grid grid-rows-auto gap-5 pl-2 pr-2 pb-16 pt-16">
      <CCard
        value="2"
        title="Gibson Les Paul"
        subtitle="Traditional"
        date="20.05.2022."
        price="2500"
        img="https://picsum.photos/500/500/"
      />
      <CCard
        value="1"
        title="Ibanez RG"
        subtitle="RG Premium"
        date="12.04.2022."
        price="800"
        img="https://picsum.photos/400/400/"
      />
      <CCard
        value="1"
        title="Fender Telecaster"
        subtitle="American Standard"
        date="29.08.2021."
        price="1200"
        img="https://picsum.photos/600/600/"
      />
      <CCard
        value="3"
        title="Fender Sratocaster"
        subtitle="Player Plus Strat"
        date="22.05.2022."
        price="4500"
        img="https://picsum.photos/300/300/"
      />
      <CCard
        value="4"
        title="Epiphone SG"
        subtitle="Special"
        date="01.03.2022."
        price="5000"
        img="https://picsum.photos/700/700/"
      />
      <CCard />
      <CCard />
      <CCard />
      <CCard />
      <CCard />
    </div>
    <!--==============LIST END=========================-->
    <!--==============FOOTER===========================-->
    <div class="menu-bottom grid grid-cols-4 mt-4">
      <div class="menu-item">
        <p>U razradi</p>
      </div>
      <div class="menu-item">
        <p>Prihvaćeno</p>
      </div>
      <div class="menu-item">
        <p>Riješeno</p>
      </div>
      <div class="menu-item">
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

export default {
  name: "Djelatnik",
  components: {
    CTitle,
    CButton,
    CCard,
  },
  methods: {
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
