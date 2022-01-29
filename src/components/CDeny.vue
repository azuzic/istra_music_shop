<template>
  <div role="alert">

    <div class="CDeny-border p-2">
      
      <div class="flex CDeny-flex py-1">
        <img class="mr-2" src="@/assets/success_icon.png">
        <p class="text-center">{{msg1}}</p>
      </div>
      
      <p class="text-center CDeny-msg mt-2 mb-1">{{ msg2 }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CDeny",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>
<style scoped lang="scss">
.CDeny-border {
  border-width: 3px;
  border-radius: 8px;
  border-style: dashed;
  border-color: var(--FluorescentRed__FrenchWine);
  background-color: var(--Snow__DarkToneInk);
  .CDeny-flex {
    align-items: center;
    justify-content: center;
    & p {
      font-weight: bold;
      font-size: 24px;
      color: var(--FluorescentRed__FrenchWine);
    }
    & img {
      height: 28px;
    }
  }
  .CDeny-msg {
    color: var(--FluorescentRed__FrenchWine);
  }
}
</style>