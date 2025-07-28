<template>
  <div>
    <h2>slot이용하기</h2>
    <p>
      자식컴포넌트에 부모컴포넌트가 template데이터를 전송하는 기능<br />
      부모컴포넌트가 전달한 template을 자식컴포넌트는 slot태그를 이용해서
      출력<br />
    </p>
    <!-- <ChildSlotComponent :count="4">
      <p>우왕 명수님이 좋아하는 태그, p태그 골라서 5시 50분까지 수업해야지</p>
    </ChildSlotComponent>
    <ChildSlotComponent :count="3">
      <button @click="clickHandler">기본버튼</button>
    </ChildSlotComponent> -->
    <h2>컴포넌트 이용하기</h2>
    <ChildSlotComponent2>
      <CheckBoxComponent :title="'끝날까?'" />
    </ChildSlotComponent2>
    <ChildSlotComponent2>
      <CheckBoxComponent v-for="t in titles" :title="t" />
    </ChildSlotComponent2>

    <h2>이름 있는 slot활용하기</h2>
    <p>
      다수의 템플릿을 자식컴포넌트에 전달하고 이름을 기준으로 원하는 위치에
      배치할 수 있게 해줌<br />
      template태그와 v-slot속성을 이용해서 이름있는 slot을 설정
    </p>
    <NamedSlotComponent>
      <template v-slot:test>
        <p>test슬롯!</p>
      </template>
      <template v-slot:test1>
        <p>test1슬롯!</p>
      </template>
      <template v-slot:checkbox>
        <CheckBoxComponent
          v-for="t in ['java', 'oracle', 'html/css', 'javascript']"
          :title="t"
        />
      </template>
    </NamedSlotComponent>
    <LayoutComponent>
      <template v-slot:header>
        <HeaderComponent
          :title="'나의 slot Header'"
          :logo="{
            src: 'https://mblogthumb-phinf.pstatic.net/MjAyMjA3MzFfMjgz/MDAxNjU5MjY3MDMzNTkw._tuOYrZbnKaRvcw3Dy4v6Srz1KFuZvMF8K9Q8gqKBTkg.C5BUe7A9Bgde8_6Q2p1rRiVDVPxWvoJQ8Fk-HmfEhhYg.JPEG.mnluck/IMG_8534.JPG?type=w800',
            width: '80px',
            height: '80px',
          }"
        />
      </template>
      <template v-slot:aside>
        <AsideMenuComponent :menu="menu" />
      </template>
      <template v-slot:article>
        <ChildSlotComponent2>
          <CheckBoxComponent v-for="t in titles" :title="t" />
        </ChildSlotComponent2>
      </template>
    </LayoutComponent>

    <h2>슬롯으로 데이터, 이벤트 이용하기</h2>
    <p>
      슬롯으로 자식컴포넌트와 부모컴포넌트가 데이터를 공유할 수 있음<br />
      props방식을 이용<br />
      자식컴포넌트에서 slot태그에 :속성명="값" 설정 부모컴포넌트에서 설정한
      속성명의 데이터를 이용할 수 있음<br />
    </p>
    <DataSlotComponent>
      <template v-slot:test="test">
        <h4>{{ test.title }}</h4>
        <h3>{{ test.data }}</h3>
        <div v-if="test.show">나는 출력되니?</div>
      </template>
      <template v-slot:count="c">
        <h3>{{ c.count }}</h3>
      </template>
    </DataSlotComponent>
    <h3>slot이용한 CheckBox만들기</h3>
    <DataSlotCheckBox />
  </div>
</template>

<script>
import ChildSlotComponent from "./01_ChildSlotComponent.vue";
import ChildSlotComponent2 from "./02_ChildSlotComponent.vue";
import CheckBoxComponent from "./03_CheckBoxComponent.vue";
import NamedSlotComponent from "./04_NamedSlotComponent.vue";
import LayoutComponent from "./05_LayoutComponent.vue";
import AsideMenuComponent from "./contentcomponent/AsideMenuComponent.vue";
import HeaderComponent from "./contentcomponent/HeaderComponent.vue";
import DataSlotComponent from "./06_DataSlotComponent.vue";
import DataSlotCheckBox from "./07_DataSlotCheckBox.vue";

export default {
  name: "SlotContainer",
  components: {
    ChildSlotComponent,
    ChildSlotComponent2,
    CheckBoxComponent,
    NamedSlotComponent,
    LayoutComponent,
    AsideMenuComponent,
    HeaderComponent,
    DataSlotComponent,
    DataSlotCheckBox,
  },
  data() {
    return {
      titles: ["수업", "여기", "까지", "할까", "말까", "MS"],
      menu: [
        { title: "방명록", src: "angry.jpg" },
        { title: "갤러리", src: "babo.png" },
        { title: "일기", src: "heart.jpg" },
        { title: "자료실", src: "smile.jpg" },
      ],
    };
  },
  methods: {
    clickHandler() {
      alert("클릭했당~!");
    },
  },
};
</script>

<style></style>
