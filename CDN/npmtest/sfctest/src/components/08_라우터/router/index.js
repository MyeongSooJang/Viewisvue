// router설정파일
// 특정 URL경로와 컴포넌트를 연결하는 설정
//vue-router모듈이 제공하는 createRouter()함수를 이용

import { createRouter, createWebHistory } from "vue-router";
//createRouter함수의 매개변수 -> 객체로 전달
// history : router를 적용할 방식설정 -> vue-router모듈에서 제공하는 함수 설정
// 일반적인 Web-Browser에서는 WebHistory -> createWebHistory()
// routes : 배열타입으로 route할 객체를 설정
//        [{path:"",component||components:컴포넌트}, .... ]
import HomeComponent from "@/components/08_라우터/components/HomeComponent.vue";
import RouteInfoComponent from "@/components/08_라우터/components/RouteInfoComponent.vue";
import RouterInfoComponent from "@/components/08_라우터/components/RouterInfoComponent.vue";
import MemberView from "@/components/08_라우터/components/MemberView.vue";
import QueryStringComponent from "../components/QueryStringComponent.vue";
import MemberList from "../components/MemberList.vue";
import NamedComponents from "../components/namedComponents/NamedComponents.vue";
import NamedPropsComponent from "../components/namedComponents/NamedPropsComponent.vue";
import NamedDefaultComponent from "../components/namedComponents/NamedDefaultComponent.vue";
import NamedRouterA from "../components/namedComponents/NamedRouterA.vue";
import NamedRouteB from "../components/namedComponents/NamedRouteB.vue";
import NotFoundComponent from "../components/common/error/NotFoundComponent.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeComponent },
    { path: "/route", component: RouteInfoComponent },
    { path: "/router", component: RouterInfoComponent },
    { path: "/dynamicpath/:id", component: MemberView },
    { path: "/querystring", component: QueryStringComponent },
    { path: "/memberList", component: MemberList },
    { path: "/namedtest", name: "namedtest", component: NamedComponents },
    // props 데이터는 props속성을 이용해서 대입
    {
      path: "/namedpropstest",
      name: "namedprops",
      component: NamedPropsComponent,
      props: { test: true, test1: false, test2: "나의 정보 출력" },
    },
    // 동적 경로 설정하기
    {
      path: "/nameddypath/:test",
      name: "nameddytest",
      component: NamedPropsComponent,
    },
    // 중첩 라우터 설정하기
    {
      path: "/members",
      component: MemberList,
      children: [
        { path: ":id", component: MemberView },
        {
          path: "named",
          component: NamedComponents,
        },
      ],
    },
    // 다수 컴포넌트 설정하기
    {
      path: "/usecomponents",
      name: "usecomponents",
      components: {
        default: NamedDefaultComponent,
        test: NamedRouterA,
        test2: NamedRouteB,
        proptest: NamedPropsComponent,
      },
      props: {
        proptest: {
          test: true,
          test1: true,
          test2: "우와",
        },
      },
    },
    //등록되지 않은 주소 예외처리
    { path: "/:pathMath(.*)*", component: NotFoundComponent },
  ],
}); // router 객체 생성

// //네비게이션가드 설정
// router.beforeEach((to, from) => {
//   console.log(to);
//   console.log(from);
//   // false를 반환하면 이동 중단
//   const token = sessionStorage.getItem("token");
//   return token.length != null;
// });
// router.afterEach((to, from, fail) => {
//   console.log(fail);
// });

// export default router;
