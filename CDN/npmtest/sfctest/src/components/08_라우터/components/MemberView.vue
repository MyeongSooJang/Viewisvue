<template>
  <div>
    <h2>회원상세</h2>
    <div class="memberview" v-if="member != null">
      <div>
        <h3>{{ member.name }}</h3>
        <img :src="member.profile" alt="프로필" width="100" height="100" />
        <h4>포지션 : {{ member.position }}</h4>
        <h4>팀 : {{ member.team }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { members } from "@/resources/members";
export default {
  name: "MemberView",
  data() {
    return { member: null };
  },
  mounted() {
    const id = this.$route.params.id;
    const m = members.find((member) => member.id == id);
    this.member = m;

    // console.log(this.$route);
    // console.log(members);
  },
};
</script>

<style lang="scss" scoped></style>
