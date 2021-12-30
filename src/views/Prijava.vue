<template>
  <div class="p-0 m-0">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <CText msg="Prijavite se za nastavak" />
    <form>
      <div class="form-group">
        <label for="emailInput">Email adresa</label>
        <input
          v-model="email"
          type="email"
          class="border rounded"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="Vaš email"
        />
      </div>
      <div class="form-group">
        <label for="passInput">Lozinka</label>
        <input
          type="password"
          v-model="password"
          class="border rounded"
          id="passInput"
          placeholder="Lozinka"
        />
      </div>
      <br />
      <!--
      <button
        type="button"
        @click="login()"
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Prijava
      </button>
      -->
      <div class="place-self-center pl-16 pr-16">
        <CButton
          btn="PRIJAVI SE"
          link_text="Nemate račun?"
          link_href_text="Registrirajte se."
          href_link="/registracija"
          href_btn="/prijava"
          :btnClickHandler="this.login"
        />
      </div>
    </form>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CText from "@/components/CText.vue";
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
    CText,
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
