# Testing Guide - ImgVoid Academy

This guide provides a comprehensive walkthrough for testing all features of the ImgVoid Academy platform.

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## 🔐 Login Flow

1. **Access Login Page**
   - Application starts at login page
   - Default credentials are pre-filled:
     - Email: `elara.vance@example.com`
     - Password: `password123`

2. **Test Login**
   - Click "Login" button
   - Should redirect to Dashboard
   - User name "Elara Vance" should appear in sidebar

## 📊 Dashboard Testing

**Location:** `/` (Home page after login)

### Features to Test:
1. **User Greeting**
   - Should display "Welcome Back, Elara Vance!"
   - User avatar visible in top right

2. **XP Progress Card**
   - Shows current XP: 2450 XP
   - Progress bar showing progress to Level 8
   - Displays "550 XP to reach Level 8"

3. **Learning Streak Card**
   - Shows current streak: 125 days
   - Flame icon displayed
   - Text: "Keep up the great work!"

4. **Continue Learning Button**
   - Blue button with "Continue Last Lesson: SQL Injections"
   - Click should navigate to lesson page

5. **Course Recommendations**
   - 4 course cards displayed in grid
   - Each card shows:
     - Course image
     - Title
     - Description
     - Progress bar (if started)
     - Lessons count and duration
   - Hover effect: card lifts up
   - Click navigates to course detail

6. **Recent Activity**
   - List of 6 recent activities
   - Each with icon, title, and timestamp
   - Activities include:
     - "Completed 'Advanced React Hooks' lesson."
     - "Earned 'CSS Grid Master' badge."
     - etc.

## 📚 Courses Page Testing

**Location:** `/courses`

### Features to Test:
1. **Page Header**
   - Title: "My Learning Path"
   - Subtitle: "Continue your journey to mastery"
   - Settings button on right

2. **Course Grid**
   - All 11 courses displayed
   - 3 columns on desktop, responsive on mobile
   - Each card shows:
     - Course image with icon overlay
     - Title and description
     - Lessons count and duration
     - Progress bar (if in progress)
     - Status tag (Completed/In Progress/Not Started)

3. **Course Interaction**
   - Hover: card lifts and image zooms
   - Click: navigates to course detail page

4. **Course Statuses**
   - Completed: Green tag, 100% progress
   - In Progress: Blue tag, partial progress
   - Not Started: Gray tag, "Start Course" button

## 📖 Course Detail Testing

**Location:** `/courses/:id` (e.g., `/courses/11`)

### Features to Test:
1. **Course Header Banner**
   - Full-width image background
   - Course title and description overlay
   - Back button (top left)
   - Course metadata: lessons, duration, instructor

2. **Overall Progress Card**
   - Shows completion percentage
   - Status tag
   - Progress bar

3. **Course Lessons List**
   - All lessons displayed with:
     - Status icon (completed/current/locked)
     - Lesson title
     - Duration
     - Lock message for locked lessons
     - Progress bar for current lesson
     - Status tag

4. **Lesson States**
   - **Completed:** Green checkmark, "Completed" tag
   - **Current:** Blue play icon, "Current" tag, clickable
   - **Locked:** Lock icon, "Locked" tag, shows unlock requirement

5. **Sidebar Actions**
   - "Continue Learning" button
   - "Take Quiz" button (if quiz available)

6. **Course Stats**
   - Completed Lessons count
   - Time Spent
   - XP Earned

7. **Lesson Navigation**
   - Click current/completed lesson to view
   - Locked lessons cannot be clicked

## 📝 Lesson Detail Testing

**Location:** `/courses/:courseId/lesson/:lessonId`

### Features to Test:
1. **Lesson Header**
   - Back button
   - Breadcrumb navigation
   - Lesson title
   - User avatar

2. **Progress Bar**
   - Shows lesson completion percentage

3. **Lesson Content**
   - Rich text formatting
   - Headings (h2, h3, h4)
   - Paragraphs with proper spacing
   - Bullet lists
   - Images with captions
   - Info boxes with icons
   - Highlight boxes

4. **Navigation Buttons**
   - "Previous Lesson" (disabled if first)
   - "Next Lesson" (if not last)
   - "Complete Lesson" (if last)

