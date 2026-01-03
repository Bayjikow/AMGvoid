<template>
  <div class="lesson-quiz">
    <!-- Quiz Start Screen -->
    <Card v-if="!lessonQuizStore.quizStarted" class="quiz-start-card">
      <template #content>
        <div class="text-center">
          <i class="pi pi-question-circle mb-4" style="font-size: 4rem; color: var(--primary-color)"></i>
          <h2 class="text-3xl font-bold mb-3">{{ t('lessonQuiz.title') }}</h2>
          <p class="text-lg text-color-secondary mb-4">
            {{ t('lessonQuiz.description') }}
          </p>
          <p class="text-color-secondary mb-5">
            {{ t('lessonQuiz.passRequirement') }}
          </p>
          <Button 
            :label="t('lessonQuiz.startQuiz')" 
            icon="pi pi-play"
            size="large"
            @click="lessonQuizStore.quizStarted = true"
          />
        </div>
      </template>
    </Card>

    <!-- Quiz Questions -->
    <div v-else-if="lessonQuizStore.quizStarted && !lessonQuizStore.showResults">
      <Card class="mb-4">
        <template #content>
          <div class="flex align-items-center justify-content-between mb-3">
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ translatedQuizTitle }}</h3>
              <div class="text-color-secondary">
                {{ t('lessonQuiz.question') }} {{ lessonQuizStore.currentQuestionIndex + 1 }} {{ t('common.of') }} {{ lessonQuizStore.totalQuestions }}
              </div>
            </div>
          </div>
          <ProgressBar :value="lessonQuizStore.progress" :showValue="false" />
        </template>
      </Card>

      <Card class="question-card">
        <template #content>
          <h3 class="text-xl font-semibold mb-4 line-height-3">
            {{ translatedQuestion.question }}
          </h3>

          <div class="options-container">
            <div 
              v-for="option in translatedQuestion.options" 
              :key="option.id"
              class="quiz-option"
              :class="{ 
                selected: lessonQuizStore.userAnswers[lessonQuizStore.currentQuestion.id] === option.id,
                correct: lessonQuizStore.quizCompleted && option.id === lessonQuizStore.currentQuestion.correctAnswer,
                incorrect: lessonQuizStore.quizCompleted && 
                           lessonQuizStore.userAnswers[lessonQuizStore.currentQuestion.id] === option.id && 
                           option.id !== lessonQuizStore.currentQuestion.correctAnswer
              }"
              @click="selectAnswer(option.id)"
            >
              <div class="option-label">{{ option.id }}</div>
              <div class="option-text">{{ option.text }}</div>
              <div v-if="lessonQuizStore.quizCompleted && option.id === lessonQuizStore.currentQuestion.correctAnswer" class="option-icon">
                <i class="pi pi-check-circle" style="color: #10b981; font-size: 1.5rem;"></i>
              </div>
              <div v-else-if="lessonQuizStore.quizCompleted && 
                              lessonQuizStore.userAnswers[lessonQuizStore.currentQuestion.id] === option.id && 
                              option.id !== lessonQuizStore.currentQuestion.correctAnswer" 
                   class="option-icon">
                <i class="pi pi-times-circle" style="color: #ef4444; font-size: 1.5rem;"></i>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Navigation Buttons -->
      <div class="quiz-actions">
        <Button 
          :label="t('lessonQuiz.previous')" 
          icon="pi pi-arrow-left"
          outlined
          :disabled="lessonQuizStore.currentQuestionIndex === 0"
          @click="lessonQuizStore.previousQuestion()"
        />
        
        <Button 
          v-if="lessonQuizStore.currentQuestionIndex < lessonQuizStore.totalQuestions - 1"
          :label="t('lessonQuiz.next')" 
          icon="pi pi-arrow-right"
          iconPos="right"
          @click="lessonQuizStore.nextQuestion()"
          :disabled="!lessonQuizStore.userAnswers[lessonQuizStore.currentQuestion.id]"
        />
        
        <Button 
          v-else
          :label="t('lessonQuiz.submitQuiz')" 
          icon="pi pi-check"
          @click="submitQuiz"
          :disabled="!lessonQuizStore.userAnswers[lessonQuizStore.currentQuestion.id]"
        />
      </div>
    </div>

    <!-- Quiz Results -->
    <Card v-if="lessonQuizStore.showResults" class="results-card">
      <template #content>
        <div class="text-center">
          <div class="results-icon mb-4">
            <i 
              :class="lessonQuizStore.passed ? 'pi pi-check-circle' : 'pi pi-times-circle'" 
              :style="{ fontSize: '5rem', color: lessonQuizStore.passed ? '#10b981' : '#ef4444' }"
            ></i>
          </div>
          
          <h2 class="text-4xl font-bold mb-3">
            {{ lessonQuizStore.passed ? t('lessonQuiz.quizPassed') : t('lessonQuiz.quizFailed') }}
          </h2>
          
          <div class="score-display mb-4">
            <div class="text-6xl font-bold mb-2" :style="{ color: lessonQuizStore.passed ? '#10b981' : '#ef4444' }">
              {{ lessonQuizStore.score }}/{{ lessonQuizStore.totalQuestions }}
            </div>
            <div class="text-2xl text-color-secondary">
              {{ lessonQuizStore.scorePercentage }}% {{ t('lessonQuiz.correct') }}
            </div>
          </div>

          <div class="results-message mb-5">
            <p v-if="lessonQuizStore.passed" class="text-xl text-color-secondary">
              {{ t('lessonQuiz.passedMessage') }}
            </p>
            <p v-else class="text-xl text-color-secondary">
              {{ t('lessonQuiz.failedMessage') }}
            </p>
          </div>

          <div v-if="lessonQuizStore.passed" class="xp-earned mb-5">
            <Card>
              <template #content>
                <div class="flex align-items-center justify-content-center gap-3">
                  <i class="pi pi-star-fill" style="color: #fbbf24; font-size: 2rem;"></i>
                  <div>
                    <div class="text-2xl font-bold">+{{ calculateXP() }} XP</div>
                    <div class="text-sm text-color-secondary">{{ t('lessonQuiz.xpEarned') }}</div>
                  </div>
                </div>
              </template>
            </Card>
          </div>

          <div class="flex gap-3 justify-content-center flex-wrap">
            <Button 
              :label="t('lessonQuiz.reviewAnswers')" 
              icon="pi pi-eye"
              outlined
              @click="reviewAnswers"
            />
            <Button 
              v-if="lessonQuizStore.passed"
              :label="t('lesson.completeLesson')" 
              icon="pi pi-check"
              @click="completeLesson"
            />
            <Button 
              v-else
              :label="t('lessonQuiz.retryQuiz')" 
              icon="pi pi-refresh"
              severity="warning"
              @click="retryQuiz"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLessonQuizStore } from '../stores/lessonQuiz'
