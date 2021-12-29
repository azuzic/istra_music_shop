<template>
  <div>
    <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
      <button class="button-text">
        <router-link v-bind:to="href_btn">{{ btn }}</router-link>
      </button>
    </div>
    <div>
      <p class="link-text justify-center mt-2">
        {{ link_text }}
        <router-link class="pl-1 href-link" v-bind:to="href_link">
          <u>{{ link_href_text }}</u>
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
  },
};
</script>

<style scoped lang="scss">
.button-bg {
  background: #3d3d3f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.button-text {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f5dada;
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
  color: #635a5a;
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
