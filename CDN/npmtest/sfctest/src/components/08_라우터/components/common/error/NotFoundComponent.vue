<template>
  <div>
    <h2>찾을 수 없는 페이지 입니다 :(</h2>
    <h3>3초후 이전 페이지로 이동합니다.</h3>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent",
  mounted() {
    setTimeout(() => {
      this.$router.back();
    }, 3000);
  },
};
</script>

<style scoped></style>
