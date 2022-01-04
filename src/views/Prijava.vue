<template>
  <div class="p-0 m-0">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <div>
        <h1 class="text-center text-22px">Prijavite se za nastavak</h1>
      </div>
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================EMAIL=======================-->
        <div>
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
        <!--===================EMAIL END===================-->
        <!--===================PASSWORD====================-->
        <div>
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
        <!--================PASSWORD END===================-->
        <!--===================OSOBA=======================-->
        <CSelect
          :options="['Korisnik', 'Djelatnik']"
          :default="'Korisnik'"
          v-model="osoba"
        />
        <!--===================OSOBA END===================-->
        <!--================WARNING========================-->
        <CWarning
          v-if="greska != '0'"
          msg1="Upozorenje!"
          :msg2="
            greska == '1'
              ? 'Unijeli ste krivu lozinku.'
              : greska == '2'
              ? 'Upisana email adresa ne postoji.'
              : 'Krivo ste napisali email adresu.'
          "
        />
        <!--================WARNING END====================-->
        <!--==============PRIJAVI SE BUTTON================-->
        <div
          class="place-self-center"
          :class="email && password ? 'active' : 'inactive'"
        >
          <CButton
            btn="PRIJAVI SE"
            link_text="Nemate račun?"
            link_href_text="Registrirajte se."
            href_link="/registracija"
            href_btn="/prijava"
            :btnClickHandler="email && password ? login : dummy"
          />
        </div>
        <!--==============PRIJAVI SE BUTTON END============-->
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButton from "@/components/CButton.vue";
import CSelect from "@/components/CSelect.vue";
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      osoba: "Korisnik",
      greska: "0",
    };
  },
  components: {
    CTitle,
    CWarning,
    CButton,
    CSelect,
  },
  methods: {
    login() {
      console.log("login..." + this.email);

      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        //Koristi lambda/arrow funkcije u kombinaciji sa .then kako bi se sacuvao this iz parent konteksta
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.greska == "0";
        })
        .catch((e) => {
          let error = e.message.slice(22, -2).replace(/-/g, " ");
          error = error.charAt(0).toUpperCase() + error.slice(1) + "!";
          console.error(error);
          if (error == "Wrong password!") this.greska = "1";
          else if (error == "User not found!") this.greska = "2";
          else if (error == "Invalid email!") this.greska = "3";
        });
    },
    dummy() {},
  },
};
</script>
