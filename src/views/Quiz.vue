<template>
  <div class="quiz-page fade-in">
    <!-- Quiz Header -->
    <div v-if="quizStore.quizStarted && !quizStore.showResults" class="quiz-header-wrapper">
      <div class="quiz-brand">
        <div class="flex align-items-center gap-2">
          <i class="pi pi-shield" style="font-size: 2rem; color: var(--primary-color)"></i>
          <span class="text-2xl font-bold" style="color: var(--primary-color)">QuizQuest</span>
        </div>
        <Avatar 
          :image="userStore.user.avatar" 
          shape="circle" 
          size="large"
        />
      </div>
      
      <div class="quiz-header">
        <h1 class="text-3xl font-bold mb-2">{{ quizStore.currentQuiz.title }}</h1>
        <div class="text-color-secondary mb-3">
          {{ t('quiz.question') }} {{ quizStore.currentQuestionIndex + 1 }} {{ t('quiz.of') }} {{ quizStore.totalQuestions }}
        </div>
        <ProgressBar :value="quizStore.progress" :showValue="false" />
      </div>
    </div>

    <!-- Quiz Question -->
    <div v-if="quizStore.quizStarted && !quizStore.showResults && translatedQuestion" class="quiz-content">
      <Card class="question-card">
        <template #content>
          <h2 class="text-2xl font-semibold mb-5 line-height-3">
            {{ translatedQuestion.question }}
          </h2>

          <div class="options-container">
            <div 
              v-for="option in translatedQuestion.options" 
              :key="option.id"
              class="quiz-option"
              :class="{ 
                selected: quizStore.userAnswers[quizStore.currentQuestion.id] === option.id,
                correct: quizStore.quizCompleted && option.id === quizStore.currentQuestion.correctAnswer,
                incorrect: quizStore.quizCompleted && 
                           quizStore.userAnswers[quizStore.currentQuestion.id] === option.id && 
                           option.id !== quizStore.currentQuestion.correctAnswer
              }"
              @click="selectAnswer(option.id)"
            >
              <div class="option-label">{{ option.id }}</div>
              <div class="option-text">{{ option.text }}</div>
              <div v-if="quizStore.quizCompleted && option.id === quizStore.currentQuestion.correctAnswer" class="option-icon">
                <i class="pi pi-check-circle" style="color: #10b981; font-size: 1.5rem;"></i>
              </div>
              <div v-else-if="quizStore.quizCompleted && 
                              quizStore.userAnswers[quizStore.currentQuestion.id] === option.id && 
                              option.id !== quizStore.currentQuestion.correctAnswer" 
                   class="option-icon">
                <i class="pi pi-times-circle" style="color: #ef4444; font-size: 1.5rem;"></i>
              </div>
            </div>
          </div>

          <!-- Explanation (shown after quiz completion) -->
          <div v-if="quizStore.quizCompleted" class="explanation-box mt-4">
            <div class="flex align-items-start gap-3">
              <i class="pi pi-info-circle" style="color: var(--primary-color); font-size: 1.5rem;"></i>
              <div>
                <div class="font-bold mb-2">Explanation</div>
                <p class="text-color-secondary line-height-3">
                  {{ translatedQuestion.explanation }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Navigation Buttons -->
      <div class="quiz-actions">
        <Button 
          :label="t('quiz.previous')" 
          icon="pi pi-arrow-left"
          outlined
          :disabled="quizStore.currentQuestionIndex === 0"
          @click="quizStore.previousQuestion()"
        />
        
        <Button 
          v-if="quizStore.currentQuestionIndex < quizStore.totalQuestions - 1"
          :label="t('quiz.next')" 
          icon="pi pi-arrow-right"
          iconPos="right"
          @click="quizStore.nextQuestion()"
          :disabled="!quizStore.userAnswers[quizStore.currentQuestion.id]"
        />
        
        <Button 
          v-else
          :label="t('quiz.submitAnswer')" 
          icon="pi pi-check"
          @click="submitQuiz"
          :disabled="!quizStore.userAnswers[quizStore.currentQuestion.id]"
        />
      </div>
    </div>

    <!-- Quiz Results -->
    <div v-if="quizStore.showResults" class="quiz-results">
      <Card class="results-card">
        <template #content>
          <div class="text-center">
            <div class="results-icon mb-4">
              <i class="pi pi-trophy" style="font-size: 5rem; color: var(--primary-color);"></i>
            </div>
            
            <h1 class="text-4xl font-bold mb-3">{{ t('quiz.quizComplete') }}</h1>
            
            <div class="score-display mb-4">
              <div class="text-6xl font-bold mb-2" style="color: var(--primary-color)">
                {{ quizStore.score }}/{{ quizStore.totalQuestions }}
              </div>
              <div class="text-2xl text-color-secondary">
                {{ quizStore.scorePercentage }}% {{ t('quiz.correct') }}
              </div>
            </div>

            <div class="results-message mb-5">
              <p v-if="quizStore.scorePercentage >= 80" class="text-xl text-color-secondary">
                {{ t('quiz.excellentWork') }}
              </p>
              <p v-else-if="quizStore.scorePercentage >= 60" class="text-xl text-color-secondary">
                {{ t('quiz.goodJob') }}
              </p>
              <p v-else class="text-xl text-color-secondary">
                {{ t('quiz.keepLearning') }}
              </p>
            </div>

            <div class="xp-earned mb-5">
              <Card>
                <template #content>
                  <div class="flex align-items-center justify-content-center gap-3">
                    <i class="pi pi-star-fill" style="color: #fbbf24; font-size: 2rem;"></i>
                    <div>
                      <div class="text-2xl font-bold">+{{ quizStore.score * 10 }} XP</div>
                      <div class="text-sm text-color-secondary">{{ t('quiz.xpEarned') }}</div>
                    </div>
                  </div>
                </template>
              </Card>
            </div>

            <div class="flex gap-3 justify-content-center">
              <Button 
                :label="t('quiz.reviewAnswers')" 
                icon="pi pi-eye"
                outlined
                @click="reviewAnswers"
              />
              <Button 
                :label="t('quiz.backToCourses')" 
                icon="pi pi-arrow-left"
                @click="goToCourses"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Start Quiz (if not started) -->
    <div v-if="!quizStore.quizStarted" class="quiz-start">
      <Card class="start-card">
        <template #content>
          <div class="text-center">
            <i class="pi pi-question-circle mb-4" style="font-size: 5rem; color: var(--primary-color);"></i>
            <h1 class="text-4xl font-bold mb-3">{{ t('quiz.readyToStart') }}</h1>
            <p class="text-xl text-color-secondary mb-5">
              {{ t('quiz.questionsCount', { count: quizStore.currentQuiz?.questions.length || 0 }) }}
              {{ t('quiz.testKnowledge') }}
            </p>
            <Button 
              :label="t('quiz.startQuiz')" 
              icon="pi pi-play"
              size="large"
              @click="quizStore.quizStarted = true"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useQuizStore } from '../stores/quiz'
