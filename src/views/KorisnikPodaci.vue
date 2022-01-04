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
        <!--==============LOGUT - TEMPORARY================-->
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center place-self-center"
          @click="signout"
        >
          <span class="font-bold">Odjava </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
        <!--==============/LOGUT - TEMPORARY================-->
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import { getAuth, signOut } from "@/firebase";
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
    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Signed out!");
        })
        .catch((error) => {
          console.error("Signed out error!");
        });
    },
  },
};
</script>
