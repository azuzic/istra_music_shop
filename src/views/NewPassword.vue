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
          <p class="text-left text-18px m-0 p-0">Unesite novu lozinku</p>
          <input
            v-model="password"
            type="email"
            class="border rounded"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <hr />
        </div>
        <div class="form-group">
          <p class="text-left text-18px m-0 p-0">Ponovite novu lozinku</p>
          <input
            v-model="passwordRepeat"
            type="email"
            class="border rounded"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <hr />
        </div>
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          v-if="password != '' && password.length < 6"
        >
          <strong class="font-bold">Upozorenje!</strong>
          <span class="block sm:inline"
            >Lozinka se mora sastojati od minimalno 6 znakova.</span
          >
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
            :class="passwordMatch ? '' : 'tranparent'"
            btn="POTVRDI"
            :btnClickHandler="passwordMatch ? resetPassword : dummy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "@/components/CTitle.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import { getAuth, updatePassword } from "@/firebase";

export default {
  name: "NewPassword",
  data() {
    return {
      password: "",
      passwordRepeat: "",
    };
  },
  components: {
    CTitle,
    CButtonSingle,
  },
  computed: {
    passwordMatch: function () {
      if (this.password === "") return 0;
      return this.password === this.passwordRepeat ? 1 : 0;
    },
  },
  methods: {
    dummy() {},
    resetPassword() {
      const auth = getAuth();

      const user = auth.currentUser;

      updatePassword(user, this.password)
        .then(() => {
          console.log("Password reset!");
        })
        .catch((error) => {
          console.error("Password reset ERROR!");
        });
    },
  },
};
</script>
<style>
.tranparent {
  opacity: 0.25;
}
</style>
