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
          <h2 v-if="oib.length != 11 && oib" class="CWarning" id="resultOIB">
            OIB mora sadržavati 11 brojeva!
          </h2>
        </div>
        <!--===================OIB END=====================-->
        <!--===================BROJ MOBITELA===============-->
        <div>
          <p class="text-left text-18px m-0 p-0">Broj mobitela</p>
          <div class="flex">
            <div class="mtc" style="color: grey !important">09</div>
            <div class="w-full">
              <input
                type="text"
                name="mob"
                id="mob"
                v-model="UpdateMob"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                maxlength="10"
              />
              <hr />
            </div>
          </div>
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
          <div class="text-left text-18px m-0 p-0 flex items-center">
            <div class="mr-4">Lozinka</div>
            <div class="grid grid-cols-5 divide-x strength">
              <div
                :class="
                  PasswordStrength == 0
                    ? 'line'
                    : PasswordStrength == 1 || PasswordStrength == 2
                    ? 'line-red'
                    : PasswordStrength == 3
                    ? 'line-yellow'
                    : PasswordStrength > 3
                    ? 'line-green'
                    : 'line'
                "
              ></div>
              <div
                :class="
                  PasswordStrength == 2
                    ? 'line-red'
                    : PasswordStrength == 3
                    ? 'line-yellow'
                    : PasswordStrength > 3
                    ? 'line-green'
                    : 'line'
                "
              ></div>
              <div
                :class="
                  PasswordStrength == 3
                    ? 'line-yellow'
                    : PasswordStrength > 3
                    ? 'line-green'
                    : 'line'
                "
              ></div>
              <div :class="PasswordStrength > 3 ? 'line-green' : 'line'"></div>
              <div :class="PasswordStrength > 4 ? 'line-green' : 'line'"></div>
            </div>
          </div>
          <div>
            <input type="password" name="pass1" id="pass1" v-model="password" />
            <hr />
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
        </div>
        <!--===================LOZINKA END=================-->
        <!--===================POTVRDI LOZINKU=============-->
        <div :class="!password || PasswordStrength < 3 ? 'tranparent' : ''">
          <p class="text-left text-18px m-0 p-0">Potvrdi lozinku</p>
          <input
            :disabled="!password || PasswordStrength < 3"
            type="password"
            name="pass2"
            id="pass2"
            v-model="passwordRepeat"
          />
          <hr />
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
          <h2
            v-if="password != passwordRepeat && passwordRepeat"
            class="CWarning"
          >
            Lozinke se ne podudaraju!
          </h2>
        </div>
        <!--===================POTVRDI LOZINKU END=========-->
        <!--================ALERT========================-->
        <CWarning
          v-if="greska != '0' && !registered"
          msg1="Upozorenje!"
          msg2="Upisani email je već registriran."
        /> 
        <CSuccess
          
          msg1="Uspješna registracija!"
          msg2="Molimo potvrdite račun preko poveznice koju smo vam poslali na email."
        />
        <!--================ALERT END=====v-if="registered"===============-->
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
import CSuccess from "@/components/CSuccess.vue";
import CWarning from "@/components/CWarning.vue";

import { getAuth, createUserWithEmailAndPassword } from "@/firebase";
import { collection, addDoc } from "@/firebase";
import { db } from "@/firebase";

const auth = getAuth();

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
      registered: false,
      greska: "0",
    };
  },
  components: {
    CTitle,
    CButton,
    CSuccess,
    CWarning,
  },
  methods: {
    async signup() {
      if (this.password !== this.passwordRepeat) {
        return;
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(async (userCredential) => {
            // Signed in
            console.log("Uspjesna registracija!");
            this.registered = true;
            try {
              const docRef = await addDoc(collection(db, "users"), {
                imePrezime: this.nameSurname,
                email: this.email,
                oib: this.oib,
                mob: this.mob,
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
          .catch((e) => {
            let error = e.message.slice(22, -2).replace(/-/g, " ");
            error = error.charAt(0).toUpperCase() + error.slice(1) + "!";
            console.error(error);
            if (error == "Email already in use!") this.greska = "1";
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

  computed: {
    IsAllFilled() {
      return this.nameSurname &&
        this.checkEmail(this.email) &&
        this.email &&
        this.oib &&
        this.oib.length == 11 &&
        this.UpdateMob.length > 8 &&
        this.UpdateMob &&
        this.password &&
        this.password == this.passwordRepeat
        ? true
        : false;
    },
    PasswordStrength() {
      let strength = "0";
      let password = this.password;
      if (password.toLowerCase() != password) strength++;
      if (password.toUpperCase() != password) strength++;
      if (/\d/.test(password)) strength++;
      if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) strength++;
      if (password.length > 8) strength++;
      return strength;
    },
    UpdateMob: {
      get() {
        return `${this.mobTemp}`;
      },
      set() {
        let br = document.getElementById("mob").value.replace(/-/g, "");
        if (br == "") {
          this.mob = "";
          this.mobTemp = "";
        }
        this.mob = "09" + br;
        let l = br.length;
        if (l >= 1 && l < 5 && br)
          this.mobTemp = br.slice(0, 1) + "-" + br.slice(1);
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
  margin-top: -28px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 20px;
}
.line {
  height: 8px;
  border-radius: 4px;
  background-color: grey;
}

.line-red {
  height: 8px;
  border-radius: 4px;
  background-color: red;
}

.line-yellow {
  height: 8px;
  border-radius: 4px;
  background-color: yellow;
}

.line-green {
  height: 8px;
  border-radius: 4px;
  background-color: green;
}

.strength {
  width: 100%;
}

.strength-text {
  font-size: 12px;
  color: red !important;
}

.mtc {
  margin-top: 3px;
}
</style>
