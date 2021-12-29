<template>
  <div class="title">
    <div class="title-bg">
      <h1 class="title-msg">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  position: absolute;
  width: 360px;
  height: 89.5px;
}
.title-bg {
  position: absolute;
  left: 4.17%;
  right: 3.89%;
  top: 13.41%;
  bottom: 13.97%;

  background: #ff5252;
  border-radius: 8px;
}

.title-msg {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 32.06%;
  bottom: 32.19%;

  font-family: Alike;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #3d3d3f;
}
</style>
