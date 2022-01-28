<template>
  <div class="title">
    <div class="title-bg pt-3 pb-3 text-center">
      <h1 class="title-msg text-center text-18px">{{ msg1 }} <br />{{ msg2 }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTitle",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  width: 90%;
  .title-bg {
    background: var(--FluorescentRed__OffBlack);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    .title-msg {
      font-weight: bold;
      color: var(--BalticSea__Lead);
    }
  }
}

</style>
