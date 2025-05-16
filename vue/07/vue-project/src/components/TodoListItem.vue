<template>
  <div>
    <!-- 속성에 넣는 것과 template syntax 작성 방법 달느 것 헷갈리지 말기-->
    <input type="checkbox" :id="todo.id">
    <!--
      label 의 for와 같은 값을 가진 id를 찾아서
      label에 작성된 text Content를 클릭하면 
      찾아둔 동일 id를 가진 요소에 focus 
    -->
    <label :for="todo.id">{{ todo.text }}</label>
    <button>삭제</button>
  </div>
</template>

<script setup>
const props = defineProps({
  todo: Object
})
</script>

<style scoped></style>