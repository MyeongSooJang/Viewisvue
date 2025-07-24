<template>
  <div>
    <h3>props를 이용하는 자식 컴포넌트</h3>
    <p>
      부모가 전달한 props데이터(속성들..)는 props에 등록하고 사용
      model데이터처럼 활용 -> readOnly값
    </p>
    <h4>부모가 전달한 mydata : {{ mydata }}</h4>
    <h4>부모가 전달한 mynum : {{ mynum }}</h4>
    <!-- <input type="text" v-model="mydata" /> -->
  </div>
</template>

<script>
export default {
  name: "PropsChildComponent",
  props: ["mydata", "mynum"],
};
</script>

<style></style>
