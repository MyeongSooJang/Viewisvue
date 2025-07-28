<template>
  <div v-for="item in items" :key="item.id">
    <slot name="icon" :checked="item.checked"></slot>
    <label>
      <input
        type="checkbox"
        :value="item.id"
        :checked="item.checked"
        @change="
          $emit('checkChangedEvent', {
            id: item.id,
            checked: $event.target.checked,
          })
        "
      />
      <slot :checked="item.checked" :label="item.label"></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "checkBoxList",
  props: ["items"],
  emits: ["checkChangedEvent"],
};
</script>

<style></style>
