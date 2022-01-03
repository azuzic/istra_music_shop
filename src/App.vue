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
* {
  font-family: "Lora", italic;
  font-style: normal;
  font-weight: normal;
  line-height: 23px;
  color: #3d3d3f;
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

/*.select {
  outline: none;
  width: 100%;
  height: 33px;
  background: #FFFFFF;
  border: 3px solid #292E32 !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #3F2C28 !important;
  font-weight: 600;
}
.option {
  outline: none;
  width: 100%;
  height: 33px !important;
  background: #FFFFFF;
  border: 3px solid #292E32 ;
  color: #3F2C28 ;
  font-weight: 600;
}
select:focus {
  outline: none;
}*/

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
.tranparent {
  opacity: 0.35;
}
.tranparent-25 {
  opacity: 0.25;
}
.tranparent-50 {
  opacity: 0.50;
}
.tranparent-65 {
  opacity: 0.65;
}
.tranparent-75 {
  opacity: 0.75;
}
.active div .button-bg {
  background: #3d3d3f !important;
}
.inactive div .button-bg {
  background: #919192 !important;
}
</style>
