<template>
  <div>
    <h2>자식 컴포넌트에 props로 데이터 전송하기</h2>
    <h3>고정값을 전달하기</h3>
    <PropsChildComponent mydata="첫번째 고정값" mynum="19" />
    <PropsChildComponent mydata="이제 곧 쉬는 시간" mynum="10" />

    <h3>model데이터와 연동하여 데이터 전송하기</h3>
    <p>
      v-bind디렉티브속성을 이용해서 전달<br />
      전달하는 데이터 타입은 모두 가능(기본,객체,배열,함수 등)
    </p>
    <PropsChildModelComponent
      v-bind:title="mydata"
      :content="mycontent"
      :su="mynum"
      :arrData="subjectList"
      :objData="objData"
    />
    <PropsChildModelComponent
      v-bind:title="mydata"
      :content="`${mycontent}_test`"
      :su="19"
      :arrData="[1, 2, 3, 4, 5]"
      :objData="{ test: 1, test2: 2, test3: 3 }"
    />

    <h3>부모컨포넌트에서 props 전달돈 데이터를 수정하기</h3>
    <p>
      model로 연결된 props데이터를 수정하면 자식컴포넌트 재 랜더링(페이지 다시)
      수정 내용이 반영이 됨
    </p>

    <input type="text" v-model="objData.title" /><br />
    <input type="text" v-model="objData.content" /><br />
    추가할 과목 :
    <input
      type="text"
      v-model="subject"
      placeholder="추가할 과목을 입력해주세요"
    />
    <button @click="addSubject">과목추가</button>
    <PropsChildModelComponent
      v-bind:title="mydata"
      :content="`${mycontent}_test`"
      :su="10"
    />
    <h3>props데이터 유효성 검사</h3>
    <p>
      자식컴포넌트 에서 props를 설정할때 객체방식으로 설정하고 type, 필수값
      기본값 등을 설정할 수 있음
    </p>
    <CheckPropsChildComponent :number="100" title="test" />
    <!-- 
      BoardList model을 생성하고 MyBoardListComponent 
      BoardContainerComponent MyBoardListComponent를 선언하고 props boardList를 전송
      MyBoardListComponent에서 전달된 boardList를 테이블 태그로 출력

      extra해결
      BoardContainerComponent에서 board입력창을 만들어서 추가를 하면 MyBoardListComponent에 반영하기
      
      boardList : no, title, content, writer, boardDate
    -->
  </div>
</template>

<script>
import PropsChildComponent from "./01_PropsChildComponent.vue";
import PropsChildModelComponent from "./02_PropsChildModelComponent.vue";
import CheckPropsChildComponent from "./03_CheckPropsChildComponent.vue";

const model = {
  mydata: "BSLOVE",
  mycontent: "여러분 힘내세요!",
  mynum: 200,
  subjectList: ["java", "oracle", "html/css", "javascript", "vue"],
  objData: {
    no: 1,
    title: "첫번째 제목",
    content: "첫번째 내용",
    date: new Date(),
    subject: "",
  },
};
export default {
  name: "ParentComponent",
  components: {
    PropsChildComponent,
    PropsChildModelComponent,
    CheckPropsChildComponent,
  },
  data() {
    return model;
  },
  methods: {
    addSubject() {
      this.subjectList.push(this.subject);
      this.subject = "";
    },
  },
};
</script>

<style></style>
