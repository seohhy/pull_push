<!-- 이름은 PascalCase로 작성 -->
<template>
  <h2>My Component</h2>
  <p> {{ message }} </p>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('값')
</script>

<style scoped>

</style>