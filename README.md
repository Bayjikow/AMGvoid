# ImgVoid Academy - Cybersecurity Learning Platform

A modern, fully functional learning management system built with Vue 3, PrimeVue, and Pinia.

## 🚀 Features

- **User Authentication** - Login/logout functionality with protected routes
- **Dashboard** - Overview of learning progress, XP, streak, and recent activity
- **Courses** - Browse and enroll in multiple courses with progress tracking
- **Course Details** - View detailed course information with lesson lists
- **Lesson Viewer** - Read lesson content with rich formatting and images
- **Interactive Quizzes** - Take quizzes with multiple choice questions, instant feedback, and explanations
- **Lesson Mini-Quizzes** - 5-question tests after each lesson with score-based completion (60% minimum)
- **Progress Tracking** - View XP history, achievements, and learning statistics
- **Settings** - Manage profile, language, theme, and security preferences
- **🌍 Multi-Language Support** - Full interface translation (English & Türkmençe)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🔑 Default Login Credentials

- **Email:** elara.vance@example.com
- **Password:** password123

(Note: This is a demo application with mock authentication)

## 📁 Project Structure

```
src/
├── views/           # Page components
│   ├── Dashboard.vue
│   ├── Courses.vue
│   ├── CourseDetail.vue
│   ├── LessonDetail.vue
│   ├── Quiz.vue
│   ├── Progress.vue
│   ├── Settings.vue
│   └── Login.vue
├── stores/          # Pinia state management
│   ├── user.js      # User authentication and profile
│   ├── courses.js   # Course and lesson data
│   ├── progress.js  # Activity, achievements, and stats
│   └── quiz.js      # Quiz functionality
├── router/          # Vue Router configuration
│   └── index.js
├── App.vue          # Main app component with navigation
├── main.js          # Application entry point
└── style.css        # Global styles

```

## 🎯 Key Functionality

### Dashboard
- View XP progress and current level
- Track learning streak
- See course recommendations
- Review recent activity

### Courses
- Browse all available courses
- View course progress and status
- Filter by category
- Start new courses or continue learning

### Course Detail
- View complete course information
- See all lessons with lock/unlock status
- Track course completion percentage
- Take course quizzes

### Lessons
- Read comprehensive lesson content
- View images and diagrams
- Navigate between lessons
- **Take 5-question mini quiz after each lesson**
- **Score-based completion (60% minimum to pass)**
- Complete lessons to unlock next ones

### Quizzes
- Answer multiple choice questions
- Get instant feedback on answers
- View explanations for correct answers
- Earn XP based on performance
- Review answers after completion

### Progress
- View overall XP and level
- See learning streak
- Browse achievements and badges
- View XP history chart
- Review recent activities
- See mastered skills

### Settings
- Update profile information
- **Switch language (English ⇄ Türkmençe)**
- Toggle theme settings
- Manage security options
- Logout functionality

## 🎨 Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management library
- **Vue I18n** - Internationalization plugin
- **PrimeVue** - Rich UI component library
- **PrimeFlex** - CSS utility library
- **PrimeIcons** - Icon library
- **Chart.js** - JavaScript charting library

## 🌟 Features Highlights

1. **Fully Functional** - All navigation, forms, and interactions work
2. **State Management** - Centralized state with Pinia stores
3. **Responsive Design** - Mobile-first approach with breakpoints
4. **Modern UI** - Dark theme with cyan accents (cybersecurity aesthetic)
5. **Rich Interactions** - Smooth transitions and hover effects
6. **Progress Tracking** - XP system, levels, streaks, and achievements
7. **Quiz System** - Complete quiz functionality with scoring
8. **Lesson Quizzes** - 5-question mini tests after each lesson with score-based completion
9. **Multi-Language** - Full i18n support with English and Turkmen translations
10. **Course Management** - Lesson locking/unlocking based on progress

## 🔧 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Notes

- This is a frontend-only application with mock data
- All data is stored in Pinia stores (resets on page refresh)
- Authentication is simulated (no backend required)
- Course content and quizzes are pre-populated with sample data

## 🎓 Sample Data Included

- 11 courses across various topics
- Detailed lesson content for UI/UX course
- 1 complete course quiz (Cybersecurity Fundamentals) with 5 questions
- **4 lesson mini-quizzes (5 questions each)**:
  - UI/UX Lesson 1: Understanding User Interface
  - UI/UX Lesson 2: Color Theory and Typography
  - Web Dev Lesson 3: HTML & CSS Deep Dive
  - Network Security Lesson 1: Introduction to Network Security
- 8 achievements
- Recent activity history
- XP history chart data

## 🚀 Future Enhancements

- Backend API integration
- Persistent data storage
- Real authentication system
- More quizzes and courses
- Video lessons
- Discussion forums
- Certificate generation
- Social features

## 📄 License

This project is for educational purposes.

---

Built with ❤️ using Vue 3 and PrimeVue

