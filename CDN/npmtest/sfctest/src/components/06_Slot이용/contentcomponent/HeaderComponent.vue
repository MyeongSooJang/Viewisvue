<template>
  <div class="header-container">
    <img :src="logo.src" alt="로고" :width="logo.width" :height="logo.height" />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import defaultLogo from "@/assets/images/chunjae_logo.png";
export default {
  name: "headerComponent",
  props: {
    logo: {
      type: Object,
      default: {
        src: defaultLogo,
        width: 100,
        height: 100,
      },
      requried: true,
    },
    title: { type: String, default: "제목없음", requried: true },
  },
};
</script>

<style>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header-container > img {
  width: 15%;
  border-radius: 50px;
}
.header-container > h2 {
  width: 50%;
  text-align: center;
}
</style>
