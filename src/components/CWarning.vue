<template>
  <div role="alert">
    <div class="CWarning-border p-2">
      <div class="flex CWarning-flex py-1">
        <img class="img-warning mr-2" src="@/assets/warning_icon.svg">
        <p class="CWarning-bg text-center CWarning">{{msg1}}</p>
      </div>
      <p class="text-center CWarning-msg mt-2 mb-1">{{ msg2 }}</p>
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
  font-size: 24px;
}
.CWarning-border {
  border-width: 3px;
  border-radius: 8px;
  border-style: dashed;
  border-color: #e93a3a;
  background-color: #E8E7E7;
}
.img-warning {
  height: 25px;
}
.CWarning-flex {
  align-items: center;
  text-align: center;
  justify-content: center;
}
.CWarning-msg {
  color: #e93a3a;
}
</style>