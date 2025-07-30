<template>
  <div>
    <input type="radio" name="gender" v-model="gender" value="M">남</input>
    <input type="radio" name="gender" v-model="gender" value="F">여</input>
    <button @click="gender=''">전체조회</button>
    <table>
      <thead>
        <tr>
          <th v-for="(v, k) in store.model.demoList[0]">{{ k }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="demo in gender==''?store.model.demoList:store.model.demoSearch">
          <td v-for="v in demo">{{ v }}</td>
        </tr>
      </tbody>
    </table>
    <InputContainer/>
  </div>
</template>

<script setup>
import { demoStore } from "@/components/store/deomstore";
const store = demoStore();
import { onMounted, ref, watch } from "vue";
import InputContainer from "./InputContainer.vue";
const gender=ref("");

watch(gender,(cur,ori)=>{
    store.demoByGender(cur);
});

onMounted(() => {
  store.requestDemos();
  console.log(store.model);
});
</script>

<style scoped></style>
