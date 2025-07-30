<template>
  <div>
    <h1>ChildComponent</h1>
    <button @click="store.increment">증가</button>
  </div>
</template>

<script setup>
import { useOptionsStore } from "./stores/store";
const store = useOptionsStore();
</script>

<style scoped></style>
