<template>
<h1>App.vue</h1>
<!--
  userName 변수에 든 값을 Parent 컴포넌트에게 prop
  prop 받을 데이터가 담길 변수명은 HTML의 속성 형태로 작성
  html의 기본 컨벤션으 kebab case
  html 속성에는 문자열만 담을 수 있음
-->

<Parent 
  :user-name="userName"
/>

</template>

<script setup>
import Parent from './components/Parent.vue';
import { ref } from 'vue'
const userName = ref('Alice')
</script>

<style scoped>

</style>