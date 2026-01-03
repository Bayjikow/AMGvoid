import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLessonQuizStore = defineStore('lessonQuiz', () => {
  // Мини-тесты для каждого урока (5 вопросов)
  const lessonQuizzes = ref({
    // UI/UX Design Fundamentals - Lesson 1
    '2-1': {
      lessonId: 1,
      courseId: 2,
      title: 'Understanding User Interface - Quiz',
      questions: [
        {
          id: 1,
          question: 'What is the primary goal of User Interface (UI) design?',
          options: [
            { id: 'A', text: 'To make the application look colorful and attractive' },
            { id: 'B', text: 'To create a visual gateway for users to interact with the product effectively' },
            { id: 'C', text: 'To add as many features as possible' },
            { id: 'D', text: 'To reduce development time' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 2,
          question: 'Which principle emphasizes that UI elements should behave predictably?',
          options: [
            { id: 'A', text: 'Efficiency' },
            { id: 'B', text: 'Hierarchy' },
            { id: 'C', text: 'Clarity and Consistency' },
            { id: 'D', text: 'Forgiveness' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 3,
          question: 'What does "affordance" mean in UI design?',
          options: [
            { id: 'A', text: 'The cost of implementing a feature' },
            { id: 'B', text: 'Visual characteristics that suggest how an element should be used' },
            { id: 'C', text: 'The speed of user interaction' },
            { id: 'D', text: 'The color scheme of the interface' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 4,
          question: 'Which reading pattern do users commonly follow on the web?',
          options: [
            { id: 'A', text: 'Circular pattern' },
            { id: 'B', text: 'Random pattern' },
            { id: 'C', text: 'F-pattern and Z-pattern' },
            { id: 'D', text: 'Diagonal pattern' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 5,
          question: 'What is the purpose of providing feedback in UI design?',
          options: [
            { id: 'A', text: 'To slow down user interactions' },
            { id: 'B', text: 'To confirm that user actions have been registered' },
            { id: 'C', text: 'To display advertisements' },
            { id: 'D', text: 'To increase page load time' }
          ],
          correctAnswer: 'B'
        }
      ]
    },
    // UI/UX Design Fundamentals - Lesson 2
    '2-2': {
      lessonId: 2,
      courseId: 2,
      title: 'Color Theory and Typography - Quiz',
      questions: [
        {
          id: 1,
          question: 'What is the primary purpose of color theory in UI design?',
          options: [
            { id: 'A', text: 'To make designs more expensive' },
            { id: 'B', text: 'To create visual harmony and convey meaning' },
            { id: 'C', text: 'To use as many colors as possible' },
            { id: 'D', text: 'To replace text content' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 2,
          question: 'Which color combination provides the best readability?',
          options: [
            { id: 'A', text: 'Red text on green background' },
            { id: 'B', text: 'Yellow text on white background' },
            { id: 'C', text: 'Black text on white background' },
            { id: 'D', text: 'Blue text on purple background' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 3,
          question: 'What is typography in UI design?',
          options: [
            { id: 'A', text: 'The art of arranging type to make text readable and appealing' },
            { id: 'B', text: 'A type of programming language' },
            { id: 'C', text: 'A method of image compression' },
            { id: 'D', text: 'A database management system' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 4,
          question: 'What is the recommended line height for body text?',
          options: [
            { id: 'A', text: '0.5 to 1.0' },
            { id: 'B', text: '1.4 to 1.6' },
            { id: 'C', text: '2.0 to 3.0' },
            { id: 'D', text: '5.0 to 6.0' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 5,
          question: 'Which font category is best for body text on screens?',
          options: [
            { id: 'A', text: 'Decorative fonts' },
            { id: 'B', text: 'Script fonts' },
            { id: 'C', text: 'Sans-serif fonts' },
            { id: 'D', text: 'Handwriting fonts' }
          ],
          correctAnswer: 'C'
        }
      ]
    },
    // Web Development Fundamentals - Lesson 3
    '11-3': {
      lessonId: 3,
      courseId: 11,
      title: 'HTML & CSS Deep Dive - Quiz',
      questions: [
        {
          id: 1,
          question: 'What does HTML stand for?',
          options: [
            { id: 'A', text: 'Hyper Text Markup Language' },
            { id: 'B', text: 'High Tech Modern Language' },
            { id: 'C', text: 'Home Tool Markup Language' },
            { id: 'D', text: 'Hyperlinks and Text Markup Language' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 2,
          question: 'Which CSS property is used to change the text color?',
          options: [
            { id: 'A', text: 'text-color' },
            { id: 'B', text: 'font-color' },
            { id: 'C', text: 'color' },
            { id: 'D', text: 'text-style' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 3,
          question: 'What is the purpose of CSS Flexbox?',
          options: [
            { id: 'A', text: 'To add animations' },
            { id: 'B', text: 'To create flexible and responsive layouts' },
            { id: 'C', text: 'To style text' },
            { id: 'D', text: 'To add JavaScript functionality' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 4,
          question: 'Which HTML tag is used for the largest heading?',
          options: [
            { id: 'A', text: '<heading>' },
            { id: 'B', text: '<h6>' },
            { id: 'C', text: '<h1>' },
            { id: 'D', text: '<head>' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 5,
          question: 'What does CSS stand for?',
          options: [
            { id: 'A', text: 'Computer Style Sheets' },
            { id: 'B', text: 'Cascading Style Sheets' },
            { id: 'C', text: 'Creative Style Sheets' },
            { id: 'D', text: 'Colorful Style Sheets' }
          ],
          correctAnswer: 'B'
        }
      ]
    },
    // Network Security Fundamentals - Lesson 1
    '8-1': {
      lessonId: 1,
      courseId: 8,
      title: 'Introduction to Network Security - Quiz',
      questions: [
        {
          id: 1,
          question: 'What is network security?',
          options: [
            { id: 'A', text: 'A type of computer hardware' },
            { id: 'B', text: 'Protection of networks and their services from unauthorized access' },
            { id: 'C', text: 'A programming language' },
            { id: 'D', text: 'A web browser' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 2,
          question: 'Which of the following is a common network threat?',
          options: [
            { id: 'A', text: 'Malware' },
            { id: 'B', text: 'HTML' },
            { id: 'C', text: 'CSS' },
            { id: 'D', text: 'JavaScript' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 3,
          question: 'What does VPN stand for?',
          options: [
            { id: 'A', text: 'Very Private Network' },
            { id: 'B', text: 'Virtual Private Network' },
            { id: 'C', text: 'Visible Public Network' },
            { id: 'D', text: 'Virtual Public Network' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 4,
          question: 'What is the main purpose of encryption?',
          options: [
            { id: 'A', text: 'To speed up data transfer' },
            { id: 'B', text: 'To protect data from unauthorized access' },
            { id: 'C', text: 'To compress files' },
            { id: 'D', text: 'To delete data' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 5,
          question: 'Which layer of the OSI model is responsible for routing?',
          options: [
            { id: 'A', text: 'Physical Layer' },
            { id: 'B', text: 'Data Link Layer' },
            { id: 'C', text: 'Network Layer' },
            { id: 'D', text: 'Application Layer' }
          ],
          correctAnswer: 'C'
        }
      ]
    }
  })

  const currentLessonQuiz = ref(null)
  const currentQuestionIndex = ref(0)
  const userAnswers = ref({})
  const quizStarted = ref(false)
  const quizCompleted = ref(false)
  const showResults = ref(false)

  const currentQuestion = computed(() => {
    if (!currentLessonQuiz.value) return null
    return currentLessonQuiz.value.questions[currentQuestionIndex.value]
  })

  const progress = computed(() => {
    if (!currentLessonQuiz.value) return 0
    return Math.round(((currentQuestionIndex.value + 1) / currentLessonQuiz.value.questions.length) * 100)
  })

  const score = computed(() => {
    if (!currentLessonQuiz.value) return 0
    let correct = 0
    currentLessonQuiz.value.questions.forEach(q => {
      if (userAnswers.value[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  })

  const totalQuestions = computed(() => {
    return currentLessonQuiz.value ? currentLessonQuiz.value.questions.length : 0
  })

  const scorePercentage = computed(() => {
    if (totalQuestions.value === 0) return 0
    return Math.round((score.value / totalQuestions.value) * 100)
  })

  const passed = computed(() => {
    return scorePercentage.value >= 60 // Минимум 60% для прохождения
  })

  function getLessonQuiz(courseId, lessonId) {
    const key = `${courseId}-${lessonId}`
    return lessonQuizzes.value[key] || null
  }

  function startLessonQuiz(courseId, lessonId) {
    const key = `${courseId}-${lessonId}`
    const quiz = lessonQuizzes.value[key]
    
    if (quiz) {
      currentLessonQuiz.value = quiz
      currentQuestionIndex.value = 0
      userAnswers.value = {}
      quizStarted.value = true
      quizCompleted.value = false
      showResults.value = false
      return true
    }
    return false
  }

  function answerQuestion(questionId, answerId) {
    userAnswers.value[questionId] = answerId
  }

  function nextQuestion() {
    if (currentQuestionIndex.value < currentLessonQuiz.value.questions.length - 1) {
      currentQuestionIndex.value++
    }
  }

  function previousQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    }
  }

  function submitQuiz() {
    quizCompleted.value = true
    showResults.value = true
  }

  function resetQuiz() {
    currentLessonQuiz.value = null
    currentQuestionIndex.value = 0
    userAnswers.value = {}
    quizStarted.value = false
    quizCompleted.value = false
    showResults.value = false
  }

  return {
    lessonQuizzes,
    currentLessonQuiz,
    currentQuestionIndex,
    userAnswers,
    quizStarted,
    quizCompleted,
    showResults,
    currentQuestion,
    progress,
    score,
    totalQuestions,
    scorePercentage,
    passed,
    getLessonQuiz,
    startLessonQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    resetQuiz
  }
})

