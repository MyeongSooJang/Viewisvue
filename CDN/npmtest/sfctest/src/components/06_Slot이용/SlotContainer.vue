<template>
  <div>
    <!-- <h2>Slot이용하기</h2>
    <p>
      자식 컴포넌트에 부모컴포넌트가 template 데이터를 전송하는 기능<br />
      부모컴포넌트가 전달한 template을 자식컴포넌트는 slot태그를 이용해서 출력
      <br />
    </p>
    <ChildSlotComponent :count="3">
      <p>우왕 명수님이 좋아하는 태그 ,p 태그 골라서 5시50분까지 수업해야지</p>
    </ChildSlotComponent>
    <ChildSlotComponent :count="3">
      <button @click="clickHandler">기본버튼</button>
    </ChildSlotComponent> -->
    <h3>컴포넌트 이용하기</h3>
    <ChildSlotComponent2>
      <CheckBoxComponent :title="'끝날까?'" />
    </ChildSlotComponent2>
    <ChildSlotComponent2>
      <CheckBoxComponent v-for="t in titles" :title="t" />
    </ChildSlotComponent2>
  </div>
</template>

<script>
import ChildSlotComponent from "./01_ChildSlotComponent.vue";
import ChildSlotComponent2 from "./02_ChildSlotComponent.vue";
import CheckBoxComponent from "./03_CheckBoxComponent.vue";
export default {
  name: "SlotContainer",
  components: {
    ChildSlotComponent,
    ChildSlotComponent2,
    CheckBoxComponent,
  },
  data() {
    return { titles: ["수업", "여기", "까지", "할까", "말까", "MS"] };
  },
  methods: {
    clickHandler() {
      alert("크으으으으으을리이이이이이익");
    },
  },
};
</script>

<style></style>
