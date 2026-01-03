<template>
  <div class="dashboard fade-in">
    <!-- Header -->
    <header class="dashboard-header">
      <div>
        <h1 class="text-4xl font-bold mb-2">{{ $t('dashboard.title', { name: userStore.user.name }) }}</h1>
      </div>
      <Avatar :image="userStore.user.avatar" shape="circle" size="xlarge" />
    </header>

    <!-- XP Progress and Streak -->
    <div class="grid mt-4">
      <div class="col-12 md:col-8">
        <Card class="h-full">
          <template #content>
            <div class="flex align-items-center justify-content-between mb-3">
              <div>
                <div class="text-color-secondary mb-1">{{ $t('dashboard.xpProgress') }}</div>
                <div class="text-4xl font-bold" style="color: var(--primary-color)">
                  {{ $t('dashboard.currentXP', { xp: userStore.user.xp }) }}
                </div>
              </div>
              <Button icon="pi pi-times" text rounded @click="() => {}" />
            </div>
            <ProgressBar :value="userStore.levelProgress" :showValue="false" class="mb-2" />
            <div class="text-color-secondary text-sm">
              {{ $t('dashboard.xpToNextLevel', { xp: userStore.xpToNextLevel, level: 8 }) }}
            </div>
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-4">
        <Card class="h-full">
          <template #content>
            <div class="text-center">
              <div class="text-color-secondary mb-2">{{ $t('dashboard.streak') }}</div>
              <i class="pi pi-bolt text-6xl mb-2" style="color: var(--primary-color)"></i>
              <div class="text-5xl font-bold mb-1" style="color: var(--primary-color)">{{ $t('dashboard.streakDays', { days: userStore.user.streak }) }}</div>
              <div class="text-sm text-color-secondary">{{ $t('dashboard.streakMessage') }}</div>
              <div class="text-sm text-color-secondary mt-1">{{ $t('dashboard.keepGoing') }}</div>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Continue Learning Button -->
    <div class="mt-4">
      <Button 
        :label="$t('dashboard.continueLesson')" 
        icon="pi pi-play-circle" 
        size="large"
        class="w-full"
        @click="continueLearning"
      />
    </div>

    <!-- Course Recommendations -->
    <section class="mt-5">
      <h2 class="text-2xl font-bold mb-3">{{ $t('dashboard.courseRecommendations') }}</h2>
      <div class="grid">
        <div 
          v-for="course in recommendedCourses" 
          :key="course.id"
          class="col-12 md:col-6"
        >
          <Card class="course-card h-full" @click="goToCourse(course.id)">
            <template #header>
              <img :src="course.image" :alt="course.title" class="course-image" />
            </template>
            <template #title>{{ course.title }}</template>
            <template #content>
              <p class="text-color-secondary mb-3">{{ course.description }}</p>
              <div v-if="course.progress > 0">
                <div class="flex align-items-center justify-content-between mb-2">
                  <span class="text-sm text-color-secondary">{{ $t('dashboard.progress') }}: {{ course.progress }}%</span>
                  <Tag :value="course.status === 'completed' ? $t('dashboard.completed') : $t('dashboard.notStarted')" 
                       :severity="course.status === 'completed' ? 'success' : 'info'" />
                </div>
                <ProgressBar :value="course.progress" :showValue="false" />
              </div>
              <Tag v-else :value="$t('dashboard.notStarted')" severity="info" />
            </template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Recent Activity -->
    <section class="mt-5">
      <h2 class="text-2xl font-bold mb-3">{{ $t('dashboard.recentActivity') }}</h2>
      <Card>
        <template #content>
          <div class="activity-list">
            <div 
              v-for="activity in progressStore.activities.slice(0, 6)" 
              :key="activity.id"
              class="activity-item"
            >
              <div class="flex align-items-center gap-3">
                <div class="activity-icon">
                  <i :class="activity.icon"></i>
                </div>
                <div class="flex-1">
                  <div class="font-semibold text-color">{{ activity.title }}</div>
                </div>
                <div class="text-color-secondary text-sm">{{ activity.time }}</div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { useCoursesStore } from '../stores/courses'
import { useProgressStore } from '../stores/progress'
import { useTranslatedCourses } from '../composables/useTranslatedCourses'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const router = useRouter()
const userStore = useUserStore()
const coursesStore = useCoursesStore()
const progressStore = useProgressStore()
const { translatedCourses } = useTranslatedCourses()

const recommendedCourses = computed(() => {
  return [
    translatedCourses.value.find(c => c.id === 7),
    translatedCourses.value.find(c => c.id === 8),
    translatedCourses.value.find(c => c.id === 9),
    translatedCourses.value.find(c => c.id === 10)
  ].filter(Boolean).slice(0, 4)
})

function goToCourse(courseId) {
  router.push(`/courses/${courseId}`)
}

function continueLearning() {
  router.push('/courses/11/lesson/3')
}
</script>

<style scoped>
.dashboard {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.course-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.course-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  padding: 1rem;
  border-radius: 8px;
  background: var(--surface-overlay);
  transition: background 0.2s ease;
}

.activity-item:hover {
  background: var(--surface-border);
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(6, 182, 212, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.activity-icon i {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .dashboard-header h1 {
    font-size: 2rem;
  }
}
</style>
