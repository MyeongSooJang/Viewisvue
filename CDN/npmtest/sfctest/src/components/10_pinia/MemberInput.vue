<template>
  <div>
    <input
      type="text"
      v-model="store.member.userId"
      placeholder="아이디"
    /><br />
    <input
      type="password"
      v-model="store.member.password"
      placeholder="패스워드"
    /><br />
    <input
      type="text"
      v-model="store.member.userName"
      placeholder="이름"
    /><br />
    <input type="text" v-model="store.member.age" placeholder="나이" /><br />
    <button @click="store.addMember">저장</button>
  </div>
</template>

<script setup>
import { memberStore } from "./stores/store2";
const store = memberStore();
</script>

<style lang="scss" scoped></style>
