<template>
  <div>
    <!--==============MENU=============================-->
    <div class="menu grid top-0 grid-cols-2 mb-4">
      <div class="menu-item-active">
        <p>Pregled otkupa</p>
      </div>
      <div class="menu-item">
        <p>Račun</p>
      </div>
    </div>
    <!--==============MENU END=========================-->
    <!--==============FOOTER===========================-->
    <div class="menu-bottom grid bottom-0 grid-cols-4 mt-4">  
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

export default {
  name: "Djelatnik",
  components: {
    CTitle,
    CButton,
  },
  methods: {
    dummy() {},
  },
};
</script>

<style>
.menu-item-red {
  background-color: #FF7F7F;
}
.menu-item-yellow {
  background-color: #FFF383;
}
.menu-item-green {
  background-color: #6DD277;
}
.menu-item-selected p {
  width: 100%;
  font-weight: bold;
  color: #3F2C28;
}
</style>