5. **Complete Lesson Flow**
   - Click "Complete Lesson"
   - Adds 50 XP
   - Adds activity to recent activities
   - Unlocks next lesson
   - Redirects to course detail

## 🎯 Quiz Testing

**Location:** `/quiz/:id` (e.g., `/quiz/1`)

### Features to Test:
1. **Quiz Start Screen**
   - QuizQuest branding
   - Quiz title
   - Question count
   - "Start Quiz" button

2. **Quiz Header (During Quiz)**
   - QuizQuest logo
   - User avatar
   - Quiz title
   - Question counter (e.g., "Question 1 of 5")
   - Progress bar

3. **Question Display**
   - Question text clearly displayed
   - 4 answer options (A, B, C, D)
   - Each option has:
     - Letter label
     - Answer text
     - Hover effect

4. **Answer Selection**
   - Click option to select
   - Selected option highlights in cyan
   - Can change selection before submitting

5. **Navigation During Quiz**
   - "Previous" button (disabled on first question)
   - "Next" button (enabled after answering)
   - "Submit Answer" button (on last question)

6. **Answer Feedback (After Submission)**
   - Correct answer: Green border, checkmark icon
   - Incorrect answer: Red border, X icon
   - Explanation box appears below
   - All options remain visible

7. **Quiz Results Screen**
   - Trophy icon
   - "Quiz Complete!" message
   - Score display (e.g., "4/5")
   - Percentage (e.g., "80% Correct")
   - Encouraging message based on score
   - XP earned display (score × 10)
   - "Review Answers" button
   - "Back to Courses" button

8. **Review Mode**
   - Click "Review Answers"
   - Navigate through questions
   - See correct/incorrect indicators
   - Read explanations

9. **XP Award**
   - XP added to user total
   - Activity logged
   - Can verify in Dashboard

## 📈 Progress Page Testing

**Location:** `/progress`

### Features to Test:
1. **Page Header**
   - Title: "Your Progress Overview"

2. **Overall Progress Card**
   - Shows total XP: 2450 XP
   - Level display: "Level 7 - Novice Coder"
   - Progress bar to next level
   - XP needed for Level 8

3. **Learning Streak Card**
   - Shows 125 days streak
   - Flame icon
   - Encouraging message

4. **Achievements Section**
   - 8 achievement badges displayed
   - Each shows:
     - Icon
     - Title
     - Description
   - All achievements unlocked (colored)
   - Hover effect on badges

5. **XP Gained Over Time Chart**
   - Line chart with 7 days of data
   - Smooth curve
   - Points on each day
   - Cyan color scheme
   - Responsive to window size

6. **Recent Activity Timeline**
   - 6 activities listed
   - Each with:
     - Icon in circle
     - Connecting line
     - Activity title
     - Timestamp
   - Last item has no connecting line

7. **Skills Mastered**
   - 12 skill tags displayed
   - Skills: React, TypeScript, Node.js, Docker, AWS, Python, etc.
   - Hover effect on tags

## ⚙️ Settings Page Testing

**Location:** `/settings`

### Features to Test:
1. **Settings Sidebar**
   - App Settings header with gear icon
   - Navigation sections:
     - GENERAL: Settings, Dashboard, Profile, Notifications
     - ACCOUNT: Security
   - Active tab highlighted in cyan

2. **Profile Section** (Default view)
   - User Name input field (pre-filled: "Elara Vance")
   - User avatar display
   - "Edit Avatar" button (outlined, cyan)
   - "Edit Profile Details" button (outlined, cyan)

3. **Language Card**
   - Dropdown with language options
   - Options: English, Spanish, French, German, Russian, Chinese
   - Currently selected: English

4. **Theme Card**
   - Toggle switch for theme
   - Label: "App Theme"
   - Description: "Adjust the application's visual theme."
   - Currently ON (dark theme)

5. **Security Tips Card**
   - Toggle switch
   - Label: "Security Tips"
   - Description: "Receive proactive security recommendations."
   - Currently ON

6. **Logout Button**
   - Red button at bottom
   - Full width
   - Icon: sign-out
   - Click logs out and redirects to login

7. **Tab Navigation**
   - Click different tabs
   - Content changes accordingly
   - Active tab highlighted

