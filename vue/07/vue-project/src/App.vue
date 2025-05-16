<template>
  <!-- <div>
    <p>state: {{ store.count }}</p>
    <p>getters: {{ store.doubleCount }}</p>
    <button @click="store.increment">btn</button>
  </div> -->
  <div>
    <h1>Todo Project</h1>
    <TodoForm />
    <TodoList />
  </div>

  <Example />
</template>

<script setup>
// import Example from '@/components/Example.vue'
// import { useCounterStore } from "./stores/counter.js";
// const store = useCounterStore()
// console.log(store)

import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<style scoped></style>