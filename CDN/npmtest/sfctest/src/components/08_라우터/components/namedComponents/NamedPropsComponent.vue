<template>
  <div>
    <h2>라우터에서 전달받은 props값 출력하기</h2>
    <p>라우터에서 props속성으로 데잍터 전송할 수 있음</p>
    <h4 v-if="test">test가 true일때 이거를 출력해</h4>
    <h4 v-if="test1">test1가 true일때 이거를 출력해</h4>
    <p>{{ test2 }}</p>
    <h3>동적경로값 가져오기</h3>
    <h4>{{ this.$route.params.test }}</h4>
    <h3>쿼리스트링 데이터 가져오기</h3>
    <p v-for="(v, k) in this.$route.query">{{ v }}</p>
  </div>
</template>

<script>
export default {
  name: "NamedPropsComponent",
  props: ["test", "test1", "test2"],
};
</script>

<style lang="scss" scoped></style>
