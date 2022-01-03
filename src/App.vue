<template>
  <div id="app">
    <div class="CBg"></div>
    <!--
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutRight"
    >
        </transition>
        -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alike&display=swap");
body {
  font-family: "Lora", serif;
}
html {
  background-color: #fff9f9;
}
.CBg {
  position: fixed;
  left: 0;
  right: 0;
  z-index: -9999;
  display: block;
  background-image: url("assets/bg.png");
  background-size: 50%;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
}
.CText {
  font-family: "Lora", italic;
  font-style: normal;
  font-weight: normal;
  line-height: 23px;
  color: #3d3d3f;
}
div hr {
  border: 2px solid #3d3d3f;
  border-radius: 16px;
}
input:focus + hr {
  border: 2px solid #ff5252;
  border-radius: 16px;
}
input:focus {
  outline: none;
  caret-color: #ff5252;
}
input {
  background-color: transparent;
  width: 100%;
  height: 24px;
  border: none;
}
.CWarning {
  color: #ff5252 !important;
}
.href-link {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #275d8fab;
}
</style>
