<template>
  <div>
    <div class="CDodavanje-bottom grid grid-cols-1">
      <div class="place-self-center" :class="uploaded ? '' : 'tranparent-75'">
        <CButtonSingle btn="POTVRDI" :btnClickHandler="dummy" />
      </div>
    </div>
    <div class="CDodavanje-top">
     <div class="menu-item6 mx-auto">
        <img class="dodavanje-icon" src="@/assets/upload.svg" />
        <p>Molimo odaberite sliku za</p>
        <p>{{side}}</p>
        <p>stranu gitare</p>
      </div>
      <div class="menu-bottom-dodavanje grid grid-cols-1 mt-4">
        <div class="menu-item7 mx-auto">
          <img class="photo-icon" src="@/assets/photo_icon.png" />
          <p>Slikajte kamerom</p>
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
    return {
      side: "Gornju Prednju",
      uploaded: false
    };
  },
  methods: {
    dummy(){},
  },
  components: {
    CButtonSingle
  },
};
</script>
<style>
.CDodavanje-top {
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: var(--stretchLimo);
  width: 100%;
  height: 72%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
}
.CDodavanje-bottom {
  position: absolute;
  align-items: center;
  text-align: center;
  background-color: var(--snow);
  bottom: 0px;
  width: 100%;
  height: 28%;
}
.dodavanje-icon {
  width: 100%;
  height: 123px;
}
.photo-icon {
  height: 28px;
  opacity: 90%;
}
.menu-item6 {
  align-items: center;
  text-align: center;
}
.menu-item6 p:nth-child(2) {
  color: var(--fresco) !important;
  letter-spacing: 0.5px;
  margin-top: 8px;
  font-size: 14px;
}
.menu-item6 p:nth-child(3) {
  color: var(--fresco) !important;
  margin-top: 4px;
  letter-spacing: -1.5px;
  font-size: 24px;
  font-weight: bold;
}
.menu-item6 p:nth-child(4) {
  color: var(--fresco) !important;
  margin-top: 4px;
  letter-spacing: 0px;
  font-size: 22px;
}
.menu-bottom-dodavanje {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: transparent;
}
.menu-item7 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 50px;
  margin-top: 24px;
  border-radius: 32px;
  background-color: var(--fluorescentRed);
}
.menu-item7 p {
  color: #000000d0;
  font-size: 18px;
  letter-spacing: -0.5px;
  margin-left: 6px;
  margin-top: 4px;
}
</style>
