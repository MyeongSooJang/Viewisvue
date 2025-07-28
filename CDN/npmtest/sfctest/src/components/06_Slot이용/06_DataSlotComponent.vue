<template>
  <div>
    <h3>slot에서 데이터 전송하기</h3>
    <slot name="test" :title="'slot데이터'" :data="slotData" :show="true" />
    <input type="text" v-model="slotData" />
    <slot name="count" :count="count"></slot>
    <button @click="count++">증가</button>
  </div>
</template>

<script>
export default {
  name: "dataSlotComponent",
  data() {
    return {
      slotData: "slot에서 보낸 값",
      count: 0,
    };
  },
};
</script>

<style></style>
