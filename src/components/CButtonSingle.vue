<template>
  <div>

    <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
      <button class="button-text" type="button" @click="btnClickHandler">
        <p>{{ btn }}</p>
      </button>
    </div>

    <div class="button-back">
    </div>

  </div>
</template>

<script>
export default {
  name: "CButtonSingle",
  props: {
    btn: String,
    btnClickHandler: Function,
  },
};
</script>

<style scoped lang="scss">
.button-bg {
  width: 90vw;
  background: var(--BalticSea__EerieBlack);
  box-shadow: 0px 4px 4px var(--Transparent25__Transparent75);
  border-radius: 16px;
  .button-text {
    font-size: 6.5vw;
    & p {
      color: var(--Fresco__KinglyCloud);
    }
  } 
}

.button-back {
  position: relative;
  width: 90vw;
  height: 51px;
  margin-bottom: -51px;
  z-index: -21;
  bottom: 51px;
  background: var(--Snow__DarkToneInk);
  border-radius: 16px;
}
</style>
