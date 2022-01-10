<template>
  <div>
    <div class="button-bg text-center pt-3 pb-3">
      <button class="button-text" type="button" @click="btnClickHandler">
        <router-link class="p" v-bind:to="href_btn">{{ btn }}</router-link>
      </button>
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
  min-width: 226px;
  background: var(--balticSea);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.button-text {
  width: 100%;
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--fresco);
}

.button-text .p {
  margin: 0px;
  padding: 0px;
  width: 100%;
  align-items: center;
  text-align: center;
  color: var(--fresco);
}

.link-text {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--solidEmpire);
}
</style>
