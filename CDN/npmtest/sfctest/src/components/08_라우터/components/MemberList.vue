<template>
  <div>
    <h3>멤버리스트</h3>
    <table>
      <thead>
        <tr>
          <th>프로필</th>
          <th>이름</th>
          <th>팀</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members">
          <td><img :src="member.profile" alt="프로필" /></td>
          <td>
            <router-link :to="`/dynamicpath/${member.id}`">{{
              member.name
            }}</router-link>
          </td>
          <td>{{ member.team }}</td>
        </tr>
      </tbody>
    </table>
    <h3>자식컴포넌트 출력</h3>
    <router-view></router-view>
  </div>
</template>

<script>
import { members } from "@/resources/members";
import { RouterLink } from "vue-router";
export default {
  name: "MemberList",
  data() {
    return { members: members };
  },
  //네비게이션 가드
  beforeRouteEnter(to, from, next) {
    console.log("다음", to);
    console.log("이전", from);
    // next -> component를 랜더링할지를 결정하는 함수
    // next() -> 랜더링 실행
    // next(False) -> 랜더링하지 않음
    next({
      path: "/querystring",
      query: { team: "풀스택 11기", age: 19, no: 0 },
    });
  },
  beforeRouteLeave(to, from) {},
};
</script>

<style lang="scss" scoped></style>
