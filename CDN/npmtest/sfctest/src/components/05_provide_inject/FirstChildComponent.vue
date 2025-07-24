<template>
  <div>
    <h2>첫번째 자식 컴포넌트</h2>
    <p>{{ obj }}</p>
    <p>{{ data }}</p>
    <SecondChildComponent />
  </div>
</template>

<script>
import SecondChildComponent from "./SecondChildComponent.vue";

export default {
  name: "FirstChildComponent",
  components: { SecondChildComponent },
  // props: ["data"],
  inject: ["obj", "data"],
};
</script>

<style></style>
