<template>
  <div class="container">
    <h3>기본 태그 slot으로 가져오기</h3>
    <p>부모컴포넌트가 전달한 template을 slot태그로 출력</p>
    <ul>
      <li v-for="n in 5"><slot></slot></li>
    </ul>
    <h3>props으로 전달된 데이터와 같이 이용하기</h3>
    <div v-for="n in count"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "ChildSlotComponent",
  props: ["count"],
};
</script>

<style>
.container {
  border: 1px solid lightblue;
}
</style>
