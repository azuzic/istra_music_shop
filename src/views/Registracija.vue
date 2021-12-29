<template>
  <div class="registracija">
    <h1 class="font-bold">Kreirajte račun da možete započeti.</h1>
    <hr />
    <br />
    <p>
      Ime i prezime
      <input
        class="border rounded"
        type="text"
        name="imeprezime"
        id="imeprezime"
      />
    </p>
    <p>
      Email
      <input class="border rounded" type="email" name="email" id="email" />
    </p>
    <p>OIB <input class="border rounded" type="text" name="oib" id="oib" /></p>

    <p>
      Broj mobitela
      <input class="border rounded" type="text" name="mob" id="mob" />
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

    <button>Registriraj se</button>
    <p>Imate račun? <button>Prijavite se.</button></p>
  </div>
</template>

<script>
export default {
  name: "Registracija",
  data() {
    return {
      password: "",
      passwordRepeat: "",
    };
  },
  components: {},
};
</script>
<style></style>
