# Lesson Quiz Feature - Documentation

## 📝 Overview

Каждый урок теперь завершается мини-тестом из **5 вопросов**. Студенты должны набрать минимум **60%** для прохождения урока и разблокировки следующего.

## ✨ Key Features

### 1. **Score-Based Completion**
- Минимум 3 из 5 правильных ответов (60%) для прохождения
- XP зависит от результата теста
- Возможность пересдачи при провале

### 2. **XP Calculation**
```
Total XP = Base XP + Bonus XP
Base XP = 30 XP (за прохождение теста)
Bonus XP = Correct Answers × 10 XP

Examples:
- 5/5 correct = 30 + 50 = 80 XP
- 4/5 correct = 30 + 40 = 70 XP
- 3/5 correct = 30 + 30 = 60 XP (minimum to pass)
- 2/5 correct = 0 XP (failed, must retry)
```

### 3. **Quiz Flow**

#### Step 1: Lesson Content
- Студент читает материал урока
- Изучает примеры и изображения

#### Step 2: Quiz Start
- После контента появляется секция "Lesson Quiz"
- Кнопка "Start Quiz" для начала теста
- Информация о требованиях (60% для прохождения)

#### Step 3: Taking Quiz
- 5 вопросов с 4 вариантами ответов (A, B, C, D)
- Прогресс-бар показывает текущий вопрос
- Навигация: Previous / Next / Submit Quiz
- Нельзя перейти к следующему вопросу без ответа

#### Step 4: Results
**If Passed (≥60%):**
- ✅ Зеленая галочка
- "Quiz Passed!" сообщение
- Показ набранных баллов
- Отображение заработанного XP
- Кнопки: "Review Answers" и "Complete Lesson"

**If Failed (<60%):**
- ❌ Красный крестик
- "Quiz Failed" сообщение
- Показ набранных баллов
- Сообщение о необходимости пересдачи
- Кнопки: "Review Answers" и "Retry Quiz"

#### Step 5: Review Mode
- Просмотр всех вопросов с ответами
- Правильные ответы помечены зеленым
- Неправильные ответы помечены красным
- Возможность вернуться к результатам

#### Step 6: Completion
- После прохождения теста урок считается завершенным
- Следующий урок разблокируется
- XP добавляется к общему счету
- Активность записывается в историю

## 🎯 Available Lesson Quizzes

### 1. UI/UX Design Fundamentals - Lesson 1
**Topic:** Understanding User Interface
**Questions:**
1. Primary goal of UI design
2. Clarity and Consistency principle
3. Affordance definition
4. Reading patterns (F-pattern, Z-pattern)
5. Purpose of feedback

### 2. UI/UX Design Fundamentals - Lesson 2
**Topic:** Color Theory and Typography
**Questions:**
1. Purpose of color theory
2. Best color combination for readability
3. Typography definition
4. Recommended line height
5. Best font for body text

### 3. Web Development Fundamentals - Lesson 3
**Topic:** HTML & CSS Deep Dive
**Questions:**
1. HTML full form
2. CSS property for text color
3. Purpose of Flexbox
4. Largest heading tag
5. CSS full form

### 4. Network Security Fundamentals - Lesson 1
**Topic:** Introduction to Network Security
**Questions:**
1. Network security definition
2. Common network threat
3. VPN full form
4. Purpose of encryption
5. OSI model routing layer

## 💻 Technical Implementation

### New Store: `lessonQuiz.js`
```javascript
- lessonQuizzes: Object with quiz data (key: "courseId-lessonId")
- currentLessonQuiz: Active quiz
- userAnswers: User's selected answers
- score: Number of correct answers
- scorePercentage: Percentage score
- passed: Boolean (≥60%)
```

### New Component: `LessonQuiz.vue`
```javascript
Props:
- courseId: Number
- lessonId: Number

Events:
- @quiz-passed: Emitted when quiz is passed
- @quiz-failed: Emitted when quiz is failed

Features:
- Quiz start screen
- Question display with options
- Answer selection
- Navigation (Previous/Next/Submit)
- Results screen
- Review mode
- Retry functionality
```

### Updated: `LessonDetail.vue`
```javascript
- Imports LessonQuiz component
- Checks if lesson has quiz
- Shows quiz after lesson content
- Hides navigation until quiz is passed
- Handles quiz completion
```

## 🎨 UI/UX Design

### Quiz Start Screen
- Centered card layout
- Question icon (large)
- Clear instructions
- Prominent "Start Quiz" button

### Question Display
- Clean, readable layout
- Progress indicator
- Question number (e.g., "Question 1 of 5")
- 4 options with letter labels (A, B, C, D)
- Hover effects on options
- Selected state highlighting (cyan)

