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
        <div>
          <h4>히스토리에 저장된 순번으로 이동하기</h4>
          <input type="text" v-model="historynum" />
          <button @click="moveGo">history이용</button>
        </div>
        <div>
          <h4>원하는 url주소로 이동하기</h4>
          <p>
            push() : history에 이동이력을 남김 -> location.assgin <br />
            replace() : history에 이동이력을 남기지 않음 -> location.replace();
          </p>
          <select id="path" @change="movePush">
            <option :value="v.link" v-for="v in [...links, ...namedLink]">
              {{ v.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <h3>중첩 라우터 적용하기</h3>
    <p>
      부모컴포넌트와 자식컴포넌트와 주솔르 중복해서 선언할때 <br />
      부모라우터에서 children 속성을 이용해서 자식 라우터를 설정<br />
      부모 : /members 자식 : /members/:id
    </p>
    <router-link :to="`/members`">members</router-link>&nbsp;
    <router-link :to="`/members/1`">member1</router-link>&nbsp;
    <router-link :to="`/members/named`">member-named</router-link>&nbsp;
  </div>

  <h3>한개 주소에 다수 컴포넌트 적용하기</h3>
  <p>route에 components속성을 이용해서 다수의 컴포넌트를 설정 <br /></p>
  <router-link to="/usecomponents">다수 컴포넌트 출력</router-link>

  <h3>연결되지 않은 주소처리하기</h3>
  <router-link to="/1111">연결되지 않은 주소</router-link>

  <h3>네비게이션가드 활용</h3>
  <p>
    특정요청으로 component를 랜더링할때 추가 로직을 설정하는 기능 <br />
    filter, interceptor과 유사한 기능구현할 수 있음 <br />
    전역으로 설정/ 컴포넌트내에서 설정
  </p>
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
        historynum: 5,
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
      console.log(this.$router.options.history.state);
      console.log(window.history);
      this.$router.go(this.historynum);
    },
    movePush(e) {
      // this.$router.push(e.target.value);
      console.log(e.target.value);
      this.$router.replace(e.target.value);
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
