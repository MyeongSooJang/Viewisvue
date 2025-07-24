<template>
  <div>
    <h3>게시글 리스트</h3>
    <div id="board-list">
      <BoardListComponent :boardList="boardList" />
    </div>
    <div id="board-input">
      <BoardInputComponent
        @addBoardEvent="addBoardEvent"
        :inputData="{ title: 'text', count: 'number', email: 'text' }"
      />
    </div>
  </div>
</template>

<script>
import { generator } from "../../assets/common";
import BoardContainerComponent from "../BoardList model/BoardContainerComponent.vue";
import BoardListComponent from "./BoardListComponent.vue";
import BoardInputComponent from "./BoardInputComponent.vue";
const model = {
  boardList: [],
  // board: {
  //   no: 0,
  //   title: "",
  //   content: "",
  //   writer: "",
  //   date: new Date(),
  // },
};
export default {
  name: "BoardContainerComponentBs",
  components: {
    BoardListComponent,
    BoardInputComponent,
  },
  data() {
    return model;
  },
  emits: ["addBoardEvent"],
  methods: {
    addBoardEvent(board) {
      this.boardList.push({
        ...board,
        no: boardNoSequence.next().value,
        date: new Date(),
      });
    },
  },
};

const boardNoSequence = generator("board");
</script>

<style></style>
