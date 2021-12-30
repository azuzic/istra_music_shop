<template>
  <div>
    <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
      <button class="button-text" type="button" @click="btnClickHandler">
        {{ btn }}
      </button>
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
  background: #3d3d3f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.button-text {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f5dada;
}
</style>
