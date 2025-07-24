<template>
  <div>
    <h3>전달받은 컴포넌트 출력</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ChildSlotComponent2",
};
</script>

<style>
#data-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#data-container > div:last-child {
  width: 30%;
}
#data-container > div:last-child {
  width: 70%;
}
</style>
