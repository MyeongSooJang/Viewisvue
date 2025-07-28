<template>
  <div>
    <h3>/route로 연결되는 component</h3>
    <h4>route객체 정보 확인하기</h4>
    <p>
      url주소에 대한 정보를 저장하고 있는 객체<br />
      this.$route로 객체에 접근할 수 있음<br />
    </p>
    <div v-if="this.$route.query != ''">
      <p>{{ this.$route.query }}</p>
    </div>
    <ul>
      <li v-for="(v, k) in this.$route">
        <span>{{ k }}</span>
        <span>{{ v }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RouterInfoComponent",
};
</script>

<style scoped></style>
