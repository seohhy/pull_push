import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import UserProfile from '@/views/UserProfile.vue'
import UserPost from '@/views/UserPost.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // 장고 에서는 <int:user_id> 이런 식이었지
      // 여기는 뷰다. 뷰에서 변수랑 데이터랑 묶는 방법은?
      // 바인딩 ! 바인딩 하는 방법은 콜론!
      path: '/user/:id',
      // name: 'user',
      component: UserView,
      //중첩된 라우팅 관리를 위해 children 배열 생성
      children: [
        { path: '', name: 'user', component: UserProfile },
        { path: '/profile', name: 'user-profile', component: UserProfile },
        { path: '/posts', name: 'user-post', component: UserPost },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }

  ],
})

export default router
