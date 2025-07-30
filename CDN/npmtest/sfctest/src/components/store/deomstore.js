import { defineStore } from "pinia";
import { reactive } from "vue";

export const demoStore = defineStore("demoStore", () => {
  const model = reactive({ demoList: [], demoSearch: [] });
  const demo = reactive({
    devAge: 0,
    devEmail: "",
    devGender: "",
    devLang: [],
    devName: "",
  });

  const demoByGender = function (gender) {
    model.demoSearch = model.demoList.filter((d) => d.devGender == gender);
    // model.demoList = model.demoList.filter((d) => d.devGender == gender);
  };
  const requestDemos = async function () {
    const response = await fetch("http://localhost:9999/demos");
    if (response.ok) {
      const data = await response.json();
      model.demoList = data;
    } else {
      console.error("데이터를 가져오는데 실패!");
    }
  };
  const saveRequest = async function () {
    const response = await fetch("http://localhost:9999/demos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(demo),
    });
    if (response.ok) {
      alert("저장성공");
      //   model.demoList.push({ ...demo });
      //   console.log(model.demoList);
      requestDemos();
    } else {
      console.error("데이터를 가져오는데 실패!");
    }
  };
  return { model, demo, requestDemos, demoByGender, saveRequest };
});
