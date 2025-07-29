<template>
  <div>
    <h3>CompositionAPI이용하기</h3>
    <p>script태그에 setup(){}함수를 선언해서 구현</p>
    <ul>
      <li v-for="l in nav">
        <RouterLink :to="l.path">{{ l.label }}</RouterLink>
      </li>
    </ul>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  setup() {
    const nav = [
      {
        label: "반응성 데이터활용",
        path: "/refreactive",
      },
      { label: "computedwatch활용하기", path: "/computedwatch" },
      { label: "라이프사이클이용", path: "/lifecycle" },
      { label: "propsemit활용", path: "/propsemit" },
    ];
    const basicFunc = () => {
      alert("기본 compositionAPI");
    };
    return { nav, basicFunc };
  },
};
</script>

<style scoped></style>
