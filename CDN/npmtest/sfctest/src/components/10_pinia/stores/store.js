//pinia라이브러리를 이용해서 store설정하기
//store는 데이터 저장소
import { defineStore } from "pinia";
//defineStore함수를 활용하는 방법은
//1. optionsAPI방식으로 설정 : {} -> key로 설정
//2. compositionAPI방식으로 설정 ()=>{} -> 반환된 객체를 이용

//optionsAPI방식으로 설정
export const useOptionsStore = defineStore("options", {
  //state : function(){ return {}; },
  //getters : {함수,함수,..},
  //actions : {함수,함수, }
  state: function () {
    return {
      count: 0,
      name: "bslove",
    };
  },
  getters: {
    //state에 저장된 값을 가공처리 후 반환하는 함수
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    changeName(name) {
      this.name = name;
    },
  },
});
