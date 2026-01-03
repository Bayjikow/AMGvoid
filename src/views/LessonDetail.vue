<template>
  <div v-if="lesson" class="lesson-detail fade-in">
    <!-- Lesson Header -->
    <div class="lesson-header">
      <Button 
        icon="pi pi-arrow-left" 
        text 
        rounded
        @click="goBack"
      />
      <div class="flex-1">
        <div class="text-sm text-color-secondary mb-1">
          <router-link :to="`/courses/${courseId}`" class="breadcrumb-link">
            {{ course?.title }}
          </router-link>
          <span class="mx-2">/</span>
          <span>{{ t('lesson.lesson') }} {{ lesson.id }}</span>
        </div>
        <h1 class="text-3xl font-bold">{{ getLessonTitle(courseId, lesson.id, lesson.title) }}</h1>
      </div>
      <Avatar :image="userStore.user.avatar" shape="circle" size="large" />
    </div>

    <!-- Lesson Progress -->
    <Card class="mb-4">
      <template #content>
        <div class="flex align-items-center justify-content-between mb-2">
          <span class="font-semibold">{{ t('lesson.lessonProgress') }}</span>
          <span class="text-color-secondary">{{ lesson.progress || 0 }}%</span>
        </div>
        <ProgressBar :value="lesson.progress || 0" :showValue="false" />
      </template>
    </Card>

    <!-- Lesson Content -->
    <div class="lesson-content-wrapper">
      <Card class="lesson-content-card">
        <template #content>
          <!-- Sample Lesson Content -->
          <div v-if="lesson.id === 1 && courseId === 2" class="lesson-content">
            <h2>{{ getLessonTitle(courseId, lesson.id, lesson.title) }}</h2>
            
            <p>{{ t('lessonContent.course11.lesson3.intro') }}</p>

            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" 
              alt="UI Design Concept"
              class="lesson-image"
            />
            <p class="image-caption">
              {{ t('lessonContent.course11.lesson3.fig1Caption') }}
            </p>

            <h2>{{ t('lessonContent.course11.lesson3.goldenRulesTitle') }}</h2>

            <p>{{ t('lessonContent.course11.lesson3.goldenRulesIntro') }}</p>

            <h3>{{ t('lessonContent.course11.lesson3.clarityTitle') }}</h3>
            <ul>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.clarityConsistency.title') }}</strong> {{ t('lessonContent.course11.lesson3.clarityConsistency.description') }}
              </li>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.feedbackResponsiveness.title') }}</strong> {{ t('lessonContent.course11.lesson3.feedbackResponsiveness.description') }}
              </li>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.efficiencyForgiveness.title') }}</strong> {{ t('lessonContent.course11.lesson3.efficiencyForgiveness.description') }}
              </li>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.hierarchyReadability.title') }}</strong> {{ t('lessonContent.course11.lesson3.hierarchyReadability.description') }}
              </li>
            </ul>

            <h2>{{ t('lessonContent.course11.lesson3.visualHierarchyTitle') }}</h2>

            <p>{{ t('lessonContent.course11.lesson3.visualHierarchyIntro') }}</p>

            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" 
              alt="Visual Hierarchy"
              class="lesson-image"
            />
            <p class="image-caption">
              {{ t('lessonContent.course11.lesson3.fig2Caption') }}
            </p>

            <p>{{ t('lessonContent.course11.lesson3.patternDescription') }}</p>

            <h2>{{ t('lessonContent.course11.lesson3.feedbackAffordanceTitle') }}</h2>

            <p>{{ t('lessonContent.course11.lesson3.feedbackAffordanceIntro') }}</p>

            <ul>
              <li><strong>{{ t('lessonContent.course11.lesson3.buttonStates.title') }}</strong> {{ t('lessonContent.course11.lesson3.buttonStates.description') }}</li>
              <li><strong>{{ t('lessonContent.course11.lesson3.formValidation.title') }}</strong> {{ t('lessonContent.course11.lesson3.formValidation.description') }}</li>
              <li><strong>{{ t('lessonContent.course11.lesson3.loadingIndicators.title') }}</strong> {{ t('lessonContent.course11.lesson3.loadingIndicators.description') }}</li>
            </ul>

            <p>{{ t('lessonContent.course11.lesson3.conclusion') }}</p>
          </div>

          <div v-else-if="lesson.id === 3 && courseId === 11" class="lesson-content">
            <h2>{{ t('lessonContent.course11.lesson3.title') }}</h2>
            
            <p>{{ t('lessonContent.course11.lesson3.intro') }}</p>

            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" 
              alt="UI Design Concept"
              class="lesson-image"
            />
            <p class="image-caption">
              {{ t('lessonContent.course11.lesson3.fig1Caption') }}
            </p>

            <h2>{{ t('lessonContent.course11.lesson3.goldenRulesTitle') }}</h2>

            <p>{{ t('lessonContent.course11.lesson3.goldenRulesIntro') }}</p>

            <h3>{{ t('lessonContent.course11.lesson3.clarityTitle') }}</h3>
            <ul>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.clarityConsistency.title') }}</strong> {{ t('lessonContent.course11.lesson3.clarityConsistency.description') }}
              </li>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.feedbackResponsiveness.title') }}</strong> {{ t('lessonContent.course11.lesson3.feedbackResponsiveness.description') }}
              </li>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.efficiencyForgiveness.title') }}</strong> {{ t('lessonContent.course11.lesson3.efficiencyForgiveness.description') }}
              </li>
              <li>
                <strong>{{ t('lessonContent.course11.lesson3.hierarchyReadability.title') }}</strong> {{ t('lessonContent.course11.lesson3.hierarchyReadability.description') }}
              </li>
            </ul>

            <h2>{{ t('lessonContent.course11.lesson3.visualHierarchyTitle') }}</h2>

            <p>{{ t('lessonContent.course11.lesson3.visualHierarchyIntro') }}</p>

            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" 
              alt="Visual Hierarchy"
              class="lesson-image"
            />
            <p class="image-caption">
              {{ t('lessonContent.course11.lesson3.fig2Caption') }}
            </p>

            <p>{{ t('lessonContent.course11.lesson3.patternDescription') }}</p>

            <h2>{{ t('lessonContent.course11.lesson3.feedbackAffordanceTitle') }}</h2>

            <p>{{ t('lessonContent.course11.lesson3.feedbackAffordanceIntro') }}</p>

            <ul>
              <li><strong>{{ t('lessonContent.course11.lesson3.buttonStates.title') }}</strong> {{ t('lessonContent.course11.lesson3.buttonStates.description') }}</li>
              <li><strong>{{ t('lessonContent.course11.lesson3.formValidation.title') }}</strong> {{ t('lessonContent.course11.lesson3.formValidation.description') }}</li>
              <li><strong>{{ t('lessonContent.course11.lesson3.loadingIndicators.title') }}</strong> {{ t('lessonContent.course11.lesson3.loadingIndicators.description') }}</li>
            </ul>

            <p>{{ t('lessonContent.course11.lesson3.conclusion') }}</p>
          </div>

          <!-- Generic lesson content for other lessons -->
          <div v-else class="lesson-content">
            <h2>{{ getLessonTitle(courseId, lesson.id, lesson.title) }}</h2>
            <p class="text-lg text-color-secondary mb-4">
              {{ t('lessonContent.thisLessonCovers') }}
            </p>

            <div class="info-box mb-4">
              <i class="pi pi-info-circle"></i>
              <div>
                <h3>{{ t('lessonContent.learningObjective') }}</h3>
                <ul>
                  <li>{{ t('lessonContent.objectives.understand') }}</li>
                  <li>{{ t('lessonContent.objectives.apply') }}</li>
                  <li>{{ t('lessonContent.objectives.build') }}</li>
                  <li>{{ t('lessonContent.objectives.develop') }}</li>
                </ul>
              </div>
            </div>

            <p>{{ t('lessonContent.comprehensiveIntro') }}</p>

            <h3>{{ t('lessonContent.keyConcepts') }}</h3>
            <p>{{ t('lessonContent.keyConceptsText') }}</p>

            <div class="highlight-box">
              <h4>{{ t('lessonContent.proTip') }}</h4>
              <p>{{ t('lessonContent.proTipText') }}</p>
            </div>
          </div>
        </template>
      </Card>

      <!-- Lesson Quiz -->
      <LessonQuiz 
        v-if="hasQuiz"
        :courseId="courseId"
        :lessonId="lessonId"
        @quiz-passed="onQuizPassed"
        @quiz-failed="onQuizFailed"
      />

      <!-- Lesson Navigation (only shown if no quiz or quiz is passed) -->
      <div v-if="!hasQuiz || quizPassed" class="lesson-navigation">
        <Button 
          :label="t('lesson.previousLesson')" 
          icon="pi pi-arrow-left"
          outlined
          :disabled="!previousLesson"
          @click="goToPreviousLesson"
        />
        
        <Button 
          v-if="nextLesson"
          :label="t('lesson.nextLesson')" 
          icon="pi pi-arrow-right"
          iconPos="right"
          @click="goToNextLesson"
        />
        
        <Button 
          v-else
          :label="t('lesson.completeLesson')" 
          icon="pi pi-check"
          @click="completeLesson"
        />
      </div>
    </div>
  </div>
  <div v-else class="text-center py-5">
    <ProgressSpinner />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCoursesStore } from '../stores/courses'
