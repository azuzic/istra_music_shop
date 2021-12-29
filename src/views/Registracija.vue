<template>
  <div class="registracija">
    <h1 class="font-bold">Kreirajte račun da možete započeti.</h1>
    <hr />
    <br />
    <p>
      Ime i prezime
      <input
        v-model="nameSurname"
        class="border rounded"
        type="text"
        name="imeprezime"
        id="imeprezime"
      />
    </p>
    <p>
      Email
      <input
        class="border rounded"
        type="email"
        name="email"
        id="email"
        v-model="email"
      />
    </p>
    <p>
      OIB
      <input
        class="border rounded"
        type="text"
        name="oib"
        id="oib"
        v-model="oib"
      />
    </p>

    <p>
      Broj mobitela
      <input
        class="border rounded"
        type="text"
        name="mob"
        id="mob"
        v-model="mob"
      />
    </p>
    <p>
      Lozinka
      <input
        class="border rounded"
        type="password"
        name="pass1"
        id="pass1"
        v-model="password"
      />
    </p>
    <p>
      Potvrdi lozinku
      <input
        class="border rounded"
        type="password"
        name="pass2"
        id="pass2"
        v-model="passwordRepeat"
      />
    </p>
    <span v-if="password != passwordRepeat" class="text-red-600"
      >Lozinke se ne podudaraju!</span
    >
    <br />
    <hr />

    <button
      type="button"
      @click="signup"
      class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    >
      Registriraj se
    </button>
    <p>Imate račun? <button>Prijavite se.</button></p>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "@/firebase";
const auth = getAuth();
export default {
  name: "Registracija",
  data() {
    return {
      nameSurname: "",
      email: "",
      oib: "",
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
  },
  components: {},
};
</script>
<style></style>
