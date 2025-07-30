<template>
  <div class="header">
    <ul>
      <li v-for="v in navList">
        <RouterLink :to="v.path">{{ v.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
const navList = reactive([
  { name: "메인화면", path: "/" },
  { name: "자식", path: "/child" },
  { name: "자식2", path: "/child2" },
  { name: "회원관리", path: "/member" },
  { name: "demolist", path: "/demoList" },
]);
</script>

<style lang="scss" scoped></style>
