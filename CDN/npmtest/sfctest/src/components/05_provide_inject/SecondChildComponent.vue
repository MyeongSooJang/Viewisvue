<template>
  <div>
    <h2>두번째 자식 컴포넌트</h2>
    <ul class="menu">
      <li v-for="n in nav" :key="n">{{ n }}</li>
    </ul>

    <ThirdChildComponent />
  </div>
</template>

<script>
import ThirdChildComponent from "./ThirdChildComponent.vue";

export default {
  name: "SecondChildComponent",
  components: { ThirdChildComponent },
  props: ["data"],
  inject: ["nav"],
};
</script>

<style>
.menu {
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
}
</style>
