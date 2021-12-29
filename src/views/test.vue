<template>
  <div class="p-0 m-0">
    <div class="">
      <img alt="Test logo" src="../assets/logo.svg" />
    </div>
    <div class="grid grid-cols-1 grid-rows-3 gap-14 mt-10 mb-10">
      <div class="grid">
        <CTitle
          class="place-self-center"
          msg1="Dobro došli u web aplikaciju"
          msg2="Istra Music Shop-a!"
        />
      </div>
      <div class="place-self-center">
        <CText
          class="pl-8 pr-8"
          msg="Ovdje možete otkupiti instrumente koje ne koristite pomoću automatiziranog sustava otkupa glazbenih instrumenata."
        />
      </div>
      <div class="place-self-center">
        <CButton
          btn="REGISTRACIJA"
          link_text="Imate račun?"
          link_href_text="Prijavite se."
          href_link="/"
          href_btn="/"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "@/components/CTitle.vue";
import CText from "@/components/CText.vue";
import CButton from "@/components/CButton.vue";

export default {
  name: "test",
  components: {
    CTitle,
    CText,
    CButton,
  },
};
</script>
