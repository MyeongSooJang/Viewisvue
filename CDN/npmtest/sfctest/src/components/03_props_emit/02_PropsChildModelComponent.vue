<template>
  <div>
    <h3>다양한 타입 props로 전달받기</h3>
    <div>
      <h4>기본자료형 데이터</h4>
      <p>title : {{ title }}</p>
      <p>content : {{ content }}</p>
      <p>su : {{ su }}</p>

      <h4>객체 데이터</h4>
      <p>arrData : {{ arrData }}</p>
      <p>objData : {{ objData }}</p>

      <h4>배열데이터 list로 출력</h4>
      <ul>
        <li v-for="subject in arrData" :key="subject">{{ subject }}</li>
      </ul>

      <h4>객체 데이터 table로 출력하기</h4>
      <table>
        <thead>
          <tr>
            <th v-for="(v, k) in objData" :key="k">{{ k }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(v, k) in objData" :key="v">{{ v }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropsChildModelComponent",
  props: ["title", "content", "su", "arrData", "objData"],
};
</script>

<style></style>
