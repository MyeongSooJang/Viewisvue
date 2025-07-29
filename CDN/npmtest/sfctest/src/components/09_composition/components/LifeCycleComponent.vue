<template>
  <div>
    <h3>라이브사이클함수 이용하기</h3>
    <p>on으로 시작하는 hooks를 제공</p>
    <input type="text" v-model="data" />
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, ref } from "vue";

const data = ref("");
onBeforeMount(() => {
  console.log("mount전");
});
onBeforeUpdate(() => {
  console.log(data.value);
  console.log("수정되기전");
});
onMounted(() => {
  console.log("mount후 실행");
});
</script>

<style scoped></style>
