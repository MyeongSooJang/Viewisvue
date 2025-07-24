<template>
  <div class="child-container">
    <h2>자식컴포넌트</h2>
    <p>
      자식컴포넌트에서 $emit()함수에를 이용해서 부모컴포넌트에 데이터를 전송할
      수 있다 <br />
      $emit() -> 이벤트를 발생시키는 함수 <br />
      $emit("이벤트명",이벤트핸들러에 전달된 인수값(모든 타입 가능))
    </p>
    <h4>input태그에 작성된 값을 전달하기</h4>
    <input type="text" @input="$emit('basicEvent', $event.target.value)" />
    <h4>이벤트 객체 전달하기</h4>
    <button @click="$emit('objectEvent', $event)">이벤트객체 전달</button>
    <h4>다수값을 전달하기</h4>
    <input
      type="text"
      @input="$emit('manyParamEvent', $event, $event.target.value)"
    />
    <h4>model데이터와 연동한 값을 전달하기</h4>
    <button @click="modelDataSend">모델 데이터 전달</button>
    <input type="text" v-model="inputData" />
  </div>
</template>

<script>
const model = {
  inputData: "",
};
export default {
  name: "ChildComponent",
  methods: {},
  data() {
    return model;
  },
  methods: {
    modelDataSend() {
      this.$emit("modelDataSendEvent", this.inputData);
    },
  },
};
</script>

<style scoped>
.child-container {
  border: 5px solid magenta;
  padding: 3%;
}
</style>
