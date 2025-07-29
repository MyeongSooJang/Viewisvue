<template>
  <div>
    <h2>Composition에서 데이터 이용하기</h2>
    <h3>Ref hooks이용하기</h3>
    <p>
        반응성이 있는 데이터를 생성할때 사용하는 함수<br>
        ref(초기값);<br>
        내부적으로 객체로 처리, 데이터를 값을 활용하려면 반드시 변수명.value로 접근해야함.<br></br>
        ref() 단일 값에 대한 데이터를 처리할때 사용<br/>
        객체, 배열값은 다른 hooks를 이용<br/>
    </p>
    <p>x는 {{ x }}</p>
    <p>y는 {{ y }}</p>
    X : <input type="number" v-model.number="x">
    Y : <input type="number" v-model.number="y">
    <button @click="calcAdd">계산하기</button>
    <p>result : {{ result }}</p>

    <h3>reactive() hooks이용하기</h3>
    <p>
        객체, 배열을 반응성 있는 데이터로 활용할때 사용<br/>
        reactive(초기값);<br></br>
        value없이 값을 사용할 수 있음.
    </p>
    <ul>
        <li v-for="(v,i) in reactiveArr" :key="v">
            {{ v }}
        </li>
    </ul>
    <input type="text" @keyup.enter="addData">
    <ul>
        <li v-for="(v,k) in reactiveObj" :key="k">
            {{ k }} : {{ v }}
        </li>
    </ul>
    <table>
        <thead>
            <tr>
                <th v-for="(v,k) in boards[0]">{{ k }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="board in boards">
                <td v-for="v in board">{{ v }}</td>
            </tr>
        </tbody>
    </table>
    <input type="text" placeholder="제목" v-model.trim="board.title"><br>
    <input type="text" placeholder="내용" v-model.trim="board.content">
    <button @click="addBoard">저장</button>
    <h4>{{ title }}</h4>
    <button @click="changeTitle">title변경</button>
</div>

</template>

<script setup>
import {ref} from 'vue';
const x=ref(10);
const y=ref(20);
const result=ref(0);
//함수등록하기
const calcAdd=()=>{
    //ref()생성된 객체의 값을 사용할때 value속성에 접근함
    result.value=x.value+y.value;
}

import {reactive} from 'vue';
//객체, 배열 데이터 이용하기
const reactiveArr=reactive([10,20,30,40]);
const reactiveObj=reactive({"title":"제목","content":"내용"});

const addData=(e)=>{
    reactiveArr.push(e.target.value);
}
//data(){return {boards:[{}]}}
const boards=reactive([
    {title:"제목",content:'내용'},
    {title:"제목1",content:'내용1'},
    {title:"제목2",content:'내용2'},
    {title:"제목3",content:'내용3'},
]);
const board=reactive({});
const addBoard=()=>{
    boards.push({...board});
    board.title="";
    board.content="";
}

//구조분해할당으로 저장된 값을 반응성을 잃음
let {title}=reactiveObj;
const changeTitle=()=>{
    title="test";
}


</script>

<style scoped></style>
