<template>
<h1>Parent</h1>
<p> {{ userName }} </p>
<Child 
  :user-name="userName"
  parent-name="Bella"
/>
</template>

<script setup>
import Child from './Child.vue'
  //prop 정보를 정의하는 방법 여러가지
  defineProps({
    // html 속성은 케밥케이스지만
    // js 변수명은 카멜케이스가 기본
    userName: String
    // userName: {
    //   type: String,
    //   required: true
    // }
  })


</script>

<style scoped>

</style>