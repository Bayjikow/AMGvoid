import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: () => import('../views/CourseDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/courses/:courseId/lesson/:lessonId',
    name: 'LessonDetail',
    component: () => import('../views/LessonDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/Progress.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { guest: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login')
  } else if (to.meta.guest && userStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router

