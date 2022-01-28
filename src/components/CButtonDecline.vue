<template>
  <div>
    
    <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
      <button class="button-text" type="button" @click="btnClickHandler">
        <p>{{ btn }}</p>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "CButtonDecline",
  props: {
    btn: String,
    btnClickHandler: Function,
  },
};
</script>

<style scoped lang="scss">
.button-bg {
  width: 90vw;
  background: var(--FluorescentRed__FrenchWine);
  box-shadow: 0px 4px 4px var(--Transparent25__Transparent75);
  border-radius: 16px;
  .button-text {
    font-size: 6.5vw;
    & p {
      font-weight: bold;
      color: #000000d0;
    }
  }
}
</style>
