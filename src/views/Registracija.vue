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
          <h2
            v-if="!checkEmail(email) && email"
            class="CText CWarning"
            id="resultEmail"
          >
            Email nije točno napisan!
          </h2>
        </div>
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
            class="CText CWarning"
            id="resultOIB"
          >
            OIB mora sadržavati 11 brojeva!
          </h2>
        </div>
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
            class="CText CWarning"
            id="resultMob"
          >
            Broj mobitela mora sadržavati 10 ili 11 brojeva!
          </h2>
        </div>
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
            class="CText CWarning"
          >
            Lozinke se ne podudaraju!
          </h2>
        </div>

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
        this.mob = "09" + br;
        let l = br.length;
        if (l >= 1 && l < 5) this.mobTemp = br.slice(0, 1) + "-" + br.slice(1);
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
.active div .button-bg {
  background: #3d3d3f !important;
}
.inactive div .button-bg {
  background: #919192 !important;
}

.eye {
  float: right;
  margin-top: -24px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 20px;
}

.tranparent {
  opacity: 0.25;
}
</style>
