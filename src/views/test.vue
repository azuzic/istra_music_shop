<template>
  <div class="p-0 m-0">
    <img alt="Test logo" src="../assets/logo.svg" />
    <Title
      msg="Dobro došli u web aplikaciju 
      Istra Music Shop-a!"
    />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "test",
  components: {
    Title,
  },
};
</script>
