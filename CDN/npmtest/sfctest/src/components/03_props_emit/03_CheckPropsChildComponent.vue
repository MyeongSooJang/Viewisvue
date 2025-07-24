<template>
  <div id="container">
    <h3>props 값 유효성 검사하기</h3>
    <p>number(숫자) : {{ number }} {{ number * 10 }}</p>
    <p>title(문자열) : {{ title }} {{ title.length }}</p>
  </div>
</template>

<script>
export default {
  name: "CheckPropsChildComponent",
  // props: ["number","title"]
  props: {
    number: {
      // type: 타입 -> String, Number, Object
      // required: 필수값
      // default: 기본값 설정
      // validator: 함수 function(val) {return boolean}
      type: Number,
      required: true,
      validator: function (val) {
        return val > 200;
      },
    },
    title: {
      type: String,
      required: true,
      default: "기본값",
    },
  },
};
</script>

<style>
.container {
  border: 1px solid red;
  width: 70%;
  height: 200px;
}
</style>
