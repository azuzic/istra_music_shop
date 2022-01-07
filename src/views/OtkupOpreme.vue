<template>
  <div class="p-0 m-0 pt-16">
    <div class="grid auto-rows-auto gap-4">
      <div class="grid auto-rows-auto gap-4 pl-6 pr-6 mt-2">
        <p class="text-left text-22px m-0 p-0">Vrsta instrumenta</p>
      </div>
    </div>
  </div>
</template>
<script>
import CTitle from "@/components/CTitle.vue";
import CWarning from "@/components/CWarning.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CSelect from "@/components/CSelect.vue";
import store from "@/store";
import { collection, getDocs } from "@/firebase";
import { db } from "@/firebase";
import { query, where } from "@/firebase";

export default {
  name: "KorisnikRacun",
  data() {
    return {
      instrument: "",
    };
  },
  components: {
    CTitle,
    CWarning,
    CButtonAccept,
    CButtonDecline,
    CSelect,
  },

  methods: {
    dummy() {},
  },
};
</script>

<style></style>
