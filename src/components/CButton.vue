<template>
  <div>

    <div class="button-bg text-center pt-3 pb-3">
      <button class="button-text" type="button" @click="btnClickHandler">
        <router-link v-bind:to="href_btn">{{ btn }}</router-link>
      </button>
    </div>

    <div class="button-behind">
    </div>

    <div>
      <p class="link-text justify-center mt-2">
        {{ link_text }}
        <router-link class="pl-1 font-14px" v-bind:to="href_link">
          <u class="href-link">{{ link_href_text }}</u>
        </router-link>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CButton",
  props: {
    btn: String,
    link_text: String,
    link_href_text: String,
    href_link: String,
    href_btn: String,
    btnClickHandler: Function,
  },
};
</script>

<style scoped lang="scss">
.button-bg {
  width: 65vw;
  height: 51px !important;
  background: var(--BalticSea__EerieBlack);
  box-shadow: 0px 4px 4px var(--Transparent25__Transparent75);
  border-radius: 16px;
  .button-text {
    font-size: 6.5vw;
    & a {
      color: var(--Fresco__KinglyCloud);
    }
  }
}

.button-behind {
  position: relative;
  width: 65vw;
  height: 51px;
  margin-bottom: -51px;
  z-index: -20;
  bottom: 51px;
  background: var(--Snow__DarkToneInk);
  border-radius: 16px;
}

.link-text {
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: var(--SolidEmpire__DarkSouls);
}
</style>
