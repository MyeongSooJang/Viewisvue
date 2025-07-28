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
      <div>
        <iframe
          width="100%"
          height="300"
          :src="`https://www.youtube.com/embed/${member.video}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <input type="text" v-model="test" />
  </div>
</template>

<script>
import { members } from "@/resources/members";
export default {
  name: "MemberView",
  data() {
    return { member: null, test: "" };
  },
  // mounted() {
  //   console.log("test");
  //   const id = this.$route.params.id;
  //   const m = members.find((member) => member.id == id);
  //   this.member = m;
  // },
  // updated() {
  //   const id = this.$route.params.id;
  //   const m = members.find((member) => member.id == id);
  //   this.member = m;

  //   console.log(this.$route);
  //   console.log(members);
  // },
  watch: {
    "$route.params.id": {
      handler: function (cur, ori) {
        console.log(cur);
        this.member = members.find((member) => member.id == cur);
        console.log(this.member);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
