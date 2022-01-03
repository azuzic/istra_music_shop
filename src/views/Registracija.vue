<template>
  <div>
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <!--===================TITLE=======================-->
      <div>
        <h1 class="text-center text-22px">
          Kreirajte račun da možete započeti.
        </h1>
      </div>
      <!--===================TITLE END===================-->
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
        <!--===================IME I PREZIME=============-->
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
        <!--===================IME I PREZIME END===========-->
        <!--===================EMAIL=======================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Email</p>
          <input type="email" name="email" id="email" v-model="email" />
          <hr />
          <h2
            v-if="!checkEmail(email) && email"
            class="CWarning"
            id="resultEmail"
          >
            Email nije točno napisan!
          </h2>
        </div>
        <!--===================EMAIL END===================-->
        <!--===================OIB=========================-->
        <div>
          <p class="text-left text-18px m-0 p-0">OIB</p>
          <input
            type="text"
            name="oib"
            id="oib"
            v-model="oib"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
            maxlength="11"
          />
          <hr />
          <h2
            v-if="oib.length != 11 && oib"
            class="CWarning"
            id="resultOIB"
          >
            OIB mora sadržavati 11 brojeva!
          </h2>
        </div>
        <!--===================OIB END=====================-->
        <!--===================BROJ MOBITELA===============-->
        <div>
          <p class="text-left text-18px m-0 p-0">Broj mobitela</p>
          <div class="flex">
            <div style="color: grey !important">09</div>
            <div class="w-full">
              <input
                type="text"
                name="mob"
                id="mob"
                v-model="UpdateMob"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                maxlength="10"
              />
            </div>
          </div>
          <hr />
          <h2
            v-if="UpdateMob.length != 9 && UpdateMob.length != 10 && UpdateMob"
            class="CWarning"
            id="resultMob"
          >
            Broj mobitela mora sadržavati 10 ili 11 brojeva!
          </h2>
        </div>
        <!--===================BROJ MOBITELA END===========-->
        <!--===================LOZINKA=====================-->
        <div>
          <p class="text-left text-18px m-0 p-0">Lozinka</p>
          <div>
            <input type="password" name="pass1" id="pass1" v-model="password" />
            <img
              id="eye1"
              @click="eye"
              class="eye"
              src="@/assets/eye_closed.png"
            />
            <img
              id="eye2"
              @click="eye"
              class="eye invisible"
              src="@/assets/eye_open.png"
            />
          </div>
          <hr />
        </div>
        <!--===================LOZINKA END=================-->
        <!--===================POTVRDI LOZINKU=============-->
        <div :class="!password ? 'tranparent' : ''">
          <p class="text-left text-18px m-0 p-0">Potvrdi lozinku</p>
          <input
            :disabled="!password"
            type="password"
            name="pass2"
            id="pass2"
            v-model="passwordRepeat"
          />
          <img
            id="eye3"
            @click="eye2"
            class="eye"
            src="@/assets/eye_closed.png"
          />
          <img
            id="eye4"
            @click="eye2"
            class="eye invisible"
            src="@/assets/eye_open.png"
          />
          <hr />
          <h2
            v-if="password != passwordRepeat && passwordRepeat"
            class="CWarning"
          >
            Lozinke se ne podudaraju!
          </h2>
        </div>
        <!--===================POTVRDI LOZINKU END=========-->
        <!--===================REGISTRIRAJ SE BUTTON=======-->
        <div
          class="place-self-center"
          :class="IsAllFilled ? 'active' : 'inactive'"
        >
          <CButton
            btn="REGISTRIRAJ SE"
            link_text="Imate račun?"
            link_href_text="Prijavite se."
            href_link="/prijava"
            href_btn="/registracija"
            :btnClickHandler="IsAllFilled ? signup : dummy"
          />
        </div>
        <!--===================REGISTRIRAJ SE BUTTON END===-->
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";

import { getAuth, createUserWithEmailAndPassword } from "@/firebase";
const auth = getAuth();
let source = document.getElementById("source");
let result = document.getElementById("result");
let inputHandler = function (e) {
  result.innerHTML = e.target.value;
};
export default {
  name: "Registracija",
  data() {
    return {
      nameSurname: "",
      email: "",
      oib: "",
      mobTemp: "",
      mob: "",
      password: "",
      passwordRepeat: "",
      brr:"",
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
    eye() {
      let x = document.getElementById("pass1");
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
    eye2() {
      let x = document.getElementById("pass2");
      let y = document.getElementById("eye3");
      let z = document.getElementById("eye4");
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
    checkEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    dummy() {},
  },
  name: "Home",
  components: {
    CTitle,
    CButton,
  },
  computed: {
    IsAllFilled() {
      return this.nameSurname &&
        this.email &&
        this.oib &&
        this.mob &&
        this.password &&
        this.passwordRepeat
        ? true
        : false;
    },
    UpdateMob: {
      get() {
        return `${this.mobTemp}`;
      },
      set() {
        let br = document.getElementById("mob").value.replace(/-/g, "");
        if (br=="") {
          this.mob = ""; 
          this.mobTemp = "";
        }
        this.mob = "09" + br;
        let l = br.length;
        if (l >= 1 && l < 5 && br) this.mobTemp = br.slice(0, 1) + "-" + br.slice(1);
        else if (l >= 5)
          this.mobTemp =
            br.slice(0, 1) + "-" + br.slice(1, 4) + "-" + br.slice(4);
      },
    },
  },
};

//SET CLASS
</script>

<style>
.eye {
  float: right;
  margin-top: -24px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 20px;
}
</style>
