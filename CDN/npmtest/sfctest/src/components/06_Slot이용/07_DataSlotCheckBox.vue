<template>
  <div>
    <CheckBoxList :items="items" @checkChangedEvent="checkBoxChanged">
      <template v-slot:icon="icon">
        <span v-if="icon.checked">O</span>
        <span v-else>X</span>
        <!-- <i v-if="icon.checked" class="far fa-grin-beam"></i>
        <i v-else class="far fa-frown"></i> -->
      </template>
      <template v-slot:default="df">
        <span v-if="df.checked" style="color: blue; text-decoration: underline">
          <i>{{ df.label }}</i>
        </span>
        <span v-else style="color: gray">{{ df.label }}</span>
      </template>
    </CheckBoxList>
  </div>
</template>

<script>
import CheckBoxList from "./contentcomponent/CheckBoxList.vue";

export default {
  name: "slotDataCheckBox",
  components: { CheckBoxList },
  data() {
    return {
      items: [
        { id: "V", checked: true, label: "Vue" },
        { id: "J", checked: true, label: "Java" },
        { id: "S", checked: true, label: "SQL" },
        { id: "JS", checked: true, label: "JavaScript" },
      ],
    };
  },
  methods: {
    checkBoxChanged(data) {
      let item = this.items.find((item) => item.id === data.id);
      item.checked = data.checked;
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>
