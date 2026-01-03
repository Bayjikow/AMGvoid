<template>
  <div v-if="course" class="course-detail fade-in">
    <!-- Course Header -->
    <div class="course-header-banner" :style="{ backgroundImage: `url(${course.image})` }">
      <div class="course-header-overlay">
        <Button 
          icon="pi pi-arrow-left" 
          text 
          rounded
          class="back-button"
          @click="router.push('/courses')"
        />
        <div class="course-header-content">
          <h1 class="text-5xl font-bold mb-3">{{ course.title }}</h1>
          <p class="text-xl mb-4">{{ course.description }}</p>
          <div class="flex align-items-center gap-4 flex-wrap">
            <div class="flex align-items-center gap-2">
              <i class="pi pi-book"></i>
              <span>{{ course.lessons }} {{ t('courses.lessonsLabel') }}</span>
            </div>
            <div class="flex align-items-center gap-2">
              <i class="pi pi-clock"></i>
              <span>{{ course.duration }}</span>
            </div>
            <div class="flex align-items-center gap-2">
              <i class="pi pi-user"></i>
              <span>{{ course.instructor }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Course Progress -->
    <div class="course-content">
      <div class="grid">
        <div class="col-12 md:col-8">
          <Card class="mb-4">
            <template #title>{{ t('courseDetail.overallProgress') }}</template>
            <template #content>
              <div class="flex align-items-center justify-content-between mb-3">
                <span class="text-2xl font-bold">{{ course.progress }}% {{ t('courseDetail.complete') }}</span>
                <Tag 
                  :value="getStatusLabel(course.status)" 
                  :severity="getStatusSeverity(course.status)"
                  class="text-lg px-3 py-2"
                />
              </div>
              <ProgressBar :value="course.progress" :showValue="false" />
            </template>
          </Card>

          <!-- Course Lessons -->
          <Card>
            <template #title>{{ t('courseDetail.courseLessons') }}</template>
            <template #content>
              <div v-if="course.detailedLessons" class="lessons-list">
                <div 
                  v-for="lesson in course.detailedLessons" 
                  :key="lesson.id"
                  class="lesson-item"
                  :class="{ 
                    completed: lesson.status === 'completed',
                    current: lesson.status === 'current',
                    locked: lesson.status === 'locked'
                  }"
                  @click="goToLesson(lesson)"
                >
                  <div class="lesson-icon">
                    <i v-if="lesson.status === 'completed'" class="pi pi-check-circle"></i>
                    <i v-else-if="lesson.status === 'current'" class="pi pi-play-circle"></i>
                    <i v-else-if="lesson.status === 'locked'" class="pi pi-lock"></i>
                    <i v-else class="pi pi-circle"></i>
                  </div>
                  
                  <div class="lesson-content">
                    <div class="lesson-title">{{ getLessonTitle(course.id, lesson.id, lesson.title) }}</div>
                    <div class="lesson-meta">
                      <span class="lesson-duration">
                        <i class="pi pi-clock"></i>
                        {{ lesson.duration }}
                      </span>
                      <span v-if="lesson.status === 'locked'" class="lesson-unlock">
                        {{ t('courseDetail.unlockAfter') }} {{ lesson.unlockAfter }}
                      </span>
                    </div>
                    <ProgressBar 
                      v-if="lesson.progress && lesson.progress < 100" 
                      :value="lesson.progress" 
                      :showValue="false"
                      class="mt-2"
                    />
                  </div>
                  
                  <div class="lesson-status">
                    <Tag 
                      v-if="lesson.status === 'completed'" 
                      :value="t('courseDetail.lessonStatus.completed')" 
                      severity="success"
                    />
                    <Tag 
                      v-else-if="lesson.status === 'current'" 
                      :value="t('courseDetail.lessonStatus.current')" 
                      severity="info"
                    />
                    <Tag 
                      v-else-if="lesson.status === 'locked'" 
                      :value="t('courseDetail.lessonStatus.locked')" 
                      severity="secondary"
                    />
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-5 text-color-secondary">
                <i class="pi pi-book text-4xl mb-3"></i>
                <p>{{ t('courseDetail.lessonDetailsComingSoon') }}</p>
              </div>
            </template>
          </Card>
        </div>

        <!-- Sidebar -->
        <div class="col-12 md:col-4">
          <!-- Continue Learning -->
          <Card class="mb-4">
            <template #content>
              <Button 
                :label="t('courseDetail.continueLearning')" 
                icon="pi pi-play"
                class="w-full mb-3"
                size="large"
                @click="continueLearning"
              />
              <Button 
                v-if="hasQuiz"
                :label="t('courseDetail.takeQuiz')" 
                icon="pi pi-question-circle"
                outlined
                class="w-full"
                @click="takeQuiz"
              />
            </template>
          </Card>

          <!-- Course Stats -->
          <Card>
            <template #title>{{ t('courseDetail.courseStats') }}</template>
            <template #content>
              <div class="stats-list">
                <div class="stat-item">
                  <div class="stat-label">{{ t('courseDetail.completedLessons') }}</div>
                  <div class="stat-value">{{ completedLessons }}/{{ course.lessons }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-label">{{ t('courseDetail.timeSpent') }}</div>
                  <div class="stat-value">{{ timeSpent }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-label">{{ t('courseDetail.xpEarned') }}</div>
                  <div class="stat-value">{{ xpEarned }} XP</div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-5">
    <ProgressSpinner />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCoursesStore } from '../stores/courses'
import { useQuizStore } from '../stores/quiz'
import { useTranslatedCourses } from '../composables/useTranslatedCourses'
import Card from 'primevue/card'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import ProgressSpinner from 'primevue/progressspinner'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const coursesStore = useCoursesStore()
const quizStore = useQuizStore()
const { translatedCourses } = useTranslatedCourses()

const course = computed(() => {
  const activeCourse = coursesStore.activeCourse
  if (!activeCourse) return null
  
  const translated = translatedCourses.value.find(c => c.id === activeCourse.id)
  return translated || activeCourse
})

const completedLessons = computed(() => {
  if (!course.value?.detailedLessons) return 0
  return course.value.detailedLessons.filter(l => l.status === 'completed').length
})

const timeSpent = computed(() => {
  return '4h 30m' // Mock data
})

const xpEarned = computed(() => {
  return completedLessons.value * 50
})

const hasQuiz = computed(() => {
  if (!course.value) return false
  return quizStore.getQuizByCourseId(course.value.id) !== undefined
})

onMounted(() => {
  const courseId = parseInt(route.params.id)
  coursesStore.setActiveCourse(courseId)
})

function getStatusLabel(status) {
  const labels = {
    'completed': 'Completed',
    'in-progress': 'In Progress',
    'not-started': 'Not Started'
  }
  return labels[status] || 'Not Started'
}

function getStatusSeverity(status) {
  const severities = {
    'completed': 'success',
    'in-progress': 'info',
    'not-started': 'secondary'
  }
  return severities[status] || 'secondary'
}

function goToLesson(lesson) {
  if (lesson.status !== 'locked') {
    router.push(`/courses/${course.value.id}/lesson/${lesson.id}`)
  }
}

function continueLearning() {
  if (course.value?.detailedLessons) {
    const currentLesson = course.value.detailedLessons.find(l => l.status === 'current')
    if (currentLesson) {
      router.push(`/courses/${course.value.id}/lesson/${currentLesson.id}`)
    }
  }
}

function takeQuiz() {
  const quiz = quizStore.getQuizByCourseId(course.value.id)
  if (quiz) {
    router.push(`/quiz/${quiz.id}`)
  }
}

function getLessonTitle(courseId, lessonId, defaultTitle) {
  const key = `lessons.${courseId}.${lessonId}`
  const translated = t(key)
  return translated !== key ? translated : defaultTitle
}
</script>

<style scoped>
.course-detail {
  margin: -2rem;
}

.course-header-banner {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.course-header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15, 20, 25, 0.7), rgba(15, 20, 25, 0.95));
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.back-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.course-header-content {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.course-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--surface-overlay);
  border: 2px solid var(--surface-border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lesson-item:hover:not(.locked) {
  border-color: var(--primary-color);
  transform: translateX(4px);
}

.lesson-item.completed {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}

.lesson-item.current {
  border-color: var(--primary-color);
  background: rgba(6, 182, 212, 0.05);
}

.lesson-item.locked {
  opacity: 0.6;
  cursor: not-allowed;
}

.lesson-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--surface-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.lesson-item.completed .lesson-icon {
  background: #10b981;
  color: white;
}

.lesson-item.current .lesson-icon {
  background: var(--primary-color);
  color: white;
}

.lesson-content {
  flex: 1;
}

.lesson-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.lesson-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--text-color-secondary);
}

.lesson-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lesson-unlock {
  font-style: italic;
}

.lesson-status {
  flex-shrink: 0;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--surface-overlay);
  border-radius: 8px;
}

.stat-label {
  color: var(--text-color-secondary);
  font-size: 0.875rem;
}

.stat-value {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .course-header-banner {
    height: 300px;
  }

  .course-header-content h1 {
    font-size: 2rem;
  }

  .lesson-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .lesson-status {
    align-self: flex-end;
  }
}
</style>

