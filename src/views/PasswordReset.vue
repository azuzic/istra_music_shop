<template>
  <div class="p-0 m-0">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
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
          msg2="Ukoliko postoji registrirani korisnički račun, dobit ćete poveznicu za resetiranje lozinke."
          v-if="sent"
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
        <!--===================POTVRDI BUTTON END==========-->
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CSuccess from "@/components/CSuccess.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import router from "@/router";
import { getAuth, sendPasswordResetEmail } from "@/firebase";

let wait = function (seconds) {
  return new Promise((resolveFn) => {
    setTimeout(resolveFn, seconds * 1000);
  });
};

export default {
  name: "PasswordReset",
  data() {
    return {
      email: "",
      sent: false,
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
  methods: {
    dummy() {},

    resetPassword() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          console.log("Uspjesno poslano!");
          this.sent = true;
          wait(3).then(() => {
            router.replace({ name: "Prijava" });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>
<style>
.disabled-click {
  pointer-events: none;
}
</style>
