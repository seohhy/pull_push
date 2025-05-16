import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// store 부분분
export const useCounterStore = defineStore('counter', () => {
  let id = 0
  // 사용자가 값을 CUD 할 때 반응할 수 있도록 반응형으로 작성
  const todos = ref([
    // todo 객체 들을 만든다
    // input:checkbox에 쓰일 id도 필요하고 v-for로 순회할 때 쓸 key도 필요해
    { id: id++, text: 'vue 공부', isDone: false },
    { id: id++, text: 'js 공부', isDone: false },
    { id: id++, text: 'django 공부', isDone: true },
  ])

  const addTodo = function (todoText) {
    todos.value.push({
      id: id++,
      isDone: false,
      text: todoText
    })
  }

  return {
    // 값 선언 했으면 바로 return
    todos,
    addTodo,
  }
})
