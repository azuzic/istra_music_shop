<template>
  <div class="custom-select">
    <div class="selected" @click="open = !open">
      {{ selected }}
    </div>
    <img class="float-right" :class="open ? 'spin-pos' : 'spin-pos2'" src="@/assets/dropdown_icon.svg">
    
    <div class="items" :class="!open ? 'selectHide' : ''">
        <!--<transition-group tag="ul" name="list"> -->
        <div
            transition="thing"
            v-for="(option, i) of options"
            :key="i"
            :class="option == selected ? 'isSelected' : ''"
            @click="selected = option; open = false; $emit('input', option);">
            {{ option }}
        </div>
        <!--</transition-group>-->
    </div>
    
  </div>
</template>

<script>
export default {
  name: "CSelect",
  props: {
    options: Array,
    default: String
  },
  data() {
    return {
      selected: 
      this.default            ? this.default    : 
      this.options.length > 0 ? this.options[0] : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.thing {
  /* applied to the element when moving */
  transition: transform .5s cubic-bezier(.55,0,.1,1);
}

.custom-select .selected {
  outline: none;
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  border: 3px solid #292E32 !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #3F2C28 !important;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-left: 4px;
}

.custom-select {
  overflow: hidden;
  width: 100%;
  z-index: 1;
}
.items {
  position: absolute;
  width: calc(100% - 1rem);
  z-index: 1;
}

.items div {
  outline: none;
  width: inherit;
  height: 40px !important;
  background: #FFFFFF;
  border: 3px solid #292E32 ;
  color: #3F2C28 ;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  margin-top: -3px;
  display: flex;
  align-items: center;
  padding-left: 4px;
}

.isSelected {
  background-color: #FF5252 !important;
  color: #1a0505 !important;
}

.selectHide {
  display: none;
}
.spin-pos {
  transition: 0.25s;
  transform: scaleY(-1);
  float: right;
  margin-top: -28px;
  margin-right: 12px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 18px;
}
.spin-pos2 {
  fill: #FF5252;
  transition: 0.25s;
  transform: scaleY(1);
  float: right;
  margin-top: -26px;
  margin-right: 12px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 18px;
}
/*
.list-enter-from {
    opacity:0;
    transform: scale(0.6); 
}
.list-enter-to {
    opacity:1;
    transform: scale(1); 
}
.list-enter-active {
    transition: all 0.4s ease;
}
.list-leave-from {
    opacity:1;
    transform: scale(1); 
}
.list-leave-to {
    opacity:0;
    transform: scale(0.6); 
}
.list-leave-active {
    transition: all 0.4s ease;
}*/
</style>