import { useUserStore } from '../stores/user'
import { useProgressStore } from '../stores/progress'
import { useTranslatedQuiz } from '../composables/useTranslatedQuiz'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const quizStore = useQuizStore()
const userStore = useUserStore()
const progressStore = useProgressStore()
const { currentQuestion: translatedQuestion } = useTranslatedQuiz()

onMounted(() => {
  const quizId = parseInt(route.params.id)
  quizStore.startQuiz(quizId)
})

function selectAnswer(answerId) {
  if (!quizStore.quizCompleted) {
    quizStore.answerQuestion(quizStore.currentQuestion.id, answerId)
  }
}

function submitQuiz() {
  quizStore.submitQuiz()
  
  // Award XP
  const xpEarned = quizStore.score * 10
  userStore.addXP(xpEarned)
  progressStore.addXPToHistory(xpEarned)
  
  // Add activity
  progressStore.addActivity({
    icon: 'pi pi-bolt',
    title: `Gained ${xpEarned} XP from quiz completion`
  })
}

function reviewAnswers() {
  quizStore.currentQuestionIndex = 0
  quizStore.showResults = false
}

function goToCourses() {
  quizStore.resetQuiz()
  router.push('/courses')
}
</script>

<style scoped>
.quiz-page {
  max-width: 900px;
  margin: 0 auto;
}

.quiz-header-wrapper {
  margin-bottom: 2rem;
}

.quiz-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--surface-border);
}

.quiz-header {
  margin-bottom: 2rem;
}

.quiz-content {
  margin-bottom: 2rem;
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
  padding: 1.5rem;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
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
  font-size: 1.1rem;
  line-height: 1.6;
}

.option-icon {
  flex-shrink: 0;
}

.explanation-box {
  padding: 1.5rem;
  background: var(--surface-overlay);
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
}

.quiz-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.quiz-results,
.quiz-start {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}

.results-card,
.start-card {
  max-width: 600px;
  width: 100%;
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
    font-size: 1rem;
  }

  .quiz-actions {
    flex-direction: column;
  }

  .quiz-actions button {
    width: 100%;
  }
}
</style>

