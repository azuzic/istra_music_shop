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

          <hr />
          <button
            class="float-right"
            :disabled="sendEmailCheck == 0"
            @click.prevent="sendCode()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              viewBox="0 0 20 20"
              v-bind:fill="sendEmailCheck ? colorSend : colorNoSend"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="form-group">
          <p class="text-left text-18px m-0 p-0">6-znamenkasti kod</p>
          <input
            type="text"
            v-model="code"
            class="border rounded"
            id="passInput"
          />
          <hr />
        </div>
        <br />
        <div class="place-self-center">
          <CButtonSingle btn="POTVRDI" :btnClickHandler="confirmCode" />
        </div>
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
      code: "",
      colorNoSend: "lightgray",
      colorSend: "gray",
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
      console.log(this.code);
    },
    sendCode() {
      var params = {
        email: this.email,
        code: this.randomCodeGenerator(),
      };
      emailjs.send("service_zbc9jzl", "template_gk25qkz", params).then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    },
    confirmCode() {
      console.log("Code confirmation..." + this.hover);
    },
  },
};
</script>
<style>
.disabled-click {
  pointer-events: none;
}
</style>
