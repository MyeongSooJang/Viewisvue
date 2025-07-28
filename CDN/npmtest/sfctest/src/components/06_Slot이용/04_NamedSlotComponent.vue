<template>
  <div class="test1">
    <div>
      <slot name="test1"></slot>
    </div>
    <div>
      <slot name="test"></slot>
    </div>
    <div>
      <slot name="checkbox"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "namedSlot",
};
</script>

<style>
.test1 {
  display: flex;
}
.test1 > div {
  width: 40%;
  border: 1px solid red;
  height: 200px;
}
</style>
