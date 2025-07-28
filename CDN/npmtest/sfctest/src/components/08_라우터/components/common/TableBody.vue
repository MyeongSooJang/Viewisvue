<template>
  <div>
    <tbody>
      <tr v-for="(v, i) in bodyData" :key="`${i}_${v.id}`">
        <td v-for="(val, k) in v">
          <router-link v-if="k == 'link'" :to="`/dynamicpath/${v.id}`">{{
            val
          }}</router-link>
          <span v-else>{{ val }}</span>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  name: "TableBody",
  props: ["bodyData"],
};
</script>

<style scoped></style>
