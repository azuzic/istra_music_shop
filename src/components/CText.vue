<template>
  <p class="text-msg text-center">{{ msg }}</p>
</template>

<script>
export default {
  name: "Ctext",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.text-msg {
  font-family: "Lora", italic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #3d3d3f;
}
</style>
