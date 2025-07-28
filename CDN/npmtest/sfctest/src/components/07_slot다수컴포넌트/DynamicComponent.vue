<template>
  <div>
    <h3>다수 컴포넌트 slot으로 출력하기</h3>
    <p>component태그의 is속성을 이용해서 출력할 컴포넌트를 설정<br /></p>
    <div class="menu-container">
      <ul>
        <li v-for="(v, index) in components" @click="clickTab(v.id)">
          {{ v.label }}
        </li>
      </ul>
    </div>
    <component :is="menuTab"></component>
  </div>
</template>

<script>
import DataSlotCheckbox from "@/components/06_slot이용/07_DataSlotCheckBox.vue";
import DataMethodUseComponent from "@/components/02_인스턴스활용/DataMethodUseComponent.vue";
import ProvideContainerComponent from "@/components/05_provide_inject/ProvideContainerComponent.vue";
import CheckPropChildComponent from "@/components/03_props_emit/03_CheckPropsChildComponent.vue";
export default {
  name: "dynamicComponent",
  components: {
    DataSlotCheckbox,
    DataMethodUseComponent,
    ProvideContainerComponent,
    CheckPropChildComponent,
  },
  data() {
    return {
      menuTab: "DataSlotCheckbox",
      components: [
        { id: "DataSlotCheckbox", label: "데이터슬롯" },
        { id: "DataMethodUseComponent", label: "디렉티브이용하기" },
        { id: "ProvideContainerComponent", label: "ProvideInjectTest" },
        { id: "CheckPropChildComponent", label: "CheckProps" },
      ],
    };
  },
  methods: {
    clickTab(id) {
      this.menuTab = id;
    },
  },
};
</script>

<style scoped>
.menu-container > ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
.menu-container li {
  margin-right: 3%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 18px;
  color: magenta;
}
</style>
