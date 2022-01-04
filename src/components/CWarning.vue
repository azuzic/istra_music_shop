<template>
  <div role="alert">
    <div class="CWarning-bg text-white font-bold rounded-t px-4 py-2">
      {{ msg1 }}
    </div>
    <div class="border-2 border-t-0 CWarning-border rounded-b bg-red-100 px-4 py-3">
      <p class="CWarning">{{ msg2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CWarning",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>
<style>
.CWarning-bg {
  background-color: #FF5252;
}
.CWarning-border {
  border-color: #FF5252;
}
</style>
