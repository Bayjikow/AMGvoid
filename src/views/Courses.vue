<template>
  <div class="courses-page fade-in">
    <header class="page-header mb-5">
      <div>
        <h1 class="text-4xl font-bold mb-2">{{ $t('courses.title') }}</h1>
        <p class="text-color-secondary text-lg">{{ $t('courses.subtitle') }}</p>
      </div>
    </header>

    <!-- Courses Grid -->
    <div class="grid">
      <div 
        v-for="course in translatedCourses" 
        :key="course.id"
        class="col-12 md:col-6 lg:col-4"
      >
        <Card class="course-card h-full" @click="goToCourse(course.id)">
          <template #header>
            <div class="course-header">
              <img :src="course.image" :alt="course.title" class="course-image" />
              <div class="course-icon">
                <i :class="course.icon"></i>
              </div>
            </div>
          </template>
          <template #title>
            <div class="flex align-items-start justify-content-between">
              <span class="flex-1">{{ course.title }}</span>
            </div>
          </template>
          <template #content>
            <p class="text-color-secondary mb-3 line-height-3">{{ course.description }}</p>
            
            <div class="course-meta mb-3">
              <div class="flex align-items-center gap-2 text-sm text-color-secondary">
                <i class="pi pi-book"></i>
                <span>{{ $t('courses.lessons', { count: course.lessons }) }}</span>
              </div>
              <div class="flex align-items-center gap-2 text-sm text-color-secondary">
                <i class="pi pi-clock"></i>
                <span>{{ $t('courses.duration', { time: course.duration }) }}</span>
              </div>
            </div>

            <div v-if="course.progress > 0" class="mb-3">
              <div class="flex align-items-center justify-content-between mb-2">
                <span class="text-sm font-semibold">{{ $t('courses.progress', { percent: course.progress }) }}</span>
                <Tag 
                  :value="getStatusLabel(course.status)" 
                  :severity="getStatusSeverity(course.status)" 
                />
              </div>
              <ProgressBar :value="course.progress" :showValue="false" />
            </div>
            <div v-else>
              <Button :label="$t('courses.startCourse')" icon="pi pi-play" class="w-full" outlined />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCoursesStore } from '../stores/courses'
import { useTranslatedCourses } from '../composables/useTranslatedCourses'
import Card from 'primevue/card'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const router = useRouter()
const { t } = useI18n()
const coursesStore = useCoursesStore()
const { translatedCourses } = useTranslatedCourses()

function goToCourse(courseId) {
  router.push(`/courses/${courseId}`)
}

function getStatusLabel(status) {
  const labels = {
    'completed': t('dashboard.completed'),
    'in-progress': t('dashboard.inProgress'),
    'not-started': t('dashboard.notStarted')
  }
  return labels[status] || t('dashboard.notStarted')
}

function getStatusSeverity(status) {
  const severities = {
    'completed': 'success',
    'in-progress': 'info',
    'not-started': 'secondary'
  }
  return severities[status] || 'secondary'
}
</script>

<style scoped>
.courses-page {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-card {
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.course-header {
  position: relative;
  overflow: hidden;
}

.course-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image {
  transform: scale(1.05);
}

.course-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(6, 182, 212, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.course-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: var(--surface-overlay);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}
</style>

