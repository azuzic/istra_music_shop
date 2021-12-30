<template>
  <div>
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <div>
        <h1 class="text-center text-22px CText">
          Kreirajte račun da možete započeti.
        </h1>
      </div>
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <div>
          <p class="text-left text-18px m-0 p-0">Ime i prezime</p>
          <input
            v-model="nameSurname"
            type="text"
            name="imeprezime"
            id="imeprezime"
          />
          <hr />
        </div>
        <div>
          <p class="text-left text-18px m-0 p-0">Email</p>
          <input type="email" name="email" id="email" v-model="email" />
          <hr />
        </div>
        <div>
          <p class="text-left text-18px m-0 p-0">OIB</p>
          <input type="text" name="oib" id="oib" v-model="oib" />
          <hr />
        </div>
        <div>
          <p class="text-left text-18px m-0 p-0">Broj mobitela</p>
          <input type="text" name="mob" id="mob" v-model="mob" />
          <hr />
        </div>
        <div>
          <p class="text-left text-18px m-0 p-0">Lozinka</p>
          <input type="password" name="pass1" id="pass1" v-model="password" />
          <hr />
        </div>
        <div>
          <p class="text-left text-18px m-0 p-0">Potvrdi lozinku</p>
          <input
            type="password"
            name="pass2"
            id="pass2"
            v-model="passwordRepeat"
          />
          <hr />
        </div>
        <div v-if="password != passwordRepeat">
          <p class="text-left text-18px m-0 p-0 CWarning">
            Lozinke se ne podudaraju!
          </p>
        </div>

        <div class="place-self-center">
          <CButton
            btn="REGISTRIRAJ SE"
            link_text="Imate račun?"
            link_href_text="Prijavite se."
            href_link="/prijava"
            href_btn="/registracija"
            :btnClickHandler="this.signup"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
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
    CButton,
  },
};
</script>
