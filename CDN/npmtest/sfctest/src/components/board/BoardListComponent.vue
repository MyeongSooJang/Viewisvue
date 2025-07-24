<template>
  <div>
    <table>
      <tr>
        <th v-for="(v, k) in boardList[0]" :key="v" v-text="k"></th>
      </tr>
      <tr v-for="board in boardList">
        <td v-for="(v, k) in board" :key="`${k}_${v}`" v-text="v"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyBoardListComponent",
  // 속성으로 boardList를 가질거임
  // props:["boardList"],
  props: {
    boardList: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style></style>
