<template>
  <div>
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4">
        <div class="background p-32 h-full content-center justify-center">
          <img alt="Upload" src="../assets/upload.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CButtonSingle from "@/components/CButtonSingle.vue";
export default {
  name: "UcitajSliku",
  data() {
    return {};
  },
  components: {},
};
</script>
<style>
.background {
  background-color: #292e32;
}
</style>
