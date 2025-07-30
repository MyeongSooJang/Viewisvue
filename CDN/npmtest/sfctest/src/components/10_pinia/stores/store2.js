import { defineStore } from "pinia";
// compositionAPI
import { reactive, computed } from "vue";
export const memberStore = defineStore("memberStore", () => {
  // state선언
  const memberList = [];
  const member = reactive({});

  // getter 선언 -> computed함수
  const memberListCount = computed(() => memberList.length * 10);

  // action 선언
  function setMemberName(name) {
    this.member.name = name;
  }
  function addMember() {
    this.memberList.push(this.member);
  }

  //선언한 변수, 함수 객체로 변환
  return { memberList, member, memberListCount, setMemberName, addMember };
});
