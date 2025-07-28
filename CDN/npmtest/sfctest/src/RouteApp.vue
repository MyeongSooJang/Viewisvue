<template>
  <div>
    <!-- <h2>router를 가져오는 component출력</h2>
    <p>router-view태그를 이용해서 출력</p> -->
    <NavComponent></NavComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import NavComponent from "./components/08_라우터/components/NavComponent.vue";
export default {
  name: "RoutApp",
  components: { NavComponent },
};
</script>

<style></style>
