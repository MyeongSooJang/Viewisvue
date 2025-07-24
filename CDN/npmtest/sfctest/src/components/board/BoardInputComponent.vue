<template>
  <div>
    <input v-for="(v, k) in inputData" :type="v" v-model="data[k]" />
    <button @click="addBoard">저장</button>
  </div>
</template>

<script>
const model = {
  data: {},
  //   board: {
  //     title: "",
  //     content: "",
  //     writer: "",
  //   },
};
export default {
  name: "BoardInputComponent",
  props: {
    inputData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return model;
  },
  methods: {
    addBoard() {
      this.$emit("addBoardEvent", this.data);
    },
  },
};
</script>

<style>
.input-container {
  display: flex;
}
</style>
