<template>
  <div class="home">
    <img src="@/assets/logo.svg" alt="" />
    <p class="font-bold">Dobro došli u web aplikaciju Istra Music Shop-a!</p>

    <router-link to="/registracija">Registracija</router-link>
    <p>Imate račun? <button>Prijavite se.</button></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
