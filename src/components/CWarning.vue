<template>
  <div role="alert">
    <div class="CWarning-bg rounded-t px-4 py-2">
      {{ msg1 }}
    </div>
    <div class="border-2 border-t-0 CWarning-border rounded-b px-4 py-3">
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
  font-weight: bold;
  font-size: 16px;
  color: #1f0a0a;
  background-color: #e93a3a;
}
.CWarning-border {
  border-color: #e93a3a;
}
</style>
