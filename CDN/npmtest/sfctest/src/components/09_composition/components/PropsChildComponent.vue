<template>
  <div>
    <h2>자식컴포넌트</h2>
    <p>
      부모가 전달한 props값은 defineProp함수를 이용해서 활용
      <br /><br />
    </p>
    <p>{{ props.test }}</p>
    <p>{{ props.data }}</p>

    <h2>emit이용하기</h2>
    <p>defineEmits함수를 이용해서 등록</p>
    <button @click="handler">increment</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["test", "data"]);
const emits = defineEmits(["childEvent"]);
const handler = () => {
  //$emit
  emits("childEvent", 1);
};
</script>

<style lang="scss" scoped></style>
