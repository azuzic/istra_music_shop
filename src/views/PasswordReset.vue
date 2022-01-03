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
          <button
            class="float-right arrow-pos"
            :disabled="sendEmailCheck == 0"
            @click.prevent="sendCode()"
          >
          <img style="height: 24px" :class="sendEmailCheck ? 'tranparent-75' : 'tranparent'" src="@/assets/arrow_icon.svg">
          </button>
          <hr />
        </div>
        <!--===================EMAIL END===================-->
        <!--===================CODE========================-->
        <div :class="!codeIsSent ? 'tranparent' : ''">
          <p class="text-left text-18px m-0 p-0">6-znamenkasti kod</p>
          <input
            type="text"
            v-model="codeEntered"
            :disabled="!codeIsSent"
            class="border rounded"
            id="passInput"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
            maxlength="6"
          />
          <hr />
          <img class="float-right spin-pos" :class="codeIsSent ? 'rotation' : ''" src="@/assets/spin_icon.svg">
        </div>
        <!--===================CODE END====================-->
        <CWarning v-if="wrongCode" msg1 = "Upozorenje!" msg2="Unijeli ste neispravan kod."/>
        <!--===================POTVRDI BUTTON==============-->
        <div class="place-self-center" :class="codeEntered ? 'active' : 'inactive'">
          <CButtonSingle
            btn="POTVRDI"
            :btnClickHandler="codeEntered ? confirmCode : dummy"
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
import CButtonSingle from "@/components/CButtonSingle.vue";
import emailjs from "@emailjs/browser";
//EmailJS
import { init } from "@emailjs/browser";
init("user_s3PvQJakdM1y9xnn80F4d");
export default {
  name: "login",
  data() {
    return {
      email: "",
      codeSent: "",
      codeEntered: "",
      codeIsSent: false,
      wrongCode: false,
    };
  },
  components: {
    CTitle,
    CWarning,
    CButtonSingle,
  },
  computed: {
    sendEmailCheck() {
      return this.email.includes("@") && this.email.includes(".") ? 1 : 0;
    },
  },
  methods: {
    randomCodeGenerator() {
      //Random 6 digit generator
      return Math.round(Math.random() * (999999 - 100000) + 100000);
    },
    sendCode() {
      var params = {
        email: this.email,
        code: this.randomCodeGenerator(),
      };
      emailjs.send("service_zbc9jzl", "template_gk25qkz", params).then(
        (result) => {
          console.log("SUCCESS! ", result.text);
          this.codeSent = params.code;
          this.codeIsSent = true;
        },
        (error) => {
          console.log("FAILED...", error.text);
          this.codeIsSent = false;
        }
      );
    },
    confirmCode() {
      console.log("Code confirmation...");
      if (this.codeSent == this.codeEntered && this.codeEntered != "") {
        this.wrongCode = false;
        console.log("OK");
        return 1;
      } else {
        console.error("WRONG CODE");
        this.wrongCode = true;
        return false;
      }
    },
    dummy() {},
  },
};
</script>
<style>
.disabled-click {
  pointer-events: none;
}
@keyframes spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.arrow-pos {
  float: right;
  margin-top: -28px;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.spin-pos {
  float: right;
  margin-top: -32px;
  margin-right: 2px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 24px;
}
.rotation {
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