import { useUserStore } from '../stores/user'
import { useProgressStore } from '../stores/progress'
import { useLessonQuizStore } from '../stores/lessonQuiz'
import LessonQuiz from '../components/LessonQuiz.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const coursesStore = useCoursesStore()
const userStore = useUserStore()
const progressStore = useProgressStore()
const lessonQuizStore = useLessonQuizStore()

const courseId = computed(() => parseInt(route.params.courseId))
const lessonId = computed(() => parseInt(route.params.lessonId))
const quizPassed = ref(false)

const course = computed(() => coursesStore.activeCourse)
const lesson = computed(() => coursesStore.activeLesson)

const previousLesson = computed(() => {
  if (!course.value?.detailedLessons) return null
  const currentIndex = course.value.detailedLessons.findIndex(l => l.id === lessonId.value)
  if (currentIndex > 0) {
    return course.value.detailedLessons[currentIndex - 1]
  }
  return null
})

const nextLesson = computed(() => {
  if (!course.value?.detailedLessons) return null
  const currentIndex = course.value.detailedLessons.findIndex(l => l.id === lessonId.value)
  if (currentIndex < course.value.detailedLessons.length - 1) {
    return course.value.detailedLessons[currentIndex + 1]
  }
  return null
})

const hasQuiz = computed(() => {
  return lessonQuizStore.getLessonQuiz(courseId.value, lessonId.value) !== null
})

