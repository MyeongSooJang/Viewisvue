<template>
  <div>
    <h2>props데이터, emit이용하기</h2>
    <PropsChildComponent
      test="testData"
      data="오늘은 여기까지"
      @child-event="increament"
    />
    <h3>{{ count }}</h3>
    <h3>{{ mydata }}</h3>
  </div>
</template>

<script setup>
import PropsChildComponent from "./PropsChildComponent.vue";
import { ref, inject } from "vue";

const mydata = inject("mydata");
const count = ref(0);
const increament = (su) => {
  count.value += su;
};
</script>

<style scoped></style>
