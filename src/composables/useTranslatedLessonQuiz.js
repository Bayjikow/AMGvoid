import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLessonQuizStore } from '../stores/lessonQuiz'

export function useTranslatedLessonQuiz() {
  const { t } = useI18n()
  const lessonQuizStore = useLessonQuizStore()

  const currentQuestion = computed(() => {
    const question = lessonQuizStore.currentQuestion
    if (!question) return null

    const quiz = lessonQuizStore.currentLessonQuiz
    if (!quiz) return question

    // Generate quiz ID from courseId and lessonId
    const quizId = `${quiz.courseId}-${quiz.lessonId}`
    const questionId = question.id
    const key = `lessonQuizzes.${quizId}.questions.${questionId}`

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

  const quizTitle = computed(() => {
    const quiz = lessonQuizStore.currentLessonQuiz
    if (!quiz) return ''

    // Generate quiz ID from courseId and lessonId
    const quizId = `${quiz.courseId}-${quiz.lessonId}`
    const key = `lessonQuizzes.${quizId}.title`
    const translated = t(key)
    return translated !== key ? translated : quiz.title
  })

  return {
    currentQuestion,
    quizTitle
  }
}