import { useUserStore } from '../stores/user'
import { useProgressStore } from '../stores/progress'
import { useTranslatedLessonQuiz } from '../composables/useTranslatedLessonQuiz'
import Card from 'primevue/card'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const props = defineProps({
  courseId: {
    type: Number,
    required: true
  },
  lessonId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['quiz-passed', 'quiz-failed'])

const { t } = useI18n()
const lessonQuizStore = useLessonQuizStore()
const userStore = useUserStore()
const progressStore = useProgressStore()
const { currentQuestion: translatedQuestion, quizTitle: translatedQuizTitle } = useTranslatedLessonQuiz()

function selectAnswer(answerId) {
  if (!lessonQuizStore.quizCompleted) {
    lessonQuizStore.answerQuestion(lessonQuizStore.currentQuestion.id, answerId)
  }
}

function calculateXP() {
  // XP зависит от результата: базовый 30 XP + бонус за правильные ответы
  const baseXP = 30
  const bonusXP = lessonQuizStore.score * 10
  return baseXP + bonusXP
}

function submitQuiz() {
  lessonQuizStore.submitQuiz()
  
  if (lessonQuizStore.passed) {
    // Award XP
    const xpEarned = calculateXP()
    userStore.addXP(xpEarned)
    progressStore.addXPToHistory(xpEarned)
    
    // Add activity
    progressStore.addActivity({
      icon: 'pi pi-check-circle',
      title: `Passed lesson quiz with ${lessonQuizStore.scorePercentage}%`
    })
  }
}

function reviewAnswers() {
  lessonQuizStore.currentQuestionIndex = 0
  lessonQuizStore.showResults = false
}

function completeLesson() {
  emit('quiz-passed')
}

function retryQuiz() {
  lessonQuizStore.resetQuiz()
  lessonQuizStore.startLessonQuiz(props.courseId, props.lessonId)
}
</script>

<style scoped>
.lesson-quiz {
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid var(--surface-border);
}

.quiz-start-card {
  max-width: 600px;
  margin: 0 auto;
}

.question-card {
  margin-bottom: 2rem;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--surface-card);
  border: 2px solid var(--surface-border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.quiz-option:hover:not(.correct):not(.incorrect) {
  border-color: var(--primary-color);
  background: var(--surface-overlay);
  transform: translateX(4px);
}

.quiz-option.selected:not(.correct):not(.incorrect) {
  border-color: var(--primary-color);
  background: rgba(6, 182, 212, 0.1);
}

.quiz-option.correct {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  cursor: default;
}

.quiz-option.incorrect {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  cursor: default;
}

.option-label {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--surface-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.quiz-option.selected .option-label {
  background: var(--primary-color);
  color: white;
}

.quiz-option.correct .option-label {
  background: #10b981;
  color: white;
}

.quiz-option.incorrect .option-label {
  background: #ef4444;
  color: white;
}

.option-text {
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
}

.option-icon {
  flex-shrink: 0;
}

.quiz-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.results-card {
  max-width: 600px;
  margin: 0 auto;
}

.score-display {
  padding: 2rem;
  background: var(--surface-overlay);
  border-radius: 12px;
}

.xp-earned {
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .quiz-option {
    padding: 1rem;
  }

  .option-text {
    font-size: 0.95rem;
  }

  .quiz-actions {
    flex-direction: column;
  }

  .quiz-actions button {
    width: 100%;
  }
}
</style>

