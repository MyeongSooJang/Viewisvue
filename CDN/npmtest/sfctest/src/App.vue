<script>
//새로 생성한 컴포넌트를 import로 불러오기
import BasicComponent from "./components/01_생성_이용/01_BasicComponent.vue";
import LocalComponent from "./components/01_생성_이용/03_LocalComponent.vue";
import DataMethodUseComponent from "./components/02_인스턴스활용/DataMethodUseComponent.vue";
import ParentComponent from "./components/03_props_emit/ParentComponent.vue";
import BoardContainerComponent from "./components/BoardList model/BoardContainerComponent.vue";
import BoardContainerComponentBs from "./components/board/BoardContainerComponentBs.vue";

export default {
  name: "App",
  components: {
    BasicComponent,
    LocalComponent,
    DataMethodUseComponent,
    ParentComponent,
    BoardContainerComponent,
    BoardContainerComponentBs,
  },
};
</script>

<template>
  <div>
    <h2>기본컴포넌트 적용하기</h2>
    <p>
      컴포넌트(*.vue)를 생성하고 사용할 컴포넌트에서 import예약어를 이용해서
      불러온 후 export default{}의 components속성에 {}타입으로 적용을
      해줘야한다.
    </p>
    <BasicComponent />
    <h2>컴포넌트를 적용하는 방식</h2>
    <h3>전역컴포넌트로 설정방식</h3>
    <p>
      main.js파일에서 components()함수를 이용해서 등록하는 방법<br />
      main.js에서 호출한 컴포넌트(App.vue)에서 import없이 사용이 가능<br />
    </p>
    <GlobalComponent />
    <h3>지역컴포넌트로 설정방식</h3>
    <p>사용할 컴포넌트에서 import, compoenents속성을 이용해서 사용<br /></p>
    <LocalComponent />

    <h2>인스턴스 속성 이용하기</h2>
    <DataMethodUseComponent />

    <h2>props이용하기</h2>
    <ParentComponent />

    <h3>연습문제</h3>
    <BoardContainerComponent />

    <h3>강사님이 만든것</h3>
    <BoardContainerComponentBs />
  </div>
</template>

<style></style>
