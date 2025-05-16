<template>
  <div>
    <h1>User Page</h1>
    <button @click="goHome()">Home</button>
    <!--어떤 객체?에 접근할 때는 $-->
    <h2>현재 경로에 관련된 정보들은 {{ $route.params }}</h2>
    <h2>현재 경로에 관련된 정보들은 {{ $route.params.id }}</h2>

    <!-- post 혹은 profile로 이동할 수 있어야 함 -> 링크가 필요 -->
    <RouterLink :to="{ name: 'user-profile' }">profile</RouterLink>
    <RouterLink :to="{ name: 'user-post' }">posts</RouterLink>



    <!-- 중첩된 자식들의 정보 보여주고 싶음 -->
    <RouterView />
  </div>
</template>

<script setup>
// route 기능은 우리가 프로젝트에 추가한 vue-router가 가지고 있음
import { useRoute, useRouter, RouterView, RouterLink } from 'vue-router'
const route = useRoute()
const router = useRouter()

console.log(route);
console.log(router);

const goHome = function () {
  router.push({ name: 'home' })
}


</script>

<style scoped></style>