<template>
  <div>
    <table v-if="store.memberList.length > 0">
      <thead>
        <tr>
          <th v-for="(v, k) in store.memberList[0]">{{ k }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in store.memberList" :key="member.id">
          <td v-for="v in member">{{ v }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { memberStore } from "./stores/store2";
const store = memberStore();
</script>

<style scoped></style>
