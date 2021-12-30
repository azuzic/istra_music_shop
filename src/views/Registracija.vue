<template>
  <div class="">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <div>
        <h1 class="text-center text-22px">
          <CText msg="Kreirajte račun da možete započeti." />
        </h1>
      </div>
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <div>
          <CText class="text-left text-18px m-0 p-0" msg="Ime i prezime" />
          <input
            v-model="nameSurname"
            type="text"
            name="imeprezime"
            id="imeprezime"
          />
          <hr />
        </div>
        <div>
          <CText class="text-left text-18px" msg="Email" />
          <input type="email" name="email" id="email" v-model="email" />
          <hr />
        </div>
        <div>
          <CText class="text-left text-18px" msg="OIB" />
          <input type="text" name="oib" id="oib" v-model="oib" />
          <hr />
        </div>
        <div>
          <CText class="text-left text-18px" msg="Broj mobitela" />
          <input type="text" name="mob" id="mob" v-model="mob" />
          <hr />
        </div>
        <div>
          <CText class="text-left text-18px" msg="Lozinka" />
          <input type="password" name="pass1" id="pass1" v-model="password" />
          <hr />
        </div>
        <div>
          <CText class="text-left text-18px" msg="Potvrdi lozinku" />
          <input
            type="password"
            name="pass2"
            id="pass2"
            v-model="passwordRepeat"
          />
          <hr />
        </div>
        <div v-if="password != passwordRepeat">
          <CText
            class="text-left text-18px CWarning"
            msg="Lozinke se ne podudaraju!"
          />
        </div>

        <div class="place-self-center">
          <!--REPLACE BUTTON HERE-->
          <div>
            <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
              <button type="button" @click="signup" class="button-text">
                REGISTRIRAJ SE
              </button>
            </div>
            <div>
              <p class="link-text justify-center mt-2">
                Imate račun?
                <router-link class="pl-1 href-link" to="/prijava">
                  <u>Prijavite se.</u>
                </router-link>
              </p>
            </div>
          </div>
          <!--BUTTON END HERE-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CText from "@/components/CText.vue";
import CButton from "@/components/CButton.vue";

import { getAuth, createUserWithEmailAndPassword } from "@/firebase";
const auth = getAuth();

export default {
  name: "Registracija",
  data() {
    return {
      nameSurname: "",
      email: "",
      oib: "",
      mob: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      if (this.password !== this.passwordRepeat) {
        return;
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            console.log("Uspjesna registracija!");
          })
          .catch((error) => {
            console.log("Doslo je do greske!", error);
          });
      }
    },
  },
  name: "Home",
  components: {
    CTitle,
    CText,
    CButton,
  },
};
</script>
<style>
div hr {
  border: 2px solid #3d3d3f;
  border-radius: 16px;
}

input:focus + hr {
  border: 2px solid #ff5252;
  border-radius: 16px;
}

input:focus {
  outline: none;
  caret-color: #ff5252;
}

input {
  width: 100%;
  height: 24px;
  border: none;
}

.CWarning {
  color: #ff5252 !important;
}

.button-bg {
  background: #3d3d3f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.button-text {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f5dada;
}

.link-text {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #635a5a;
}

.href-link {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #275d8fab;
}
</style>
