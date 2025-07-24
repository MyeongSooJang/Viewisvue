<template>
  <div>
    <h3>세번째 자식 컴포넌트</h3>
    <p>{{ data }}</p>
    <input type="text" @input="data = $event.target.value" />
  </div>
</template>

<script>
export default {
  name: "ThirdChildComponent",
  //   props: ["data"],
  inject: ["data"],
};
</script>

<style></style>
