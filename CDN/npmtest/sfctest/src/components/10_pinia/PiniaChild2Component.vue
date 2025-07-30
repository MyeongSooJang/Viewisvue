<template>
  <div>
    <h1>Child2Component</h1>
    <button @click="store.decrement">감소</button>
    <DataPrintComponent />
  </div>
</template>

<script setup>
import DataPrintComponent from "./DataPrintComponent.vue";
import { useOptionsStore } from "./stores/store";
const store = useOptionsStore();
</script>

<style scoped></style>