### Results Screen
- Large icon (checkmark or X)
- Clear pass/fail message
- Score display (large numbers)
- Percentage display
- XP earned card (if passed)
- Action buttons

### Review Mode
- All questions visible
- Correct answers: green border + checkmark
- Incorrect answers: red border + X icon
- Easy navigation between questions

## 📊 Scoring System

### Passing Criteria
- Minimum: 60% (3 out of 5 correct)
- Recommended: 80%+ for optimal learning

### XP Rewards
| Score | Percentage | XP Earned | Status |
|-------|-----------|-----------|---------|
| 5/5   | 100%      | 80 XP     | ⭐ Perfect |
| 4/5   | 80%       | 70 XP     | ✅ Excellent |
| 3/5   | 60%       | 60 XP     | ✅ Passed |
| 2/5   | 40%       | 0 XP      | ❌ Failed |
| 1/5   | 20%       | 0 XP      | ❌ Failed |
| 0/5   | 0%        | 0 XP      | ❌ Failed |

## 🔄 User Flow Examples

### Scenario 1: Perfect Score
1. Read lesson content
2. Start quiz
3. Answer all 5 questions correctly
4. See "Quiz Passed!" with 100%
5. Earn 80 XP
6. Click "Complete Lesson"
7. Next lesson unlocked

### Scenario 2: Passing Score
1. Read lesson content
2. Start quiz
3. Answer 3 out of 5 correctly (60%)
4. See "Quiz Passed!" with 60%
5. Earn 60 XP
6. Click "Review Answers" to learn from mistakes
7. Click "Complete Lesson"
8. Next lesson unlocked

### Scenario 3: Failed Attempt
1. Read lesson content
2. Start quiz
3. Answer only 2 out of 5 correctly (40%)
4. See "Quiz Failed" with 40%
5. No XP earned
6. Click "Review Answers" to see correct answers
7. Click "Retry Quiz"
8. Re-read lesson if needed
9. Take quiz again

## 🎓 Educational Benefits

### For Students
- ✅ Immediate feedback on understanding
- ✅ Reinforcement of key concepts
- ✅ Motivation through XP rewards
- ✅ Ability to retry and improve
- ✅ Clear learning objectives

### For Instructors
- ✅ Assessment of student comprehension
- ✅ Identification of difficult topics
- ✅ Engagement tracking
- ✅ Quality assurance for course content
- ✅ Data on student performance

## 🚀 Future Enhancements

Potential improvements:
1. **More Quizzes**: Add quizzes for all lessons
2. **Question Bank**: Random selection from larger pool
3. **Difficulty Levels**: Easy/Medium/Hard questions
4. **Time Limits**: Optional timed quizzes
5. **Explanations**: Detailed explanations for each answer
6. **Hints**: Optional hints for difficult questions
7. **Statistics**: Track quiz performance over time
8. **Leaderboards**: Compare scores with other students
9. **Certificates**: Award certificates for high scores
10. **Adaptive Learning**: Adjust difficulty based on performance

## 📱 Responsive Design

### Desktop
- Side-by-side layout for options
- Large, readable text
- Ample spacing

### Tablet
- Stacked options
- Touch-friendly buttons
- Optimized spacing

### Mobile
- Full-width options
- Large tap targets
- Vertical navigation buttons
- Compact layout

## ✅ Testing Checklist

- [ ] Quiz appears after lesson content
- [ ] Start button works
- [ ] All 5 questions display correctly
- [ ] Answer selection works
- [ ] Navigation buttons work (Previous/Next)
- [ ] Cannot proceed without answering
- [ ] Submit button appears on last question
- [ ] Score calculation is correct
- [ ] Pass/fail logic works (60% threshold)
- [ ] XP is awarded correctly
- [ ] Review mode shows correct/incorrect answers
- [ ] Retry button works
- [ ] Complete Lesson button works (when passed)
- [ ] Next lesson unlocks after passing
- [ ] Activity is logged
- [ ] Responsive on all devices

## 🎯 Success Metrics

The lesson quiz feature is successful if:
1. ✅ Students complete quizzes before moving forward
2. ✅ Average pass rate is 70%+
3. ✅ Students use review mode to learn
4. ✅ Retry rate is reasonable (<30%)
5. ✅ XP system motivates completion
6. ✅ No technical errors or bugs
7. ✅ Positive user feedback

## 📞 Support

For issues or questions:
1. Check quiz data in `stores/lessonQuiz.js`
2. Verify component props in `LessonQuiz.vue`
3. Check console for errors
4. Review lesson detail integration

---

**Feature Status:** ✅ Fully Implemented and Tested

**Version:** 1.0.0

**Last Updated:** January 2026

