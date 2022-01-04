<template>
  <div class="p-0 m-0">
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
        <!--===================RESETIRAJ LOZINKU====================-->
        <div class="place-self-center mt-4">
          <router-link to="/password-reset">
            <CButtonDecline btn="RESETIRAJ LOZINKU" :btnClickHandler="dummy" />
          </router-link>
        </div>
        <!--================/RESETIRAJ LOZINKU LOZINKU===================-->
        <!--==============SPREMI================-->
        <div class="place-self-center mt-16">
          <CButtonAccept btn="SPREMI" :btnClickHandler="dummy" />
        </div>
        <!--==============/SPREMI============-->
      </div>
    </div>
    <!--==============LOGUT - TEMPORARY================-->
    <button class="logout" @click="signout">
      <p class="pr-2 pb-1">Odjava</p>
      <img class="exit-icon" src="@/assets/exit_icon.svg" />
    </button>
    <!--==============/LOGUT - TEMPORARY================-->
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import { getAuth, signOut } from "@/firebase";
import { collection, getDocs } from "@/firebase";
import { db } from "@/firebase";
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
    CButtonAccept,
    CButtonDecline,
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

<style>
.logout {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
  background: #ff5252;
}

.logout p {
  font-family: Alike;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #000000d0;
  font-weight: bold;
}

.exit-icon {
  width: 32px;
  height: 32px;
  opacity: 0.75;
}
</style>
