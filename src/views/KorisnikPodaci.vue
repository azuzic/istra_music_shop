<template>
  <div class="p-0 m-0">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================IME I PREZIME=======================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Ime i prezime:</p>
          <input type="text" class="border rounded" id="nameInput" />
          <hr />
        </div>
        <!--===================/IME I PREZIME===================-->
        <!--===================EMAIL====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Email:</p>
          <input type="email" class="border rounded" id="emailInput" />
          <hr />
        </div>
        <!--================/EMAIL===================-->
        <!--===================OIB====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">OIB:</p>
          <input type="text" class="border rounded" id="oibInput" />
          <hr />
        </div>
        <!--================/OIB===================-->
        <!--===================BROJ MOBITELA====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Broj mobitela:</p>
          <input type="text" class="border rounded" id="mobInput" />
          <hr />
        </div>
        <!--================/BROJ MOBITELA===================-->
        <!--===================NOVA LOZINKA====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Nova lozinka:</p>
          <input type="password" class="border rounded" id="passInput1" />
          <hr />
        </div>
        <!--================/NOVA LOZINKA===================-->
        <!--===================POTVRDI NOVU LOZINKU====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Potvrdi novu lozinku:</p>
          <input type="password" class="border rounded" id="passInput2" />
          <hr />
        </div>
        <!--================/POTVRDI NOVU LOZINKU===================-->

        <!--==============SPREMI================-->
        <div class="place-self-center">
          <CButtonSingle btn="SPREMI" :btnClickHandler="dummy" />
        </div>
        <!--==============/SPREMI============-->
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
export default {
  name: "KorisnikPodaci",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    CTitle,
    CWarning,
    CButtonSingle,
  },
  methods: {
    dummy() {},
  },
};
</script>
