<template>
  <div>
    <h4>BoardList</h4>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in boardlist">
          <td>{{ b.boardNo }}</td>
          <td>{{ b.title }}</td>
          <td>{{ b.content }}</td>
          <td>{{ b.writer }}</td>
          <td>{{ b.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const model = {};
export default {
  name: "MyBoardListComponent",
};
</script>

<style></style>
