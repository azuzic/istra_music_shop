<template>
  <div class="p-0 m-0">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <div>
        <h1 class="text-center text-22px CText">Prijavite se za nastavak</h1>
      </div>
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <div class="form-group">
          <p class="text-left text-18px m-0 p-0">Email adresa</p>
          <input
            v-model="email"
            type="email"
            class="border rounded"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <hr />
        </div>
        <div class="form-group">
          <p class="text-left text-18px m-0 p-0">Lozinka</p>
          <input
            type="password"
            v-model="password"
            class="border rounded"
            id="passInput"
          />
          <hr />
          <router-link
            class="href-link font-14px float-right"
            to="/password-reset"
          >
            <u>Zaboravili ste lozinku?</u>
          </router-link>
        </div>
        <br />
        <div class="place-self-center">
          <CButton
            btn="PRIJAVI SE"
            link_text="Nemate račun?"
            link_href_text="Registrirajte se."
            href_link="/registracija"
            href_btn="/prijava"
            :btnClickHandler="this.login"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    CTitle,
    CButton,
  },
  methods: {
    login() {
      console.log("login..." + this.email);

      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        //Koristi lambda/arrow funkcije u kombinaciji sa .then kako bi se sacuvao this iz parent konteksta
        .then((result) => {
          console.log("Uspješna prijava", result);
          //Replace koristi prilikom logina, push za sve ostale stvari
          this.$router.replace({ name: "Home" });
        })
        .catch(function (e) {
          console.error("greska");
        });
    },
  },
};
</script>
