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
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeComponent },
    { path: "/route", component: RouteInfoComponent },
    { path: "/router", component: RouterInfoComponent },
    { path: "/dynamicpath/:id", component: MemberView },
    { path: "/querystring", component: QueryStringComponent },
    { path: "/memberList", component: MemberList },
  ],
});

export default router;
