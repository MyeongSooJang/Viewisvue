<template>
  <div>
    <h3>기본 라우터 이용하기</h3>
    <p>
      router-link태그 이용해서 원하는 컴포넌트 호출하기<br />
      a태그와 유사한 동작을 실생하는 태그<br />
      to속성을 이용해서 이동할 URL주소를 설정<br />
    </p>
    <ul>
      <li v-for="link in links" :key="link.link">
        <router-link :to="link.link">{{ link.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
const model = {
  links: [
    { label: "메인화면", link: "/" },
    { label: "route정보확인", link: "/route?data=123&name=bslove#12345" },
    { label: "router객체정보확인", link: "/router" },
    { label: "동적경로1", link: "/dynamicpath/1" },
    { label: "동적경로2", link: "/dynamicpath/2" },
  ],
};
export default {
  name: "NavComponent",
  data() {
    return model;
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-evenly;
}
li {
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
}
.container {
  display: flex;
  flex-direction: column;
}
.innercontainer {
  display: flex;
  justify-content: space-around;
}
.linked {
  background-color: lightblue;
  border-radius: 100px;
}
</style>