onMounted(() => {
  coursesStore.setActiveCourse(courseId.value)
  coursesStore.setActiveLesson(lessonId.value)
  
  // Start lesson quiz if available
  if (hasQuiz.value) {
    lessonQuizStore.startLessonQuiz(courseId.value, lessonId.value)
  }
})

function goBack() {
  router.push(`/courses/${courseId.value}`)
}

function goToPreviousLesson() {
  if (previousLesson.value) {
    router.push(`/courses/${courseId.value}/lesson/${previousLesson.value.id}`)
  }
}

function goToNextLesson() {
  if (nextLesson.value) {
    router.push(`/courses/${courseId.value}/lesson/${nextLesson.value.id}`)
  }
}

function completeLesson() {
  coursesStore.completeLesson(courseId.value, lessonId.value)
  
  // Only add XP if there's no quiz (quiz awards XP separately)
  if (!hasQuiz.value) {
    userStore.addXP(50)
  }
  
  progressStore.addActivity({
    icon: 'pi pi-book',
    title: `Completed lesson: ${lesson.value.title}`
  })
  router.push(`/courses/${courseId.value}`)
}

function onQuizPassed() {
  quizPassed.value = true
  completeLesson()
}

function onQuizFailed() {
  // Quiz failed, user needs to retry
  console.log('Quiz failed, please retry')
}

function getLessonTitle(courseId, lessonId, defaultTitle) {
  const key = `lessons.${courseId}.${lessonId}`
  const translated = t(key)
  return translated !== key ? translated : defaultTitle
}
</script>

<style scoped>
.lesson-detail {
  max-width: 1000px;
  margin: 0 auto;
}

.lesson-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.breadcrumb-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.2s;
}

.breadcrumb-link:hover {
  opacity: 0.8;
}

.lesson-content-wrapper {
  margin-bottom: 2rem;
}

.lesson-content-card {
  margin-bottom: 2rem;
}

.lesson-content {
  max-width: 800px;
  margin: 0 auto;
}

.lesson-content h2 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.lesson-content h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.lesson-content h4 {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.lesson-content p {
  margin-bottom: 1.25rem;
  line-height: 1.8;
  font-size: 1.05rem;
}

.lesson-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.lesson-content li {
  margin-bottom: 0.75rem;
  line-height: 1.7;
}

.lesson-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 12px;
  margin: 2rem auto;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.image-caption {
  text-align: center;
  font-style: italic;
  color: var(--text-color-secondary);
  font-size: 0.9rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
}

.info-box {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(6, 182, 212, 0.1);
  border-left: 4px solid var(--primary-color);
  border-radius: 8px;
  margin: 2rem 0;
}

.info-box i {
  font-size: 2rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.info-box h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.info-box ul {
  margin-bottom: 0;
}

.highlight-box {
  padding: 1.5rem;
  background: var(--surface-overlay);
  border-radius: 12px;
  margin: 2rem 0;
  border: 2px solid var(--surface-border);
}

.highlight-box h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.lesson-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media (max-width: 768px) {
  .lesson-header {
    flex-wrap: wrap;
  }

  .lesson-header h1 {
    font-size: 1.75rem;
  }

  .lesson-navigation {
    flex-direction: column;
  }

  .lesson-navigation button {
    width: 100%;
  }

  .lesson-content h2 {
    font-size: 1.5rem;
  }
}
</style>

