<template>
<h1>ChildItem.</h1>
<p> {{ item.id }} </p>
<p> {{ item.name }} </p>
<!-- 버튼 클릭 시 ,someEvent 발생 -->
<!-- <button @click="$emit('someEvent')">클릭</button> -->
 <button @click="buttonClick">클릭</button>
</template>

<script setup>
  const props = defineProps({
    item: Object
  })

  // 절대, 하위 컴포넌트에서 prop 받은 데이터를 변경하기 위해 준 기능은 아님!
  // props.item = {id:4, name:"망고"} 쓰지 말 것!!
  const emit = defineEmits(['someEvent'])
  const buttonClick = function () {
    // 이곳에서 복잡한 로직을 실행 가능
   emit('someEvent', props.item, '구아바')

  }
</script>

<style scoped>

</style>