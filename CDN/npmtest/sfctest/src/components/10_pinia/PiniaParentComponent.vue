<template>
  <div>
    <h2>ParentComponent</h2>
    <h3>store데이터 출력하기</h3>
    <p>count : {{ store.count }}</p>
    <p>name : {{ store.name }}</p>
    <p>doubleCount : {{ store.doubleCount }}</p>
    <button @click="store.increment">증가</button>
    <button @click="store.decrement">감소</button><br />
    <input type="text" v-model="inputName" />
    <button @click="change">이름 변경</button>
  </div>
</template>

<script setup>
//store에서 제공하는 데이터 이용하기
//1. import
import { useOptionsStore } from "./stores/store";
import { ref } from "vue";
//2. 가져온 스토어 함수를 실행
const store = useOptionsStore();
const inputName = ref("");
const change = () => {
  store.changeName(inputName.value);
};
</script>

<style scoped></style>
