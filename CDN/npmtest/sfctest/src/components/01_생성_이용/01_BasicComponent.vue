<!-- template, script, style태그를 설정 -->
<template>
  <!-- 화면에 출력될 내용을 작성하는 영역 -->
  <div>
    <h2>나의 첫 vue 컴포넌트</h2>
    <LocalComponent />
  </div>
</template>
<script>
import LocalComponent from "./03_LocalComponent.vue";
// vue인스턴스를 설정하는 영역, data(), methods, lifecycle, watch, computed등 설정
export default {
  name: "basicComponent",
  components: { LocalComponent },
};
</script>
<style>
/* template 태그에 적용할 스타일 설정하는 영역 */
.container {
  border: 1px solid magenta;
  padding: 3%;
}
</style>
