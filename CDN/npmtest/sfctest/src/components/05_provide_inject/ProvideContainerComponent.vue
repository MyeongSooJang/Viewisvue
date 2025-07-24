<template>
  <div>
    <h2>모든 자식들이 사용할 수 잇는 데이터 설정하기</h2>
    <h4>{{ data }}</h4>
    <FirstChildComponent />
  </div>
</template>

<script>
import FirstChildComponent from "./FirstChildComponent.vue";
import { ref } from "vue";

const model = {
  data: "데이터야 날아가라",
};
export default {
  name: "ProviderContainerComponent",
  components: { FirstChildComponent },
  data() {
    return model;
  },
  provide: function () {
    return {
      // 기본적으로 수정이 불가능
      // ref()함수를 이용해서 반응성이 있는 데이터로 설정할 수 있음
      // vue 모듈에 있어 import로 가져와서 사용

      data: ref(this.data),
      nav: ["HOME", "NOTICE", "BOARD", "GALLARY"],
      obj: { name: "유병승강사님", age: 19 },
    };
  },
};
</script>

<style></style>
