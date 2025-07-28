<template>
  <div>
    <label>
      <input type="checkbox" v-model="check" :value="title" />
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBoxComponent",
  props: ["title"],
  data() {
    return { check: false };
  },
};
</script>

<style></style>
