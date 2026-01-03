import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useQuizStore = defineStore('quiz', () => {
  const quizzes = ref([
    {
      id: 1,
      title: 'Cybersecurity Fundamentals',
      courseId: 8,
      questions: [
        {
          id: 1,
          question: 'What is the primary purpose of a firewall in network security?',
          options: [
            { id: 'A', text: 'To encrypt all incoming and outgoing data traffic.' },
            { id: 'B', text: 'To monitor and control incoming and outgoing network traffic based on predetermined security rules.' },
            { id: 'C', text: 'To detect and remove malicious software from a computer system.' },
            { id: 'D', text: 'To create secure, encrypted connections over a less secure network.' }
          ],
          correctAnswer: 'B',
          explanation: 'A firewall acts as a barrier between trusted and untrusted networks, monitoring and controlling traffic based on security rules to prevent unauthorized access.'
        },
        {
          id: 2,
          question: 'Which encryption algorithm is considered the most secure for modern applications?',
          options: [
            { id: 'A', text: 'DES (Data Encryption Standard)' },
            { id: 'B', text: 'MD5' },
            { id: 'C', text: 'AES-256 (Advanced Encryption Standard)' },
            { id: 'D', text: 'ROT13' }
          ],
          correctAnswer: 'C',
          explanation: 'AES-256 is currently the gold standard for encryption, offering strong security and is widely used in government and enterprise applications.'
        },
        {
          id: 3,
          question: 'What does the term "phishing" refer to in cybersecurity?',
          options: [
            { id: 'A', text: 'A technique to scan networks for vulnerabilities' },
            { id: 'B', text: 'A social engineering attack to trick users into revealing sensitive information' },
            { id: 'C', text: 'A method to encrypt data transmissions' },
            { id: 'D', text: 'A type of malware that replicates itself' }
          ],
          correctAnswer: 'B',
          explanation: 'Phishing is a social engineering technique where attackers impersonate legitimate entities to trick victims into providing sensitive information like passwords or credit card numbers.'
        },
        {
          id: 4,
          question: 'What is a zero-day vulnerability?',
          options: [
            { id: 'A', text: 'A vulnerability that has been known for zero days' },
            { id: 'B', text: 'A security flaw that is exploited before the vendor releases a patch' },
            { id: 'C', text: 'A vulnerability that takes zero days to fix' },
            { id: 'D', text: 'A bug that causes zero damage' }
          ],
          correctAnswer: 'B',
          explanation: 'A zero-day vulnerability is a security flaw that is unknown to the software vendor and is exploited by attackers before a patch is available, making it extremely dangerous.'
        },
        {
          id: 5,
          question: 'Which of the following is NOT a component of the CIA triad in information security?',
          options: [
            { id: 'A', text: 'Confidentiality' },
            { id: 'B', text: 'Integrity' },
            { id: 'C', text: 'Availability' },
            { id: 'D', text: 'Accountability' }
          ],
          correctAnswer: 'D',
          explanation: 'The CIA triad consists of Confidentiality, Integrity, and Availability. While Accountability is important in security, it is not part of the CIA triad.'
        }
      ]
    }
  ])

  const currentQuiz = ref(null)
  const currentQuestionIndex = ref(0)
  const userAnswers = ref({})
  const quizStarted = ref(false)
  const quizCompleted = ref(false)
  const showResults = ref(false)

  const currentQuestion = computed(() => {
    if (!currentQuiz.value) return null
    return currentQuiz.value.questions[currentQuestionIndex.value]
  })

  const progress = computed(() => {
    if (!currentQuiz.value) return 0
    return Math.round(((currentQuestionIndex.value + 1) / currentQuiz.value.questions.length) * 100)
  })

  const score = computed(() => {
    if (!currentQuiz.value) return 0
    let correct = 0
    currentQuiz.value.questions.forEach(q => {
      if (userAnswers.value[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  })

  const totalQuestions = computed(() => {
    return currentQuiz.value ? currentQuiz.value.questions.length : 0
  })

  const scorePercentage = computed(() => {
    if (totalQuestions.value === 0) return 0
    return Math.round((score.value / totalQuestions.value) * 100)
  })

  function startQuiz(quizId) {
    const quiz = quizzes.value.find(q => q.id === quizId)
    if (quiz) {
      currentQuiz.value = quiz
      currentQuestionIndex.value = 0
      userAnswers.value = {}
      quizStarted.value = true
      quizCompleted.value = false
      showResults.value = false
    }
  }

  function answerQuestion(questionId, answerId) {
    userAnswers.value[questionId] = answerId
  }

  function nextQuestion() {
    if (currentQuestionIndex.value < currentQuiz.value.questions.length - 1) {
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
    currentQuiz.value = null
    currentQuestionIndex.value = 0
    userAnswers.value = {}
    quizStarted.value = false
    quizCompleted.value = false
    showResults.value = false
  }

  function getQuizByCourseId(courseId) {
    return quizzes.value.find(q => q.courseId === courseId)
  }

  return {
    quizzes,
    currentQuiz,
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
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    resetQuiz,
    getQuizByCourseId
  }
})

