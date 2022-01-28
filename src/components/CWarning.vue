<template>
  <div role="alert">
    <div class="CWarning-border p-2">
      <div class="flex CWarning-flex py-1">
        <img v-if="store.toggleDark" class="mr-2" src="@/assets/warning_icon.svg">
        <img v-if="!store.toggleDark" class="mr-2" src="@/assets/warning_icon_dark.svg">
        <p class="text-center">{{msg1}}</p>
      </div>
      <p class="text-center CWarning-msg mt-2 mb-1">{{ msg2 }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "CWarning",
  props: {
    msg1: String,
    msg2: String,
  },
  data() {
    return {
      store
    }
  }
};
</script>
<style scoped lang="scss">
.CWarning-border {
  border-width: 3px;
  border-radius: 8px;
  border-style: dashed;
  border-color: var(--VivaldiRed__FrenchWine);
  background-color: var(--Snow__DarkToneInk);
  .CWarning-flex {
    align-items: center;
    justify-content: center;
    & p {
      font-weight: bold;
      font-size: 24px;
      color: var(--VivaldiRed__FrenchWine);
    }
    & img {
      height: 25px;
    }
  }
  .CWarning-msg {
    color: var(--VivaldiRed__FrenchWine);
  }
}
</style>