## 🔄 Navigation Testing

### Sidebar Navigation
1. **Logo/Brand**
   - ImgVoid Academy with shield icon
   - Always visible

2. **Navigation Links**
   - Dashboard (home icon)
   - Courses (book icon)
   - Progress (chart icon)
   - Settings (gear icon)
   - Active link highlighted in cyan
   - Hover effects on all links

3. **User Profile (Bottom)**
   - Shows "John Doe" and email
   - Avatar displayed
   - Always visible

4. **Mobile Navigation**
   - Hamburger menu on mobile
   - Sidebar slides in from left
   - Overlay closes sidebar
   - All links work on mobile

### Routing
1. **Protected Routes**
   - All main pages require authentication
   - Redirects to login if not authenticated

2. **Guest Routes**
   - Login page redirects to dashboard if authenticated

3. **Direct URL Access**
   - All routes accessible via URL
   - Proper page loads for valid routes

## 📱 Responsive Design Testing

### Desktop (1920px+)
- Full sidebar visible
- 3-column course grid
- Wide content area
- All features fully visible

### Tablet (768px - 1919px)
- Sidebar visible
- 2-column course grid
- Adjusted spacing
- All features accessible

### Mobile (<768px)
- Hamburger menu for sidebar
- 1-column course grid
- Stacked layouts
- Touch-friendly buttons
- Proper text sizing

## 🎨 Visual Testing

### Theme Consistency
- Dark background throughout
- Cyan (#06b6d4) as primary color
- Consistent card styling
- Proper text contrast
- Smooth transitions

### Hover Effects
- Cards lift on hover
- Buttons change on hover
- Links show hover state
- Smooth animations

### Icons
- All icons display correctly
- Proper sizing and colors
- Consistent style

## ⚡ Performance Testing

1. **Page Load Speed**
   - Initial load < 2 seconds
   - Route changes instant
   - Smooth animations

2. **Data Updates**
   - XP updates immediately
   - Progress bars animate smoothly
   - Activity logs update instantly

3. **State Management**
   - Data persists across routes
   - No data loss during navigation
   - Proper state updates

## 🐛 Known Limitations

1. **Data Persistence**
   - All data resets on page refresh
   - No backend storage
   - Mock authentication only

2. **Quiz Content**
   - Only 1 quiz available (Cybersecurity Fundamentals)
   - Quiz linked to Course ID 8

3. **Lesson Content**
   - Detailed content for Lesson 1 of UI/UX course
   - Generic content for other lessons

4. **User Data**
   - Single user profile
   - No multi-user support

## ✅ Testing Checklist

Use this checklist to verify all features:

- [ ] Login with default credentials
- [ ] Dashboard displays correctly
- [ ] XP and streak show correct values
- [ ] Navigate to Courses page
- [ ] View all 11 courses
- [ ] Click on a course to view details
- [ ] View lesson list with proper states
- [ ] Click on a lesson to view content
- [ ] Complete a lesson
- [ ] Verify XP increases
- [ ] Navigate to Quiz page
- [ ] Start and complete quiz
- [ ] Review quiz answers
- [ ] Check XP award after quiz
- [ ] Visit Progress page
- [ ] View XP chart
- [ ] Check achievements
- [ ] View recent activities
- [ ] Navigate to Settings
- [ ] Test all settings tabs
- [ ] Toggle theme and security settings
- [ ] Test logout functionality
- [ ] Test mobile responsive design
- [ ] Verify all navigation links work
- [ ] Check hover effects on all interactive elements

## 🎯 Success Criteria

The application is working correctly if:

1. ✅ All pages load without errors
2. ✅ Navigation works smoothly
3. ✅ User data displays correctly
4. ✅ Quiz functionality is complete
5. ✅ XP system works properly
6. ✅ Progress tracking is accurate
7. ✅ Responsive design works on all devices
8. ✅ No console errors
9. ✅ All interactions provide feedback
10. ✅ Visual design is consistent

## 📞 Support

If you encounter any issues during testing, please check:
1. Node.js version (v16+)
2. All dependencies installed
3. Development server running
4. Browser console for errors
5. Network tab for failed requests

---

**Happy Testing! 🚀**

