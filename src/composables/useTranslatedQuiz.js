import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuizStore } from '../stores/quiz'

export function useTranslatedQuiz() {
  const { t } = useI18n()
  const quizStore = useQuizStore()

  const currentQuestion = computed(() => {
    const question = quizStore.currentQuestion
    if (!question) return null

    const quizId = quizStore.currentQuiz?.id
    const questionId = question.id
    const key = `quizQuestions.${quizId}.${questionId}`

    // Try to get translation
    const translatedQuestion = t(`${key}.question`)
    const hasTranslation = translatedQuestion !== `${key}.question`

    if (!hasTranslation) {
      return question
    }

    return {
      ...question,
      question: translatedQuestion,
      options: question.options.map(opt => ({
        ...opt,
        text: t(`${key}.options.${opt.id}`)
      })),
      explanation: t(`${key}.explanation`)
    }
  })

  return {
    currentQuestion
  }
}

