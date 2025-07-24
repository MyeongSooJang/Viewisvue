<template>
  <div>
    <h2>자식컴포넌트가 부모컴포넌트에 데이터 전달하기</h2>
    <p>
      부모컴포넌트에 자식컴포넌트가 $emit()로 전달한 데이터를 받기
      컴포넌트태그에 이벤트 핸들러를 등록함 <br />
      emits속성을 이용해서 이벤트 등록 <br />
    </p>
    <ChildComponent
      v-on:basicEvent="childEventHandler"
      @objectEvent="objectEventHandler"
      @manyParamEvent="manyParamEvent"
      @modelDataSendEvent="modelDataHandler"
    />

    <h3>자식이 전달한 데이터 : {{ childData }}</h3>
  </div>
</template>

<script>
import ChildComponent from "./01_ChildComponent.vue";
const model = {
  childData: "",
};
export default {
  name: "EmitContainer",
  components: { ChildComponent },
  emits: ["basicEvent", "objectEvent", "manyParamEvent", "modelDataSendEvent"],
  data() {
    return model;
  },
  methods: {
    childEventHandler(val) {
      console.log(val);
      this.childData = val;
    },
    objectEventHandler(e) {
      console.log(e);
      console.log(e.target);
      e.target.innerText = "변경되니?";
    },
    manyParamEvent(e, val) {
      console.log(e);
      console.log(val);
    },
    modelDataHandler(modelData) {
      console.log(modelData);
      this.childData = modelData;
    },
  },
};
</script>

<style></style>
