<template>
<h1>Child</h1>
<p> {{ userName }} </p>
<p> {{ parentName }} </p>
<!-- childItem components는 child.vue가 가진 items 배열의 요소 수 만큼 만들거임 -->
<ChildItem 
  v-for="item in items"
  :key="item.id"
  :item="item"
  @some-event="onSomeEvent"
 />
</template>

<script setup>
import { ref } from 'vue'
import ChildItem from './ChildItem.vue'

defineProps({
  userName: String,
  parentName: String
})

const items = ref([
  {id:1, name: '사과'},
  {id:2, name: '바나나'},
  {id:3, name: '딸기'},
])

const onSomeEvent = function(arg, name) {
  console.log('데이터를 넘겨 받음')
  // console.log(item)
  for(let i=0; i<items.value.length; i+=1) {
    if (arg.id === items.value[i].id) {
      items.value[i].name = name
    }
  }
    
}
</script>

<style scoped>

</style>