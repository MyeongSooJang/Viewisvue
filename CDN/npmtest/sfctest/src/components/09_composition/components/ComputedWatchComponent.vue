<template>
  <div>
    <h3>computed이용하기</h3>
    <input type="text" v-model="su" />
    <h2>computed호출</h2>
    <p>{{ calcComputed }}</p>
    <p>{{ calcComputed }}</p>
    <p>{{ calcComputed }}</p>
    <p>{{ calcComputed }}</p>
    <h2>일반함수</h2>
    <p>{{ calcData() }}</p>
    <p>{{ calcData() }}</p>
    <p>{{ calcData() }}</p>
    <p>{{ calcData() }}</p>

    <h2>watch적용</h2>
    <input type="text" v-model="strData" />
    <p>{{ strData }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const su = ref(0);
const calcComputed = computed(() => {
  console.log("computed - calcComputed실행");
  return Number(su.value) * 10;
});
const calcData = () => {
  console.log("일반함수");
  return Number(su.value) * 10;
};
const strData = ref("");
watch(strData, (cur, ori) => {
  console.log(cur);
  console.log(ori);
});
watch(su, (cur, ori) => {
  console.log(cur);
  console.log(ori);
});
</script>

<style scoped></style>
