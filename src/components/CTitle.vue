<template>
  <div class="title">
    <div class="title-bg pt-3 pb-3 text-center">
      <h1 class="title-msg text-center">{{ msg1 }} <br />{{ msg2 }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "msg",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  width: 90%;
}
.title-bg {
  background: #ff5252;
  border-radius: 8px;
}

.title-msg {
  font-family: Alike;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #3d3d3f;
}
</style>
