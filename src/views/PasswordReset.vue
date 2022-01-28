<template>
  <div class="p-0 m-0">
    <div>
      <router-link v-if="store.theme=='Svijetla'" to="/"><img alt="Test logo" src="../assets/logo.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Plava'" to="/"><img alt="Test logo" src="../assets/logo_dark_blue.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Crvena'" to="/"><img alt="Test logo" src="../assets/logo_dark_red.svg" /></router-link>
    </div>
    <div class="grid auto-rows-auto gap-4">
      <br />
      <CTitle class="place-self-center" msg1="Resetiranje lozinke" />
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================EMAIL=======================-->
        <div class="form-group">
          <p class="text-left text-18px m-0 p-0">Unesite vašu e-mail adresu</p>
          <input
            v-model="email"
            type="email"
            class="border rounded"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <hr />
        </div>
        <!--===================EMAIL END===================-->
        <CSuccess
          msg1="Poslano!"
          msg2="Na vašu email adresu dobit ćete poveznicu za resetiranje lozinke."
          v-if="sent"
        />
        <CWarning
          v-if="greska"
          msg1="Upozorenje!"
          msg2="Korisnički račun s unesenom adresom e-pošte ne postoji."
        /> 
        <!--===================POTVRDI BUTTON==============-->
        <div
          class="place-self-center"
          :class="sendEmailCheck ? 'active' : 'inactive'"
        >
          <CButtonSingle
            btn="POŠALJI"
            :btnClickHandler="sendEmailCheck ? resetPassword : dummy"
          />
        </div>
        <router-link to="/prijava">
          <img class="arrow" src="@/assets/arrow_icon.png" />
        </router-link>
        <!--===================POTVRDI BUTTON END==========-->
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import store from "@/store";
//Komponente
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CSuccess from "@/components/CSuccess.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
//Firebase
import { getAuth, sendPasswordResetEmail } from "@/firebase";
import { signOut } from "@/firebase";

let wait = function (seconds) {
  return new Promise((resolveFn) => {
    setTimeout(resolveFn, seconds * 1000);
  });
};

const auth = getAuth();

export default {
  name: "PasswordReset",
  data() {
    return {
      email: "",
      sent: false,
      greska: false,
      store,
    };
  },
  components: {
    CTitle,
    CWarning,
    CSuccess,
    CButtonSingle,
  },
  computed: {
    sendEmailCheck() {
      return this.email.includes("@") && this.email.includes(".") ? 1 : 0;
    },
  },
  mounted() {
    if (store.currentUser) this.signout();
  },
  methods: {
    dummy() {},
    async resetPassword() {
      try {
        await sendPasswordResetEmail(auth, this.email)
          console.log("Uspjesno poslan email za resetiranje lozinke!");
          this.sent = true;
          await wait(4);
            router.replace({ name: "Prijava" });
      }
      catch(e) {
        console.error("Greška " + e);
        if(e == "FirebaseError: Firebase: Error (auth/user-not-found).")
          this.greska = true;
        await wait(3)
          this.greska = false;
      }
    },
    async signout() {
      await signOut(auth);
      console.log("Signed out!");
    },
  },
};
</script>
<style>
.arrow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 8px;
  width: 42px;
  transform: scaleX(-1);
}
</style>
