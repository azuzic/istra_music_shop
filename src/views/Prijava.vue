<template>
  <div class="p-0 m-0">
    <div>
      <router-link v-if="store.theme=='Svijetla'" to="/"><img alt="Test logo" src="../assets/logo.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Plava'" to="/"><img alt="Test logo" src="../assets/logo_dark_blue.svg" /></router-link>
      <router-link v-if="store.theme=='Tamna Crvena'" to="/"><img alt="Test logo" src="../assets/logo_dark_red.svg" /></router-link>
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
          />
          <hr />
          <h2
            v-if="!checkEmail(email) && email"
            class="CWarning"
            id="resultEmail"
          >
            Email nije točno napisan!
          </h2>
        </div>
        <!--===================/EMAIL===================-->
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
          <img
              v-if="store.darkToggle"
              id="eye1"
              @click="eye"
              class="eye"
              src="@/assets/eye_closed.png"
            />
            <img
              v-if="store.darkToggle"
              id="eye2"
              @click="eye"
              class="eye invisible"
              src="@/assets/eye_open.png"
            />
            <img
              v-if="!store.darkToggle"
              id="eye1"
              @click="eye"
              class="eye"
              src="@/assets/eye_closed_dark.png"
            />
            <img
              v-if="!store.darkToggle"
              id="eye2"
              @click="eye"
              class="eye invisible"
              src="@/assets/eye_open_dark.png"
            />

          <router-link
            class="font-14px float-right"
            to="/password-reset"
          >
            <u class="href-link">Zaboravili ste lozinku?</u>
          </router-link>
        </div>
        <!--================/PASSWORD===================-->
        <!--================WARNING========================-->
        <CWarning
          v-if="greska"
          msg1="Upozorenje!"
          :msg2="'Unijeli ste krivu lozinku/email.'
          "
        />
        <!--================WARNING END====================-->
        <!--================WARNING EMAIL VERIFY========================-->
        <CWarning
          v-if="greska2"
          msg1="Upozorenje!"
          :msg2="'Molimo potvrdite email adresu kako biste nastavili.'
          "
        />
        <!--================/WARNING EMAIL VERIFY====================-->
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

    <img @click="helpPopup = true" class="help" src="https://cdn0.iconfinder.com/data/icons/cosmo-symbols/40/help_1-512.png">
    
    <div :class="helpPopup ? 'darken-bg' : 'undarken-bg'"></div>
    
    <div @click="helpPopup = false" class="pl-4 pr-4" :class="helpPopup ? 'helpPopup' : 'closeHelp'">
      <ol class="p-4 list-disc">
        <h1 class="text-center mb-4 text-24px"><b>Kratke upute kako koristiti aplikaciju</b></h1>
        <li>Aplikacija služi svima koji žele prodati svoje glazbene instrumente. </li><br>
        <li>Prilikom registracije tražit ćemo vas OIB iz sigurnosnih razloga te radi generiranja kupoprodajnog ugovora. Također, morate unijeti IBAN računa gdje želite da Vam uplatimo novac.</li><br>
        <li>Nakon registracije odmah možete predati zahtjev za otkup na <b>OtkupOpreme</b> odabirom vašeg instrumenta među ponuđenima i popunjavanjem ostalih podataka koje vas budemo tražili.</li><br>
        <li>Tražit ćemo Vas i slike vašeg instrumenta. Zahtjev možemo odbiti ukoliko slike nisu dovoljno dobre kvalitete.</li><br>
        <li>Status vašeg zahtjeva možete pratiti na <b>StatusOtkupa</b>. Obratite pažnju ukoliko Vam naš djelatnik predloži drugu cijenu za vaš instrument, možete ju prihvatiti ili odbiti. </li><br>
      </ol>
    </div>
    
  </div>
</template>
<script>
import store from "@/store";
//Komponente
import CWarning from "@/components/CWarning.vue";
import CButton from "@/components/CButton.vue";
import CSelect from "@/components/CSelect.vue";

//Firebase
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
import { collection, getDocs } from "@/firebase";
import { db, signOut } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      osoba: "Korisnik",
      greska: false,
      greska2: false,
      store,
    };
  },
  components: {
    CWarning,
    CButton,
    CSelect,
  },

  methods: {
    
    //Radi promjene izgleda aplikacije
    async getUserData() {
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            if (store.currentUser === `${doc.data().email}`) {
              store.theme = `${doc.data().theme}`;
            }
          });
        },
    login() {
      console.log("logging in...");
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        //Koristi lambda/arrow funkcije u kombinaciji sa .then kako bi se sacuvao this iz parent konteksta
        .then((result) => {
          if(!store.emailVerified) {
            this.greska2 = true;
            this.signout();
            return;
          }
          console.log("Uspješna prijava", result);
          this.greska = false;
          this.getUserData();
        })
        .catch((e) => {
          let error = e.message.slice(22, -2).replace(/-/g, " ");
          error = error.charAt(0).toUpperCase() + error.slice(1) + "!";
          this.greska = true;
        });
      
    },
    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Signed out!");
        })
        .catch((error) => {
          console.error("Error signing out!" + error);
        });
    },
    dummy() {},
    checkEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    eye() {
      let x = document.getElementById("passInput");
      let y = document.getElementById("eye1");
      let z = document.getElementById("eye2");
      if (x.type === "password") {
        x.type = "text";
        y.classList.add("invisible");
        z.classList.remove("invisible");
      } else {
        x.type = "password";
        z.classList.add("invisible");
        y.classList.remove("invisible");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.eye {
  transition: all 0s !important;
  float: right;
  margin-top: -28px;
  position: relative;
  z-index: 1;
  height: 20px;
}
.href-link {
  font-size: 14px;
  color: var(--PaleFlower__RavensBanquet);
}
.invisible {
  transition: all 0s !important;
  width: 0px;
  height: 0px;
}

.helpPopup {
  position: fixed;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  position: fixed !important;
  z-index: 50000000;
  width: 90% !important;
  height: 400px;
  overflow-y: scroll;
  border-radius: 16px;
  background-color: var(--Snow__DarkToneInk);
  box-shadow: 0px 0px 8px hsl(0, 0%, 0%, 75%);
}
.closeHelp {
  position: fixed;
  overflow: hidden;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width: 90% !important;
  height: 0%;
}
.help {
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 40px;
  margin: 4px;
}
.undarken-bg {
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -100;
  background-color: hsl(0, 0%, 0%, 0%);
  backdrop-filter: blur(0px);
}
.darken-bg {
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 40000000;
  background-color: hsl(0, 0%, 0%, 50%);
  backdrop-filter: blur(4px);
}
</style>
