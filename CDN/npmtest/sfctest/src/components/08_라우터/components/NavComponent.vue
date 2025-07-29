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
    <h2>이름을 설정한 라우터 이용하기</h2>
    <ul>
      <li v-for="link in namedLink" :key="link.link">
        <router-link :to="link.link">{{ link.label }}</router-link>
      </li>
    </ul>
    <h2>라우터 함수를 이용해서 페이지 전환하기</h2>
    <p>
      this.$router객체가 제공하는 함수를 이용해서 페이지 이동할 수 있다. <br />
      push('route등록된 주소'), replace('route등록된 주소'), forward(), back(),
      go(숫자)
    </p>
    <div class="innercontainer">
      <div>
        <h4>버튼으로 이동하기 foward, back</h4>
        <button @click="moveBack">뒤로가기</button>
        <button @click="moveFoward">앞으로가기</button>
      </div>
    </div>
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
    { label: "쿼리스트링이용", link: "/querystring?team=토트넘&age=25&no=5" },
    { label: "멤버리스트", link: "/memberList" },
  ],
  // index.js routes=[{path, component,name="이름"}]
  // router-link태그의 :to속성에 name값을 이용할 수 있음

  namedLink: [
    { label: "이름으로 연걸", link: { name: "namedtest" } },
    { label: "props테스트", link: { name: "namedprops" } },
    {
      label: "이름으로 연결된 동적 경로",
      link: {
        name: "nameddytest",
        params: { test: "lunch" },
        query: { name: "lunch", value: "good" },
      },
    },
  ],
};
export default {
  name: "NavComponent",
  data() {
    return model;
  },
  methods: {
    moveBack() {
      this.$router.back();
    },
    moveFoward() {
      this.$router.forward();
    },
    moveGo() {
      // 통상적으로 -1 or 1
      this.$router.go(-1);
    },
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
