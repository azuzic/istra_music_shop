<template>
  <div class="p-0 m-0">
    <div>
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid auto-rows-auto gap-4">
      <br />

      <CTitle class="place-self-center" msg1="Resetiranje lozinke" />
      <div class="grid auto-rows-auto gap-4 pl-4 pr-4">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="height: 28px"
              viewBox="0 0 20 20"
              v-bind:fill="sendEmailCheck ? 'gray' : 'lightgray'"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <hr />
        </div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="
              codeIsSent
                ? 'float-right rotation spin-pos'
                : 'float-right spin-pos'
            "
            viewBox="0 0 20 20"
            style="height: 26px"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          v-if="wrongCode"
        >
          <strong class="font-bold">Upozorenje!</strong>
          <span class="block sm:inline">Unijeli ste neispravan kod.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ></svg>
          </span>
        </div>
        <div class="place-self-center">
          <CButtonSingle
            :class="codeEntered ? '' : 'tranparent'"
            btn="POTVRDI"
            :btnClickHandler="codeEntered ? confirmCode : dummy"
          />
        </div>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
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
.rotation {
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.tranparent {
  opacity: 0.25;
}
</style>
