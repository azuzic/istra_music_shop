<template>
  <div role="alert">
    <div class="CSuccess-bg font-bold rounded-t px-4 py-2">
      {{ msg1 }}
    </div>
    <div class="border-2 border-t-0 CSuccess-border rounded-b bg-red-100 px-4 py-3">
      <p class="CSuccess">{{ msg2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CSuccess",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>
<style>
.CSuccess-bg {
  background-color: #6DD277;
  color: #3D3D3F;
}
.CSuccess-border {
  border-color: #6DD277;
  color: #3D3D3F;
}
</style>