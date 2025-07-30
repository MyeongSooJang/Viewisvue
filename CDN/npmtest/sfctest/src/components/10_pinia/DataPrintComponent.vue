<template>
  <div>
    <h3>{{ store.count }}</h3>
    <h3>{{ store.name }}</h3>
  </div>
</template>

<script setup>
import { useOptionsStore } from "./stores/store";
const store = useOptionsStore();
</script>

<style lang="scss" scoped></style>
