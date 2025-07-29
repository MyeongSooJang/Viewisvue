<template>
  <div>
    <!-- <h2>router를 가져오는 component출력</h2>
    <p>router-view태그를 이용해서 출력</p> -->
    <NavComponent></NavComponent>
    <!-- 다수 컴포넌트 설정하기 -->
    <router-view></router-view>
    <router-view name="test"></router-view>
    <router-view name="test2"></router-view>
    <router-view name="proptest"></router-view>
  </div>
</template>

<script>
import NavComponent from "./components/08_라우터/components/NavComponent.vue";
export default {
  name: "RoutApp",
  components: { NavComponent },
  mounted() {
    sessionStorage.setItem("token", "lunch");
  },
};
</script>

<style></style>
