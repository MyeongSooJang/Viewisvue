<template>
  <div>
    <h3>queryString값 이용하기</h3>
    <h4>team : {{ this.$route.query.team }}</h4>
    <h4>age : {{ this.$route.query.age }}</h4>
    <h4>no : {{ this.$route.query.no }}</h4>
    <div>
      <h2>회원정보</h2>
      <!-- 팀기준으로 데이터 출력하기 이름, 나이, 팀을 출력 -->
      <div v-for="m in searchMember">
        <p>이름 : {{ m.name }}</p>
        <p>팀 : {{ m.team }}</p>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
import { members } from "@/resources/members";
export default {
  name: "QueryStringComponent",
  data() {
    return { searchMember: [] };
  },
  mounted() {
    const team = this.$route.query.team;
    this.searchMember = members.filter((m) => m.team == team);
  },
};
</script>

<style lang="scss" scoped></style>
