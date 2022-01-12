<template>
  <div>
    <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
      <button class="button-text" type="button" @click="btnClickHandler">
        <p>{{ btn }}</p>
      </button>
    </div>
    <div class="button-bg2">
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
  min-width: 226px;
  background: var(--balticSea9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.button-bg2 {
  position: relative;
  min-width: 226px;
  height: 51px;
  margin-bottom: -51px;
  z-index: -21;
  bottom: 51px;
  background: var(--snow);
  border-radius: 16px;
}

.button-text {
  width: 100%;
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.button-text p {
  width: 100%;
  align-items: center;
  text-align: center;
  color: var(--fresco);
}
</style>
