<template>
  <div>
    <h3>Router객체 이용하기</h3>
    <p>
      URL주소를 조작할 수 있는 함수를 제공하는 객체<br />
      * 다른 주소를 요청해서 연결된 컴포넌트를 랜더링시킴 this.$router를
      이용해서 접근할 수 있음 <br />
    </p>
    <ul>
      <li v-for="(v, k) in this.$router">
        <span>{{ k }}</span
        ><span> : </span><span>{{ v }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RouterInfoComponent",
};
</script>

<style lang="scss" scoped></style>
