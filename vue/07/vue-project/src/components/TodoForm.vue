<template>

  <form @submit.prevent="addTodo">
    <!--양방향 바인딩. 사용자가 입력한 값 사용하기-->
    <input type="text" v-model="todoText">
    <button>CREATE</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter.js'

const store = useCounterStore()
const todoText = ref('')
const addTodo = function () {
  // 추가 로직 작성
  // 이 컴포넌트를 위한 함수로써 기능하도록
  store.addTodo(todoText.value)
  todoText.value = ''
}
</script>

<style scoped></style>