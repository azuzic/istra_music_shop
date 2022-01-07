<template>
  <div class="p-0 m-0">
    <div>
      <router-link to="/"><img alt="Test logo" src="../assets/logo.svg" /></router-link>
    </div>
    <div class="grid grid-cols-1 grid-rows-3 gap-14 mt-10 mb-10">
      <div class="grid">
        <CTitle
          class="place-self-center"
          msg1="Dobro došli u web aplikaciju"
          msg2="Istra Music Shop-a!"
        />
      </div>
      <div class="place-self-center text-center pl-8 pr-8">
        Ovdje možete otkupiti instrumente koje ne koristite pomoću
        automatiziranog sustava otkupa glazbenih instrumenata.
      </div>
      <div class="place-self-center">
        <CButton
          btn="REGISTRACIJA"
          link_text="Imate račun?"
          link_href_text="Prijavite se."
          href_link="/prijava"
          href_btn="/registracija"
          :btnClickHandler="this.dummy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "@/components/CTitle.vue";
import CButton from "@/components/CButton.vue";

export default {
  name: "Home",
  components: {
    CTitle,
    CButton,
  },
  methods: {
    dummy() {},
  },
};
</script>
