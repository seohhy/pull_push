<template>
  <div>
    <TodoListItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup>
import TodoListItem from '@/components/TodoListItem.vue'
import { useCounterStore } from '@/stores/counter.js'

const store = useCounterStore()
</script>

<style scoped></style>