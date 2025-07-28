<template>
  <div>
    <thead>
      <tr>
        <th v-for="head in header" :key="head">{{ head }}</th>
      </tr>
    </thead>
  </div>
</template>

<script>
export default {
  name: "TableHeader",
  props: ["header"],
};
</script>

<style lang="scss" scoped></style>
