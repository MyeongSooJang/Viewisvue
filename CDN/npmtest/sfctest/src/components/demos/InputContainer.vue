<template>
  <div>
    <div v-for="(v, k) in store.demo">
      <div v-if="!['devGender', 'devLang'].includes(k)">
        <input type="text" v-model="store.demo[k]" :placeholder="k" />
      </div>
      <div v-else-if="'devGender' == k">
        <div v-for="v in ['M', 'F']">
          <input type="radio" v-model="store.demo[k]" :value="v" />{{ v }}
        </div>
      </div>
      <div v-else-if="'devLang' == k">
        <div v-for="v in ['java', 'javascript', 'c']">
          <input type="checkbox" v-model="store.demo[k]" :value="v" />{{ v }}
        </div>
      </div>
    </div>
    <button @click="saveDemo">저장</button>
  </div>
</template>

<script setup>
import { demoStore } from "@/components/store/deomstore";
const store = demoStore();
const saveDemo = () => {
  store.saveRequest();
};
</script>

<style lang="scss" scoped></style>
