<template>
  <div>
    <MyBoardListComponent :boardList="boardList" />
    번호 : <input type="text" v-model="board.boardNo" /> 제목 :
    <input type="text" v-model="board.title" /> 내용 :
    <input type="text" v-model="board.content" /> 작성자 :
    <input type="text" v-model="board.writer" /> 작성일 :
    <input type="date" v-model="board.date" />
    <button @click="addBoard">게시글 추가</button>
  </div>
</template>

<script>
import MyBoardListComponent from "./MyBoardListComponent.vue";

const model = {
  boardList: [],
  board: {
    boardNo: "",
    title: "",
    content: "",
    writer: "",
    date: "",
  },
};

export default {
  name: "BoardContainerComponent",
  components: {
    MyBoardListComponent,
  },
  data() {
    return model;
  },
  methods: {
    addBoard() {
      this.boardList.push({ ...this.board });
    },
  },
};
</script>

<style></style>
