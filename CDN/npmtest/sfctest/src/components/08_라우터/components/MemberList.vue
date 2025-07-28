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
};
</script>

<style lang="scss" scoped></style>
