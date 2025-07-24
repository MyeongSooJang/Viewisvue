<template>
  <div>
    <h2>컴포넌트 인스턴스 속성 이용하기</h2>
    <h3>데이터 이용하기 -> data()</h3>
    <p>basicData : {{ basicData }}</p>
    <p v-text="basicData"></p>

    <h3>methods에 등록된 함수 이용하기</h3>
    <button @click="clickHandler">클릭해봐</button>

    <h3>디렉티브 속성 이용하기</h3>
    <label
      ><input type="checkbox" v-model="data.isLoading" />보여주기/감추기</label
    >
    <!-- <div v-show="data.isLoading"> -->
    <div v-if="data.subject.length > 0">
      <!-- 
        수강과목을 출력하기 문자열배열 설정 data.subject 
        <ul><li>
       -->
      <ul>
        <li v-for="s in data.subject" :key="s">{{ s }}</li>
      </ul>
    </div>
    <br />
    <input type="text" v-model="data.inputData" /><button @click="saveSubject">
      저장
    </button>
    <button @click="deleteSubject">삭제</button>

    <h3>DOM에 접근하기 -> document.getElementById()</h3>
    <p>$refs예약어를 이용함</p>
    <span ref="targetSpan">이 태그를 가져와</span>
    <button @click="domTest">DOM가져오기</button>

    <h3>속성값을 model와 연동하기</h3>
    <p>v-bind속성이용하기</p>
    <img v-bind="imgAttr" />
    <img :src="imgAttr.src" :alt="imgAttr.alt" :width="imgAttr.width" /><br />
    <!-- <input type="text" v-model="imgAttr.src" /> -->
    <input
      type="text"
      @input="
        imgAttr.src = $event.target.value;
        $event.target.value = '';
      "
    />

    <h3>클래스속성 이용하기</h3>
    <p :class="classes.sample">class이름으로 설정하기</p>
    <p :class="classes">class boolean형으로 설정하기</p>
    <p :class="{ test: true, font: data.isLoading }">이렇게 적용하기</p>
    <input type="checkbox" v-model="classes.font" />
    <input type="checkbox" v-model="classes.test2" />

    <h3>이미지변경하기</h3>
    <!-- 
        3개 이미지가 클릭할때 마다 순환되는 로직을 작성 
        button을 클릭할때 발생!
        imgList
    -->
    <img :src="imgSrc" width="200px" @click="changeImg" />
    <input type="text" @keyup.enter="addImgHandler" />
    <!-- <button @click="addImgHandler">추가</button> -->

    <h3>라이프사이클, watch, computed이용하기</h3>
    <p>{{ resultNum }}</p>
    <p>{{ resultNum }}</p>
    <p>{{ resultNum }}</p>
    <p>{{ resultNum }}</p>
    <p>{{ resultNum }}</p>
  </div>
</template>

<script>
const model = {
  basicData: "modelData이용하기",
  data: {
    isLoading: false,
    subject: [],
    inputData: "",
  },
  imgAttr: {
    src: "https://wimg.munhwa.com/news/cms/2025/07/09/news-p.v1.20250707.f0a19caf4fc84dc696a649ada68559f3_P1.jpg",
    alt: "이거슨 사진",
    width: "200px",
    height: "200px",
  },
  classes: {
    sample: "test",
    test2: true,
    font: true,
  },
  imgSrc:
    "https://img.khan.co.kr/news/2016/07/14/l_2016071501002036900161841.jpg",
  imgList: [
    "https://img.khan.co.kr/news/2016/07/14/l_2016071501002036900161841.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gJpHDZi_GLbbEWeodWfLqZglUDidHxh0Vw&s",
    "https://lh6.googleusercontent.com/proxy/par5zeMOPk55pGy-uus46ovpSLkltrIDbOIuW8yEtUmjXS6YTZfTrH6BLR1S2fCCLDlKKmbzs_iHND1Dwnp1HNF6s5GGYNo6EIq0QGMltAXCS-yv",
  ],
  addImg: "",
};
export default {
  name: "DataMethodUseComponent",
  data() {
    return model;
  },
  methods: {
    clickHandler(e) {
      console.log(e);
      alert("이제 곧 점심시간!");
    },
    saveSubject(e) {
      this.data.subject.push(this.data.inputData);
      this.data.inputData = "";
    },
    deleteSubject() {
      this.data.subject.pop();
    },
    domTest() {
      console.log(this.$refs.targetSpan);
      const $span = this.$refs.targetSpan;
      $span.innerText = "여러분 졸지 말고 힘내세요~!";
      $span.style.color = "red";
    },
    changeImg: ((count = 0) =>
      function () {
        const index = count++ % this.imgList.length;
        this.imgSrc = this.imgList[index];
      })(),
    addImgHandler(e) {
      this.imgList.push(e.target.value);
      e.target.value = "";
    },
    // changeImg() {
    //   //   let count = 0;
    // },
  },
  watch: {
    imgSrc(curVal, preVal) {
      console.log(curVal);
      console.log(preVal);
    },
    //model에 선언된 객체 내부 속성 감지하기
    //data.isLoading / data.subject
    "data.isLoading": {
      handler: function (c, p) {
        console.log(c);
        console.log(p);
      },
    },
    "data.subject": {
      handler: function (c, p) {
        console.log(c);
        console.log(p);
      },
      deep: true,
    },
  },
  mounted() {
    setInterval(() => {
      this.changeImg();
    }, 1000);
  },
  computed: {
    resultNum() {
      let total = 0;
      for (let i = 0; i < 10000; i++) {
        total += i + 1;
      }
      return total;
    },
  },
};
</script>

<style>
.test {
  background-color: magenta;
}
.test2 {
  background-color: lime;
}
.font {
  color: lightgreen;
  font-size: 30px;
}
</style>
