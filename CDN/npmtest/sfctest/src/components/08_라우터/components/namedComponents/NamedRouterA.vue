<template>
  <div>
    <img :src="logo" alt="로고" width="100" height="100" />
    <img :src="menu" alt="메뉴" width="100" height="100" />
    <img :src="chunjae" alt="로고" width="100" height="100" />
  </div>
</template>

<script>
import chunjae from "@/assets/images/menu-content.jpg";
import menu from "@/assets/images/screenschot.png";
export default {
  data() {
    return { logo: chunjae, menu: menu };
  },
};
</script>

<style lang="scss" scoped></style>
